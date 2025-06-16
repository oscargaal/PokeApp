// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import 'nes.css/css/nes.min.css';
import './style.css'
import router from './router';

const app = createApp(App);
app.use(router);
app.mount('#app');