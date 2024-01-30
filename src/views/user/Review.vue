<template>

        <div class="row">
            <!-- 深入分析 -->
            <div class="nav justify-content-center">
                <a class="nav-link d-flex align-items-center" href="#">
                    評價狀況
                </a>
                <a class="nav-link d-flex align-items-center gap-2" href="#">
                    訂單狀況
                </a>
                <a class="nav-link d-flex align-items-center gap-2" href="#">
                    瀏覽量
                </a>
                <a class="nav-link d-flex align-items-center gap-2" href="#">
                    房東評價
                </a>
            </div>

            <div class="col-md-8 px-md-4 mx-auto">
                <h1 class="h2" style="text-align: center">評價狀況</h1>

                <!-- 評價 start-->
                <div class="card  col-md-10 mx-auto d-flex flex-md-nowrap" v-for="item in review" :key="item" >
                    <div class="row">
                        <div class="col-2 text-center">
                            <br>
                            <a href="#">
                                <img class="card-img" src="/person.png" alt="image" style="width: 80px;">
                            </a>
                        </div>
                        <div class="col-3 text-md-start btn" v-if="getVolunteerDetail(item.orderid)">
                            <br>
                            <p class="card-text h6">姓名:</p>
                            <p class="card-text"><small>{{ volunteerDetail.name }}</small></p>
                            <p class="card-text h6" v-show="getOrder(item.orderid)" >工作:</p>
                            <p class="card-text"><small>{{  }}</small></p>
                            <p class="card-text h6 ">期間:</p>
                            <p class="card-text">
                                <small>{{ orderDetail.startDate.split('T')[0]}}~{{ orderDetail.endDate.split('T')[0] }}</small>
                            </p>
                            <p class="card-text h6">房源:</p>
                            <p class="card-text"><small>超級雙人房</small></p>
                            <br>
                        </div>
                        <div class="col-6">
                            <div class="card-body">
                                <h5 class="card-title text-md-start">星星數:{{ item.stars }}</h5>
                                <p class="card-text text-md-start">
                                <p>內容:{{ item.content }}</p>
                                </p>
                                <p class="card-text text-md-start">
                                    <small class="text-muted ">{{ item.createdAt.split('T')[0] }}</small>
                                </p>

                                <!-- 回應訊息 -->
                                <h5 class="card-title text-md-start">房東回應</h5>
                                <div class="input-group col-12">
                                    <input type="file" id="fileInput" style="display: none;">
                                    <button class=" btn-color btn-secondary col-md-2 mx-auto"
                                        onclick="document.getElementById('fileInput').click();">檔案</button>

                                    <input type="file" id="imageInput" accept="image/*" style="display: none;">

                                    <button class="btn-color btn-secondary col-md-2  mx-autor"
                                        onclick="document.getElementById('imageInput').click();">圖片</button>
                                    <textarea class="form-control col-md-6" placeholder="..." rows="2"></textarea>
                                    <button class="btn-color btn-primary dol-1  col-md-2">送出</button>
                                </div>



                                <!-- ---- -->



                            </div>
                        </div>
                    </div>
                </div>



                <!-- 評價 -->
                <div class="card  col-md-10 mx-auto d-flex flex-md-nowrap" >
                    <div class="row">
                        <div class="col-2 text-center">
                            <br>
                            <a href="#">
                                <img class="card-img"  src="/person.png" alt="image" style="width: 80px;">
                            </a>
                        </div>
                        <div class="col-3 text-md-start">
                            <br>
                            <p class="card-text h6">姓名:</p>
                            <p class="card-text"><small>Cindy</small></p>
                            <p class="card-text h6">工作:</p>
                            <p class="card-text"><small>遛狗澆水買菜</small></p>
                            <p class="card-text h6 ">期間:</p>
                            <p class="card-text">
                                <small>2023-5週</small>
                            </p>
                            <p class="card-text h6">房源:</p>
                            <p class="card-text"><small>超級雙人房</small></p>
                            <br>
                        </div>
                        <div class="col-6">
                            <div class="card-body">
                                <h5 class="card-title text-md-start">標題:我覺得很好!</h5>
                                <p class="card-text text-md-start">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quaerat obcaecati
                                    fugiat nesciunt natus esse sint pariatur recusandae tenetur, provident dolorum
                                    eveniet aut ratione iure ducimus quisquam, sunt quibusdam doloribus
                                    reprehenderit consectetur voluptas velit. Mollitia, laboriosam. Officia totam
                                    aspernatur aperiam ipsum natus ab id incidunt veniam fugiat expedita! Expedita
                                    voluptate consequuntur delectus ad tempore sed totam distinctio doloribus unde
                                    quasi in incidunt corrupti quae beatae, commodi eius deserunt voluptates
                                    suscipit voluptatibus, placeat cum sequi. Nihil facere cupiditate quo dolorum
                                    iusto rerum nostrum excepturi ad est sunt velit amet totam vero expedita
                                    voluptas sint, perspiciatis hic perferendis inventore consequuntur veniam
                                    explicabo rem! Esse facilis quos maiores cupiditate nobis aperiam nesciunt velit
                                    praesentium officia eos. Velit debitis veritatis cum eaque tempore?
                                    Necessitatibus labore, vel ex accusantium doloremque, dicta, libero enim
                                    voluptatum ipsam iusto quas rem sunt cupiditate dolore. Cumque maiores eos
                                    officiis mollitia optio! Esse reiciendis nostrum fuga labore exercitationem
                                    totam praesentium perspiciatis aspernatur, tenetur fugiat omnis consequuntur
                                    quidem nulla sunt pariatur ratione ea, officiis quia commodi mollitia at nam
                                    laboriosam? Quod quam dolore asperiores sequi earum, consequatur officiis
                                    quaerat debitis iusto. Illo aliquam tempora et asperiores facilis. Excepturi
                                    eligendi a quas tempora corporis voluptate, aperiam, impedit illo facere sequi,
                                    exercitationem quidem.</p>
                                </p>
                                <p class="card-text text-md-start">
                                    <small class="text-muted">Last updated 3 mins ago</small>
                                </p>

                                <!-- 回應訊息 -->
                                <h5 class="card-title text-md-start">房東回應</h5>
                                <div class="input-group col-12">
                                    <input type="file" id="fileInput" style="display: none;">
                                    <button class="btn-color btn-secondary col-md-2 mx-auto"
                                        onclick="document.getElementById('fileInput').click();">檔案</button>

                                    <input type="file" id="imageInput" accept="image/*" style="display: none;">

                                    <button class="btn-color btn-secondary col-md-2  mx-autor"
                                        onclick="document.getElementById('imageInput').click();">圖片</button>
                                    <textarea class="form-control col-md-6" placeholder="..." rows="2"></textarea>
                                    <button class="btn-color btn-primary dol-1  col-md-2">送出</button>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>

                <!-- 評價 -->
                <div class="card  col-md-10 mx-auto d-flex flex-md-nowrap">
                    <div class="row">
                        <div class="col-2 text-center">
                            <br>
                            <a href="#">
                                <img class="card-img"  src="/person.png" alt="image" style="width: 80px;">
                            </a>
                        </div>
                        <div class="col-3 text-md-start">
                            <br>
                            <p class="card-text h6">姓名:</p>
                            <p class="card-text"><small>Cindy</small></p>
                            <p class="card-text h6">工作:</p>
                            <p class="card-text"><small>遛狗澆水買菜</small></p>
                            <p class="card-text h6 ">期間:</p>
                            <p class="card-text">
                                <small>2023-5週</small>
                            </p>
                            <p class="card-text h6">房源:</p>
                            <p class="card-text"><small>超級雙人房</small></p>
                            <br>
                        </div>
                        <div class="col-6">
                            <div class="card-body">
                                <h5 class="card-title text-md-start">標題:我覺得很好!</h5>
                                <p class="card-text text-md-start">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ullam tempore
                                    doloremque minus quos hic repellat sequi veniam aut, aliquam voluptate optio
                                    molestias odit animi, eius praesentium labore, laudantium accusamus.</p>
                                </p>
                                <p class="card-text text-md-start">
                                    <small class="text-muted">Last updated 3 mins ago</small>
                                </p>

                                <!-- 回應訊息 -->
                                <h5 class="card-title text-md-start">房東回應</h5>
                                <div class="input-group col-12">
                                    <input type="file" id="fileInput" style="display: none;">
                                    <button class="btn-color btn-secondary col-md-2 mx-auto"
                                        onclick="document.getElementById('fileInput').click();">檔案</button>

                                    <input type="file" id="imageInput" accept="image/*" style="display: none;">

                                    <button class="btn-color btn-secondary col-md-2  mx-autor"
                                        onclick="document.getElementById('imageInput').click();">圖片</button>
                                    <textarea class="form-control col-md-6" placeholder="..." rows="2"></textarea>
                                    <button class="btn-color btn-primary dol-1  col-md-2">送出</button>
                                </div>

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
let userID = ref('');
const landlord = ref({});
const review = ref([]);
const volunteerDetail = ref({});
const orderDetail = ref({});

//===========取得使用者ID============
const getUserID = () => {
        const sessionToken = localStorage.getItem('sessionToken');
        userID = String(sessionToken).substring(32, sessionToken.length);
        console.log(userID)
}

// ==========取得房東資訊============
const  getLandlord = async () =>{

const Review_API_URL = `${import.meta.env.VITE_APP_API_URL}/review/findLandlord`
const response = await axios.get(
    Review_API_URL,  { params: 
        { userid: userID }
    });
console.log(response.data)
Object.assign(landlord.value, response.data);
console.log(landlord.value)
}

// =========取得評價資訊============


const getReview = async () =>{
const Review_API_URL = `${import.meta.env.VITE_APP_API_URL}/review/findreview`
const response = await axios.get(
    Review_API_URL,  { params: 
        { landlordId: landlord.value.landlordid } 
    });
console.log(response.data)
Object.assign(review.value, response.data);
console.log(review.value)
}
// =========取得評價會員資訊============
const getVolunteerDetail = async (review_orderid) =>{

    console.log(review_orderid)

const VolunteerDetail_API_URL = `${import.meta.env.VITE_APP_API_URL}/order/findUserDetail`
const response = await axios.get(
    VolunteerDetail_API_URL,  { params: 
        { orderid: review_orderid }
    });
console.log(response)
Object.assign(volunteerDetail.value, response.data);
console.log(volunteerDetail.value)
}

// =========取得訂單資訊============

const getOrder = async (review_order) =>{
const Order_API_URL = `${import.meta.env.VITE_APP_API_URL}/order/findOrder`
const response = await axios.get(
    Order_API_URL,  { params: 
        { orderid: review_order }
    });
console.log(response)
Object.assign(orderDetail.value, response.data);
console.log(orderDetail.value)
}


onMounted(async () => {
    getUserID();
    await getLandlord();
    await getReview();
});





</script>
    
<style scoped>
.input-group {
    height: 3%;
    border: 1px solid #ffc107;
    border-radius: 5px;
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