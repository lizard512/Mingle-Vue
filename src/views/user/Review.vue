<template>
    <div class="row">

        <div class="col-md-8 px-md-4 mx-auto">
            <!-- <h1 class="h2" style="text-align: center">評價狀況</h1> -->

            <!-- 評價 start-->
            <div class="card  col-md-10 mx-auto d-flex flex-md-nowrap my-5" v-for="item in review" :key="item">
                <div class="row">
                    <div class="col-2 text-center">
                        <br>
                        <a href="#">
                            <img class="card-img" src="/person.png" alt="image" style="width: 80px;">
                        </a>
                    </div>
                    <div class="col-3 text-md-start" v-if="getVolunteerDetail(item.orderid)">
                        <br>
                        <p class="card-text h6">姓名:</p>
                        <p class="card-text"><small>{{ volunteerDetail.name }}</small></p>
                        <p class="card-text h6" v-if="getWorkDetail(item.orderid)">工作:</p>
                        <p class="card-text"><small>{{ workDetail.name }}</small></p>
                        <p class="card-text h6 ">打工區間:</p>
                        <p class="card-text" v-if="getOrder(item.orderid)">
                            <small>{{ dayDifference }}天</small>
                        </p>
                        <p class="card-text h6" v-if="getHouseDetail(item.orderid)">房源資訊:</p>
                        <p class="card-text"><small>xxxx</small></p>
                        <br>
                    </div>
                    <div class="col-6">
                        <div class="card-body">
                            <div class=" text-secondary"> 評價分數: <span v-for="i in item.stars" :key="i"><i
                                        class="fa-solid fa-star"></i></span><span v-for="i in 5 - item.stars" :key="i"><i
                                        class="fa-regular fa-star"></i></span></div>

                            <p class="card-text text-md-start">
                            <p>評價內容:</p>
                            <p class="card-text text-md-start">{{ item.content }}</p>
                            </p>
                            <p class="card-text  text-align-right">
                                <small class="text-muted ">{{ item.createdAt.split('T')[0] }}</small>
                            </p>



                            <!-- 回應訊息 -->
                            <h6 class=" card-title text-md-start text-secondary">房東回應</h6>
                            <div class="input-group col-12">
                                <el-input :autosize="{ minRows: 5, maxRows: 10 }" type="textarea" placeholder="請輸入" show-word-limit maxlength="500" />
                                <input type="file" id="imageInput" accept="image/*" style="display: none;">
                                <button class="btn btn-secondary" onclick="document.getElementById('imageInput').click();">
                                    <i class="bi bi-image"></i></button>

                                <button class="btn btn-primary dol-1  col-md-2">送出</button>
                            </div>
                            <!-- ---- -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script setup>

import { onMounted, reactive, ref } from 'vue'
import axios from 'axios';

const userID = ref('');
const landlord = ref({});
const review = ref([]);
const volunteerDetail = ref({});
const orderDetail = ref({});
const workDetail = ref({});
const dayDifference = ref('');
const houseDetail = ref({});


//===========取得使用者ID============
const getUserID = () => {
    const sessionToken = localStorage.getItem('sessionToken');
    userID.value = String(sessionToken).substring(32, sessionToken.length);
    console.log(userID.value)
}

// ==========取得房東資訊============
const getLandlord = async () => {

    const Review_API_URL = `${import.meta.env.VITE_APP_API_URL}/review/findLandlord`
    const response = await axios.get(
        Review_API_URL, {
        params:
            { userid: userID.value }
    });
    console.log(response.data)
    Object.assign(landlord.value, response.data);
    console.log(landlord.value)
}

// =========取得評價資訊============


const getReview = async () => {
    const Review_API_URL = `${import.meta.env.VITE_APP_API_URL}/review/findreview`
    const response = await axios.get(
        Review_API_URL, {
        params:
            { landlordId: landlord.value.landlordid }
    });
    console.log(response.data)
    Object.assign(review.value, response.data);
    console.log(review.value)
}
// =========取得評價會員資訊============
const getVolunteerDetail = async (review_orderid) => {

    console.log(review_orderid)

    const VolunteerDetail_API_URL = `${import.meta.env.VITE_APP_API_URL}/order/findUserDetail`
    const response = await axios.get(
        VolunteerDetail_API_URL, {
        params:
            { orderid: review_orderid }
    });
    console.log(response)
    Object.assign(volunteerDetail.value, response.data);
    console.log(volunteerDetail.value)
}

// =========取得訂單資訊============

const getOrder = async (review_order) => {
    const Order_API_URL = `${import.meta.env.VITE_APP_API_URL}/order/findOrder`
    const response = await axios.get(
        Order_API_URL, {
        params:
            { orderid: review_order }
    });
    console.log(response)
    Object.assign(orderDetail.value, response.data);
    console.log(orderDetail.value)
    const startDate = new Date(orderDetail.value.startDate);
    const endDate = new Date(orderDetail.value.endDate);

    // 計算兩個日期之間的毫秒數差距
    const timeDifference = endDate.getTime() - startDate.getTime();
    // 將毫秒數轉換為天數
    dayDifference.value = timeDifference / (1000 * 60 * 60 * 24);
    console.log(dayDifference.value);

}


// =========取得訂單工作資訊============

const getWorkDetail = async (review_order) => {
    const WorkDetail_API_URL = `${import.meta.env.VITE_APP_API_URL}/order/findWork`
    const response = await axios.get(
        WorkDetail_API_URL, {
        params:
            { orderid: review_order }
    });
    console.log(response)
    Object.assign(workDetail.value, response.data);

}

// =========取得訂單房屋資訊============

const getHouseDetail = async (review_order) => {
    const HouseDetail_API_URL = `${import.meta.env.VITE_APP_API_URL}/order/findHouse`
    const response = await axios.get(
        HouseDetail_API_URL, {
        params:
            { orderid: review_order }
    });
    console.log(response)
    Object.assign(houseDetail.value, response.data);
    console.log(houseDetail.value)
}





onMounted(async () => {
    getUserID();
    await getLandlord();
    await getReview();
});





</script>
    
<style scoped>
/* 自定義樣式 */

.text-align-right {
    text-align: right;
}


.read-the-docs {
    color: #888;
}

.input-group {
    margin: auto;
    height: 3%;
    border: 1px solid #ffc107;
    border-radius: 1px;
    overflow: hidden;

}

.form-control {
    resize: none;
}

.btn-color {
    background-color: #ffc107;
    border: none;
}
</style>