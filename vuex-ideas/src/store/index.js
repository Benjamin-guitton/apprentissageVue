import { createStore } from "vuex";

export default createStore({
  state: {
    ideas: {}     // Si ideas valeur = []
  },
  mutations: {
    CREATE_IDEAS(state, payload){
      const id = Date.now();
      state.ideas[id] = payload;
      state.ideas = {...state.ideas};  // Alors remplacer {} par []
    }
  },
  actions: {
    createIdea({ commit }, payload) {
      console.log("action / createIdea")
      commit('CREATE_IDEAS', payload);
    }
  },
  getters: {
    allIdeas(state) {
      const allIdeas = Object.keys(state.ideas).map(key => state.ideas[key]);
      console.log("getters", allIdeas);
      return allIdeas;
    }
    // { 123: {}, 345: {}} => [{}, {}, {}]
  },
  modules: {},
});
