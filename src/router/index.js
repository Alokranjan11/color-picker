import { createRouter, createWebHistory } from "vue-router";
import Color from "../components/Color.vue";
import Toggle from "../components/Toggle.vue"

const routes = [
  {
    path: "/",
    name: "Color",
    component: Color,
  },
  {
    path: "/toggle",
    name: "Toggle",
    component: Toggle,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
