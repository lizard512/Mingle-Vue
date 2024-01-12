// src/store/index.js
import { createStore } from 'vuex';

export default createStore({
    state: {
        isLoggedIn: sessionStorage.getItem('isLoggedIn') === 'true'
    },
    mutations: {
        setLoggedIn(state, value) {
            state.isLoggedIn = value;
            sessionStorage.setItem('isLoggedIn', value.toString());
        }
    }
});