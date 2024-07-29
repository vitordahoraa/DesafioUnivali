import {createRouter, createWebHistory} from 'vue-router'

import Catalog from '../components/layouts/Catalog.vue'
import Register from '../components/layouts/Register.vue'

const routes = [
    {
        path : '/',
        name : 'catalog',
        component : Catalog,
    },
    {
        path : '/register',
        name : 'register',
        component : Register
    },
    
    {
        path : '/register/:id',
        name : 'registerID',
        component : Register,
        props : true
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router