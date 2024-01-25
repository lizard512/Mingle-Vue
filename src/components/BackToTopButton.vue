<template>
    <!-- Back to Top Button-->
    <a href="#" class="btn btn-lg btn-success back-to-top" v-if="isShow"><i class="fa-solid fa-arrow-up"></i></a>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
const isShow = ref(false);

const checkScroll = () => {
    isShow.value = window.scrollY > 45;
};

onMounted(async () => {
    window.addEventListener('scroll', checkScroll);
});
onUnmounted(() => {
    window.removeEventListener('scroll', checkScroll);
});

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
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    transition: .3s;
}
</style>