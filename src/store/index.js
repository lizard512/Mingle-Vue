// src/store/index.js
import { createStore } from 'vuex';

export default createStore({
    state: {
        isLoggedIn: sessionStorage.getItem('isLoggedIn') === 'true',
        isLord: sessionStorage.getItem('isLord') === 'true'
    },
    mutations: {
        setLoggedIn(state, value) {
            state.isLoggedIn = value;
            sessionStorage.setItem('isLoggedIn', value.toString());
        },
        setLord(state, value) {
            state.isLord = value;
            sessionStorage.setItem('isLord', value.toString());
        }
    }
});