
<template>
  <!-- Barre de navigation -->
  <nav>
    <!-- Liens de navigation -->
    <router-link to="/">Home</router-link> |
    <router-link to="/products">Products</router-link>
    <router-link to="/add-product">Add Product</router-link>
  </nav>
  <!-- Contenu de la vue actuelle -->
  <router-view/>
</template>
<style>
nav {
  background-color: #f8f9fa;
  padding: 10px;
}

nav a {
  text-decoration: none;
  color: #333333;
  margin-right: 20px;
  font-weight: bold;
  transition: color 0.3s ease-in-out;
}

nav a:hover {
  color: #007bff;
}

nav a.active {
  color: #007bff;
}

nav .nav-link {
  display: inline-block;
  padding: 5px 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease-in-out;
}

nav .nav-link:hover {
  background-color: #e9ecef;
}

.router-view {
  margin-top: 20px;
}
</style>
