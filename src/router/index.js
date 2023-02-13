// define router rules here in this file
import {createRouter, createWebHistory} from "vue-router"; // import from vue-router package
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import CarView from "../views/CarView.vue";
import NotFoundView from "../views/NotFoundView.vue";
import ManufacturerView from "../views/ManufacturerView.vue";
import DealerView from "../views/DealerView.vue";

// arguments (contained within object) => history and routes: 
const router = createRouter({

    history: createWebHistory(process.env.BASE_URL), // the argument is "import.meta.env.BASE_URL" for vite apps
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView
        },
        {
            path: "/about",
            name: "about",
            component: AboutView
        },
        {
            path: "/car/:id",
            name: "car",
            component: CarView,
            children: [
                {
                    path: "dealer",
                    name: "dealer",
                    component: DealerView,
                },
                {
                    path: "manfct",
                    name: "manfct",
                    component: ManufacturerView,
                }
            ]
        },
        {
            path: "/:catchAll(.*)",
            name: "NotFound",
            component: NotFoundView
        }
    ]
});

// Step 2: Telling Vue abt our router rules
export default router;