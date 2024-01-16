import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createPinia } from 'pinia'
import { useUserStore } from '@store/userStore-memory.js';

const pinia = createPinia()
const app = createApp(App)
app.use(pinia).use(router).use(ElementPlus).mount('#app');

// 路由守衛閃亮登場
router.beforeEach(async (to) => {
    const store = useUserStore();
    // 針對需要登入才能檢視的頁面，檢查用戶登入狀態
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!store.isLoggedIn) {
            // 如果用戶未登入，重新導向到登入頁面
            return { name: 'Login' }
        } else if (to.meta.permissions) {
            // 檢查用戶是否具有必要的權限
            for (let permission of to.meta.permissions) {
                if (!store.permissions.includes(permission)) {
                    // 如果用戶缺少必要的權限，重新導向到首頁
                    return { name: 'Home' }
                }
            }
        }
    }
    // 如果用戶已登入且具有所有必要的權限，允許訪問

});
