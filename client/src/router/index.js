import { createRouter, createWebHistory } from 'vue-router'

// Importation des composants de vue
import HomeView from '../views/HomeView.vue'
import ProductEdit from '@/views/product-edit.vue'

// Définition des routes
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView // Composant associé à la route '/'
  },
  {
    path: '/products',
    name: 'products',
    component: () => import(/* webpackChunkName: "ProductsView" */ '../views/ProductsView.vue') // Composant associé à la route '/products'
  },
  {
    path: '/add-product',
    name: 'addProduct',
    component: () => import(/* webpackChunkName: "addProduct" */ '../views/AddProductView.vue') // Composant associé à la route '/add-product'
  },
  {
    path: '/product-edit/:id',
    name: 'product-edit',
    component: ProductEdit // Composant associé à la route '/product-edit/:id'
  }
]

// Création du routeur
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
