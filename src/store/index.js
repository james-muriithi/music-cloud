import Vue from 'vue'
import Vuex from 'vuex'
import sidebar from "./modules/sidebar";
import music from "./modules/music";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        sidebar,
        music
    }
})