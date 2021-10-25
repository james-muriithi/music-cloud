import Vue from "vue";
import Vuex from "vuex";
import sidebar from "./modules/sidebar";
import music from "./modules/music";
import player from "./modules/player";
import album from "./modules/album";
import playlist from "./modules/playlist";
import search from "./modules/search";
import lyrics from "./modules/lyrics";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    sidebar,
    music,
    player,
    album,
    playlist,
    search,
    lyrics
  },
});
