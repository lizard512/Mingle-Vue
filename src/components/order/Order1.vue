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
                                            <h5 class="mb-0">訂單編號 <span
                                                    class="text-primary font-weight-bold">ID1234567</span></h5>
                                        </div>

                                    </div>

                                    <!-- 變動狀態標籤 -->
                                    <ul id="progressbar-2" class=" mx-0 mt-0 mb-5 px-0 pt-0 pb-2">
                                        <li class="step0 active text-center" id="step1"></li>
                                        <li class="step0 text-muted  text-center" id="step2"></li>
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



            <!-- 預定打工 -->
            <div class="row g-5 justify-content-center">

                <!-- form start -->
                <div class="col-12 col-md-12  ">
                    <h4 class="justify-content-between align-items-center  text-center mb-3">
                        您的資料
                    </h4>

                    <form class="needs-validation" novalidate>

                        <!-- 基本資料 -->
                        <div class="row g-3"
                            style="border: 1px solid wheat; padding: 20px; border-radius: 10px; margin: 10px;">
                            <h6 class="mb-3">請確認會員資料</h6>
                            <!-- name  自動帶入會員資料-->
                            <div class="col-sm-4">
                                <label for="fullName" class="form-label" @click="handleClick">會員全名 (name) </label>

                                <input type="text" class="form-control" id="fullName" placeholder="" v-model="details.name"
                                    required>
                                <div class="invalid-feedback">
                                    務必填寫會員全名。
                                </div>
                            </div>

                            <!-- email 自動帶入會員資料-->
                            <div class="col-sm-4">
                                <label for="email" class="form-label">信箱 (Email)</label>
                                <input type="email" class="form-control" id="email" placeholder="you@example.com" value=""
                                    v-model="details.email" required>
                                <div class="invalid-feedback">
                                    務必填寫email。
                                </div>
                            </div>

                            <div class="col-md-4">
                                <label for="phone" class="form-label">電話 (phone)</label>
                                <input type="phone" class="form-control" id="phone" placeholder="" value=""
                                    v-model="details.phone" required>
                                <div class="invalid-feedback">
                                    務必填寫連絡電話。
                                </div>
                            </div>



                            <hr class="my-4">

                            <h6 class="mb-3">您為誰預定呢? </h6>
                            <div class="my-3">
                                <span class="form-check">
                                    <input id="orderby" name="orderby" type="radio" class="form-check-input" checked
                                        v-model="orderby" value="myself" @change="updateAccomodatorData" required>
                                    <label class="form-check-label" for="myself" value="myself">我為自己預定</label>
                                </span>
                                <div class="form-check">
                                    <input id="orderby" name="orderby" type="radio" class="form-check-input"
                                        v-model="orderby" value="other" @change="updateAccomodatorData" required>
                                    <label class="form-check-label" for="other" value="other">幫別人預定</label>
                                </div>
                            </div>
                        </div>
                        <!-- 基本資料 -->



                        <hr class="my-4">

                        <!--打工項目 check box -->
                        <div class="row g-3"
                            style="border: 1px solid wheat; padding: 20px; border-radius: 10px; margin: 10px;">
                            <h6 class="mb-3">預定打工項目 </h6>


                            <!-- 自動產出 -->

                            <div class="col-md-12">
                                <label for="work_address" class="form-label">打工詳細資料</label>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nulla, unde vel iusto
                                    fugit perferendis commodi a asperiores tempora mollitia! Dicta sapiente, quod magni
                                    nostrum rerum dignissimos placeat debitis, ipsam ad distinctio animi quae?
                                    Necessitatibus delectus nobis perspiciatis tempore dolorum expedita, quidem aut illo
                                    explicabo officia corrupti ad neque et non quisquam eligendi quis vero ea vitae qui
                                    deserunt facilis ab! Iure harum a ab illo doloribus nesciunt corporis! Placeat ut
                                    tempore quas necessitatibus eius asperiores, laborum, repudiandae ratione aperiam,
                                    reprehenderit tenetur eaque. Fugiat et assumenda sunt maiores sit voluptates, natus,
                                    quaerat iusto quidem officia, obcaecati aliquam quasi. Quibusdam, minus!</p>
                            </div>


                            <div class="col-md-3">
                                <label for="work_numbers" class="form-label">人數 ( applicants) </label>
                                <select class="form-select" id="work_numbers" v-model="selectedAccomodator"
                                    @change="updateAccomodatorData" required>
                                    <option value="">Choose...</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                                <div class="invalid-feedback">
                                    請選擇打工人數。
                                </div>
                            </div>

                            <div class="col-md-3">
                                <label for="work_period" class="form-label">打工區間 (work period)</label>
                                <select class="form-select" id="work_period" v-model="selectedPeriod"
                                    @change="updateDateRange" required>
                                    <!-- 後續依照實際工作開放區間去抓資料庫資料 -->
                                    <option value="">Choose...</option>
                                    <option value="7">7天</option>
                                    <option value="14">14天</option>
                                    <option value="30">1個月</option>
                                    <option value="60">2個月</option>
                                    <option value="90">3個月</option>
                                    <option value="120">4個月</option>
                                    <option value="150">5個月</option>
                                    <option value="180">6個月</option>
                                </select>
                                <div class="invalid-feedback">
                                    請選擇打工區間。
                                </div>
                            </div>


                            <div class="col-md-3">
                                <label for="work_startDate" class="form-label"> 開始日期 (startDate) </label>
                                <input type="date" class="form-control" id="work_startDate" name="work_startDate"
                                    v-model="startDate" :min="minStartDate" :max="maxStartDate" value="" required />
                                <div class="invalid-feedback">
                                    請選擇開始日期。
                                </div>
                            </div>

                            <div class="col-md-3">
                                <label for="work_endDate" class="form-label"> 結束日期 (endDate) </label>
                                <input type="date" class="form-control" id="work_endDate" name="work_endDate"
                                    v-model="endDate" :min="startDate" :max="maxEndDate" value="" required disabled />

                            </div>

                        </div>

                        <!--打工 check box -->


                        <hr class="my-4">


                        <!--住宿 check box -->
                        <div class="row g-3"
                            style="border: 1px solid wheat; padding: 20px; border-radius: 10px; margin: 10px;">
                            <h6 class="mb-3">預定住宿項目 </h6>

                            <div class="col-md-4">
                                <label for="house_type" class="form-label">房型 (house type)</label>
                                <select class="form-select" id="house_type" required>
                                    <option value="">Choose...</option>
                                    <option>雙人房</option>
                                    <option>單人房</option>
                                </select>
                                <div class="invalid-feedback">
                                    請選擇房源類型。
                                </div>
                            </div>

                            <div class="col-md-4">
                                <label for="room_name" class="form-label">房間 (room name)</label>
                                <select class="form-select" id="room_name" required>
                                    <option value="">Choose...</option>
                                    <option>親子房</option>
                                    <option>301</option>
                                    <option>405</option>
                                    <option>505</option>
                                </select>
                                <div class="invalid-feedback">
                                    請選擇房間。
                                </div>
                            </div>

                            <div class="col-md-4">
                                <label for="room_numbers" class="form-label">間數 (number) </label>
                                <select class="form-select" id="room_numbers" required>
                                    <option value="">Choose...</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                                <div class="invalid-feedback">
                                    請選擇間數。
                                </div>
                            </div>

                            <!-- 自動產出 -->
                            <div class="col-md-12">
                                <label for="house_address" class="form-label">住宿地點詳細內容 (address)</label>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nulla, unde vel iusto
                                    fugit perferendis commodi a asperiores tempora mollitia! Dicta sapiente, quod magni
                                    nostrum rerum dignissimos placeat debitis, ipsam ad distinctio animi quae?
                                    Necessitatibus delectus nobis perspiciatis tempore dolorum expedita, quidem aut illo
                                    explicabo officia corrupti ad neque et non quisquam eligendi quis vero ea vitae qui
                                    deserunt facilis ab! Iure harum a ab illo doloribus nesciunt corporis! Placeat ut
                                    tempore quas necessitatibus eius asperiores, laborum, repudiandae ratione aperiam,
                                    reprehenderit tenetur eaque. Fugiat et assumenda sunt maiores sit voluptates, natus,
                                    quaerat iusto quidem officia, obcaecati aliquam quasi. Quibusdam, minus!</p>
                            </div>

                            <!-- ====================================================================== -->

                            <!-- name  會員資料-->
                            <div class="row" v-if="orderby === 'myself'">
                                <span id="accomodatorId">1. </span>
                                <div class="col-md-4">
                                    <label for="fullName" class="form-label">會員全名 (name) </label>
                                    <input type="text" class="form-control" id="fullName" placeholder="" value=""
                                        v-model="orderbyselfname" required>
                                    <div class="invalid-feedback">
                                        務必填寫會員全名。
                                    </div>
                                </div>

                                <!-- email 會員資料-->
                                <div class="col-md-4">
                                    <label for="email" class="form-label">信箱 (Email)</label>
                                    <input type="email" class="form-control" id="email" placeholder="you@example.com"
                                        value="" v-model="orderbyselfemail" required>
                                    <div class="invalid-feedback">
                                        務必填寫email。
                                    </div>
                                </div>

                                <!-- phone 會員資料-->
                                <div class="col-md-4">
                                    <label for="phone" class="form-label">電話 (phone)</label>
                                    <input type="phone" class="form-control" id="phone" placeholder="" value=""
                                        v-model="orderbyselfphone" required>
                                    <div class="invalid-feedback">
                                        務必填寫連絡電話。
                                    </div>
                                </div>
                            </div>
                            <hr class="my-4">


                            <!-- ====================================================================== -->
                            <div class="row" v-for="value in accomodatorData" :key="value">

                                <span id="accomodatorId" v-if="orderby === 'myself'">{{ value.accomodatorId + 1 + "." }}
                                </span>
                                <span id="accomodatorId" v-if="orderby !== 'myself'">{{ value.accomodatorId + "." }} </span>

                                <!-- name  住宿者資料-->
                                <div class="col-md-4">
                                    <label for="fullName" class="form-label">住宿者全名 (name) </label>
                                    <input type="text" class="form-control" id="fullName" placeholder="" value=""
                                        v-model="value.AccomodatorfullName" required>
                                    <div class="invalid-feedback">
                                        務必填寫會員全名。
                                    </div>
                                </div>

                                <!-- email 住宿者資料-->
                                <div class="col-md-4">
                                    <label for="email" class="form-label">信箱 (Email)</label>
                                    <input type="email" class="form-control" id="email" placeholder="you@example.com"
                                        value="" v-model="value.Accomodatoremail" required>
                                    <div class="invalid-feedback">
                                        務必填寫email。
                                    </div>
                                </div>

                                <!-- phone 住宿者資料-->
                                <div class="col-md-4">
                                    <label for="phone" class="form-label">電話 (phone)</label>
                                    <input type="phone" class="form-control" id="phone" placeholder="" value=""
                                        v-model="value.Accomodatorphone" required>
                                    <div class="invalid-feedback">
                                        務必填寫連絡電話。
                                    </div>
                                </div>
                                <hr class="my-4">
                            </div>



                            <!-- ====================================================================== -->


                            <div class="col-md-12">
                                <label for="house_need" class="form-label">其他住宿需求 (need)</label>
                                <p><small>住宿方無法保證達成您的特殊要求－但將盡力為您安排。訂單完成後，您依然可隨時提出特殊要求！</small></p>
                                <input type="textarea row-10" class="form-control" id="house_need" placeholder="其他住宿需求..."
                                    value="">
                            </div>

                        </div>

                        <!--住宿 check box -->

                        <hr class="my-4">

                        <!-- button start -->
                        <button class="w-100 btn btn-secondary btn-lg" type="submit"
                            @click="validateAndGoToOrder2">下一步</button>
                        <!-- button end -->
                    </form>

                </div>
                <!-- form end-->

            </div>



            <!-- 預定打工 -->
        </main>
        <!-- 第一個form -->
        <!-- form end -->
    </div>
</template>
    
<script setup>

import { onMounted, ref, watch, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useOrderStore } from '@store/orderStore-memory.js';





//============動態改變是否為自己訂購============


const orderby = ref('myself');

const orderbyselfemail = ref('');
 const orderbyselfname = ref('');
 const orderbyselfphone =   ref('');
 const AccomodatorfullName = ref('');
 const Accomodatoremail = ref('');
 const Accomodatorphone = ref('');

//============動態改變須填寫的住宿者資訊============

const selectedAccomodator = ref('')
const accomodatorData = ref([])

const initializeAccomodatorData = function () {
    accomodatorData.value = [];
    if (orderby.value === 'myself') {
        for (let i = 0; i < selectedAccomodator.value - 1; i++) {
            accomodatorData.value.push({
                accomodatorId: i + 1,
                AccomodatorfullName: '',
                Accomodatoremail: '',
                Accomodatorphone: '',
            });
        }

    } else {
        for (let i = 0; i < selectedAccomodator.value; i++) {
            accomodatorData.value.push({
                accomodatorId: i + 1,
                AccomodatorfullName:'',
                Accomodatoremail: '',
                Accomodatorphone: '',
            });
        }
    }
}

// 監聽  selectedAccomodator 的變動
watch(selectedAccomodator, () => {
    initializeAccomodatorData();
});

// 更新住宿者資料
function updateAccomodatorData() {
    initializeAccomodatorData();
}




//============鎖定可選打工日期範圍============

// 使用 ref 創建可響應的變數
const selectedPeriod = ref('7');
const startDate = ref(new Date());
const endDate = ref(new Date());

// 計算屬性
const minStartDate = ref(new Date());
const maxStartDate = ref('');
const maxEndDate = ref('');

// 監聽 selectedPeriod 的變動
watch(selectedPeriod, (newValue) => {
    updateDateRange(newValue);
});

watch(startDate, (newValue) => {
    updateDateRange(selectedPeriod.value);
});

watch(endDate, (newValue) => {
    updateDateRange(selectedPeriod.value);
});

// 更新日期範圍的函數
function updateDateRange(period) {
    const currentDate = new Date();
    const newStartDate = new Date(startDate.value);
    const newEndDate = new Date(startDate.value);

    //結束打工日期
    newEndDate.setDate(newStartDate.getDate() + parseInt(period));
    //塞入值
    startDate.value = newStartDate.toISOString().split('T')[0];
    endDate.value = newEndDate.toISOString().split('T')[0];

    //最小開始日期(選擇當天)
    minStartDate.value = currentDate.toISOString().split('T')[0];
}




//============表單驗證============

const validateForm = () => {

    const form = document.querySelector('.needs-validation');
    return form.checkValidity();

};

const validateAndGoToOrder2 = () => {
    // 資料驗證結果
    const isFormValid = validateForm();

    // 使用 Bootstrap 驗證的結果
    const form = document.querySelector('.needs-validation');
    if (isFormValid && form.checkValidity()) {
        goToOrder2();
    }
};

const validation = () => {
    // 'use strict'
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        });
};

//============搜尋會員資料============

import VueCookies from 'vue-cookies';
import axios from 'axios';

const details = reactive({})
const getuserid =
    () => {
        const sessionToken = VueCookies.get('sessionToken');
        const userid = String(sessionToken).substring(32, sessionToken.length);
        return userid
    }

const API_URL = 'http://localhost:8080/order/' + getuserid();

const loadDetail = async () => {
    const response = await axios.get(API_URL);
    Object.assign(details, response.data);
    console.log(details);
    orderbyselfname.value = details.name
    orderbyselfemail.value = details.email
    orderbyselfphone.value = details.phone
}


onMounted(async () => {
    try {
        // 在DOM准备好时执行渲染
        validation();
        updateDateRange(selectedPeriod.value);
        updateAccomodatorData();
        await loadDetail();
    } catch (error) {
        console.error('An error occurred in onMounted:', error);
    }
});






//============路由控制============


const router = useRouter()


const orderStore = useOrderStore();


watch(accomodatorData, (newValue) => {
    accomodatorData.value = newValue
});


async function goToOrder2() {
    try {

        const dataForOrder2 = {
            username: details.name,
            useremail: details.email,
            userphone: details.phone,
            selectedAccomodator: selectedAccomodator.value,
            selectedPeriod: selectedPeriod.value,
            startDate: startDate.value,
            endDate: endDate.value,
            orderby: orderby.value,
            accomodatorData: accomodatorData.value,
            orderbyselfname: orderbyselfname.value,
            orderbyselfemail: orderbyselfemail.value,
            orderbyselfphone: orderbyselfphone.value
        };

        // 使用 Pinia store 设置数据
        orderStore.setOrderData(dataForOrder2);

        // 使用路由导航到 Order2 组件
        await router.push({
            name: 'Order2',
        });
    } catch (error) {
        console.error('An error occurred in goToOrder2:', error);
    }
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
    content: '\f111';
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