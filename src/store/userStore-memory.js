// userStore.js
import { defineStore } from 'pinia';

export const useUserStore = defineStore({
    id: 'user',
    state: () => ({
        isLoggedIn: false,
        isLord: false
    }),
    actions: {
        login() {
            this.isLoggedIn = true;
        },
        logout() {
            this.isLoggedIn = false;
        },
        becomeLord() {
            this.isLord = true;
        },
        quitLord() {
            this.isLord = false;
        }
    }
});