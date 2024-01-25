<template>
    <div class=" bg-white p-0 row text-Font-Account">
        <!-- index Start -->

        <!-- left Start -->
        <ANavbar @xyzClick="clickHandler"></ANavbar>

        <!-- right Start -->
        <div class="col-10 md-right">
            <Account1 v-show="isShowAccount"></Account1>
            <introduction v-show="isShowIntroduction"></introduction>
            <LikeWork v-show="isShowLikeWork"></LikeWork>
            <FinshWork v-show="isShowFinshWork"></FinshWork>
        </div>
        <!-- index End -->

    </div>
</template>
    
<script setup >
import ANavbar from '../../../components/AccountLeftNavBar.vue';
import Account1 from './Account1.vue';
import LikeWork from './Account2.vue';
import FinshWork from './Account3.vue';
import Introduction from './Account4.vue';
import { ref } from 'vue';
const isShowAccount = ref(true);
const isShowLikeWork = ref(false);
const isShowFinshWork = ref(false);
const isShowIntroduction = ref(false);
const clickHandler = showVeiw => {
    closeShow();
    if (showVeiw === 1) { isShowAccount.value = true }
    else if (showVeiw === 2) { isShowLikeWork.value = true }
    else if (showVeiw === 3) { isShowFinshWork.value = true }
    else if (showVeiw === 4) { isShowIntroduction.value = true }
    else console.log("error", showVeiw)
}
const closeShow = () => {
    isShowAccount.value = false;
    isShowLikeWork.value = false;
    isShowFinshWork.value = false;
    isShowIntroduction.value = false;
}



</script>
    
<style scoped>
@font-face {
    font-family: 'Accounttext';
    src: url(https://cdn.jsdelivr.net/gh/max32002/naikaifont@1.0/webfont/NaikaiFont-Regular-Lite.woff2) format("woff2");
    font-weight: 100;
}

.text-Font-Account {
    font-family: 'Accounttext', sans-serif;
    font-size: 5vh;
    /* 在這裡設定字體大小 */
}
</style>