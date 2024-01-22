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

                    <!--  card start  -->

                    <div class="row">


                        <!-- 打工預定 card start-->
                        <div class="mb-4 col-md-4">
                            <h4 class="d-flex justify-content-between align-items-center mb-3">
                                <span class="text-primary">打工預定</span>
                            </h4>

                            <ul class="list-group col-12 ">
                                <li class="list-group-item d-flex justify-content-between lh-sm">
                                    <div>
                                        <h6 class="my-0">打工類型</h6>
                                        <small class="text-muted"> work type</small>
                                    </div>
                                    <span class="primary">{{ workdetail.worktype }}</span>
                                </li>

                                <li class="list-group-item d-flex justify-content-between lh-sm">
                                    <div>
                                        <h6 class="my-0">打工項目</h6>
                                        <small class="text-muted">work name</small>
                                    </div>
                                    <span class="primary">{{ workdetail.name }}</span>
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



                        <!-- 房源預定 Card start -->
                        <div class="mb-4 col-md-4">
                            <h4 class="d-flex justify-content-between align-items-center mb-3">
                                <span class="text-primary">住宿預定</span>
                            </h4>

                            <ul class="list-group col-12 ">
                                <li class="list-group-item d-flex justify-content-between lh-sm">
                                    <div>
                                        <h6 class="my-0">房型</h6>
                                        <small class="text-muted">house type</small>
                                    </div>
                                    <span class="text-muted">雙人房</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between lh-sm">
                                    <div>
                                        <h6 class="my-0">房間</h6>
                                        <small class="text-muted">house name</small>
                                    </div>
                                    <span class="text-muted">301</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between lh-sm">
                                    <div>
                                        <h6 class="my-0">人數</h6>
                                        <small class="text-muted">numbers</small>
                                    </div>
                                    <span class="text-muted">{{ dataForOrder2.selectedAccomodator }}人</span>
                                </li>
                            </ul>
                            <!-- 房源預定 Card end -->
                        </div>

                        <div class="mb-4 col-md-4">

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
                        <button class="w-50 btn btn-secondary btn-lg" type="submit" @click="goToOrder3()">下一步</button>
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

//============路由控制============

import { useOrderStore } from '@store/orderStore-memory.js';

const orderStore = useOrderStore();

const loaddata = () => {
    // 从 Pinia store 获取数据
    dataForOrder2.value = orderStore.orderData;
    console.log('Received dataForOrder2:', dataForOrder2);
    workid.value = dataForOrder2.value.workid
    console.log(workid.value)


}


//============查詢工作資料============


const workdetail = reactive({})
const workid = ref('');


const loadworkDetail = async () => {
    const Work_API_URL = 'http://localhost:8080/order/' + workid.value;
    const response = await axios.post(Work_API_URL);
    Object.assign(workdetail, response.data);
    console.log('Received workdetail:', workdetail);
}


onMounted(async () => {
    loaddata();
    await loadworkDetail();
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