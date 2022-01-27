<template>
  <div>
    <table class="table">
      <thead>
      <tr>
        <th scope="col">id</th>
        <th scope="col">Title</th>
        <th scope="col">Author</th>
        <th scope="col">Publisher</th>
        <th scope="col">Year</th>
        <th scope="col">Image</th>
        <th scope="col"></th>
        <th scope="col"></th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <th scope="row">1</th>
        <td>aze</td>
        <td>qsd</td>
        <td>xwc</td>
        <td>2019</td>
        <td>image</td>
        <td>edit</td>
        <td>delete</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

import productService from "../../services/productService";

export default {
  data() {
    return {
      products: []
    };
  },
  created() {
    productService.getProducts().then(res => {
      this.products = res.data;
    })
  },
  name: "ProductList"
}
</script>

<style scoped>

</style>