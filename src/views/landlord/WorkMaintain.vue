<template>
    <div class="container-fluid bg-white d-flex flex-column">
        <div class="col-11 align-self-center">
            <div class="position-relative">
                <h3 class="my-5 text-center animate__animated animate__flipInX">工作管理</h3>
                <RouterLink class="btn btn-warning text-white position-absolute top-0 end-0" to="/providerWork"><i
                        class="fa fa-plus me-2"></i>新建工作</RouterLink>
            </div>
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
                    <!--Spin-->
                    <tr v-if="isLoadingList" class="spin-tr">
                        <td class="p-0" colspan="12">
                            <div class="spinner-border text-success" role="status">
                            </div>
                        </td>
                    </tr>
                    <template v-for="work, index in  workList " :key="index">
                        <!-- main-line  -->
                        <tr>
                            <td>{{ index + 1 }}</td>
                            <td>
                                <div class="photo-container">
                                    <swiper :style="{
                                        '--swiper-navigation-color': '#fff',
                                        '--swiper-pagination-color': '#fff',
                                    }" :centeredSlides="true" :loop="true" :navigation="true" :modules="modules"
                                        :pagination="{ clickable: true }" class="mySwiper col-md-12">
                                        <swiper-slide v-for="photo in work.photosBase64">
                                            <img v-if="photo != null" :src="photo" class="d-block w-100">
                                            <img v-else src="@images/ImageNotFound.jpg" class="d-block w-100">
                                        </swiper-slide>
                                        <swiper-slide v-if="work.photosBase64 == null" :key="work.id">
                                            <img src="@images/ImageNotFound.jpg" class="d-block w-100">
                                        </swiper-slide>
                                    </swiper>
                                </div>
                            </td>
                            <td>
                                <div class="d-flex align-items-center justify-content-center">
                                    <div class="badge text-wrap type-badge fs-6" :class="{
                                        'bg-success': work.worktype == '人力', 'bg-warning': work.worktype == '旅店', 'bg-primary': work.worktype == '活動', 'bg-danger': work.worktype == '銷售', 'bg-dark': work.worktype == '辦公', 'bg-secondary': work.worktype == '餐飲', 'bg-info': work.worktype == '補教' || work.worktype == '其他'
                                    }">
                                        {{ work.worktype }}</div>
                                </div>
                            </td>
                            <td>{{ work.name }}</td>
                            <td>{{ work.city }}</td>
                            <td>{{ work.startDate }}</td>
                            <td>{{ work.endDate }}</td>
                            <td>{{ work.modifiedDate }}</td>
                            <td
                                :class="{ 'text-danger': work.attendance == work.maxAttendance, 'text-primary': work.maxAttendance - work.attendance < 5, 'text-success': work.maxAttendance - work.attendance >= 5 }">
                                {{ work.attendance }}/{{ work.maxAttendance }}</td>
                            <td :class="{ 'text-danger': !work.onShelf, 'text-success': work.onShelf }">{{ work.isOnShelf }}
                            </td>
                            <td>
                                <div class="my-3"><button type="button" class="btn btn-primary btn-sm"
                                        @click="enterModify(work.workid)">編輯</button>
                                </div>
                                <div class="my-3">
                                    <button type="button" class="btn btn-danger btn-sm"
                                        @click="deleteWork(work.workid)">刪除</button>
                                </div>
                                <div class="my-3">
                                    <button type="button" class="btn btn-success btn-sm" @click="previewWork(work.workid)">
                                        預覽
                                    </button>
                                </div>
                            </td>
                            <td><button class=" accordion-button collapsed acco-button" type="button"
                                    data-bs-toggle="collapse" :data-bs-target="'#item' + index"
                                    aria-expanded="false"></button>
                            </td>
                        </tr>
                        <!-- main-line end -->
                        <!-- toggle-line -->
                        <tr>
                            <td class="p-0" colspan="12">
                                <div class="accordion-body collapse bg-light animate__animated animate__fadeIn"
                                    :id="'item' + index" data-bs-parent="#accordion-main">
                                    <div class="row">
                                        <div class="col-4 mx-5 my-3 detailed-ul text-start">
                                            <li class="m-2 fw-bold"><i class="fa-solid fa-briefcase me-2"></i>工作時間：<span
                                                    class="ms-2 text-dark">{{ work.workTime }}</span>
                                            </li>
                                            <li class="m-2 fw-bold"><i
                                                    class="fa-solid fa-champagne-glasses me-2"></i>休假：<span
                                                    class="ms-2 text-dark">{{ work.vacation }}</span></li>
                                            <li class="m-2 fw-bold"><i class="fa-solid fa-star me-2"></i>福利：<span
                                                    class="ms-2 text-dark">{{ work.benefits }}</span></li>
                                            <li class="m-2 fw-bold"><i
                                                    class="fa-regular fa-calendar-check me-2"></i>最短工期：<span
                                                    class="ms-2 text-dark">{{ work.minPeriod }}</span></li>
                                        </div>
                                        <div class="col-3 m-3 detailed-ul text-start">
                                            <ul class="detailed-ul text-start">
                                                <li class="m-2 fw-bold"><i
                                                        class="fa-solid fa-user-clock me-2"></i>(限)年齡：<span
                                                        class="ms-2 text-dark">{{ work.ageRestriction }}</span></li>
                                                <li class="m-2 fw-bold"><i
                                                        class="fa-solid fa-venus-mars me-2"></i>(限)性別：<span
                                                        class="ms-2 text-dark">{{ work.genderRestriction }}</span></li>
                                                <li class="m-2 fw-bold"><i class="fa-solid fa-language me-2"></i>(限)語言：<span
                                                        class="ms-2 text-dark">{{ work.languageRestriction }}</span></li>
                                                <li class="m-2 fw-bold"> <i class="fa-solid fa-eye me-2"></i>瀏覽量：<span
                                                        class="ms-2 text-dark">{{ work.views }}</span></li>
                                            </ul>
                                        </div>
                                        <div class="col-3 m-3 detailed-ul text-start">
                                            <ul class="detailed-ul text-start">
                                                <li class="m-2 fw-bold"><i class="fa-solid fa-graduation-cap me-2"></i>教育程度：
                                                    <span class="ms-2 text-dark">{{ work.educationRestriction }}</span>
                                                </li>
                                                <li class="m-2 fw-bold"><i class="fa-solid fa-briefcase me-2"></i>工作經驗：<span
                                                        class="ms-2 text-dark">{{ work.experienceRestriction }}</span></li>
                                                <li class="m-2 fw-bold"><i
                                                        class="fa-regular fa-address-card me-2"></i>證照：<span
                                                        class="ms-2 text-dark">{{ work.licenseRestriction }}</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <!-- note -->
                                    <div class="row">
                                        <div class="col-4 mx-5 mb-3 detailed-ul text-start">
                                            <li class="m-2 fw-bold"><i class="fa-solid fa-note-sticky me-2"></i>備註：<span
                                                    class="ms-2 text-dark">{{ work.notes }}</span>
                                            </li>
                                        </div>
                                        <div class="col-4 mx-5 mb-3 detailed-ul text-start">
                                            <li class="m-2 fw-bold"><i class="fa-solid fa-house-chimney me-2"></i>地址：<span
                                                    class="ms-2 text-dark">{{ work.city }}{{
                                                        work.address }}</span>
                                            </li>
                                        </div>
                                    </div>

                                </div>
                            </td>
                        </tr>
                        <!-- toggle-line end -->
                    </template>
                </tbody>
            </table>
            <!-- main-list end -->
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
                                <option v-for=" item  in  worktypeList " :value="item">{{
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
                                <option v-for="  item   in   city  " :value="item">{{ item }}</option>
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
                                @change="workPeriodChange()" :disabled-date="daterule" />
                            <!--切換時，計算"今日"與"結束日"之時間差，最小天數不得超過時間差-->
                            <!--若時間差隨著時間經過，已低於資料庫的最小區間，使用者載入後要重選-->
                        </div>
                        <div class="form-floating mx-4 my-2 col-3">
                            <select class="form-control" id="formWorkminperiod" v-model="workminperiod" required>
                                <option selected disabled value="">Choose...</option>
                                <option v-for=" item  in  workdatelimit ">{{
                                    item }}
                                </option>
                            </select>
                            <label for="formWorkminperiod">打工最短天數 (必填)</label>
                            <div class="invalid-feedback">
                                請點選打工最短期間
                            </div>
                        </div>
                        <div class="form-floating mx-4 my-2 col-3">
                            <select class="form-control" id="formWorkmaxattendance" v-model="workmaxattendance" required>
                                <option selected disabled value="">Choose...</option>
                                <option v-for=" item  in  100 ">{{ item + workattendance }}</option>
                                <!--可選範圍→已報名人數開始往上100-->
                            </select>
                            <label for="formWorkmaxattendance">打工需求人數(必填)</label>
                            <div class="invalid-feedback">
                                請點選需求人數
                            </div>
                        </div>
                        <div class="form-floating mx-5 my-2 col-1">
                            <input type="number" class="form-control" v-model="workattendance" disabled>
                            <label for="formWorkminperiod">目前報名人數</label>
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
                            <textarea class="form-control workdescription-area" rows="10" id="formWorkdescription"
                                placeholder="工作內容" v-model.trim="workdescription" required></textarea>
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
                        <div v-for=" item, index  in  totalList " class="col d-flex justify-content-center" :key="index">
                            <figcaption class="position-relative">
                                <i class="fa-solid fa-xmark fa-2xl position-absolute xmark"
                                    @click="deletePhoto(item, index)"></i>
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
                                <th>剩餘床位</th>
                                <th>是否綁定</th>
                            </tr>
                        </thead>
                        <tbody>
                            <template v-for=" house  in  houseDetail ">
                                <tr>
                                    <td class="align-middle col-5">
                                        <h5>{{ house.houseType }}-{{ house.name }}</h5>
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
                                    <td class="mx-3 col-4 align-middle">
                                        <div class="photo-container">
                                            <swiper :style="{
                                                '--swiper-navigation-color': '#fff',
                                                '--swiper-pagination-color': '#fff',
                                            }
                                                " :centeredSlides="true" :loop="true" :navigation="true"
                                                :modules="modules" :pagination="{ clickable: true }"
                                                class="mySwiper col-md-12">
                                                <swiper-slide v-for=" photo  in  house.photosBase64 " :key="photo">
                                                    <img v-if="photo != null" :src="photo" class="d-block w-100">
                                                    <img v-else src="@images/ImageNotFound.jpg" class="d-block w-100">
                                                </swiper-slide>
                                                <swiper-slide v-if="house.photosBase64 == null" :key="house.id">
                                                    <img src="@images/ImageNotFound.jpg" class="d-block w-100">
                                                </swiper-slide>
                                            </swiper>
                                        </div>
                                    </td>
                                    <td class="mx-3">
                                        <div class="d-flex justify-content-center fs-5" :class="{
                                            'text-primary': house.beds <= 10
                                                && house.beds >= 5
                                            , 'text-danger': house.beds < 5
                                        }
                                            ">
                                            {{ house.beds }}</div>
                                    </td>
                                    <td class="mx-3">
                                        <div class="d-flex justify-content-center">
                                            <div class="form-check form-switch">
                                                <input class="form-check-input" type="checkbox" role="switch"
                                                    :id="`flexSwitchCheckChecked${house.houseid}`"
                                                    :checked="toggleStates[house.houseid]"
                                                    @change="updateBindingStatus(house.houseid)">
                                                <label class="form-check-label"
                                                    :for="`flexSwitchCheckChecked${house.houseid}`"></label>
                                            </div>
                                        </div>
                                    </td>
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
                                v-model="onShelf" value="true" :disabled="disabledShelf">
                            <label class="btn btn-outline-primary" for="option1"
                                :class="{ 'btn-outline-dark': disabledShelf }">上架</label>
                        </div>
                        <div class="mx-3 col-1">
                            <input type="radio" class="btn-check" name="options" id="option2" autocomplete="off"
                                v-model="onShelf" value="false">
                            <label class="btn btn-outline-secondary" for="option2">下架</label>
                        </div>
                        <span v-if="disabledShelf"
                            class="mx-3 col-4 align-self-center text-danger fs-5 animate__animated animate__fadeInUp"><i
                                class="fa-solid fa-circle-exclamation me-3"></i>請留意，需至少綁定一間房屋才可上架</span>
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
                    <div></div>
                    <button class="btn btn-primary m-2" type="button" @click="cancelModify">取消</button>
                    <div></div>
                </div>
            </form>
            <!-- main-form end-->
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
import { useRouter } from 'vue-router';
const router = useRouter();
const isShowList = ref(true);
const isShowModify = ref(false);

// lordid 初始化賦值
const lordid = localStorage.getItem('lordID');
// 指定path
let path = import.meta.env.VITE_APP_API_URL;

// 列表資料
const workList = ref([]);

// workid，進編輯後賦值
const workID = ref([]);

// 載入時spin
const isLoadingList = ref(true);

// 表單資料
const worktypeList = ["人力", "旅店", "活動", "銷售", "辦公", "餐飲", "補教", "其他"]
const city = ["基隆市", "嘉義市", "臺北市", "嘉義縣", "新北市", "臺南市", "桃園縣", "高雄市", "新竹市", "屏東縣", "新竹縣", "臺東縣", "苗栗縣", "花蓮縣", "臺中市", "宜蘭縣", "彰化縣", "澎湖縣", "南投縣", "金門縣", "雲林縣", "連江縣"]
const worktype = ref('');               // 種類
const workname = ref('');               // 名稱
const workcity = ref('');               // 城市
const workaddress = ref('');            // 住址
const workperiod = ref([]);             // 期間(預填時須留意加總，傳入時須留意拆分)
const workdatelimit = ref([]);          // 結束日期與當下日期之天數差(最小區間不得大於此數字)
const workminperiod = ref();            // 打工最小期間
const workmaxattendance = ref();        // 需求人數(最大)
const workattendance = ref();           // 已報名人數
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

// 工作照片相關
const totalList = ref([]);              // [總]渲染用
const fileList = ref([]);               // [傳]上傳
const idList = ref([]);                 // [ID]舊照片ID
const deleteList = ref([]);             // [刪]刪除照片ID
const oldList = ref([]);                // [舊]舊照片(初始賦值，核對index用)
const newList = ref([]);                // [新]新照片(file)

// 房
const houseDetail = ref([]);
const bindingHousesID = ref([]);        // [綁ID]初始
const bindingChangeHouse = [];          // [綁ID]變化

// 创建一个 ref 变量来存储每个 toggle 的状态
const toggleStates = ref({});
const onShelf = ref(true);              // 上架狀態
const disabledShelf = ref(false)        // 控管是否「禁用」上架

// 生命週期
onMounted(async () => {
    enterList();
})
// 進列表
async function enterList() {
    axios.get(`${path}/api/work/modifyWork/workList/${lordid}`)
        .then(function (response) {
            response.data.forEach(function (item) {
                // 開始日
                let startDay = new Date(item.startDate);
                item.startDate = `${startDay.getFullYear()}-${('0' + (startDay.getMonth() + 1)).slice(-2)}-${('0' + startDay.getDate()).slice(-2)}`;
                // 結束日
                let endDay = new Date(item.endDate);
                item.endDate = `${endDay.getFullYear()}-${('0' + (endDay.getMonth() + 1)).slice(-2)}-${('0' + endDay.getDate()).slice(-2)}`;
                // 修改日
                let modifyDay = new Date(item.updatedAt);
                item.modifiedDate = `${modifyDay.getFullYear()}-${('0' + (modifyDay.getMonth() + 1)).slice(-2)}-${('0' + modifyDay.getDate()).slice(-2)}`;
                // 狀態
                if (item.onShelf) {
                    item.isOnShelf = "上架中"
                } else {
                    item.isOnShelf = "未上架"
                }
            });
            workList.value = response.data;
            isLoadingList.value = false;
        })
}


// 進編輯前
async function preEnter(workid) {
    isShowList.value = false;
    isShowModify.value = true;
    workID.value = workid;
}

// 進編輯
async function enterModify(workid) {
    await preEnter(workid);
    await axios.get(`${path}/api/work/modifyWork/show/${workid}`)
        .then(function (response) {
            worktype.value = response.data.worktype;
            workname.value = response.data.name;
            workcity.value = response.data.city;
            workaddress.value = response.data.address;
            workperiod.value = [response.data.startDate, response.data.endDate];
            workminperiod.value = response.data.minPeriod;

            // 計算當前日期與工作結束日期之時間差
            workdatelimit.value = calculateDays(new Date(), new Date(response.data.endDate));

            workmaxattendance.value = response.data.maxAttendance;
            workattendance.value = response.data.attendance;
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
            onShelf.value = response.data.onShelf;

        });
    await axios.get(`${path}/api/work/modifyWork/showHouse/${workid}`)
        .then(function (response) {
            bindingHousesID.value = response.data.bindingHousesID;
            houseDetail.value = response.data.houseDetail;
        });
    houseDetail.value.forEach((house) => {
        // 将每个 house.houseid 作为 key，将初始的绑定状态（true/false）存储到 toggleStates 中
        if (bindingHousesID.value != null) {
            toggleStates.value[house.houseid] = bindingHousesID.value.includes(house.houseid);
        } else {
            toggleStates.value[house.houseid] = false;
        }
    })
    checkAllBinding();
    // console.log("workid", workid)
}
// 日期規則
function daterule(time) {
    let today = new Date();
    today.setHours(0, 0, 0, 0); // 將時間設為當天的午夜
    return time.getTime() < today.getTime();
}
// 日期差
function calculateDays(startDate, endDate) {
    startDate.setHours(0, 0, 0, 0);
    let timeDifference = endDate.getTime() - startDate.getTime();
    return workdatelimit.value = Math.floor(timeDifference / (1000 * 60 * 60 * 24)) + 1;   // 今天也算1天
}
// 選時間影響最小區間 (計算結束日期與現在日期，兩者的天數差。此數值為最小區間的最大值)
function workPeriodChange() {
    workdatelimit.value = calculateDays(new Date(), workperiod.value[1]);
}

// 預覽照片
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
// 刪除照片
function deletePhoto(item, index) {
    // 判斷是否為舊照片，添加到【刪】
    const isOldPhoto = oldList.value.includes(item);
    if (isOldPhoto) {
        // let oldNoIndex = oldList.value.indexOf(item);    
        // 上面一行是陷阱，由於oldList都是Base64，假設使用者有一樣的base64，永遠只抓其中第一個。使用者刪哪一張都指向同一個index
        deleteList.value.push(idList.value[index]);
        idList.value.splice(index, 1);
        // console.log("(刪)刪", deleteList.value);
        // console.log("(刪)id", idList.value);
    } else {
        newList.value.splice(item);
    }
    // 刪【總】
    const totalindex = totalList.value.indexOf(item);
    if (totalindex !== -1) {
        totalList.value.splice(totalindex, 1);
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
// 綁定房屋
const updateBindingStatus = (houseid) => {
    // 切换 toggle 状态
    toggleStates.value[houseid] = !toggleStates.value[houseid];
    // console.log("toggleStates", toggleStates.value);
    if (bindingChangeHouse.includes(houseid)) {
        let index = bindingChangeHouse.indexOf(houseid)
        bindingChangeHouse.splice(index, 1);
    } else {
        bindingChangeHouse.push(houseid);
    }
    checkAllBinding();  // 檢查綁定，沒綁定就不能上架
};
// 檢查是否「完全沒有」綁定
function checkAllBinding() {
    // 提取toggleStates對象的所有值為一個陣列
    let values = Object.values(toggleStates.value);
    // 檢查陣列中的每個值是否都是false
    let allFalse = values.every(value => value === false);
    if (allFalse) {
        onShelf.value = false;
        disabledShelf.value = true;
    } else {
        disabledShelf.value = false; // 若有綁定，解除鎖定狀態
    }
}

// 驗證
function validate(event) {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation');
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            // 移除現有的 submit 事件監聽器
            form.removeEventListener('submit', submitHandler);
            // 添加新的 submit 事件監聽器
            form.addEventListener('submit', submitHandler);
        });
}
async function submitHandler(event) {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var form = event.currentTarget;
    // Loop over them and prevent submission
    if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
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
            title: "請確認所有必填欄位是否填寫完畢"
        })
    } else {
        event.preventDefault();
        Swal.fire({
            title: '處理中',
            text: '請稍候...',
            icon: 'info',
            showCancelButton: false,
            showConfirmButton: false,
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            },
        });
        await submitWork();
        await submitHouse();
        Swal.close();
        Swal.fire({
            title: '完成',
            text: '已完成您的修改，點擊按鈕返回',
            icon: 'success',
            showCancelButton: false,
            confirmButtonText: '返回列表',
            allowOutsideClick: false
        }).then((result) => {
            if (result.isConfirmed) {
                exitModify();
            }
        });
    }
    form.classList.add('was-validated')
}
// 提交工作 (路徑要改)
async function submitWork() {
    let requestWork = {
        "workid": workID.value,
        "worktype": worktype.value,
        "name": workname.value,
        "notes": worknote.value,
        "city": workcity.value,
        "address": workaddress.value,
        "startDate": workperiod.value[0],
        "endDate": workperiod.value[1],
        "minPeriod": workminperiod.value,
        "maxAttendance": workmaxattendance.value,
        "description": workdescription.value,
        "workTime": worktime.value,
        "vacation": workvacation.value,
        "ageRestriction": ageRestriction.value,
        "genderRestriction": genderRestriction.value,
        "educationRestriction": educationRestriction.value,
        "experienceRestriction": experienceRestriction.value,
        "languageRestriction": languageRestriction.value,
        "licenseRestriction": licenseRestriction.value,
        "benefits": workbenefits.value,
        "updatedAt": new Date(),
        "isOnShelf": onShelf.value,
        "deletePhotoID": deleteList.value,
        "bindingChangeHouse": bindingChangeHouse
    }
    try {
        await axios.put(`${path}/api/work/modifyWork/submitWork/${workID.value}`, requestWork)
        // console.log(onShelf.value)
        console.log("Work submitted successfully!");
    } catch (error) {
        console.error("Error submitting work:", error);
    }
}
// 提交房子 (路徑要改)
async function submitHouse() {
    try {
        const formData = new FormData();
        for (const file of newList.value) {
            // console.log(file)
            formData.append('newList', file);
        }
        await axios.put(`${path}/api/work/modifyWork/submitHouse/${workID.value}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        console.log("Work submitted successfully!");
    } catch (error) {
        console.error("Error submitting house:", error);
    }
}

// 取消修改
function cancelModify() {
    Swal.fire({
        title: "您確定要返回嗎?",
        icon: "warning",
        text: "系統不會儲存您填寫的資料",
        showCancelButton: true,
        confirmButtonText: "確定",
        cancelButtonText: "取消",
        allowOutsideClick: false
    }).then(function (response) {
        if (response.isConfirmed) {
            exitModify();
        }
    })
}
// 離開修改
function exitModify() {
    try {
        router.go(0);
    } catch (error) {
        console.error('Failed to apply', error);
    }
}
// 刪除
function deleteWork(workid) {
    Swal.fire({
        title: "您確定要刪除此筆工作嗎?",
        icon: "warning",
        text: "此動作將無法復原，原本成立的訂單不受影響",
        showCancelButton: true,
        confirmButtonText: "確定",
        cancelButtonText: "取消",
        allowOutsideClick: false
    }).then(function (response) {
        if (response.isConfirmed) {
            axios.put(`${path}/api/work/modifyWork/delete/${workid}`)
                .then(function (response) {
                    Swal.close();
                    Swal.fire({
                        title: '完成',
                        text: '已完成刪除，點擊按鈕返回',
                        icon: 'success',
                        showCancelButton: false,
                        confirmButtonText: '返回列表',
                        allowOutsideClick: false
                    }).then((result) => {
                        if (result.isConfirmed) {
                            router.go(0);
                        }
                    });
                })
        }
    })
}
// 預覽
function previewWork(workid) {
    Swal.fire({
        title: "是否瀏覽工作頁面",
        icon: "question",
        text: "即將離開此頁，並前往工作頁面",
        showCancelButton: true,
        confirmButtonText: "確定",
        cancelButtonText: "取消",
        allowOutsideClick: false
    }).then(function (response) {
        if (response.isConfirmed) {
            router.push({ path: `/work-detail/${workid}` })
        }
    })
}


</script>
    
<style scoped>
.spin-tr {
    background-color: transparent !important;
    height: 100vh;
}

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

.type-badge {
    width: 3.3rem;
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

.workdescription-area {
    height: 100% !important;
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


.swiper {
    width: 50%;
    height: 100%;
}

.swiper-slide img {
    display: block;
    height: 150px;
    object-fit: contain;
}
</style>