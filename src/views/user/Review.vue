<template>
    <div class="row">

        <div class="col-md-8 px-md-4 mx-auto animate__animated animate__fadeInUp">

            <!-- 評價 start-->
            <div class="card  col-md-10 mx-auto d-flex flex-md-nowrap my-5" v-for="item in review" :key="item">
                <div class="row" @loadedmetadata="getOrderDetail(item.orderid)">
                    <div class="col-2 text-center">
                        <br>
                        <a href="#">
                            <img class="card-img" src="/person.png" alt="image" style="width: 80px;">
                        </a>
                    </div>
                    <div class="col-3 text-md-start">
                        <br>
                        <p class="card-text h6">姓名:</p>
                        <p class="card-text"><small>{{ orderDetail.name }}</small></p>
                        <p class="card-text h6">工作:</p>
                        <p class="card-text"><small>{{ orderDetail.workName }}</small></p>
                        <p class="card-text h6 ">訂單報名人數:</p>
                        <p class="card-text">
                            <small>{{ orderDetail.numbers }}人</small>

                        </p>

                        <p class="card-text h6 ">打工區間:</p>
                        <p class="card-text">
                            <small>{{ orderDetail.startDate }}到{{ orderDetail.endDate }}</small>
                            <small><br>總共{{ orderDetail.days }}天</small>
                        </p>


                        <p class="card-text h6">房源資訊:</p>
                        <p class="card-text">
                            <small v-for="houseType in orderDetail.houseType" :key="houseType">{{ houseType }}-<small
                                    v-for="houseName in orderDetail.houseName" :key="houseName">{{ houseName
                                    }}</small></small>
                        </p>
                        <br>
                    </div>
                    <div class="col-6">
                        <div class="card-body">
                            <div class=" text-secondary"> 評價分數: <span v-for="i in item.stars" :key="i"><i
                                        class="fa-solid fa-star"></i></span><span v-for="i in 5 - item.stars" :key="i"><i
                                        class="fa-regular fa-star"></i></span></div>

                            <p class="card-text text-md-start">
                            <p><br>評價內容:</p>
                            <p class="card-text text-md-start">{{ item.content }}</p>
                            </p>
                            <p class="card-text  text-align-right">
                                <small class="text-muted ">{{ item.createdAt.split('T')[0] }}</small>
                            </p>



                            <!-- 回應訊息 -->
                            <h6 class=" card-title text-md-start text-secondary">房東回應</h6>
                            <div class="input-group col-12">
                                <el-input :autosize="{ minRows: 5, maxRows: 10 }" type="textarea" placeholder="請輸入"
                                    show-word-limit maxlength="500" />
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

import { onMounted, ref } from 'vue'
import axios from 'axios';

const userID = ref('');
const landlordID = ref('');
const review = ref([]);
const orderDetail = ref({});


//===========取得使用者ID============
const getUserID = () => {
    const sessionToken = localStorage.getItem('sessionToken');
    userID.value = String(sessionToken).substring(32, sessionToken.length);
}

// ==========取得房東id============
const getLandlord =  () => {
    landlordID.value = localStorage.getItem('lordID');
    

}
// =========取得房東的評價資訊request============


const getReview = async () => {
    const Review_API_URL = `${import.meta.env.VITE_APP_API_URL}/review/findreview`
    const response = await axios.get(
        Review_API_URL, {
        params:
            { landlordId: landlordID.value }
    });
    Object.assign(review.value, response.data);


}

// =========取得完整訂單資訊(包含會員資訊、房屋、工作)request============
const getOrderDetail = async (review_orderid) => {

    console.log(review_orderid)

    const OrderDetail_API_URL = `${import.meta.env.VITE_APP_API_URL}/review/findOrderDetail`
    const response = await axios.get(
        OrderDetail_API_URL, {
        params:
            { orderid: review_orderid }
    });
    console.log(response)
    Object.assign(orderDetail.value, response.data);
    console.log(orderDetail.value)
}


onMounted(async () => {
    window.scrollTo({top: 0, behavior :'smooth'});
    getUserID();
    getLandlord();
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