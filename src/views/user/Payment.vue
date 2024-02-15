<template>
    <br><el-button type="success" round @click="getPaid">付款</el-button>
</template>
    
<script setup>
import { ref } from 'vue';
let path = import.meta.env.VITE_APP_API_URL;
const amount = ref(0);
const id = ref('');
const props = defineProps({
    people: Number,
    orderid: Number
})
function getPaid() {
    amount.value = props.people * 300;
    id.value = props.orderid
    console.log(amount.value, id.value)
    window.location.href = `${path}/ecpayCheckout/${amount.value}/${id.value}`
}
</script>
    
<style scoped></style>