import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import List from "../views/List.vue";
import Add from "../views/Add.vue";
import Edit from "../views/Edit.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/list",
      name: "list",
      component: List,
    },
    {
      path: "/add",
      name: "add",
      component: Add,
    },
    {
      path: "/edit/:id?",
      name: "edit",
      component: Edit,
      props: true,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
