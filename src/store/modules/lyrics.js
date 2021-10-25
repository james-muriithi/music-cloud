import { getSongLyrics } from "../../helpers/genius-lyrics";

const lyrics = {
  namespaced: true,
  state: {
    showDrawer: false,
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
    fetchLyrics() {
      getSongLyrics("Easy on me", "Adelle");
    },
  },
};

export default lyrics;
