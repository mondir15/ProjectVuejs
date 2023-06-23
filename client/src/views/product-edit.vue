<template>
  <div class="product-add">
    <!-- Section-->
    <section class="py-5">
      <div class="container px-4 px-lg-5 mt-5">
        <div
          class="
            row
            gx-4 gx-lg-5
            row-cols-2 row-cols-md-3 row-cols-xl-2
            justify-content-center">
          <div class="col-sm-12">
            <h4 class="mb-3">Edit</h4>
            <div class="needs-validation" novalidate>
              <div class="row g-2">
                <div>
                <div class="col-12">
                  <label for="productName" class="form-label">Name Product</label>
                  <input
                    type="text"
                    class="form-control"
                    id="productName"
                    placeholder=""
                    v-model="product.name"
                    required/>
                </div>
                <div class="col-12">
                  <label for="productPhoto" class="form-label">Photo</label>
                  <input
                    type="text"
                    class="form-control"
                    id="productPhoto"
                    placeholder=""
                    v-model='product.photo'
                    required/>
                </div>
                <div class="col-12">
                  <div class="input-group has-validation">
                    <label for="productPrice" class="form-label">Prix</label>
                    <input
                      type="text"
                      class="form-control"
                      id="productPrice"
                      placeholder=""
                      v-model.number='product.price'
                      required/>
                  </div>
                </div>
                <div class="col-12">
                  <label for="productDescription" class="form-label">Description</label>
                  <textarea
                    class="form-control"
                    id="productDescription"
                    v-model="product.description"
                    placeholder=""></textarea>
                </div>
                <div class="col-12">
                  <label for="productType" class="form-label">Product Type</label>
                  <select
                    class="form-control"
                    id="productType"
                    placeholder=""
                    v-model='product.type'
                    required>
                    <option value="">Select</option>
                            <option value="Shoes">Shoes</option>
                            <option value="Sneakers">Sneakers</option>
                            <option value="Boots">Boots</option>
                            <option value="Sandals">Sandals</option>
                          </select>
                </div>
                <button class="w-100 btn btn-success btn-lg mt-3" type="button" @click="updateProduct">Edit </button>
                </div>
                <div v-if="submitted">
                  <div  class="alert alert-success alert-dismissible fade show" role="alert">
                  <strong> Succes</strong>
                  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
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
      submitted: false, // Indique si la mise à jour du produit a été soumise avec succès
      product: {}, // Objet représentant les données du produit
      id: this.$route.params.id // Récupère l'ID du produit à partir des paramètres de route
    }
  },
  methods: {
    updateProduct() {
      // Appel à la méthode update de ProductDataService pour mettre à jour le produit
      ProductDataService.update(this.id, this.product)
        .then(response => {
          this.product = response.data // Met à jour les données du produit avec la réponse du serveur
          this.submitted = true // Définir submitted sur true pour indiquer que la mise à jour a été effectuée avec succès
        })
    }
  },
  mounted() {
    // Chargement des données du produit à partir du serveur lors du montage du composant
    ProductDataService.get(this.id)
      .then(response => {
        this.product = response.data // Met à jour les données du produit avec la réponse du serveur
      })
  }
}
</script>

