import { createRouter, createWebHistory } from "vue-router"

import Panel from "@/components/page-panel/Panel.vue";

const routeInfos = [
  {
    path: "/index.html",
    name: "home",
    component: Panel,
    props: route => ({
      locale: route.query.locale,
    }),
  },
  {
    path: "/",
    name: "home",
    component: Panel,
    props: route => ({
      locale: route.query.locale,
    }),
  },
  {
    path: "/panel.html",
    name: "home",
    component: Panel,
    props: route => ({
      locale: route.query.locale,
    }),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routeInfos
})

export default router;