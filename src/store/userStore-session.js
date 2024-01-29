import { defineStore } from 'pinia';
// import { watchEffect, onMounted } from 'vue';

export const useUserStore = defineStore({
    id: 'user',
    state: () => ({
        // 從 sessionStorage 中讀取登入狀態
        isLoggedIn: sessionStorage.getItem('isLoggedIn') === 'true',
        // 從 sessionStorage 中讀取用戶權限
        permissions: JSON.parse(sessionStorage.getItem('permissions')) || [],
    }),
    actions: {
        // 將登入狀態儲存到 sessionStorage 中
        login() {
            this.isLoggedIn = true;
            sessionStorage.setItem('isLoggedIn', 'true');
        },
        // 將登入狀態從 sessionStorage 中移除
        logout() {
            this.isLoggedIn = false;
            sessionStorage.removeItem('isLoggedIn');
        },
        addPermission(permission) {
            if (!this.permissions.includes(permission)) {
                // 添加用戶權限
                this.permissions.push(permission);
                // 將改動過的權限儲存到 sessionStorage 中
                sessionStorage.setItem('permissions', JSON.stringify(this.permissions));
            }
        },
        removePermission(permission) {
            const index = this.permissions.indexOf(permission);
            if (index !== -1) {
                // 移除用戶權限
                this.permissions.splice(index, 1);
                // 將改動過的權限儲存到 sessionStorage 中
                sessionStorage.setItem('permissions', JSON.stringify(this.permissions));
            }
        },
        becomeLandlord() {
            this.addPermission('lord')
        },
        quitFromLandlord() {
            this.removePermission('lord')
        },
        becomeAdmin() {
            this.addPermission('admin')
        },
        quitFromAdmin() {
            this.removePermission('admin')
        },
    },
});

// onMounted(() => {
//     const store = useUserStore();
//     watchEffect(() => {
//         store.isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
//         store.permissions = JSON.parse(sessionStorage.getItem('permissions')) || [];
//     });
// });

