import * as VueRouter from "vue-router"
import routes from "./routes"

const router = VueRouter.createRouter({
    routes,
    history: VueRouter.createWebHistory()
})

export default router;