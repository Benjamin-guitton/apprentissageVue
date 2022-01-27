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
    },
    CREATE_PRODUCT(state, products) {
      state.products = [product, ...state.products];
    }
  },
  actions: {
    getProducts({ commit }) {
      productService.getProducts()
      .then(res => {
      commit("GET_PRODUCTS", res.data);
      })
      .catch(err => console.error(err.message));
    },
    createProduct({ commit }, product) {
      productService.createProduct(product).then(() => {
        commit("CREATE_PRODUCT", product);
      })
    }

  },
  modules: {},
});
