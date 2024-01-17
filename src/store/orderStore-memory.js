import { defineStore } from 'pinia';

export const useOrderStore = defineStore('order', {
  state: () => ({
    orderData: null,
  }),
  actions: {
    setOrderData(data) {
      this.orderData = data;
    },
  },
});
