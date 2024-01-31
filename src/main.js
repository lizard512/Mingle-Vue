import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { useUserStore } from '@store/userStore-session.js';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import axios from 'axios';
import Vue3Toastify from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
const app = createApp(App)
app.use(pinia).use(router).mount('#app');
app.use(Vue3Toastify, {
    "theme": "colored",
    "type": "default",
    "autoClose": 2500,
    "transition": "slide",
    "dangerouslyHTMLString": true
});


const httpClient = axios.create({
    withCredentials: true,
});
export default httpClient;

// 路由守衛閃亮登場
router.beforeEach(async (to) => {
    const store = useUserStore();
    // 針對需要登入才能檢視的頁面，檢查用戶登入狀態
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!store.isLoggedIn) {
            // 如果用戶未登入，重新導向到登入頁面
            await Swal.fire({
                icon: 'warning',
                text: '請先登入',
                confirmButtonText: '好的'
            });
            return { name: 'Login' }
        } else if (to.meta.permissions) {
            // 檢查用戶是否具有必要的權限
            for (let permission of to.meta.permissions) {
                if (!store.permissions.includes(permission)) {
                    // 如果用戶缺少必要的權限，重新導向到首頁
                    await Swal.fire({
                        icon: 'warning',
                        text: '你沒有足夠的權限訪問這個頁面',
                        confirmButtonText: '噢不'
                    });
                    return { name: 'Home' }
                }
            }
        }
    }
    // 如果用戶已登入且具有所有必要的權限，允許訪問

});
