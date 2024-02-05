<template>
    <div class="container-fluid bg-white d-flex flex-column">
        <div class=" col-11 align-self-center ">
            <h3 class="my-5 text-center animate__animated animate__flipInX">工作管理</h3>
            <!-- main-list -->
            <table class="my-5 table table-striped table-hover align-middle text-center" v-show="isShowList">
                <thead class="table-dark">
                    <tr>
                        <th scope="col">No.</th>
                        <th scope="col">照片</th>
                        <th scope="col">打工類型</th>
                        <th scope="col">打工名稱</th>
                        <th scope="col">地區</th>
                        <th scope="col">開始日</th>
                        <th scope="col">結束日</th>
                        <th scope="col">上次修改</th>
                        <th scope="col">報名人數</th>
                        <th scope="col">狀態</th>
                        <th scope="col">管理</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody class="accordion align-middle animate__animated animate__fadeIn" id="accordion-main">
                    <!-- line -->
                    <tr>
                        <td>1</td>
                        <td><img class="rounded-3 work-photo" src="https://picsum.photos/150/150"></td>
                        <td class="text-info">演戲</td>
                        <td>開天窗部隊之在劫難逃</td>
                        <td>台北市</td>
                        <td>2024-01-28</td>
                        <td>2024-06-28</td>
                        <td>{{ modifiedDate }}</td>
                        <td>2/12</td>
                        <td class="text-danger">別急，還沒好</td>
                        <td><button type="button" class="btn btn-primary btn-sm" @click="enterModify">編輯</button> <button
                                type="button" class="btn btn-danger btn-sm">刪除</button></td>
                        <td><button class="accordion-button collapsed acco-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#toggle1" aria-expanded="false"></button></td>
                    </tr>
                    <!-- toggle-line -->
                    <tr>
                        <td class="p-0" colspan="12">
                            <div class="accordion-body collapse bg-light animate__animated animate__fadeIn" id="toggle1"
                                data-bs-parent="#accordion-main">
                                <div class="row">
                                    <div class="col-4 mx-5 my-3 detailed-ul text-start">
                                        <li class="m-2 fw-bold"><i class="fa-solid fa-briefcase me-2"></i>工作時間：<span
                                                class="ms-2 text-dark">爆肝吧</span>
                                        </li>
                                        <li class="m-2 fw-bold"><i class="fa-solid fa-champagne-glasses me-2"></i>休假：<span
                                                class="ms-2 text-dark">看你時數剩多少</span></li>
                                        <li class="m-2 fw-bold"><i class="fa-solid fa-star me-2"></i>福利：<span
                                                class="ms-2 text-dark">茶水、餐巾紙白瞟</span></li>
                                        <li class="m-2 fw-bold"><i class="fa-regular fa-calendar-check me-2"></i>最短工期：<span
                                                class="ms-2 text-dark">結訓前</span></li>
                                    </div>
                                    <div class="col-3 m-3 detailed-ul text-start">
                                        <ul class="detailed-ul text-start">
                                            <li class="m-2 fw-bold"><i class="fa-solid fa-user-clock me-2"></i>(限)年齡：<span
                                                    class="ms-2 text-dark">無</span></li>
                                            <li class="m-2 fw-bold"><i class="fa-solid fa-venus-mars me-2"></i>(限)性別：<span
                                                    class="ms-2 text-dark">無</span></li>
                                            <li class="m-2 fw-bold"><i class="fa-solid fa-language me-2"></i>(限)語言：<span
                                                    class="ms-2 text-dark">會寫就好</span></li>

                                        </ul>
                                    </div>
                                    <div class="col-3 m-3 detailed-ul text-start">
                                        <ul class="detailed-ul text-start">
                                            <li class="m-2 fw-bold"><i class="fa-solid fa-graduation-cap me-2"></i>教育程度：
                                                <span class="ms-2 text-dark">頂大頂碩</span>
                                            </li>
                                            <li class="m-2 fw-bold"><i class="fa-solid fa-briefcase me-2"></i>工作經驗：<span
                                                    class="ms-2 text-dark">新鮮的肝就好</span></li>
                                            <li class="m-2 fw-bold"><i class="fa-regular fa-address-card me-2"></i>證照：<span
                                                    class="ms-2 text-dark">無</span></li>
                                        </ul>
                                    </div>
                                </div>
                                <!-- note -->
                                <div class="row">
                                    <div class="col-4 mx-5 mb-3 detailed-ul text-start">
                                        <li class="m-2 fw-bold"><i class="fa-solid fa-note-sticky me-2"></i>備註：<span
                                                class="ms-2 text-dark">測試排版，資料都是假的</span>
                                        </li>
                                    </div>
                                </div>

                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td><img class="rounded-3 work-photo" src="https://picsum.photos/150/150"></td>
                        <td class="text-danger">詐騙</td>
                        <td>新春放炮</td>
                        <td>台北市</td>
                        <td>2024-01-28</td>
                        <td>2024-06-28</td>
                        <td>{{ modifiedDate }}</td>
                        <td>2/12</td>
                        <td class="text-danger">測試而已</td>
                        <td><button type="button" class="btn btn-primary btn-sm" @click="enterModify">編輯</button> <button
                                type="button" class="btn btn-danger btn-sm">刪除</button></td>
                        <td><button class="accordion-button collapsed acco-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#toggle2" aria-expanded="false"></button></td>
                    </tr>
                    <tr>
                        <td class="p-0" colspan="12">
                            <div class="accordion-body collapse bg-light animate__animated animate__fadeIn" id="toggle2"
                                data-bs-parent="#accordion-main">
                                <div class="row">
                                    <div class="col-4 mx-5 my-3 detailed-ul text-start">
                                        <li class="m-2 fw-bold"><i class="fa-solid fa-briefcase me-2"></i>工作時間：<span
                                                class="ms-2 text-dark">爆肝吧</span>
                                        </li>
                                        <li class="m-2 fw-bold"><i class="fa-solid fa-champagne-glasses me-2"></i>休假：<span
                                                class="ms-2 text-dark">看你時數剩多少</span></li>
                                        <li class="m-2 fw-bold"><i class="fa-solid fa-star me-2"></i>福利：<span
                                                class="ms-2 text-dark">茶水、餐巾紙白瞟</span></li>
                                        <li class="m-2 fw-bold"><i class="fa-regular fa-calendar-check me-2"></i>最短工期：<span
                                                class="ms-2 text-dark">結訓前</span></li>
                                    </div>
                                    <div class="col-3 m-3 detailed-ul text-start">
                                        <ul class="detailed-ul text-start">
                                            <li class="m-2 fw-bold"><i class="fa-solid fa-user-clock me-2"></i>(限)年齡：<span
                                                    class="ms-2 text-dark">無</span></li>
                                            <li class="m-2 fw-bold"><i class="fa-solid fa-venus-mars me-2"></i>(限)性別：<span
                                                    class="ms-2 text-dark">無</span></li>
                                            <li class="m-2 fw-bold"><i class="fa-solid fa-language me-2"></i>(限)語言：<span
                                                    class="ms-2 text-dark">會寫就好</span></li>

                                        </ul>
                                    </div>
                                    <div class="col-3 m-3 detailed-ul text-start">
                                        <ul class="detailed-ul text-start">
                                            <li class="m-2 fw-bold"><i class="fa-solid fa-graduation-cap me-2"></i>教育程度：
                                                <span class="ms-2 text-dark">頂大頂碩</span>
                                            </li>
                                            <li class="m-2 fw-bold"><i class="fa-solid fa-briefcase me-2"></i>工作經驗：<span
                                                    class="ms-2 text-dark">新鮮的肝就好</span></li>
                                            <li class="m-2 fw-bold"><i class="fa-regular fa-address-card me-2"></i>證照：<span
                                                    class="ms-2 text-dark">無</span></li>
                                        </ul>
                                    </div>
                                </div>
                                <!-- note -->
                                <div class="row">
                                    <div class="col-4 mx-5 mb-3 detailed-ul text-start">
                                        <li class="m-2 fw-bold"><i class="fa-solid fa-note-sticky me-2"></i>備註：<span
                                                class="ms-2 text-dark">測試排版，資料都是假的</span>
                                        </li>
                                    </div>
                                </div>

                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <!-- main-form -->
            <form class="p-4 animate__animated animate__fadeIn needs-validation" novalidate v-show="isShowModify">
                <!-- basic -->
                <h4 class="text-center mb-4 animate__animated animate__flipInX">基本資訊</h4>
                <div class="border border-danger border-3 rounded-3 m-3 p-3 animate__animated animate__fadeInUp">
                    <!--worktype & workname-->
                    <h5 class="text-dark mx-4 mt-3">打工基本資訊</h5>
                    <div class="row g-0 mx-3 my-5">
                        <div class="form-floating mx-3 col">
                            <select class="form-control" id="formWorktype" v-model="worktype" required>
                                <!-- <option selected disabled value="">Choose...</option> -->
                                <option v-for="item in worktypeList" :value="item">{{
                                    item }}
                                </option>
                            </select>
                            <label for="formWorktype">工作類型(必填)</label>
                            <div class="invalid-feedback">
                                請選取您的工作類型
                            </div>
                        </div>
                        <div class="form-floating mx-3 col">
                            <input type="text" class="form-control" id="formWorkname" placeholder="工作名稱"
                                v-model.trim="workname" required value="">
                            <label for="formWorkname">工作名稱(必填)</label>
                            <div class="invalid-feedback">
                                工作名稱為必填欄位
                            </div>
                        </div>
                    </div>
                    <!--workcity & workaddress -->
                    <div class="row g-0 mx-3 my-5">
                        <div class="form-floating mx-3 col-3">
                            <select class="form-control" id="formWorkcity" v-model="workcity" required>
                                <option selected disabled value=""></option>
                                <option v-for=" item  in  city " :value="item">{{ item }}</option>
                            </select>
                            <label for="formWorkcity">打工縣市(必填)</label>
                            <div class="invalid-feedback">
                                請選取您的打工縣市
                            </div>
                        </div>
                        <div class="form-floating mx-3 col">
                            <input type="text" class="form-control" id="formWorkaddress" placeholder="工作名稱"
                                v-model.trim="workaddress" required>
                            <label for="formWorkaddress">地址(必填)</label>
                            <div class="invalid-feedback">
                                請輸入您的打工地址
                            </div>
                        </div>
                    </div>
                    <!-- workperiod & attendance -->
                    <div class="row g-0 mx-3 my-5">
                        <div class="col-3 mx-3">
                            <span class="ms-2 work-period-title">打工期間(必填)</span>
                            <el-date-picker v-model="workperiod" type="daterange" start-placeholder="開始日期"
                                end-placeholder="結束日期" format="YYYY-MM-DD ddd" date-format="YYYY/MM/DD ddd" size="large"
                                :disabled-date="daterule" />
                        </div>
                        <div class="form-floating mx-4 my-2 col-4">
                            <input type="number" class="form-control" id="formWorkminperiod" placeholder="打工最短期間(天數)"
                                v-model="workminperiod" required>
                            <label for="formWorkminperiod">打工最短天數 (必填)</label>
                            <div class="invalid-feedback">
                                請點選打工最短期間(或輸入阿拉伯數字)
                            </div>
                        </div>
                        <div class="form-floating mx-3 my-2 col-4">
                            <input type="number" class="form-control" id="formWorkmaxattendance" placeholder="打工最小期間(天數)"
                                v-model="workmaxattendance" required>
                            <label for="formWorkminperiod">打工需求人數(必填)</label>
                            <div class="invalid-feedback">
                                請點選需求人數(或輸入阿拉伯數字)
                            </div>
                        </div>
                    </div>
                </div>
                <!-- work information -->
                <h4 class="text-center my-5 animate__animated animate__flipInX">打工時間、福利、工作內容</h4>
                <div class="border border-danger border-3 rounded-3 m-3 p-3 animate__animated animate__fadeInUp">
                    <h5 class="text-dark mx-4 mt-3">欄位請依照需求填寫</h5>
                    <!-- worktime & vacation -->
                    <div class="row g-0 mx-3 my-5">
                        <div class="form-floating mx-3 col">
                            <input type="text" class="form-control" id="formWorktime" placeholder="工作時間"
                                v-model.trim="worktime" required>
                            <label for="formWorktime">工作時間(必填)</label>
                            <div class="invalid-feedback">
                                請填寫工作時間
                            </div>
                        </div>
                        <div class="form-floating mx-3 col">
                            <input type="text" class="form-control" id="formWorkvacation" placeholder="休假制度"
                                v-model.trim="workvacation" required>
                            <label for="formWorkvacation">休假制度(必填)</label>
                            <div class="invalid-feedback">
                                請填寫休假制度
                            </div>
                        </div>
                    </div>
                    <!-- benefits -->
                    <div class="row g-0 mx-3 my-5">
                        <div class="form-floating mx-3 col">
                            <textarea class="form-control" id="formWorkbenefits" placeholder="福利制度"
                                v-model.trim="workbenefits"></textarea>
                            <label for="formWorkbenefits">福利制度</label>
                        </div>
                    </div>
                    <!-- description -->
                    <div class="row g-0 mx-3 my-5">
                        <div class="form-floating mx-3 col">
                            <textarea class="form-control" id="formWorkdescription" placeholder="工作內容"
                                v-model.trim="workdescription" required></textarea>
                            <label for="formWorkdescription">工作內容(必填)</label>
                            <div class="invalid-feedback">
                                請填寫工作內容
                            </div>
                        </div>
                    </div>
                </div>
                <!-- restriction information -->
                <h4 class="text-center my-5 animate__animated animate__flipInX">資格要求</h4>
                <div class="border border-danger border-3 rounded-3 m-3 p-3 animate__animated animate__fadeInUp">
                    <h5 class="text-dark mx-4 mt-3">填寫您希望的條件與門檻(非必填)</h5>
                    <!-- ageRestriction & genderRestriction -->
                    <div class="row g-0 mx-3 my-5">
                        <div class="form-floating mx-3 col">
                            <input type="text" class="form-control" id="formageRestriction" placeholder="年齡限制"
                                v-model.trim="ageRestriction">
                            <label for="formageRestriction">年齡限制</label>
                        </div>
                        <div class="form-floating mx-3 col">
                            <input type="text" class="form-control" id="formgenderRestriction" placeholder="性別要求"
                                v-model.trim="genderRestriction">
                            <label for="formgenderRestriction">性別要求</label>
                        </div>
                    </div>
                    <!-- educationRestriction & experienceRestriction -->
                    <div class="row g-0 mx-3 my-5">
                        <div class="form-floating mx-3 col">
                            <input type="text" class="form-control" id="formeducationRestriction" placeholder="學歷要求"
                                v-model.trim="educationRestriction">
                            <label for="formeducationRestriction">學歷要求</label>
                        </div>
                        <div class="form-floating mx-3 col">
                            <input type="text" class="form-control" id="formexperienceRestriction" placeholder="工作經驗"
                                v-model.trim="experienceRestriction">
                            <label for="formexperienceRestriction">工作經驗</label>
                        </div>
                    </div>
                    <!-- languageRestriction & licenseRestriction -->
                    <div class="row g-0 mx-3 my-5">
                        <div class="form-floating mx-3 col">
                            <input type="text" class="form-control" id="formlanguageRestriction" placeholder="語言要求"
                                v-model.trim="languageRestriction">
                            <label for="formlanguageRestriction">語言要求</label>
                        </div>
                        <div class="form-floating mx-3 col">
                            <input type="text" class="form-control" id="formlicenseRestriction" placeholder="證照要求"
                                v-model.trim="licenseRestriction">
                            <label for="formlicenseRestriction">證照要求</label>
                        </div>
                    </div>
                </div>
                <!-- upload -->
                <h4 class="text-center my-5 animate__animated animate__flipInX">上傳圖片</h4>
                <div class="border border-danger border-3 rounded-3 m-3 p-3 animate__animated animate__fadeInUp">
                    <h5 class="text-dark mx-4 mt-3">為您的工作上傳精彩照片(最多六張)</h5>
                    <div class="row g-0 mx-3 my-5">
                        <el-upload v-model:file-list="fileList" class="upload-demo" action="#" :on-change="addToTotal"
                            :show-file-list="false" list-type="picture" :auto-upload="false" multiple drag>
                            <el-button type="primary">Click to upload</el-button>
                            <template #tip>
                                <div class="el-upload__tip">
                                    jpg/png files with a size less than 500kb
                                </div>
                            </template>
                        </el-upload>
                    </div>
                    <!-- preview -->
                    <div class="row g-0 mx-3 my-5">
                        <div v-for="item in totalList" class="col d-flex justify-content-center">
                            <figcaption class="position-relative">
                                <i class="fa-solid fa-xmark fa-2xl position-absolute xmark" @click="deletePhoto(item)"></i>
                                <img :src="item"
                                    class="border border-3 border-primary rounded previewPhoto animate__animated animate__fadeIn">
                            </figcaption>
                        </div>
                    </div>
                </div>
                <!-- bindHouse -->
                <h4 class="text-center my-5 animate__animated animate__flipInX">綁定房源</h4>
                <div class="border border-danger border-3 rounded-3 m-3 p-3  animate__animated animate__fadeInUp">
                    <h5 class="text-dark mx-4 mt-3">設定此份工作綁定的房源(需綁定至少一項才可上架工作)</h5>
                    <!-- table -->
                    <table class="my-5 table table-striped table-hover align-middle text-center">
                        <thead class="table-dark">
                            <tr>
                                <th>房屋資訊</th>
                                <th>房屋圖片</th>
                                <th>是否綁定</th>
                            </tr>
                        </thead>
                        <tbody>
                            <template v-for="house in houseDetail">
                                <tr>
                                    <td class="align-middle col-5">
                                        <h6>{{ house.houseType }}-{{ house.name }}</h6>
                                        <div>地址:{{ house.postCode }}{{ house.city }}-{{ house.address }}
                                        </div>
                                        <div>
                                            <div>
                                                描述:{{ house.description }}

                                            </div>
                                            <div> 房間設備:</div>
                                            <div><span v-if="house.hasWifi == true"><i
                                                        class="fa-solid fa-wifi text-muted">無線上網&nbsp</i>
                                                </span>
                                                <span v-if="house.hasTV == true"><i
                                                        class="fa-solid fa-tv text-muted">電視、</i>
                                                </span>
                                                <span v-if="house.hasPool == true"><i
                                                        class="fa-solid fa-person-swimming text-muted">游泳池&nbsp</i>
                                                </span>
                                                <span v-if="house.hasGym == true"><i
                                                        class="fa-solid fa-dumbbell text-muted">健身房&nbsp</i>
                                                </span>
                                                <span v-if="house.hasKitchen == true"><i
                                                        class="fa-solid fa-fire-burner text-muted">廚房&nbsp</i>
                                                </span>
                                                <span v-if="house.hasLaundry == true"><i
                                                        class="fa-solid fa-shirt text-muted">洗衣房&nbsp</i>
                                                </span>
                                                <span v-if="house.hasParkingLot == true"><i
                                                        class="fa-solid fa-square-parking text-muted">停車位&nbsp</i>
                                                </span>
                                                <span v-if="house.hasPersonalSpace == true"><i
                                                        class="fa-solid fa-person text-muted">個人空間&nbsp</i>
                                                </span>
                                                <span v-if="house.hasAirconditioner == true"><i
                                                        class="fa-solid  fa-fan text-muted">空調&nbsp</i>
                                                </span>
                                                <span v-if="nofacilates(house)" class="text-muted">無&nbsp
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="mx-3 col-5 align-middle">
                                        <div class="photo-container">
                                            <swiper :style="{
                                                '--swiper-navigation-color': '#fff',
                                                '--swiper-pagination-color': '#fff',
                                            }" :centeredSlides="true" :loop="true" :navigation="true"
                                                :modules="modules" :pagination="{ clickable: true }"
                                                class="mySwiper col-md-12">
                                                <swiper-slide v-for="photo in house.photosBase64" :key="photo">
                                                    <img v-if="photo != null" :src="photo" class="d-block w-100">
                                                    <img v-else src="@images/ImageNotFound.jpg" class="d-block w-100">
                                                </swiper-slide>
                                                <swiper-slide v-if="house.photosBase64 == null" :key="house.id">
                                                    <img src="@images/ImageNotFound.jpg" class="d-block w-100">
                                                </swiper-slide>
                                            </swiper>
                                        </div>
                                    </td>
                                    <td>還在想</td>
                                </tr>
                            </template>
                        </tbody>
                    </table>
                </div>
                <!-- notes & status -->
                <h4 class="text-center my-5 animate__animated animate__flipInX">上架與備註</h4>
                <div class="border border-danger border-3 rounded-3 m-3 p-3 animate__animated animate__fadeInUp">
                    <h5 class="text-dark mx-4 mt-3">設定上架狀態，以及備註(僅會顯示在您的工作管理頁面)</h5>
                    <!-- status -->
                    <div class="row g-0 mx-3 my-5">
                        <span class="mx-3 col-1 align-self-center">上架狀態：</span>
                        <div class="mx-3 col-1">
                            <input type="radio" class="btn-check" name="options" id="option1" autocomplete="off"
                                v-model="workstatus" value="上架中" checked>
                            <label class="btn btn-outline-primary" for="option1">上架</label>
                        </div>
                        <div class="mx-3 col-1">
                            <input type="radio" class="btn-check" name="options" id="option2" autocomplete="off"
                                v-model="workstatus" value="未上架">
                            <label class="btn btn-outline-secondary" for="option2">下架</label>
                        </div>
                    </div>
                    <!-- notes -->
                    <div class="row g-0 mx-3 my-5">
                        <div class="form-floating mx-3 col">
                            <input type="textarea" class="form-control" id="formWorknote" placeholder="備註"
                                v-model.trim="worknote">
                            <label for="formWorknote">備註</label>
                        </div>
                    </div>
                </div>
                <div class="col-12 d-flex justify-content-center">
                    <button class="btn btn-danger m-2" type="submit" @click="validate">確認</button>
                    <button class="btn btn-primary m-2" type="button" @click="cancelModify">取消</button>
                </div>
            </form>
        </div>

    </div>
</template>
    
<script setup>
import { ref, onMounted } from 'vue';
import Swal from 'sweetalert2'
import { useUserStore } from '@store/userStore-localStorage.js';
import axios from 'axios';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const modules = [Autoplay, Pagination, Navigation];

const isShowList = ref(false);
const isShowModify = ref(true);
// const fl = ref<UploadUserFile[]>([])
// lordID 初始化賦值
const lordID = localStorage.getItem('lordID');
// 指定path
let path = import.meta.env.VITE_APP_API_URL;


// 表單資料
const worktypeList = ["人力", "旅店", "活動", "銷售", "辦公", "餐飲", "補教", "其他"]
const city = ["基隆市", "嘉義市", "臺北市", "嘉義縣", "新北市", "臺南市", "桃園縣", "高雄市", "新竹市", "屏東縣", "新竹縣", "臺東縣", "苗栗縣", "花蓮縣", "臺中市", "宜蘭縣", "彰化縣", "澎湖縣", "南投縣", "金門縣", "雲林縣", "連江縣"]
const worktype = ref('');               // 種類
const workname = ref('');               // 名稱
const workcity = ref('');               // 城市
const workaddress = ref('');            // 住址
const workperiod = ref([]);             // 期間(預填時須留意加總，傳入時須留意拆分)
const workminperiod = ref();            // 打工最小期間
const workmaxattendance = ref();        // 需求人數(最大)
const worktime = ref('');               // 工作時間
const workvacation = ref('');           // 休假
const workbenefits = ref('');           // 福利
const workdescription = ref('');        // 工作內容
const ageRestriction = ref('');         // 年齡
const genderRestriction = ref('');      // 性別
const educationRestriction = ref('');   // 學歷
const experienceRestriction = ref('');  // 經驗
const languageRestriction = ref('');    // 語言
const licenseRestriction = ref('');     // 證照
const workstatus = ref('');             // 狀態
const worknote = ref('');               // 備註
const totalList = ref([]);              // [總]渲染用
const fileList = ref([]);               // [傳]上傳
const idList = ref([]);                 // [ID]舊照片ID
const deleteList = ref([]);             // [刪]刪除照片ID
const oldList = ref([]);                // [舊]舊照片(初始賦值，核對index用)
const newList = ref([]);                // [新]新照片(file)

// 房
const houseDetail = ref([]);

// 生命週期
onMounted(() => {
    enterModify();
})

// 進編輯前
async function preEnter() {
    isShowList.value = false;
    isShowModify.value = true;
}

// 進編輯
async function enterModify() {
    await preEnter();
    await axios.get(`${path}/api/work/modifyWork/show/76`)
        .then(function (response) {
            console.log(response.data);
            worktype.value = response.data.worktype;
            workname.value = response.data.name;
            workcity.value = response.data.city;
            workaddress.value = response.data.address;
            workperiod.value = [response.data.startDate, response.data.endDate];
            workminperiod.value = response.data.minPeriod;
            workmaxattendance.value = response.data.maxAttendance;
            worktime.value = response.data.workTime;
            workvacation.value = response.data.vacation;
            workbenefits.value = response.data.benefits;
            workdescription.value = response.data.description;
            ageRestriction.value = response.data.ageRestriction;
            genderRestriction.value = response.data.genderRestriction;
            educationRestriction.value = response.data.educationRestriction;
            experienceRestriction.value = response.data.experienceRestriction;
            languageRestriction.value = response.data.languageRestriction;
            licenseRestriction.value = response.data.licenseRestriction;
            worknote.value = response.data.notes;
            totalList.value = response.data.photosBase64;
            idList.value = response.data.photosID;
            oldList.value = [...totalList.value];   // 添加方式，不跟總陣列共用物件來源(會變更)
            houseDetail.value = response.data.houseDetail;
            console.log(houseDetail.value);
        })
}

// (預覽)新增
async function addToTotal(e) {
    if (totalList.value.length <= 5) {
        await totalList.value.push(e.url);
        // console.log("(增)總", totalList.value);
        // console.log("(增)舊", oldList.value);
        await newList.value.push(e.raw);
        // console.log(newList.value);
    } else {
        Swal.mixin({
            toast: true,
            position: 'bottom-end',
            showConfirmButton: false,
            timer: 3000,
            padding: 10,
            width: 310,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
                toast.style.bottom = '120px';
            }
        }).fire({
            icon: "error",
            title: "照片最多為6張!"
        })
    }
}
// 刪除
function deletePhoto(item) {
    // 判斷是否為舊照片，添加到【刪】
    // console.log("oldList.value", oldList.value);
    // console.log("item", item);
    // console.log("=============")
    const isOldPhoto = oldList.value.includes(item);
    if (isOldPhoto) {
        let oldNoIndex = oldList.value.indexOf(item);
        deleteList.value.push(idList.value[oldNoIndex]);
        // console.log("(刪)刪", deleteList.value);
    }
    // 刪【總】
    const index = totalList.value.indexOf(item);
    if (index !== -1) {
        totalList.value.splice(index, 1);
        // console.log("(刪)總", totalList.value);
        // console.log("(刪)刪", deleteList.value);
    }
}
//============沒有設備============

const nofacilates = function (house_type) {

    if (house_type.hasParkingLot == false && house_type.hasPersonalSpace == false && house_type.hasAirconditioner == false && house_type.hasWifi == false && house_type.hasTV == false && house_type.hasGym == false && house_type.hasLaundry == false && house_type.hasPool == false && house_type.hasKitchen == false) {
        return true
    } else {
        return false
    }
}
// 日期規則
function daterule(time) {
    let today = new Date();
    today.setHours(0, 0, 0, 0); // 將時間設為當天的午夜
    return time.getTime() < today.getTime();
}
// 驗證
function validate(event) {
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
        })
}
// 取消修改
function cancelModify() {
    Swal.fire({
        title: "您確定要返回嗎?",
        icon: "warning",
        text: "系統不會儲存您填寫的資料",
        showCancelButton: true,
        confirmButtonText: "對，快讓我走",
        cancelButtonText: "等等，我怕",
        allowOutsideClick: false
    }).then(function (response) {
        if (response.isConfirmed) {
            isShowList.value = true;
            isShowModify.value = false;
        }
    })
}


let current = new Date();
let modifiedDate = current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + current.getDate() + ' ' + current.getHours() + ':' + current.getMinutes() + ':' + current.getSeconds();

</script>
    
<style scoped>
.acco-button {
    background-color: transparent;
}

.acco-button:after,
.acco-button:active,
.acco-button:focus {
    background-color: transparent !important;
    border-color: transparent !important;
    box-shadow: none !important;
    color: inherit !important;
}

.detailed-ul {
    list-style-type: none;
}

.work-photo {
    width: 150px;
    height: 150px;
}

/* 摺疊間隙 */
.accordion-body {
    padding: 0;
}

.work-period-title {
    color: grey;
    font-size: smaller;
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
    height: 300px;
    object-fit: contain;
}
</style>