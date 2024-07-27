import './bootstrap';

import { createApp } from 'vue';

import Catalogo from './components/Catalog/Catalog.vue'
import SideBar from './components/Sidebar/SideBar.vue'

const app = createApp();

app.component('catalogo',Catalogo)
app.component('sidebar',SideBar)

app.mount('#app')