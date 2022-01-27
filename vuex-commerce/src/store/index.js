import { createStore } from "vuex";
import productService from "../services/productService";

export default createStore({
  state: {
    products: [

    ]
  },
  mutations: {
    GET_PRODUCTS(state, products) {
      state.products = products;
    }
  },
  actions: {
    getProducts({ commit }) {
      productService.getProducts()
      .then(res => {
      commit("GET_PRODUCTS", res.data);
      })
      .catch(err => console.error(err.message));
    }
  },
  modules: {},
});
