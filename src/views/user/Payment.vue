<template>
    <br>    
    <button @click="getPaid">送出</button>
</template>
    
<script setup>
    import{ ref } from 'vue';
    const amount = ref('');
    function getPaid(){
        amount.value = 100;
        window.location.href = `http://localhost:8080/ecpayCheckout/${amount.value}`;
    }
</script>
    
<style scoped>
    
</style>