import { createApp } from 'vue';

// import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';

import router from './router'


const app = createApp(App).use(router);

// Use the router plugin
// app.use(router);

// Mount the app
app.mount('#app');
