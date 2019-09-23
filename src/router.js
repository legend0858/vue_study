import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/vdom_key",
      name: "虚拟Dom与key",
      component: () => import("./views/1.vdom_key")
    },
    {
      path: "/provide_inject",
      name: "provide_inject",
      component: () => import("./views/2.provide_inject")
    },
    {
      path: "/slot",
      name: "slot",
      component: () => import("./views/3.slot")
    },
    {
      path: "/practice",
      name: "practive",
      component: () => import("./views/4.practice")
    }
  ]
});
