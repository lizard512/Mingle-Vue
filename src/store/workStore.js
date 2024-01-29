// store.js
import { defineStore } from 'pinia';

export const useWorkStore = defineStore({
    id: 'work',
    state: () => ({
        works: []
    }),
    actions: {
        setWorks(works) {
            this.works = works;
        }
    }
});