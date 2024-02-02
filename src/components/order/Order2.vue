<template>
    <!-- form start -->

    <div class="container " >
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
                                            <h5 class="mb-0"><span class="text-primary font-weight-bold">訂購日期:{{
                                                dataForOrder2.orderDate }} </span></h5>

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
                                        v-show="dataForOrder2.orderby == 'myself'">
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

                                    <li class="list-group-item d-flex justify-content-between lh-sm"
                                        v-if="dataForOrder2.needs != ''">
                                        <div>
                                            <h6 class="my-0">住宿需求</h6>
                                            <small class="text-muted">needs</small>
                                        </div>
                                        <div class="margin-left col-md-6 col-8"> <!-- 將這個 div 加入 ml-auto 類別 -->
                                            <div class="primary">{{ dataForOrder2.needs }}</div>
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
                                <div class="mb-4 col-md-4 " v-for="(value, key) in  dataForOrder2.selectedRooms" :key="key"
                                    v-show="value > 0">
                                    <ul class="list-group col-12">
                                        <li class="list-group-item d-flex justify-content-between lh-sm">
                                            <div>
                                                <h6 class="my-0">房號</h6>
                                                <small class="text-muted">houseID</small>
                                            </div>
                                            <span class="text-muted">{{ key }}</span>
                                        </li>
                                        <li class="list-group-item d-flex justify-content-between lh-sm">
                                            <div>
                                                <h6 class="my-0">房間</h6>
                                                <small class="text-muted">house name</small>
                                            </div>
                                            <span class="text-muted margin-left btn btn-primary" @click="showRoom(key)"> {{
                                                housedetails[key] ? housedetails[key].name : 'N/A' }}<br>(查看詳情)</span>
                                        </li>
                                        <li class="list-group-item d-flex justify-content-between lh-sm">
                                            <div>
                                                <h6 class="my-0">容納人數</h6>
                                                <small class="text-muted">house capacity</small>
                                            </div>
                                            <span class="text-muted margin-left">{{ housedetails[key] ?
                                                housedetails[key].beds : 'N/A' }} 人</span>
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
                        <button class="w-50 btn change btn-primary btn-lg" type="button" @click="goToOrder1()">重新選擇</button>
                        <button class="w-50 btn btn-secondary btn-lg" type="button" @click="goToOrder3()">確認報名</button>
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

import { onMounted, ref, reactive, onActivated } from 'vue';

import { useRouter } from 'vue-router';

import axios from 'axios';

const router = useRouter();

const dataForOrder2 = ref([]);

const roomDetail = ref([]);


const orderdata = ref({
    "userid": "",
    "status": "待房東確認",
    "notes": "",
    "needs": "",
    "createdAt": new Date().toISOString(),
    "updatedAt": new Date().toISOString(),
    "numbers": 0,
    "startDate": "",
    "endDate": "",
    "isCancelled": 0,
    "isRefunded": 0,
    "isUserAttend": 0,
    "businessId": "",
    "invoiceDate": "",
    "invoiceNumber": ""
})

const orderAndWorkHouse = ref({

    "orderid": 0,
    "workhouseid": 0

})


const orderAccommodator = ref(

    {
        "orderid": 0,
        "name": "",
        "phone": "",
        "email": ""
    }

)




//============獲取order1資料============

import { useOrderStore } from '@store/orderStore-memory.js';
import Swal from 'sweetalert2';


const orderStore = useOrderStore();

const loaddata = () => {
    // 从 Pinia store 获取数据
    dataForOrder2.value = orderStore.orderData;
    console.log(dataForOrder2.value)
    roomDetail.value = dataForOrder2.value.selectedRooms

    orderdata.value = {
        "userid": dataForOrder2.value.userid,
        "status": "待房東確認",
        "notes": "",
        "needs": dataForOrder2.value.needs,
        "createdAt": new Date().toISOString(),
        "updatedAt": new Date().toISOString(),
        "numbers": dataForOrder2.value.selectedAccomodator,
        "startDate": dataForOrder2.value.startDate,
        "endDate": dataForOrder2.value.endDate,
        "isCancelled": 0,
        "isRefunded": 0,
        "isUserAttend": 0,
        "businessId": "",
        "invoiceDate": new Date().toISOString(),
        "invoiceNumber": ""
    }

    console.log(orderdata.value)

}

//============查詢房屋資料============


const housedetails = reactive({});

const showDetails = async () => {
    // 遍歷 roomDetail
    for (const key in roomDetail.value) {
        const value = roomDetail.value[key];


        // 檢查值是否非空
        if (value) {
            // 對具有非空值的每個鍵發送請求
            const House_API_URL = `${import.meta.env.VITE_APP_API_URL}/api/house/find`;

            try {
                const response = await axios.get(House_API_URL, { params: { houseId: key } });
                // 使用鍵更新 housedetails 中的響應數據
                housedetails[key] = response.data;
            } catch (error) {
                console.error(`獲取鍵 ${key} 的數據時發生錯誤：`, error);
            }
        }
    }
    console.log('收到的房屋詳細信息：', housedetails);

}


//============獲取房間工作關聯資料============


const workHouseDetail = reactive({});

const showWorkHouse = async (houseid) => {

    const WorkHouse_API_URL = `${import.meta.env.VITE_APP_API_URL}/order/workhouse/` + houseid
    const response = await axios.get(WorkHouse_API_URL)
    console.log(response.data)

    workHouseDetail.value = response.data


}


//============alert視窗控制============


const showRoom = function (key) {

    Swal.fire({
        title: ` ${housedetails[key].houseType} - ${housedetails[key] ? housedetails[key].name : 'N/A'}`,
        html: ` 
        <table class="table">
        <tr>
        <td ><div>描述:${housedetails[key].description}   </div> </td>
        </tr>
        <tr>
        <td class="align-middle col-8"><div>地址:${housedetails[key].postCode}${housedetails[key].city}-${housedetails[key].address}</div> </td>
        </tr>
        <tr>
            <td class="align-middle col-4"><div>容納人數:${housedetails[key].beds}人 </div> </td>
        </tr>
        <tr>
        <td>
        <div>
            <div> 房間設備:</div>
            <div>
                ${housedetails[key].hasWifi == 1 ? '<span><i class="fa-solid fa-wifi text-muted">無線上網&nbsp</i></span>' : ''}
                ${housedetails[key].hasTV == 1 ? '<span><i class="fa-solid fa-tv text-muted">電視&nbsp</i></span>' : ''}
                ${housedetails[key].hasPool == 1 ? '<span><i class="fa-solid fa-person-swimming text-muted">游泳池&nbsp</i></span>' : ''}
                ${housedetails[key].hasGym == 1 ? '<span><i class="fa-solid fa-dumbbell text-muted">健身房&nbsp</i></span>' : ''}
                ${housedetails[key].hasKitchen == 1 ? '<span><i class="fa-solid fa-fire-burner text-muted">廚房&nbsp</i></span>' : ''}
                ${housedetails[key].hasLaundry == 1 ? '<span><i class="fa-solid fa-shirt text-muted">洗衣房&nbsp</i></span>' : ''}
                ${housedetails[key].hasParkingLot == 1 ? '<span><i class="fa-solid fa-square-parking text-muted">停車位&nbsp</i></span>' : ''}
                ${housedetails[key].hasPersonalSpace == 1 ? '<span><i class="fa-solid fa-person text-muted">個人空間&nbsp</i></span>' : ''}
                ${housedetails[key].hasAirconditioner == 1 ? '<span><i class="fa-solid  fa-fan text-muted"> 空調&nbsp</i></span>' : ''}
                ${housedetails[key].hasWifi == 0 && housedetails[key].hasTV == 0 && housedetails[key].hasPool == 0
                && housedetails[key].hasGym == 0 && housedetails[key].hasKitchen == 0 && housedetails[key].hasLaundry == 0
                && housedetails[key].hasParkingLot == 0 && housedetails[key].hasPersonalSpace == 0 && housedetails[key].hasAirconditioner == 0 ?
                '<span class= "text-muted">無&nbsp</span>' : ''}
              
        </div>
        </td>
        </tr>

        </table>`,
        // imageUrl: "https://unsplash.it/400/200",
        imageUrl: `data:image/${housedetails[key].housePhotos[0].contentType};base64,${housedetails[key].housePhotos[0].photo}`,
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image",
        confirmButtonColor: '#ffc107',
        confirmButtonText: '確認',
    });



}


onMounted(() => {
    window.scrollTo({top: 0, behavior :'smooth'});
    loaddata();
    showDetails();
});

onActivated(() => {
    loaddata();
    showDetails();
});



/** 創建訂單 */

const OrderCreate_API_URL = `${import.meta.env.VITE_APP_API_URL}/order/create`;

const goToOrder3 = async () => {

    const orderResponse = await axios.post(OrderCreate_API_URL, orderdata.value);

    const houseValues = Object.values(housedetails);

    for (const house of houseValues) {
        console.log(house.houseid)
        await showWorkHouse(house.houseid);
        workHouseDetail.value.forEach(async (element) => {

            const OrderWorkHouse_API_URL = `${import.meta.env.VITE_APP_API_URL}/order/create/orderworkhouse`;
            if (element.workid == dataForOrder2.value.workid) {
                orderAndWorkHouse.value = {
                    "orderid": orderResponse.data.orderid,
                    "workhouseid": element.id
                }
                await axios.post(OrderWorkHouse_API_URL, orderAndWorkHouse.value)
            }
        })
    };

    const AccommodatorCreate_API_URL = `${import.meta.env.VITE_APP_API_URL}/order/create/accommodator`;
    dataForOrder2.value.accomodatorData.forEach(async (element) => {
        orderAccommodator.value = {
        "orderid": orderResponse.data.orderid,
        "name": element.AccomodatorfullName,
        "phone": element.Accomodatorphone,
        "email": element.Accomodatoremail
        }
       await axios.post(AccommodatorCreate_API_URL, orderAccommodator.value) 
    });

    if(dataForOrder2.value.orderby == 'myself'){

        orderAccommodator.value = {
        "orderid": orderResponse.data.orderid,
        "name": dataForOrder2.value.orderbyselfname,
        "phone": dataForOrder2.value.orderbyselfphone,
        "email": dataForOrder2.value.orderbyselfemail
        }
      await axios.post(AccommodatorCreate_API_URL, orderAccommodator.value)
    }

    if (orderResponse) {
        router.push(
            '/order/order3')
    }
}

const goToOrder1 = function () {
    router.push(
        '/order/order1'
    )
}

onMounted( () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
})




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