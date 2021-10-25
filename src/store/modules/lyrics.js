import { fetchLyrics } from "../../helpers/genius-lyrics";

const lyrics = {
  namespaced: true,
  state: {
    showDrawer: false,
    lyrics: null,
  },
  getters: {
    showDrawer(state) {
      return state.showDrawer;
    },
    lyrics(state) {
      return state.lyrics;
    },
  },
  mutations: {
    toggleDrawer(state) {
      state.showDrawer = !state.showDrawer;
    },
    setDrawerState(state, payload) {
      state.showDrawer = payload;
    },
    setLyrics(state, lyrics) {
      state.lyrics = lyrics;
    },
  },
  actions: {
    toggleDrawer({ commit }) {
      commit("toggleDrawer");
    },
    setDrawerState({ commit }, state) {
      commit("setDrawerState", state);
    },
    fetchLyrics({ commit }, { title, artist }) {
      commit("setLyrics", null);

      return fetchLyrics(title, artist)
        .then((embedContent) => {
          console.log(embedContent);
          commit("setLyrics", embedContent);
        })
        .catch((e) => {
          throw new Error(e.message);
        });
    },
  },
};

export default lyrics;
