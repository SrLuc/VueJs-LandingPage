import "../src/assets/global.css"

import { createApp } from 'vue';
import App from './App.vue';
import router from '../src/routes/index';

createApp(App).use(router).mount('#app');
