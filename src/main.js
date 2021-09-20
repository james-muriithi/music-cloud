import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'
import mixin from './mixin'

// components
import SideNav from './components/UI/SideNav';
import AppBar from "./components/UI/AppBar";
import BottomPlayer from "./components/player/BottomPlayer";

Vue.config.productionTip = false;

Vue.component('side-nav', SideNav);
Vue.component('app-bar', AppBar);
Vue.component('bottom-player', BottomPlayer);
Vue.mixin(mixin);

new Vue({
    vuetify,
    router,
    store,
    render: h => h(App)
}).$mount('#app')