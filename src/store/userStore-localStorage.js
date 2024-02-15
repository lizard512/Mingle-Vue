// userStore.js
import { defineStore } from 'pinia';

export const useUserStore = defineStore({
    id: 'user',
    state: () => ({
        // 使用者登入狀態
        isLoggedIn: false,
        permissions: [],
        userID: null,
    }),
    actions: {
        login(id) {
            this.isLoggedIn = true;
            this.userID = id;
        },
        addPermission(permission) {
            // 添加用戶身分組
            if (!this.permissions.includes(permission)) {
                this.permissions.push(permission);
            }
        },
        removePermission(permission) {
            const index = this.permissions.indexOf(permission);
            // 移除用戶身分組
            if (index !== -1) {
                this.permissions.splice(index, 1);
            }
        },
    },
    persist: true,
});