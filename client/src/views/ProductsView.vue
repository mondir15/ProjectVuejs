<template>
  <h2 class="products-header">My Products</h2>
  <div class="products">
    <div v-for="product in products" :key="product.id">
      <div class="card">
        <img class="card-img-top" :src="require(`@/assets/img/450/${product.photo}`)" alt="product" />
        <div class="card-body">
          <h5 class="card-title ">{{ product.id }}- {{ product.name }}</h5>
          <p class="card-text">Description : {{ product.description }}</p>
          <p class="card-text">Prix : ${{ product.price }}</p>
          <small class="card-text">Type : {{ product.type }}</small>
        </div>
        <div class="card-footer">
          <a href="#" class="card-link" @click.prevent="$router.push({ name: 'product-edit', params: { id: product.id }})">Modifier</a>
            <a href="#" class="card-link" @click.prevent="deleteProduct(product.id)">Supprimer</a>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductDataService from '@/services/ProductDataService'

export default {
  data() {
    return {
      products: [] // Tableau pour stocker les produits récupérés depuis le serveur
    }
  },
  async mounted() {
    try {
      // Récupération de tous les produits depuis le serveur lors du montage du composant
      const response = await ProductDataService.getAll()
      this.products = response.data // Mise à jour du tableau de produits avec les données récupérées
    } catch (error) {
      console.error('Une erreur est survenue lors de la récupération des produits : ', error)
    }
  },
  methods: {
    async deleteProduct(id) {
      try {
        // Appel à la méthode delete de ProductDataService pour supprimer le produit avec l'ID spécifié
        await ProductDataService.delete(id)
        // Filtrer les produits et mettre à jour le tableau de produits en excluant le produit supprimé
        this.products = this.products.filter(product => product.id !== id)
      } catch (error) {
        console.error('Une erreur est survenue lors de la suppression du produit : ', error)
      }
    }
  }
}
</script>
