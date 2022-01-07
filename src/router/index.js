/* eslint-disable prettier/prettier */
import { createRouter, createWebHistory } from "vue-router";
import Tutorial from "../components/Tutorial.vue";
const routes = [{
        path: "/",
        name: "Tutorial",
        component: Tutorial,
    },

];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;