// store.js
import { defineStore } from 'pinia'

export const useStore = defineStore({
    id: 'admin',
    state: () => ({
        loadedWorks: null,
    }),
    actions: {
        setLoadedWorks(works) {
            this.loadedWorks = works
        },
    }
})