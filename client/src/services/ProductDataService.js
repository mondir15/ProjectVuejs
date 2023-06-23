// Importation du module http-common
import http from '../http-common'

// Définition de la classe ProductDataService
class ProductDataService {
  // Méthode pour obtenir tous les produits
  getAll() {
    return http.get('/product')
  }

  // Méthode pour créer un nouveau produit
  create(data) {
    return http.post('/product', data)
  }

  // Méthode pour obtenir un produit spécifique par son ID
  get(id) {
    return http.get(`/product/${id}`)
  }

  // Méthode pour mettre à jour un produit existant
  update(id, data) {
    return http.put(`/product/${id}`, data)
  }

  // Méthode pour supprimer un produit par son ID
  delete(id) {
    return http.delete(`/product/${id}`)
  }
}

// Exportation d'une instance de la classe ProductDataService
export default new ProductDataService()
