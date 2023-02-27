import Vue from "vue";
import VueRouter from "vue-router";
import admin from "../view/admin.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "admin",
    component: admin,
  },
  {
    path: "/client",
    name: "homeclient",
    component: () => import("../view/homeclient.vue"),
  },
  {
    path: "/client/about",
    name: "about",
    component: () => import("../view/about.vue"),
  },
]

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
  });
  
export default router;