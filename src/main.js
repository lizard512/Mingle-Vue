import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createPinia } from 'pinia'
// import store from './store';

const pinia = createPinia()
const app = createApp(App)

app.use(router).use(pinia).use(ElementPlus).mount('#app');