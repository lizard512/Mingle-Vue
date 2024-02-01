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
                                            <h5 class="mb-0"><span class="text-primary font-weight-bold">訂購日期:{{ orderDate
                                            }}</span></h5>
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
                    <h3 class="justify-content-between align-items-center  text-center mb-3 text-secondary">
                        您的資料
                    </h3>

                    <form class="needs-validation" novalidate>

                        <!-- 基本資料 -->
                        <div class="row g-3"
                            style="border: 1px solid wheat; padding: 20px; border-radius: 10px; margin: 10px;">
                            <h6 class="mb-3 text-secondary">請確認會員資料，若需修改，請至個人中心。</h6>
                            <!-- name  自動帶入會員資料-->
                            <div class="col-sm-4">
                                <label for="fullName" class="form-label" @click="handleClick">會員全名 (name) </label>

                                <input type="text" class="form-control" id="fullName" placeholder=""
                                    v-model="userdetails.name" required disabled>
                                <div class="invalid-feedback">
                                    務必填寫會員全名。
                                </div>
                            </div>

                            <!-- email 自動帶入會員資料-->
                            <div class="col-sm-4">
                                <label for="email" class="form-label">信箱 (Email)</label>
                                <input type="email" class="form-control" id="email" placeholder="you@example.com" value=""
                                    v-model="userdetails.email" required disabled>
                                <div class="invalid-feedback">
                                    務必填寫email。
                                </div>
                            </div>

                            <div class="col-md-4">
                                <label for="phone" class="form-label">電話 (phone)</label>
                                <input type="phone" class="form-control" id="phone" placeholder="" value=""
                                    v-model="userdetails.phone" required disabled>
                                <div class="invalid-feedback">
                                    務必填寫連絡電話。
                                </div>
                            </div>



                            <hr class="my-4">

                            <h6 class="mb-3">您為誰預定呢? </h6>
                            <div class="my-3">
                                <span class="form-check">
                                    <input  name="orderby" type="radio" class="form-check-input" checked
                                        v-model="orderby" value="myself" @change="updateAccomodatorData" required>
                                    <label class="form-check-label" for="myself" value="myself">我為自己預定</label>
                                </span>
                                <div class="form-check">
                                    <input  name="orderby" type="radio" class="form-check-input"
                                        v-model="orderby" value="other" @change="updateAccomodatorData" required>
                                    <label class="form-check-label" for="other" value="other">幫別人預定</label>
                                </div>
                            </div>
                        </div>
                        <!-- 基本資料 -->

                        <br>
                        <br>
                        <h3 class="justify-content-between align-items-center  text-center mb-3  text-secondary">
                            預定打工
                        </h3>

                        <!--打工項目 check box -->
                        <div class="row g-3"
                            style="border: 1px solid wheat; padding: 20px; border-radius: 10px; margin: 10px;">

                            <!-- 自動產出 -->

                            <h4 class="mb-3">打工項目: {{ workdetail.worktype }} - {{ workdetail.name }} </h4>
                            <div class="col-md-12">
                                <div>工作地址 ： </div>
                                <div>{{ workdetail.address }} </div>
                                <div>工作內容 : </div>
                                <div>{{ workdetail.description }} </div>

                            </div>

                            <hr class="my-4">


                            <h4 class="mb-3">打工條件 </h4>
                            <div>休假時間：{{ workdetail.vacation }}</div>
                            <div>年齡限制：{{ workdetail.ageRestriction }}</div>
                            <div>性別限制：{{ workdetail.genderRestriction }}</div>
                            <div>學歷限制：{{ workdetail.educationRestriction }}</div>
                            <div>經驗限制：{{ workdetail.experienceRestriction }}</div>
                            <div>語言限制：{{ workdetail.languageRestriction }}</div>
                            <div>證照限制：{{ workdetail.licenseRestriction }}</div>



                            <hr class="my-4">
                            <h4 class="mb-3">日期與人數 </h4>
                            <div>打工日期：</div>
                            <div>{{ String(workdetail.startDate).substring(0, 10) }} ~ {{
                                String(workdetail.endDate).substring(0, 10) }}</div>
                            <div>最低工作區間：</div>
                            <div>{{ workdetail.minPeriod }}天</div>
                            <div>上限人數：</div>
                            <div>{{ workdetail.maxAttendance }}人</div>
                            <div>已報名人數：</div>
                            <div>{{ workdetail.attendance }}人</div>

                            <h6 class="mb-3 text-secondary">請選擇報名人數、日期 </h6>

                            <div class="col-md-3">
                                <label for="work_numbers" class="form-label">報名人數 ( applicants) </label>
                                <select class="form-select" id="work_numbers" v-model="selectedAccomodator"
                                    @change="updateAccomodatorData" required>
                                    <option value="">Choose...</option>
                                    <option v-for="number in open" :key="number" :value="number">{{
                                        number }}
                                    </option>
                                </select>
                                <div class="invalid-feedback">
                                    請選擇打工人數。
                                </div>
                            </div>

                            <div class="col-md-3" :class="{ 'has-error': haserror }">
                                <label for="work_period" class="form-label">打工區間 (work period)</label>
                                <select class=" col-12 select-form" id="work_period" v-model="selectedPeriod"
                                    @change="updateDateRange" required>
                                    <option value="">Choose...</option>
                                    <option v-for="period in maxPeriod.length" :key="period" :value="period"
                                        v-show="period >= workdetail.minPeriod">{{ period }}
                                    </option>
                                </select>

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
                                    v-model="endDate" value="" required disabled />

                            </div>
                            <div id="error-message" class="text-secondary text-center date-error"></div>



                        </div>

                        <!--打工 check box -->



                        <br>
                        <br>
                        <h3 class="justify-content-between align-items-center  text-center mb-3  text-secondary">
                            預定住宿
                        </h3>


                        <!--住宿 check box -->
                        <div class="row g-3"
                            style="border: 1px solid wheat; padding: 20px; border-radius: 10px; margin: 10px;">

                            <table class="table">
                                <thead class="table-secondary ">
                                    <tr>
                                        <th scope="col">房型介紹 (house)</th>
                                        <th scope="col">房間照片 (photo) </th>
                                        <th scope="col">容納人數 (beds) </th>
                                        <th scope="col">選擇間數 (room) </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="house_type in housedetail" :key="house_type.houseid">
                                        <td class="align-middle col-md-4">
                                            <h6>房號：{{ house_type.houseid }}</h6>
                                            <h6>{{ house_type.houseType }}-{{ house_type.name }}</h6>
                                            <div>地址:{{ house_type.postCode }}{{ house_type.city }}-{{ house_type.address }}
                                            </div>
                                            <div>
                                                <div>
                                                    描述:{{ house_type.description }}

                                                </div>
                                                <div> 房間設備:</div>
                                                <div><span v-if="house_type.hasWifi == true"><i
                                                            class="fa-solid fa-wifi text-muted">無線上網&nbsp</i> </span>
                                                    <span v-if="house_type.hasTV == true"><i
                                                            class="fa-solid fa-tv text-muted">電視、</i> </span>
                                                    <span v-if="house_type.hasPool == true"><i
                                                            class="fa-solid fa-person-swimming text-muted">游泳池&nbsp</i>
                                                    </span>
                                                    <span v-if="house_type.hasGym == true"><i
                                                            class="fa-solid fa-dumbbell text-muted">健身房&nbsp</i>
                                                    </span>
                                                    <span v-if="house_type.hasKitchen == true"><i
                                                            class="fa-solid fa-fire-burner text-muted">廚房&nbsp</i>
                                                    </span>
                                                    <span v-if="house_type.hasLaundry == true"><i
                                                            class="fa-solid fa-shirt text-muted">洗衣房&nbsp</i>
                                                    </span>
                                                    <span v-if="house_type.hasParkingLot == true"><i
                                                            class="fa-solid fa-square-parking text-muted">停車位&nbsp</i>
                                                    </span>
                                                    <span v-if="house_type.hasPersonalSpace == true"><i
                                                            class="fa-solid fa-person text-muted">個人空間&nbsp</i>
                                                    </span>
                                                    <span v-if="house_type.hasAirconditioner == true"><i
                                                            class="fa-solid  fa-fan text-muted">空調&nbsp</i>
                                                    </span>
                                                    <span v-if="nofacilates(house_type)" class="text-muted">無&nbsp
                                                    </span>

                                                </div>
                                            </div>
                                        </td>
                                        <td class="align-middle col-md-2">
                                            <div v-for="item in housephotodetail" :key="item">
                                                    <img v-show="item.id == house_type.houseid"  v-for=" photo in item.housephoto" :key="photo" :src="photo" class="img-fluid img-center" :alt="item.id">
                                                </div>
                                        </td>
                                        <td class=" align-middle col-md-1 text-center">{{ house_type.beds }}</td>
                                        <td class=" align-middle  col-md-1"> <select class="select-form col-12"
                                                v-model="selectedRooms[house_type.houseid]" @change="roomValidate()"
                                                :class="{ 'is-invalid': isInvalid(), 'is-valid': isValid() }">
                                                <option value="0">0</option>
                                                <option id="room" v-for="room in house_type.beds" :key="room" :value="room">
                                                    {{ room }}</option>
                                            </select>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div v-if="totalRooms() > selectedAccomodator" class="text-danger text-end text-secondary">
                                錯誤訊息：所選房間間數大於報名人數，請重新選擇。
                            </div>
                            <!-- <div v-if="totalRooms() == 0" class="text-danger ">
                                                請選擇間數。
                                            </div> -->

                            <div class="room-select-error  text-secondary text-end">

                            </div>

                            <!-- ====================================================================== -->

                            <h6 class="mb-3 text-secondary">請填寫住宿者資訊</h6>

                            <!-- name  會員資料-->
                            <div class="row" v-if="orderby === 'myself'">
                                <span >1. </span>
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

                                <span v-if="orderby === 'myself'">{{ value.accomodatorId + 1 + "." }}
                                </span>
                                <span v-if="orderby !== 'myself'">{{ value.accomodatorId + "." }} </span>

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
                                    v-model="needs" novalidate>
                            </div>

                        </div>

                        <!--住宿 check box -->

                        <hr class="my-4">

                        <h4 id="error-response" class="text-secondary text-center"></h4>

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


const has = ref('0')
const nothas = ref('1')


//============動態改變是否為自己訂購============


const orderby = ref('myself');

const orderbyselfemail = ref('');
const orderbyselfname = ref('');
const orderbyselfphone = ref('');


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
                AccomodatorfullName: '',
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
const selectedPeriod = ref('');
const orderDate = ref('');
const minDate = ref('');
const maxDate = ref('');
const startDate = ref('');
const endDate = ref('');
const haserror = ref(false);
const rangeStart = new Date();
const rangeEnd = new Date();
const maxPeriod = ref(0);
const selectedRooms = ref([]);
const needs = ref('');
const userid = ref('');


// 計算屬性
const minStartDate = ref('');
const maxStartDate = ref('');

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
    const newStartDate = new Date(startDate.value);
    const newEndDate = new Date(startDate.value);

    //塞入新選的值

    newStartDate.setHours(newStartDate.getHours() + 8);
    newEndDate.setHours(newEndDate.getHours() - 8);
    startDate.value = newStartDate.toISOString().split('T')[0];
    minDate.value = minDate.value.split('T')[0];
    maxDate.value = maxDate.value.split('T')[0];


    //結束打工日期

    newEndDate.setDate(newStartDate.getDate() + parseInt(period));

    const minDateObj = new Date(minDate.value);
    const maxDateObj = new Date(maxDate.value);


    // 生成可選日期範圍
    const selectableDates = generateDateRange(minDateObj, maxDateObj);

    // 檢查新的結束日期是否在可選日期範圍內
    if (selectableDates.includes(newEndDate.toISOString().split('T')[0])) {

        // 檢查日期差異是否足夠
        const periodDates = generateDateRange(newStartDate, newEndDate);

        if (periodDates.length >= parseInt(period)) {
            endDate.value = newEndDate.toISOString().split('T')[0];
            var errorMessageElement = document.getElementById('error-message');
            errorMessageElement.innerText = '';
            haserror.value = false;
        } else {
            // 取得錯誤訊息的 HTML 元素
            var errorMessageElement = document.getElementById('error-message');
            // 設置錯誤訊息
            errorMessageElement.innerText = '日期範圍不足，請重新選擇日期範圍。';
            haserror.value = true;
        }
    } else {
        endDate.value = maxDate.value.split('T')[0];

        // 取得錯誤訊息的 HTML 元素
        var errorMessageElement = document.getElementById('error-message');
        // 設置錯誤訊息
        errorMessageElement.innerText = `新的結束日期${newEndDate.toISOString().split('T')[0]}不在可選的結束日期${endDate.value}範圍內，請重新選擇區間或開始日期。`;
        haserror.value = true;
    }

    // 最小開始日期(選擇當天)
    minStartDate.value = minDate.value.split('T')[0];
    maxStartDate.value = maxDate.value.split('T')[0];

}


// 生成日期範圍的函數
function generateDateRange(start, end) {
    const dates = [];
    let currentDate = new Date(start);

    while (currentDate <= end) {
        dates.push(currentDate.toISOString().split('T')[0]);
        currentDate.setDate(currentDate.getDate() + 1);
    }

    return dates;
}


//============表單驗證============

const validateForm = () => {
    const form = document.querySelector('.needs-validation');
    return form.checkValidity();

};

const validateAndGoToOrder2 = (event) => {

    // 阻止表单的默认提交行为
    event.preventDefault();
    // 資料驗證結果
    const isFormValid = validateForm();
    // 使用 Bootstrap 驗證的結果
    const form = document.querySelector('.needs-validation');

    roomValidate();
    // 自定义验证逻辑，假設存在带有 text-danger 类的元素
    const customValidationFailed = document.querySelector('.text-danger');
    const customValidationFailed2 = document.querySelector('.has-error');
    const customValidationFailed3 = document.querySelector('.room-select-error');

    // if(totalRooms() == 0){
    //     var roomSelectError = form.querySelector('.room-select-error');
    //     roomSelectError.innerText = '請選擇間數xxxx。';
    // }else{
    //     var roomSelectError = form.querySelector('.room-select-error');
    //     roomSelectError.innerText = '';
    // }

    if (isFormValid && form.checkValidity() && !customValidationFailed && !customValidationFailed2 && customValidationFailed3.innerHTML == '') {

        goToOrder2();

    } else {
        console.log(totalRooms())


        // 取得錯誤訊息的 HTML 元素
        var error = document.getElementById('error-response');
        // 設置錯誤訊息
        error.innerText = '請解決上方所有紅色問題訊息。';
        // 停留在原本的页面
        return;

    }
};


const validation = () => {
    // Fetch all the buttons inside forms with the 'needs-validation' class
    var buttons = document.querySelectorAll('.needs-validation button[type="submit"]');

    // Loop over the buttons and prevent submission
    buttons.forEach(function (button) {
        button.addEventListener('click', function (event) {
            // Find the associated form
            var form = button.closest('.needs-validation');

            if (form && !form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }




            if (form) {
                form.classList.add('was-validated');
            }
        }, false);
    });
};


const isInvalid = () => totalRooms() > selectedAccomodator.value;

const isValid = () => totalRooms() <= selectedAccomodator.value && totalRooms() > 0;


//============房間驗證============

const roomValidate = function () {
    // 获取当前选中的房间数
    const selectedRoomCount = totalRooms();

    // 获取当前表单元素
    const form = document.querySelector('.needs-validation');

    // 获取错误信息的 HTML 元素
    const roomSelectError = form.querySelector('.room-select-error');
    const roomSelectElement = form.querySelector('#room'); // 通过ID获取<select>

    if (selectedRoomCount == 0) {

        roomSelectError.innerText = '錯誤訊息：請選擇間數。';
        roomSelectElement.classList.add('is-invalid'); // 添加 is-invalid 类


    } else {
        roomSelectError.innerText = null;
        roomSelectElement.classList.remove('is-invalid'); // 移除 is-invalid 类
        roomSelectElement.classList.add('is-valid'); // 添加 is-valid 类

    }
}



import axios from 'axios';

//===========取得使用者ID============

const getuserid = () => {
        const sessionToken = localStorage.getItem('sessionToken');
        userid.value = String(sessionToken).substring(32, sessionToken.length);
        return userid.value
}

const userdetails = reactive({})


const User_API_URL = `${import.meta.env.VITE_APP_API_URL}/order/` + getuserid();

const loaduserDetail = async () => {
    const response = await axios.get(User_API_URL);
    Object.assign(userdetails, response.data);

    orderbyselfname.value = userdetails.name
    orderbyselfemail.value = userdetails.email
    orderbyselfphone.value = userdetails.phone
}



//============查詢工作、房間資料============


const workdetail = reactive({})

const housedetail = reactive({})


const Work_API_URL = `${import.meta.env.VITE_APP_API_URL}/order/` + 3;

const WorkHouse_API_URL = `${import.meta.env.VITE_APP_API_URL}/order/house/` + 3;

const loadworkDetail = async () => {
    const workResponse = await axios.post(Work_API_URL);
    const workHouseResponse = await axios.get(WorkHouse_API_URL);
    Object.assign(workdetail, workResponse.data);
    Object.assign(housedetail, workHouseResponse.data);
    console.log(housedetail)


    orderDate.value = new Date().toISOString().split('T')[0];
    startDate.value = workdetail.startDate

    endDate.value = workdetail.endDate
    minDate.value = workdetail.startDate
    maxDate.value = workdetail.endDate

    selectedPeriod.value = workdetail.minPeriod
    rangeStart.value = new Date(workdetail.startDate)
    rangeEnd.value = new Date(workdetail.endDate)
    maxPeriod.value = generateDateRange(rangeStart.value, rangeEnd.value)

}



const totalRooms = function () {
    return Object.values(selectedRooms.value).reduce((total, room) => {
        return total + parseInt(room);
    }, 0);
};

//============查詢房間照片============
const housephotodetail = ref([])

const showImage = async function (houseid) {
    const HousePhoto_API_URL = `${import.meta.env.VITE_APP_API_URL}/order/photo/` + houseid;
    try {
        const photoResponse = await axios.post(HousePhoto_API_URL);
        if (photoResponse.data !== '') {
            // 将新的 housephoto 數據添加到 housephoto 中
            housephotodetail.value.push({
                id: houseid,
                housephoto: photoResponse.data
            });
            console.log(housephotodetail.value);
            return housephotodetail.value;
        }
    } catch (error) {
        console.error('獲取圖片時出錯：', error);
    }
};

//============沒有設備============

const nofacilates = function (house_type) {

    if (house_type.hasParkingLot == false && house_type.hasPersonalSpace == false && house_type.hasAirconditioner == false && house_type.hasWifi == false && house_type.hasTV == false && house_type.hasGym == false && house_type.hasLaundry == false && house_type.hasPool == false && house_type.hasKitchen == false) {
        return true
    } else {
        return false
    }

}


//============初始============


const open = ref('')
onMounted(async () => {
    try {
        window.scrollTo({top: 0, behavior :'smooth'});
        validation();
        updateAccomodatorData();
        await loaduserDetail();
        await loadworkDetail();
        open.value = workdetail.maxAttendance - workdetail.attendance
        updateDateRange(selectedPeriod.value);
        for (const house_type in housedetail) {
            console.log(housedetail[house_type])
            showImage(housedetail[house_type].houseid)
        }
    }
    catch (error) {
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
            userid: userid.value,
            //報名日期
            orderDate: orderDate.value,
            //會員名稱
            username: userdetails.name,
            //會員email
            useremail: userdetails.email,
            //會員phone
            userphone: userdetails.phone,
            //報名人數
            selectedAccomodator: selectedAccomodator.value,
            //選擇待的區間
            selectedPeriod: selectedPeriod.value,
            //報名者開始打工的日期
            startDate: startDate.value,
            //報名者結束打工的日期
            endDate: endDate.value,
            //會員是否為報名者
            orderby: orderby.value,
            //團體住宿者資料
            accomodatorData: accomodatorData.value,
            //報名者自己的資料
            orderbyselfname: orderbyselfname.value,
            orderbyselfemail: orderbyselfemail.value,
            orderbyselfphone: orderbyselfphone.value,
            //工作類型
            workid: workdetail.workid,
            worktype: workdetail.worktype,
            workname: workdetail.name,
            //房間間數
            totalRooms: totalRooms(),
            //每間房間數
            selectedRooms: selectedRooms.value,
            //房間照片
            housephotodetail: housephotodetail.value,
            //需求
            needs: needs.value

            



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
.select-form {

    background-image: none;
    border: 1px solid #E0E0E0;
    border-radius: 5px;
    height: 40px;
}

input:invalid {

    color: red !important;
}

.date-error {

    color: red !important;

}


.room-select-error {

    color: red !important;


}


.is-invalid {
    border: 1px solid red;
    border-color: red !important;
    display: inline-block;
    /* 顯示紅色驚嘆號 */
    font-size: 1.2em;
    /* 設定字型大小，根據需要調整 */
    margin-left: 5px;
    /* 設定圖示和元素之間的間距，根據需要調整 */
}

.is-valid {

    border-color: green !important;
    position: relative;
}

.is-valid::after {
    font-family: 'Font Awesome 5 Free';
    /* Font Awesome font family */
    content: '\f00c';
    /* Unicode Private Use Area code for checkmark */
    color: green;
    position: absolute;
    right: 10px;
    /* Adjust the position as needed */
    top: 50%;
    transform: translateY(-50%);
}

.has-error {
    border: 1px solid red;
    /* 或者其他你希望的樣式 */
    background-color: #FDD;
    /* 背景顏色也可以更改成你想要的 */
}


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


input:not([required]):valid {
    background-image: none;
    border: 1px solid #E0E0E0;
}
</style>