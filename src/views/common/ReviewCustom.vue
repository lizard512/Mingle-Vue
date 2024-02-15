<template>
    <div class="row">

        <div class="col-md-8 px-md-4 mx-auto animate__animated animate__fadeInUp">

            <!-- 評價 start-->
            <div class="card  col-md-10 mx-auto d-flex flex-md-nowrap my-5" v-for="(item, index) in review" :key="index">
                <div class="row">
                    <div class="col-2 text-center">
                        <br>
                        <a href="#">
                            <img class="card-img" :src="orderDetail[index]?.image" alt="image" style="width: 80px;">
                        </a>
                    </div>
                    <div class="col-3 text-md-start">
                        <br>
                        <p class="card-text h6">姓名:</p>
                        <p class="card-text"><small>{{ orderDetail[index]?.username }}</small></p>
                        <p class="card-text h6">工作:</p>
                        <p class="card-text"><small>{{ orderDetail[index]?.workName }}</small></p>
                        <p class="card-text h6 ">訂單報名人數:</p>
                        <p class="card-text">
                            <small>{{ orderDetail[index]?.numbers }}人</small>

                        </p>

                        <p class="card-text h6 ">打工區間:</p>
                        <p class="card-text">
                            <small>{{ orderDetail[index]?.startDate }}到{{ orderDetail[index]?.endDate }}</small>
                            <small><br>總共{{ orderDetail[index]?.days }}天</small>
                        </p>


                        <p class="card-text h6">房源資訊:</p>
                        <p class="card-text">
                            <small v-for="houseType in orderDetail[index]?.houseType" :key="houseType">{{ houseType
                            }}-<small v-for="houseName in orderDetail[index]?.houseName" :key="houseName">{{ houseName
}}</small></small><br>
                        </p>
                        <br>
                    </div>
                    <div class="col-6">
                        <div class="card-body">
                            <h6 class=" card-title text-md-start text-secondary"> 評價分數: <span class="text-primary"
                                    v-for="i in item.stars" :key="i"><i class="fa-solid fa-star"></i></span><span
                                    v-for="i in 5 - item.stars" :key="i"><i class="fa-regular fa-star"></i></span></h6>
                            <br>
                            <div>
                                <p class="card-text text-md-start ">
                                <h6 class=" card-title text-md-start text-secondary">評價內容:</h6>
                                <p class="card-text text-md-start">{{ item.content }}</p>
                                </p>
                                <p class="card-text  text-align-right">
                                    <small class="text-muted ">{{ item.createdAt.split('T')[0] }}</small>
                                </p>
                            </div>
                            <div class="photo-container">
                                <swiper :style="{
                                    '--swiper-navigation-color': '#fff',
                                    '--swiper-pagination-color': '#fff',
                                }" :centeredSlides="true" :loop="false" :navigation="true" :modules="modules"
                                    :pagination="{ clickable: true }" class="mySwiper col-md-12">
                                    <swiper-slide v-for="photo in reviewPhoto" :key="photo.id"
                                        v-show="item.reviewid == photo.id">
                                        <img :src="photo.photo" class="d-block w-100" :alt="item.reviewid"></swiper-slide>
                                </swiper>
                            </div>

                            <div v-if="item.reply">
                                <hr class="my-4">
                                <!-- 回應訊息 -->
                                <h6 class=" card-title text-md-start text-secondary">房東回應</h6>
                                <div>
                                    <p class="card-text text-md-start">{{ item.reply }}</p>
                                    <p class="card-text  text-align-right">
                                        <small class="text-muted ">{{ item.replyUpdatedAt.split('T')[0] }}</small>
                                    </p>

                                </div>
                                <!-- ---- -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



    
<script  setup>

import axios from 'axios';
import { onMounted, reactive, ref } from 'vue';


// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const modules = [Autoplay, Pagination, Navigation];



const disabled = ref(false)


const userID = ref('');
const landlordID = ref('');
const review = ref([]);
const orderDetail = ref([]);
const landlordReplies = reactive({});
const photos = ref([])

const reply = ref({
    "reviewid": 0,
    "reply": "",
    "replyCreatedAt": new Date().toISOString(),
    "replyUpdatedAt": new Date().toISOString()
})


// =========取得房東的評價資訊request============


const getReview = async () => {
    const Review_API_URL = `${import.meta.env.VITE_APP_API_URL}/review/findreview`
    const response = await axios.get(
        Review_API_URL, {
        params:
            { landlordId: 2 }
    });
    Object.assign(review.value, response.data);

    return review.value

}

// =========取得完整訂單資訊(包含會員資訊、房屋、工作)request============
const getOrderDetail = async (review_orderid) => {

    const OrderDetail_API_URL = `${import.meta.env.VITE_APP_API_URL}/review/findOrderDetail`
    const response = await axios.get(
        OrderDetail_API_URL, {
        params:
            { orderid: review_orderid }
    });

    orderDetail.value.push({
        ...response.data
    })


    return orderDetail.value

}

const reviewPhoto = ref([])

// =========取得評價照片============
const getReviewPhoto = async (item_reviewid) => {

    const ReviewPhoto_API_URL = `${import.meta.env.VITE_APP_API_URL}/review/findReviewPhotos`
    const response = await axios.get(
        ReviewPhoto_API_URL, {
        params:
            { reviewId: item_reviewid }
    });

    console.log(response.data)

    for (const photo of response.data) {
        console.log(photo)

        reviewPhoto.value.push({
            id: item_reviewid,
            photo: photo
        })
    }
    console.log(reviewPhoto.value)

    return reviewPhoto.value
}

// =========送出房東回應request============

const submitReply = async (item_reviewid) => {

    const Reply_API_URL = `${import.meta.env.VITE_APP_API_URL}/review/create/reply`

    reply.value = {
        "reviewid": item_reviewid,
        "reply": landlordReplies[item_reviewid],
        "replyCreatedAt": new Date().toISOString(),
        "replyUpdatedAt": new Date().toISOString()
    }

    console.log(reply.value)

    const response = await axios.post(
        Reply_API_URL, reply.value
    );

    console.log(response.data)


    await getReview();

}



onMounted(async () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    await getReview();
    for (const item of review.value) {
        await getOrderDetail(item.orderid);
        landlordReplies[item.reviewid] = ref('');
        await getReviewPhoto(item.reviewid)

    }
})






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

.avatar-uploader .el-upload {
    border: 1px dashed var(--el-border-color);
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
    border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    text-align: center;
}


.previewPhoto {
    height: 125px;
    width: 125px;
    object-fit: contain;
}

.xmark {
    top: 14px;
    right: 7px;
    z-index: 1000;
}

figcaption:hover .xmark {
    transform: rotate(270deg);
    /* 設置 xmark 的旋轉效果 */
}

figcaption:hover img {
    transform: scale(1.1);
    /* 設置圖片的縮放效果 */
    transition: transform 0.3s ease;
    /* 添加過渡效果，使縮放平滑過渡 */
}

.xmark {
    transition: transform 0.3s ease;
    /* 添加過渡效果，使旋轉平滑過渡 */
}

.photo-container {
    width: 50%;
    /* 设置包装容器宽度为 100%，占满表格列 */
    max-width: 500px;
    /* 设置包装容器最大宽度，调整根据需求 */
    margin: auto;
    /* 水平居中 */
    overflow: hidden;
    /* 隐藏溢出的图像部分 */
}


.swiper {
    width: 100%;
    height: 100%;
}

.swiper-slide img {
    display: block;
    height: 100%;
    object-fit: contain;
}
</style>