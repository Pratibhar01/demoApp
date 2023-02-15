import StickyNote from "../pages/StickyNote.vue"
import FoodApp from "../pages/FoodApp.vue"
import Home from "../pages/Home.vue"

let routes = [
    {
        path:"/",
        name:"home",
        component:Home
    },
    {
        path:"/note-me-app",
        name:"sticky-note-app",
        component:StickyNote
    },
    {
        path:"/food-app",
        name:"food-app",
        component:FoodApp
    }

]
export default routes;