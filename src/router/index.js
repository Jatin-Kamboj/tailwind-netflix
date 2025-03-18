import { createRouter, createWebHistory } from "vue-router";

/**
 * App is Lazy loading all the routes in the browsers
 * Making the app acessible to user with lesser time
 */
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/HomeView.vue"),
    },
    {
      path: "/movies/:id",
      name: "movie-show",
      component: () => import("@/views/MovieShowView.vue"),
    },
  ],
});

export default router;
