<template>
    <!-- Back to Top Button-->
    <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="fa-solid fa-arrow-up"></i></a>
</template>

<script setup>

</script>
    
<style scoped>
.back-to-top{
    position: fixed;
    right: 30px;
    bottom: 30px;
    z-index: 9999;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: var(--primary);
    color: var(--light);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    transition: .3s;
}
</style>