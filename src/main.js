import { createApp,configureCompat} from 'vue'
import { BootstrapVue, IconsPlugin, BootstrapVueIcons } from 'bootstrap-vue'
import App from './App.vue'
import router from "./router"

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/main.css'
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'
import './styles/main.css'

configureCompat({
    MODE: 3
})

createApp(App)
.use(BootstrapVue)
.use(IconsPlugin)
.use(BootstrapVueIcons)
.use(router)
.mount('#app')
