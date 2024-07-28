import {createRouter, createWebHistory} from 'vue-router'

import Catalog from '../components/layouts/Catalog.vue'
import Register from '../components/layouts/Register.vue'

const routes = [
    {
        path : '/',
        component : Catalog,
    },
    {
        path : '/register',
        component : Register
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router