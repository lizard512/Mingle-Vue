<template>
    <br><el-button type="success" round @click="getPaid">付款</el-button>
    <p>{{ props.amount }}</p>
</template>
    
<script setup>
import { ref } from 'vue';
let path = import.meta.env.VITE_APP_API_URL;
const amount2 = ref('');
const props = defineProps({
    amount: Number,
})
function getPaid() {
    amount2.value = 100;
    window.location.href = `${path}/ecpayCheckout/${amount2.value}`;
}
</script>
    
<style scoped></style>