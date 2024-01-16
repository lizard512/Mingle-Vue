<template>
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
                                            <h5 class="mb-0">訂單編號 <span
                                                    class="text-primary font-weight-bold">ID1234567</span></h5>
                                        </div>

                                    </div>

                                    <!-- 變動狀態標籤 -->
                                    <ul id="progressbar-2" class=" mx-0 mt-0 mb-5 px-0 pt-0 pb-2">
                                        <li class="step0 active text-center" id="step1"></li>
                                        <li class="step0 active  text-center" id="step2"></li>
                                        <li class="step0 active  text-center" id="step3"></li>
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
                <div class="col-8">
                    <h4 class="d-flex justify-content-center mb-3">
                        成功預定，尚待房東確認訂單。
                    </h4>
                </div>
                <div class="col-8">
                    <!-- button start -->
                        <button class="w-100 btn btn-secondary btn-lg" type="submit" @click="goToIndex()">返回首頁</button>
                    <!-- button end -->
                </div>

            </div>
            <!-- end-->
        </main>
    </div>
</template>
    
<script setup>

import { useRouter } from 'vue-router';

//============路由控制============

const router = useRouter();
const goToIndex = () => {
    router.push({ path: '/' });
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
    content:  '\f058';
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