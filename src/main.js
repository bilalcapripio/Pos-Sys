import { createApp } from 'vue'
import router from './router'
window.$ = require('jquery');
import './assets/admin-lte/js/AdminLTE';
import App from './App.vue'

createApp(App).use(router).mount('#app')