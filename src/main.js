import { createApp,configureCompat} from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import App from './App.vue'
import router from "./router"

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/main.css'



configureCompat({
    MODE: 2
})

createApp(App)
.use(BootstrapVue)
.use(IconsPlugin)
.use(router)
.mount('#app')
