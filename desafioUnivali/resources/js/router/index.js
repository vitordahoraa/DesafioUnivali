import {createRouter, createWebHistory} from 'vue-router'

import Catalog from '../components/layouts/Catalog.vue'
import Item from '../components/layouts/Item.vue'

const routes = [
    {
        path : '/',
        component : Catalog
    },
    {
        path : '/item',
        component : Item
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router