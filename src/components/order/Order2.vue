<template>
    <!-- form start -->

    <div class="container">
        <main>


            <!-- 訂單狀況 -->
            <div class="py-5 text-center">
                <h2>訂單資訊</h2>
                <div class="container py-5 h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-12">
                            <div class="card card-stepper text-black" style="border-radius: 16px;">

                                <div class="card-body p-5">





                                    <div class="d-flex justify-content-between align-items-center mb-5">
                                        <div>
                                            <h5 class="mb-0">訂單編號: <span
                                                    class="text-primary font-weight-bold">ID1234567</span></h5>
                                            <p class="mb-0 text-muted" rderDate="orderDate">訂購日期:{{ dataForOrder2.orderDate
                                            }} </p>
                                        </div>

                                    </div>

                                    <!-- 變動狀態標籤 -->
                                    <ul id="progressbar-2" class=" mx-0 mt-0 mb-5 px-0 pt-0 pb-2">
                                        <li class="step0 active text-center" id="step1"></li>
                                        <li class="step0 active  text-center" id="step2"></li>
                                        <li class="step0 text-muted  text-center" id="step3"></li>
                                    </ul>


                                    <div class="d-flex justify-content-between">
                                        <div class="d-lg-flex align-items-center">
                                            <i class="fas fa-briefcase fa-3x me-lg-4 mb-3 mb-lg-0"></i>
                                            <div>
                                                <p class="fw-bold mb-1">order</p>
                                                <p class="fw-bold mb-0">work</p>
                                            </div>
                                        </div>
                                        <div class="d-lg-flex align-items-center">
                                            <i class="fas fa-clipboard-list fa-3x me-lg-4 mb-3 mb-lg-0"></i>
                                            <div class="me-lg-1">
                                                <p class="fw-bold mb-1">order</p>
                                                <p class="fw-bold mb-0">confirm</p>
                                            </div>
                                        </div>
                                        <div class="d-lg-flex align-items-center">
                                            <i class="fas fa-envelope fa-3x me-lg-5 mb-3 mb-lg-0"></i>
                                            <div class="me-lg-5">
                                                <p class="fw-bold mb-1">order</p>
                                                <p class="fw-bold mb-0">finish</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 訂單狀況 -->





            <!-- start -->
            <div class="row g-5 justify-content-center">
                <form>


                    <div class="row">

                        <!-- 會員資料確認 card start -->
                        <div class="mb-4 col-md-4">
                            <h4 class="d-flex justify-content-between align-items-center mb-3">
                                <span class="text-primary">訂單確認</span>
                            </h4>

                            <ul class="list-group col-12 ">
                                <li class="list-group-item d-flex justify-content-between lh-sm">
                                    <div>
                                        <h6 class="my-0">訂單編號</h6>
                                        <small class="text-muted"> order id</small>
                                    </div>
                                    <span class="primary">ID1234567</span>
                                </li>

                                <li class="list-group-item d-flex justify-content-between lh-sm">
                                    <div>
                                        <h6 class="my-0">訂購日期</h6>
                                        <small class="text-muted">order date</small>
                                    </div>
                                    <span class="primary">{{ dataForOrder2.orderDate }}</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between lh-sm">
                                    <div>
                                        <h6 class="my-0">會員全名</h6>
                                        <small class="text-muted">full name</small>
                                    </div>
                                    <span class="primary">{{ dataForOrder2.username }}</span>
                                </li>

                                <li class="list-group-item d-flex justify-content-between lh-sm">
                                    <div>
                                        <h6 class="my-0">會員信箱</h6>
                                        <small class="text-muted">email</small>
                                    </div>
                                    <span class="primary">{{ dataForOrder2.useremail }}</span>
                                </li>

                                <li class="list-group-item d-flex justify-content-between lh-sm">
                                    <div>
                                        <h6 class="my-0">會員電話</h6>
                                        <small class="text-muted">phone</small>
                                    </div>
                                    <span class="primary">{{ dataForOrder2.userphone }}</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between lh-sm">
                                    <div>
                                        <h6 class="my-0">自身是否前往</h6>
                                        <small class="text-muted">orderby</small>
                                    </div>
                                    <span class="primary">{{ dataForOrder2.orderby ? '是' : '否' }}</span>
                                </li>
                            </ul>
                        </div>
                        <!-- 會員資料確認 card end-->

                        <!-- 打工預定 card start-->
                        <div class="mb-4 col-md-4">
                            <h4 class="d-flex justify-content-between align-items-center mb-3 ">
                                <span class="text-primary">打工預定</span>
                            </h4>

                            <ul class="list-group col-12 ">
                                <li class="list-group-item d-flex justify-content-between lh-sm">
                                    <div>
                                        <h6 class="my-0">打工類型</h6>
                                        <small class="text-muted"> work type</small>
                                    </div>
                                    <span class="primary">{{ dataForOrder2.worktype }}</span>
                                </li>

                                <li class="list-group-item d-flex justify-content-between lh-sm">
                                    <div>
                                        <h6 class="my-0">打工項目</h6>
                                        <small class="text-muted">work name</small>
                                    </div>
                                    <span class="primary">{{ dataForOrder2.workname }}</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between lh-sm">
                                    <div>
                                        <h6 class="my-0">打工期間</h6>
                                        <small class="text-muted">work period</small>
                                    </div>
                                    <span class="primary">{{ dataForOrder2.selectedPeriod }}天</span>
                                </li>

                                <li class="list-group-item d-flex justify-content-between lh-sm">
                                    <div>
                                        <h6 class="my-0">打工人數</h6>
                                        <small class="text-muted">order applicants</small>
                                    </div>
                                    <span class="primary">{{ dataForOrder2.selectedAccomodator }}人</span>
                                </li>

                                <li class="list-group-item d-flex justify-content-between lh-sm">
                                    <div>
                                        <h6 class="my-0">開始日期</h6>
                                        <small class="text-muted">order startDate</small>
                                    </div>
                                    <span class="primary">{{ dataForOrder2.startDate }}</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between lh-sm">
                                    <div>
                                        <h6 class="my-0">結束日期</h6>
                                        <small class="text-muted">order endDate</small>
                                    </div>
                                    <span class="primary">{{ dataForOrder2.endDate }}</span>
                                </li>
                            </ul>
                            <!-- 打工預定 card end-->
                        </div>


                        <!-- 團報資料確認 card start -->
                        <div class="mb-4 col-md-4">
                            <h4 class="d-flex justify-content-between align-items-center mb-3">
                                <span class="text-primary">報名人員資料</span>
                            </h4>
                            <div>
                                <ul class="list-group col-12 ">

                                    <li class="list-group-item d-flex justify-content-between lh-sm"
                                        v-show="orderby == 'myself'">
                                        <div>
                                            <h6 class="my-0">住宿者資訊</h6>
                                            <small class="text-muted">accomodator info</small>
                                        </div>
                                        <div class="margin-left col-md-6 col-8"> <!-- 將這個 div 加入 ml-auto 類別 -->
                                            <div class="primary">{{ dataForOrder2.orderbyselfname }}</div>
                                            <div class="primary">{{ dataForOrder2.orderbyselfemail }}</div>
                                            <div class="primary">{{ dataForOrder2.orderbyselfphone }}</div>
                                        </div>
                                    </li>


                                    <li class="list-group-item d-flex justify-content-between lh-sm"
                                        v-for="value in dataForOrder2.accomodatorData" :key="value">
                                        <div>
                                            <h6 class="my-0">住宿者資訊</h6>
                                            <small class="text-muted">accomodator info</small>
                                        </div>
                                        <div class="margin-left col-md-6 col-8"> <!-- 將這個 div 加入 ml-auto 類別 -->
                                            <div class="primary">{{ value.AccomodatorfullName }}</div>
                                            <div class="primary">{{ value.Accomodatoremail }}</div>
                                            <div class="primary">{{ value.Accomodatorphone }}</div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <!-- 團報資料確認 card end-->




                    </div>

                    <hr class="my-4">


                    <!--  card start  -->

                    <div class="row">

                        <!-- 房源預定 Card start -->
                        <div class="mb-12 col-md-12">
                            <h4 class="d-flex justify-content-between align-items-center mb-3">
                                <span class="text-primary">住宿預定</span>
                            </h4>


                            <div class="row">
                                <div class="mb-4 col-md-4 " v-for="(value, key) in roomDetail" :key="key" v-show="value > 0">
                                    <ul class="list-group col-12">
                                        <li class="list-group-item d-flex justify-content-between lh-sm">
                                            <div>
                                                <h6 class="my-0">房號</h6>
                                                <small class="text-muted">houseID</small>
                                            </div>
                                            <span class="text-muted" >{{ key }}</span>
                                        </li>
                                        <li class="list-group-item d-flex justify-content-between lh-sm">
                                            <div>
                                                <h6 class="my-0">房間</h6>
                                                <small class="text-muted">house name</small>
                                            </div>
                                            <span class="text-muted margin-left">可怕屋</span>
                                        </li>
                                        <li class="list-group-item d-flex justify-content-between lh-sm">
                                            <div>
                                                <h6 class="my-0">容納人數</h6>
                                                <small class="text-muted">house capacity</small>
                                            </div>
                                            <span class="text-muted margin-left">2人</span>
                                        </li>

                                        <li class="list-group-item d-flex justify-content-between lh-sm">
                                            <div>
                                                <h6 class="my-0">間數</h6>
                                                <small class="text-muted margin-left">room number</small>
                                            </div>
                                            <span class="text-muted margin-left">{{ value }} 間</span>
                                        </li>

                                    </ul>
                                </div>
                                <!-- 房源預定 Card end -->
                            </div>
                        </div>

                        <hr class="my-4">



                        <div class="mb-12 col-md-12">

                            <!-- 媒合費用 Card start-->
                            <h4 class="d-flex justify-content-between align-items-center mb-3">
                                <span class="text-primary">總計費用</span>
                            </h4>
                            <ul class="list-group mb-3 col-12 ">
                                <li class="list-group-item d-flex justify-content-between lh-sm">
                                    <div>
                                        <h6 class="my-0">打工人數</h6>
                                        <small class="text-muted">order applicants</small>
                                    </div>
                                    <span class="text-muted">{{ dataForOrder2.selectedAccomodator }}人</span>
                                </li>

                                <li class="list-group-item d-flex justify-content-between bg-light">
                                    <div>
                                        <h6 class="my-0">媒合費用</h6>
                                        <small class="text-muted">service price</small>
                                    </div>
                                    <strong>{{ dataForOrder2.selectedAccomodator * 300 }}元<span>(TWD)</span></strong>
                                </li>
                            </ul>
                            <!-- 媒合費用 Card end-->

                        </div>

                        <!-- button start -->
                        <hr class="my-4 col-md-12">
                        <button class="w-50 btn change btn-primary btn-lg" type="submit" @click="goToOrder1()">修改資料</button>
                        <button class="w-50 btn btn-secondary btn-lg" type="submit" @click="goToOrder3()">確認報名</button>
                        <!-- button end -->



                        <!--  right card end  -->
                    </div>
                </form>
            </div>
            <!-- 預定住宿 end-->



        </main>
        <!-- end -->
    </div>
</template>
    
<script setup>

import { onMounted, ref, reactive } from 'vue';

import { useRouter } from 'vue-router';

import axios from 'axios';

const router = useRouter();

const dataForOrder2 = ref([]);

const roomDetail = ref([]);

//============路由控制============

import { useOrderStore } from '@store/orderStore-memory.js';


const orderStore = useOrderStore();

const loaddata = () => {
    // 从 Pinia store 获取数据
    dataForOrder2.value = orderStore.orderData;
    console.log('Received dataForOrder2:', dataForOrder2);
    roomDetail.value = dataForOrder2.value.selectedRooms
    console.log(roomDetail.value)
    // 使用 for...in 遍历对象的属性
    for (const key in roomDetail.value) {
        // key 是属性名，selectedRooms[key] 是对应的值
        console.log(`属性名: ${key}, 值: ${roomDetail.value[key]}`);
    }
}


//============查詢房屋資料============


const houseid = ref({});




// const loadworkDetail = async () => {
//     const Work_API_URL = 'http://localhost:8080/order/' + workid.value;
//     const response = await axios.post(Work_API_URL);
//     Object.assign(workdetail, response.data);
//     console.log('Received workdetail:', workdetail);
// }


onMounted(async () => {
    loaddata();
    // await loadworkDetail();
});




const goToOrder3 = function () {
    router.push(
        '/order/order3')
}

const goToOrder1 = function () {
    router.push(
        '/order/order1',
    )
}


</script>

<style scoped>
.card-stepper {
    z-index: 0;
}

#progressbar-2 {
    color: #455A64;
    display: flex;
    justify-content: space-between;
}

#progressbar-2 li {
    list-style-type: none;
    font-size: 13px;
    width: 40%;
    float: left;
    position: relative;
}

#progressbar-2 #step1:before {
    content: '\f058';
    font-family: "Font Awesome 5 Free";
    color: #fff;
    width: 37px;
    margin-left: auto;
    padding-left: auto;
    display: block;
    text-align: center;

}

/* 變動狀態標籤 */
#progressbar-2 #step2:before {
    content: '\f058';
    font-family: "Font Awesome 5 Free";
    color: #fff;
    width: 37px;
    margin-left: auto;
    padding-left: auto;
    display: block;
    text-align: center;
}


#progressbar-2 #step3:before {
    content: '\f111';
    font-family: "Font Awesome 5 Free";
    color: #fff;
    width: 37px;
    margin-left: auto;
    padding-left: auto;
    display: block;
    text-align: center;
}

#progressbar-2 li:before {
    line-height: 37px;
    display: block;
    font-size: 12px;
    background: #c5cae9;
    border-radius: 50%;
}

#progressbar-2 li:after {
    content: '';
    width: 100%;
    height: 10px;
    background: #c5cae9;
    position: absolute;
    left: 0%;
    right: 0%;
    top: 15px;
    z-index: -1;
}


/* 變動狀態長度 */

#progressbar-2 li:nth-child(1):after {
    left: 1%;
    width: 98%;
}

#progressbar-2 li:nth-child(2):after {
    left: 1%;
    width: 98%;
}


#progressbar-2 li:nth-child(3):after {
    left: 1%;
    width: 98%;

}


#progressbar-2 li.active:before,
#progressbar-2 li.active:after {
    background: #ffc107;
}
</style>