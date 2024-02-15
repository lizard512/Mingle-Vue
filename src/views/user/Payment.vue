<template>
    <br><el-button type="success" round @click="getPaid">付款</el-button>
</template>
    
<script setup>
import { ref } from 'vue';
let path = import.meta.env.VITE_APP_API_URL;
const amount2 = ref(0);
const props = defineProps({
    amount: Number,
})
function getPaid() {
    amount2.value = props.amount * 300;
    window.location.href = `${path}/ecpayCheckout/${amount2.value}`
}
</script>
    
<style scoped></style>