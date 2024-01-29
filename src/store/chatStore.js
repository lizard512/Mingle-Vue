// store.js
import { defineStore } from 'pinia'

export const useStore = defineStore({
    id: 'chat',
    state: () => ({
        externalID: null,
        externalName: null
    }),
    actions: {
        setExternalID(id) {
            this.externalID = id
        },
        setExternalName(name) {
            this.externalName = name
        }
    }
})