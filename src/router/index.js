/* eslint-disable prettier/prettier */
import { createRouter, createWebHistory } from "vue-router";
import Tutorial from "../components/Tutorial.vue";
import AddTutorial from "../components/AddTutorial.vue";
const routes = [{
        path: "/",
        name: "Tutorial",
        component: Tutorial,
    }, {
        path: "/",
        name: "AddTutorial",
        component: AddTutorial,

    }

];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;