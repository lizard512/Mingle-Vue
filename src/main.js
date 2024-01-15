// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import store from './store';

const app = createApp(App)

app.use(router).use(store).use(ElementPlus).mount('#app');