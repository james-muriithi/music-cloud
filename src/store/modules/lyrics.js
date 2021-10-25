const lyrics = {
  namespaced: true,
  state: {
    showDrawer: true,
  },
  getters: {
    showDrawer(state) {
      return state.showDrawer;
    },
  },
  mutations: {
    toggleDrawer(state) {
      state.showDrawer = !state.showDrawer;
    },
    setDrawerState(state, payload) {
      state.showDrawer = payload;
    },
  },
  actions: {
    toggleDrawer({ commit }) {
      commit("toggleDrawer");
    },
    setDrawerState({ commit }, state) {
      commit("setDrawerState", state);
    },
  },
};

export default lyrics;
