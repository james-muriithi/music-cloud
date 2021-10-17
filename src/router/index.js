import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/recent",
    name: "recent",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/RecentlyAdded.vue"),
  },
  {
    path: "/albums",
    name: "albums",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/TopAlbums.vue"),
  },
  {
    path: "/playlists",
    name: "playlists",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/TopPlaylists.vue"),
  },
  {
    path: "/search",
    name: "search",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Search.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
