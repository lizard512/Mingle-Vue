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


                            <hr class="my-4">
                            <!-- 回應訊息 -->
                            <h6 class=" card-title text-md-start text-secondary">房東回應</h6>
                            <div v-if="item.reply">
                                <p class="card-text text-md-start">{{ item.reply }}</p>
                                <p class="card-text  text-align-right">
                                    <small class="text-muted ">{{ item.replyUpdatedAt.split('T')[0] }}</small>
                                </p>
                            </div>


                            <div class="input-group col-12" v-if="!item.reply">
                                <el-input v-model="landlordReplies[item.reviewid]" :autosize="{ minRows: 5, maxRows: 10 }"
                                    type="textarea" placeholder="請輸入" show-word-limit maxlength="500">
                                </el-input>
                                <!-- 上傳圖片 start -->

                                <!-- <div class="col-12">
                                    <div class=" m-3 p-3 animate__animated animate__fadeInUp">
                                        <el-upload v-model:file-list="fileList" action="#" list-type="picture-card"
                                            :auto-upload="false" :on-change="addToTotal" :show-file-list="false"
                                            accept=".jpg,.jpeg,.webp,.png" multiple drag>
                                            <el-icon>
                                                <Plus />
                                            </el-icon>
                                            <template #tip>
                                                <div class="el-upload__tip secondary">
                                                    圖片只允許 .jpg,.jpeg,.webp,.png，最多6張
                                                </div>
                                            </template>

                                        </el-upload> -->
                                <!-- preview -->
                                <!-- <div class="row">
                                            <div v-for=" item, index  in  totalList "
                                                class="col d-flex justify-content-center" :key="index">
                                                <figcaption class="position-relative">
                                                    <i class="fa-solid fa-xmark fa-2xl position-absolute xmark"
                                                        @click="deletePhoto(item, index)"></i>
                                                    <img :src="item"
                                                        class=" border-primary rounded previewPhoto animate__animated animate__fadeIn">
                                                </figcaption>
                                            </div>
                                        </div>
                                    </div>


                                </div> -->

                                <!-- <h4 class="text-center my-5 animate__animated animate__flipInX">上傳圖片</h4> -->




                                <div><button class="btn btn-primary dol-1  col-12"
                                        @click="submitReply(item.reviewid)">送出</button></div>
                            </div>
                            <!-- ---- -->
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
import { Delete, Plus } from '@element-plus/icons-vue'

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


//===========取得使用者ID============
const getUserID = () => {
    const sessionToken = localStorage.getItem('sessionToken');
    userID.value = String(sessionToken).substring(32, sessionToken.length);
}

// ==========取得房東id============
const getLandlord = () => {
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

// =========取得評價照片============
// const getReviewPhoto = async (item_reviewid) => {

//     const ReviewPhoto_API_URL = `${import.meta.env.VITE_APP_API_URL}/review/findReviewPhotos`
//     const response = await axios.get(
//         ReviewPhoto_API_URL, {
//         params:
//             { reviewId: item_reviewid }
//     });

//     photos.value.push({
//         ...response.data
//     })

//     console.log(photos.value)
//     return photos.value
// }

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
    getUserID();
    getLandlord();
    await getReview();
    for (const item of review.value) {
        await getOrderDetail(item.orderid);
        landlordReplies[item.reviewid] = ref('');
        // await getReviewPhoto(item.reviewid)
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
    width: 100%;
    /* 设置包装容器宽度为 100%，占满表格列 */
    max-width: 300px;
    /* 设置包装容器最大宽度，调整根据需求 */
    margin: auto;
    /* 水平居中 */
    overflow: hidden;
    /* 隐藏溢出的图像部分 */
}

.photo-container {
    width: 100%;
    /* 设置包装容器宽度为 100%，占满表格列 */
    max-width: 400px;
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