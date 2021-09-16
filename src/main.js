import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'

// components
import SideNav from './components/UI/SideNav';
import AppBar from "./components/UI/AppBar";

Vue.config.productionTip = false;

Vue.component('side-nav', SideNav);
Vue.component('app-bar', AppBar);

new Vue({
    vuetify,
    router,
    store,
    render: h => h(App)
}).$mount('#app')