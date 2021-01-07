import Vue from "vue";
import Router from "vue-router";
import routes from "./routes";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes,
  linkActiveClass: "rounded bg-indigo-500 m-text-white",
});

export default router;
