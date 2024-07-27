import './bootstrap';

import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import contentComponent from './components/contentComponent/contentComponent.vue'
import Index from './Index.vue'

const routes = [
    {path: '/', component: Index},
    {path: '/item', component: Item},
    
]


const app = createApp();

app.component('content-component',contentComponent)
app.component('sidebar',SideBar)

app.mount('#app')