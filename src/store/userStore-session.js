// userStore.js
import { defineStore } from 'pinia';

export const useUserStore = defineStore({
    id: 'user',
    state: () => ({
        isLoggedIn: sessionStorage.getItem('isLoggedIn') === 'true',
        isLord: sessionStorage.getItem('isLord') === 'true'
    }),
    actions: {
        login() {
            this.isLoggedIn = true;
            sessionStorage.setItem('isLoggedIn', 'true');
        },
        logout() {
            this.isLoggedIn = false;
            sessionStorage.setItem('isLoggedIn', 'false');
        },
        becomeLord() {
            this.isLord = true;
            sessionStorage.setItem('isLord', 'true');
        },
        quitLord() {
            this.isLord = false;
            sessionStorage.setItem('isLord', 'false');
        }
    }
});