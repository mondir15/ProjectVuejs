<template>
  <div class="product-add">
    <!-- Section-->
    <section class="py-5">
      <div class="container px-4 px-lg-5 mt-5">
        <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-2 justify-content-center">
          <div class="col-sm-12">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title mb-3">Add Product</h4>
                <div class="needs-validation" novalidate>
                  <div class="row g-2">
                    <div v-if="!submitted">
                      <div class="col-12">
                        <label for="productName" class="form-label">Name</label>
                        <input type="text" class="form-control" id="productName" placeholder="" v-model="product.name" required/>
                        <div class="invalid-feedback" v-if="!product.name && attemptedSubmit">Required.</div>
                      </div>
                      <div class="col-12">
                        <label for="productPhoto" class="form-label">Product Photo</label>
                        <input type="text" class="form-control" id="productPhoto" placeholder="" v-model='product.photo' required/>
                      </div>
                      <div class="col-12">
                        <div class="input-group has-validation">
                          <label for="productPrice" class="form-label">Prix</label>
                          <input type="text" class="form-control" id="productPrice" placeholder="CAD" v-model.number='product.price' required/>
                        </div>
                      </div>
                      <div class="col-12">
                        <label for="productDescription" class="form-label">Description</label>
                        <textarea class="form-control" id="productDescription" v-model="product.description" placeholder=""></textarea>
                      </div>
                      <div class="col-12">
                        <label for="productType" class="form-label">Type</label>
                        <select class="form-control" id="productType" placeholder="" v-model='product.type' required>
                          <option value="">Select</option>
                            <option value="Shoes">Shoes</option>
                            <option value="Sneakers">Sneakers</option>
                            <option value="Boots">Boots</option>
                            <option value="Sandals">Sandals</option>
                          </select>
                      </div>
                      <button class="w-100 btn btn-secondary btn-lg mt-3" type="button" @click="saveProduct" > Ajouter </button>
                    </div>
                    <div v-else>
                      <div  class="alert alert-success alert-dismissible fade show" role="alert">
                        <strong> Succes</strong>
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                      </div>
                      <button class="w-100 btn btn-success btn-lg mt-3" type="button" @click="newProduct">Add new product </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ProductDataService from '@/services/ProductDataService'

export default {
  data() {
    return {
      submitted: false, // Indique si le formulaire a été soumis avec succès
      attemptedSubmit: false, // Indique si une tentative de soumission du formulaire a été effectuée
      product: {
        name: '', // Nom du produit
        photo: '', // Photo du produit
        price: '', // Prix du produit
        description: '', // Description du produit
        type: '' // Type de produit
      }
    }
  },
  methods: {
    saveProduct() {
      this.attemptedSubmit = true
      // Vérifier si le formulaire est valide
      if (!this.product.name || !this.product.photo || !this.product.price || !this.product.description || !this.product.type) {
        return
      }
      // Appel à la méthode create de ProductDataService pour créer un nouveau produit
      ProductDataService.create(this.product)
        .then(response => {
          console.log('Product created', response.data)
          this.product.id = response.data.id // Récupérer l'ID du produit créé
          this.submitted = true // Définir submitted sur true pour indiquer que le produit a été créé avec succès
        })
        .catch(error => {
          console.error('An error occurred while creating the product:', error)
        })
    },
    newProduct() {
      this.submitted = false // Réinitialiser submitted à false pour permettre l'ajout d'un nouveau produit
      this.attemptedSubmit = false // Réinitialiser attemptedSubmit à false pour une nouvelle tentative de soumission
      this.product = {} // Réinitialiser les valeurs du formulaire du produit
    }
  }
}
</script>
