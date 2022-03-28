import { createWebHistory, createRouter } from "vue-router";

import Menu from '../pages/Menu.vue'
import Home from '../pages/Home.vue'
import Order from '../pages/Order.vue'
import BackOffice from  '../pages/BackOffice.vue'

// const Backoffice = { template: '<div>About</div>' }

const routes = [
    { path: '/FrontEnd-Mision/05 - VUEJS/pasteleria/dist/', component: Home, name:'home' },
    { path: '/FrontEnd-Mision/05 - VUEJS/pasteleria/dist/menu', component: Menu, name:'menu' },
    { path: '/FrontEnd-Mision/05 - VUEJS/pasteleria/dist/backoffice', component: BackOffice, name:'backoffice' },
    { path: '/FrontEnd-Mision/05 - VUEJS/pasteleria/dist/pedido', component: Order, name:'order' },
]

export const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
})