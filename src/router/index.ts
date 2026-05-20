import { createRouter, createWebHistory } from "vue-router"

const Home = () => import("../pages/Home.vue")
const PostDetail = () => import("../pages/PostDetail.vue")
const NotFound = () => import("../pages/NotFound.vue")

const router = createRouter({
    history: createWebHistory(),

    routes: [

        {
            path: "/",
            component: Home
        },

        {
            path: "/post/:id",
            component: PostDetail
        },

        {
            path: "/:pathMatch(.*)*",
            component: NotFound
        }

    ]
})

export default router