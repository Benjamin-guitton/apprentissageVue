<template>
  <div class="home">
    <h1>Book Shop</h1>
    <Products/>
  </div>
</template>

<script>

import Products from "./Products";
export default {
  name: "Home",
  components: {Products}
};
</script>
