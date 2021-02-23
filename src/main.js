import { createApp } from 'vue';
import router from './router';
window.$ = require('jquery');
import './assets/admin-lte/js/AdminLTE';
import App from './App.vue';
// import axios from 'axios';
// import VueAxios from 'vue-axios';
// const app = Vue.createApp();
// app.use(VueAxios, axios);


createApp(App).use(router).mount('#app');

