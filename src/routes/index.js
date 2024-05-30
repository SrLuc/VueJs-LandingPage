import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Service from "@/views/Service.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/service",
        name: "Service",
        component: Service,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
