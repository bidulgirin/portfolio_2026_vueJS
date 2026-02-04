import { createRouter, createWebHistory } from "vue-router";
import HomeMain from "../views/HomeMain.vue";
import PdfViewer from "../components/PdfViewer.vue";

const routes = [
    { path: "/", name: "HomeMain", component: HomeMain },
    { path: "/viewer", name: "PdfViewer", component: PdfViewer },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
