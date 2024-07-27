import './bootstrap';

import { createApp } from 'vue';
import App from './components/layouts/App.vue'
import router from './router';



const app = createApp(App);
app.use(router)
//app.component(SideBar)
app.mount('#app')