<template>
    <div class="container-fluid bg-white p-0 row">
        <!-- index Start -->
        <div class="row">
            <!-- left Start -->
            <ANavbar @xyzClick="clickHandler"></ANavbar>
            <!-- right Start -->
            <Account1 v-show="isShowAccount"></Account1>
            <LikeWork v-show="isShowLikeWork"></LikeWork>
            <FinshWork v-show="isShowFinshWork"></FinshWork>
            <!-- index End -->
        </div>
    </div>
</template>
    
<script setup >
import ANavbar from '../../../components/AccountLeftNavBar.vue';
import Account1 from './Account1.vue';
import LikeWork from './Account2.vue';
import FinshWork from './Account3.vue';
import { ref } from 'vue';
const isShowAccount = ref(true);
const isShowLikeWork = ref(false);
const isShowFinshWork = ref(false);
const clickHandler = showVeiw => {
    if (showVeiw === 1) { isShowAccount.value = true, isShowLikeWork.value = false, isShowFinshWork.value = false; }
    if (showVeiw === 2) { isShowAccount.value = false, isShowLikeWork.value = true, isShowFinshWork.value = false; }
    if (showVeiw === 3) { isShowAccount.value = false, isShowLikeWork.value = false, isShowFinshWork.value = true; }
    else console.log("error", showVeiw)
}




</script>
    
<style scoped></style>