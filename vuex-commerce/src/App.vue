<template>
  <div id="nav">
    <span class="spacer">
      <router-link to="/">Home</router-link>
    </span>
    <span class="spacer">
      <router-link to="/contact">Contact</router-link>
    </span>
    <span class="spacer">
      <router-link to="/admin">Admin</router-link>
    </span>
    <span class="float-lg-end">
      <router-link to="/cart">
        <i class="fas fa-shopping-cart"></i>
        Cart ({{ numberArticlesInCart }}) </router-link>
    </span>
  </div>
  <div class="container-fluid">
    <router-view />
  </div>
</template>

<script>
export default {
  computed: {
    numberArticlesInCart() {
      return this.$store.getters.getNumberArticlesInCart;

    }
  }
}
</script>

<style>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.spacer {
  padding: 10px;
  color: #2c3e50;
}
</style>
