<template>
    <div class=" bg-white p-0 row text-Font-Account">
        <!-- index Start -->

        <!-- left Start -->
        <div class="col-2  bg-primary justify-content-center">
            <div class="dropdown rounded-circle text-center">
                <img v-if="userdetails.photoBase64" :src=userdetails.photoBase64 style="width: 50px"
                    class="rounded-circle">{{ userdetails.name }}
            </div>
        </div>
        <div class="col-10"></div>
        <ANavbar @xyzClick="clickHandler"></ANavbar>

        <!-- right Start -->
        <div class="col-9">
            <Account1 v-show="isShowAccount" :userdetails="userdetails" @resetdetails="loaduserDetail"></Account1>
            <introduction v-show="isShowIntroduction" :userdetails="userdetails"></introduction>
            <LikeWork v-show="isShowLikeWork"></LikeWork>
            <FinshWork v-show="isShowFinshWork"></FinshWork>
            <OrderByUserId v-show="isShowtest"></OrderByUserId>
        </div>
        <!-- index End -->

    </div>
</template>
    
<script setup >
import ANavbar from './AccountLeftNavBar.vue';
import Account1 from './Account1.vue';
import FinshWork from './Account2.vue';
import LikeWork from './Account3.vue';
import Introduction from './Account4.vue';
import OrderByUserId from './Account5.vue'
import { onMounted, reactive, ref } from 'vue';
import { useUserStore } from '@store/userStore-localStorage.js';

const isShowAccount = ref(true);
const isShowLikeWork = ref(false);
const isShowFinshWork = ref(false);
const isShowIntroduction = ref(false);
const isShowtest = ref(false);

const clickHandler = showVeiw => {
    closeShow();
    if (showVeiw === 1) { isShowAccount.value = true }
    else if (showVeiw === 2) { isShowFinshWork.value = true }
    else if (showVeiw === 3) { isShowLikeWork.value = true }
    else if (showVeiw === 4) { isShowIntroduction.value = true }
    else if (showVeiw === 5) { isShowtest.value = true }
    else console.log("error", showVeiw)
}
const closeShow = () => {
    isShowAccount.value = false;
    isShowLikeWork.value = false;
    isShowFinshWork.value = false;
    isShowIntroduction.value = false;
    isShowtest.value = false;
}

//============查詢會員資料============
import axios from 'axios';
import Swal from 'sweetalert2';
import { useRouter } from 'vue-router'

const user = ref({})
const userdetails = ref({})
const router = useRouter();
const getuserid =
    () => {
        const id = localStorage.getItem('userID');
        return id;
    }
const userStore = useUserStore();
const loaduserDetail = async () => {
    const response = await axios.get(`${import.meta.env.VITE_APP_API_URL}/api/volunteerDetail/Base64/` + getuserid());
    if (!response.data) {
        userStore.$reset()
        localStorage.removeItem('user')
        localStorage.removeItem('sessionToken');
        localStorage.removeItem('userID');
        localStorage.removeItem('lordID');
        Swal.fire({
            icon: 'warning',
            text: '此帳號已被刪除，重新登入或註冊新會員',
            confirmButtonText: '好的',
        });
        await router.push({
            name: "Login",
        });
    } else {
        // Object.assign(userdetails, response.data);
        userdetails.value = response.data
        console.log(userdetails)
    }
}
onMounted(async () => {
    await loaduserDetail();
});


</script>
    
<style scoped>
/* 載入字體樣式 */
@font-face {
    font-family: 'Accounttext';
    src: url(https://cdn.jsdelivr.net/gh/max32002/naikaifont@1.0/webfont/NaikaiFont-Regular-Lite.woff2) format("woff2");
    font-weight: 100;
}

.text-Font-Account {
    font-family: 'Accounttext', sans-serif;
    font-size: 3vh;
    /* 在這裡設定字體大小 */
}
</style>