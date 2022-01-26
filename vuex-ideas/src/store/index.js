import { createStore } from "vuex";

export default createStore({
  state: {
    ideas: {},     // Si ideas valeur = []
    courses: [],
    paperWork: []
  },
  mutations: {
    CREATE_IDEAS(state, payload){
      const id = Date.now();
      state.ideas[id] = payload;
      state.ideas = {...state.ideas};  // Alors remplacer {} par []
    },
    SAVE_IDEAS_ORDERING(state, payload) {
      state.ideas = { ...payload };
    },
    SAVE_COURSES_ORDERING(state, payload) {
      state.courses = [...payload ];
    },
    SAVE_PAPERWORK_ORDERING(state, payload) {
      state.paperWork = [ ...payload ];
    }
  },
  actions: {
    createIdea({ commit }, payload) {
      console.log("action / createIdea")
      commit('CREATE_IDEAS', payload);
    },
    saveIdeasOrdering({ commit }, payload) {
      const ideas = {};
      payload.map(idea => {
        ideas[idea.id] = idea;
      });
      commit("SAVE_IDEAS_ORDERING", ideas);
    },
    saveCoursesOrdering({ commit }, payload) {
      commit("SAVE_COURSES_ORDERING", payload);
    },
    savePaperWorkOrdering({ commit }, payload) {
      commit("SAVE_PAPERWORK_ORDERING", payload);
    }
  },
  getters: {
    allIdeas(state) {
      const allIdeas = Object.keys(state.ideas).map(key => {
        const idea = state.ideas[key];
        idea.id = key;
        return idea;
      });
      console.log("getters", allIdeas);
      return allIdeas;
    },
    courses(state) {
      return state.courses;
    },
    paperWork(state) {
      return state.paperWork;
    }
  },
  modules: {},
});
