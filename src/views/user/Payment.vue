<template>
    <br>    
    <button @click="getPaid">送出</button>
</template>
    
<script setup>
    import{ ref } from 'vue';
    let path = import.meta.env.VITE_APP_API_URL;
    const amount = ref('');
    function getPaid(){
        amount.value = 100;
        window.location.href = `${path}/ecpayCheckout/${amount.value}`;
    }
</script>
    
<style scoped>
    
</style>