// store.js
import { defineStore } from 'pinia'

export const useStore = defineStore({
    id: 'chat',
    state: () => ({
        externalID: null
    }),
    actions: {
        setExternalID(id) {
            this.externalID = id
        }
    }
})