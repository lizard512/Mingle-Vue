<template>
    <div class=" bg-white p-0 row text-Font-Account">
        <!-- index Start -->

        <!-- left Start -->
        <div class="col-2  bg-primary justify-content-center">
            <div class="dropdown rounded-circle text-center">
                <img src="@images/user-3.jpg" style="width: 50px" class="rounded-circle">{{ userdetails.name }}
            </div>
        </div>
        <div class="col-10"></div>
        <ANavbar @xyzClick="clickHandler"></ANavbar>

        <!-- right Start -->
        <div class="col-9">
            <Account1 v-show="isShowAccount" :userdetails="userdetails"></Account1>
            <introduction v-show="isShowIntroduction" :userdetails="userdetails"></introduction>
            <LikeWork v-show="isShowLikeWork"></LikeWork>
            <FinshWork v-show="isShowFinshWork"></FinshWork>
            <!-- <test :userdetails="userdetails"></test> -->
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
import test from './test.vue'
import { onMounted, reactive, ref } from 'vue';
import 'animate.css';
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

//============查詢會員資料============

import VueCookies from 'vue-cookies';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useRouter } from 'vue-router'
const userdetails = reactive({})

const getuserid =
    () => {
        const sessionToken = VueCookies.get('sessionToken');
        if (sessionToken === null || sessionToken === undefined || sessionToken === "") {
            Swal.fire({
                icon: 'warning',
                text: '請先登入才能使用會員管理',
                confirmButtonText: '好的',
            });
            const router = useRouter();
            router.push({
                name: "Login",
            });
            return;
        }
        const userid = String(sessionToken).substring(32, sessionToken.length);
        return userid
    }
const loaduserDetail = async () => {
    const response = await axios.get(`${import.meta.env.VITE_APP_API_URL}/order/` + getuserid());
    Object.assign(userdetails, response.data);
    console.log(userdetails)
    if (userdetails.isDeleted) {
        // Swal.fire({
        //     icon: 'warning',
        //     text: '此帳號已被停權，重新登入或註冊會員',
        //     confirmButtonText: '好的',
        // });
        const router = useRouter();
        router.push({
            name: "Login",
        });
        return;
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