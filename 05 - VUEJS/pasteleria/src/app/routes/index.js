import { createWebHistory, createRouter } from "vue-router";

import Menu from '../pages/Menu.vue'
import Home from '../pages/Home.vue'
import Order from '../pages/Order.vue'
import BackOffice from  '../pages/BackOffice.vue'

// const Backoffice = { template: '<div>About</div>' }

const routes = [
    { path: '/', component: Home, name:'home' },
    { path: '/menu', component: Menu },
    { path: '/backoffice', component: BackOffice },
    { path: '/pedido', component: Order },
]

export const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
})