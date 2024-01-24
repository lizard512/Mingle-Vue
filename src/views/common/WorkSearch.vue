<template>
    <div class="work-search">

        <!-- <div class="container-fluid bg-light py-4" :class="{ 'sticky-header': isSticky }">
            <div class="container">
                <div class="row g-4">
                    <div class="col-md-10">
                        <div class="row g-4">
                            <div class="col-md-4">
                                <input type="text" class="form-control border-0 py-3" placeholder="用關鍵字查詢">
                            </div>
                            <div class="col-md-4">
                                <select class="form-select border-0 py-3">
                                    <option selected>打工地區</option>
                                    <option value="1">北部區域</option>
                                    <option value="2">西部區域</option>
                                    <option value="3">南部區域</option>
                                    <option value="4">東部區域</option>
                                    <option value="5">福建省</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <button class="btn btn-dark border-0 w-100 py-3">開始搜尋</button>
                    </div>
                </div>
            </div>
        </div> -->



        <div class="container-fluid">
            <!--Search Header Start-->
            <div class="row g-4 align-items-center py-3 bg-light " :class="{ 'sticky-header': isSticky }">
                <div class="col-lg-4">
                    <div class="text-start mx-auto wow animate__animated animate__slideInLeft inline-flex"
                        data-wow-delay="0.1s">
                        <h1 class="me-3">打工機會</h1>
                        <p>快來查看正在徵求幫助者的項目！</p>
                    </div>
                </div>
                <div class="col-lg-4 mx-auto">
                    <ul class="nav d-inline-flex justify-content-end ">
                        <li class="nav-item me-2" v-for="worktypeID in worktypeIDs" :key="worktypeID.worktypeID">
                            <a class="btn btn-outline-dark"
                                :class="{ 'active': filters.worktype.includes(worktypeID.worktypeID) }"
                                @click="toggleWorkType(worktypeID.worktypeID)">
                                {{ worktypeID.worktypeID }}
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="col-lg-4 text-end wow animate__animated animate__slideInRight" data-wow-delay="0.1s">
                    <ul class="nav nav-pills d-inline-flex justify-content-end">
                        <li class="nav-item me-2">
                            <a class="btn btn-outline-primary active" data-bs-toggle="pill"
                                @click="toggleSorts('views', 'DESC')">熱門項目</a>
                        </li>
                        <li class="nav-item me-2">
                            <a class="btn btn-outline-primary" data-bs-toggle="pill"
                                @click="toggleSorts('createdAt', 'DESC')">最新上架</a>
                        </li>
                        <li class="nav-item me-2">
                            <a class="btn btn-outline-primary" data-bs-toggle="pill"
                                @click="toggleSorts('EndDate', 'ASC')">即將截止</a>
                        </li>
                        <li class="nav-item me-2">
                            <a class="btn btn-outline-primary" data-bs-toggle="pill" @click="toggleSortByAttendance">參與人數
                                <i class="fa fa-arrow-down" :class="{ 'rotate': isArrowUp }"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
            <!--Search Header End-->
            <!--Work Card Start-->
            <div class="container-fluid px-5 pt-3">
                <div class="row g-4">
                    <div class="col-lg-2 col-md-6 animate__animated animate__fadeIn work-card" v-for="work in works"
                        :key="work.workid">
                        <div class="list-item rounded overflow-hidden">
                            <div class="position-relative overflow-hidden">
                                <img class="img-fluid" src="@images/台東熱氣球活動.jpg" :src="work.photo"
                                    @error="work.photo = '@images/grey.jpg'" :alt="work.name">
                                <div class="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                                    {{ work.worktype }}</div>
                                <div
                                    class="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                                    {{ work.city }}</div>
                            </div>
                            <div class="p-4 pb-0">
                                <a class="d-block h5 mb-2" href="">{{ work.name }}</a>
                                <p class="work-address"><i class="fa fa-map-marker text-primary me-2"></i>{{
                                    work.address }}</p>
                                <!-- <p>{{ work.description }}</p> -->
                            </div>
                            <div class="d-flex border-top">
                                <small class="flex-fill text-center border-end py-2"><i
                                        class="fa fa-calendar text-primary me-2"></i>{{ formatDate(work.startDate)
                                        }} ~
                                    {{ formatDate(work.endDate) }}</small>
                            </div>
                            <div class="d-flex border-top">
                                <small class="flex-fill text-center border-end py-2"><i
                                        class="fa fa-user text-primary me-2"></i>{{ work.attendance }} /
                                    {{ work.maxAttendance }} 人已報名</small>
                                <small class="flex-fill text-center py-2"><i
                                        class="fa fa-solid fa-eye text-primary me-2"></i>{{
                                            work.views }} 次瀏覽</small>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <!--Work Card End-->
            <div class="the-end text-center m-5" v-if="isEnd">已經到底啦~~</div>
        </div>
        <!-- Sticky Footer Start-->
        <footer class="sticky-footer mt-auto py-3 bg-light">
            <div class="container">
                <span class="mx-2"><i class="fa fa-map-marker-alt me-2"></i>台北市大安區復興南路一段390號2樓</span>
                <span class="mx-2"><i class="fa fa-phone-alt me-2"></i>02 6631 6588</span>
                <span class="mx-2"><i class="fa fa-envelope me-2"></i>Mingle.org@gmail.com</span>
            </div>
        </footer>
        <!-- Sticky Footer End-->
    </div>
</template>
    
<script setup>
// 引用函示庫
import { ref, onMounted, onUnmounted, toRaw } from 'vue';
import axios from 'axios';

// 接收資料
let works = ref([]);
const worktypeIDs = ref([]);
const cityIDs = ref([]);
const baseURL = "http://localhost:8080";

// 工作資料載入用的預設參數
let currentPage = ref(0);
let direction = 'DESC'; // 排序方向
let property = 'views'; // 排序屬性
const size = 6; // 每次載入的數量
const isLoading = ref(false); //避免重複載入
let isEnd = ref(false);
let isArrowUp = ref(true);// 排序按紐的箭頭方向
const isSticky = ref(false); // Sticky Header
let selectedWorkType = ref(null); // 選擇的工作類型
let filters = ref({
    worktype: [],
    // 其他過濾條件...
});


// 生命週期
onMounted(async () => {
    await loadWork();
    await loadWorkType();
    await loadCity();
    window.addEventListener('scroll', infiniteScroll);
    window.addEventListener('scroll', checkSticky);
    // document.body.classList.add('no-scroll');
});

onUnmounted(() => {
    window.removeEventListener('scroll', infiniteScroll);
    window.removeEventListener('scroll', checkSticky);
    // document.body.classList.remove('no-scroll');
});

// 載入工作分類
const loadWorkType = async () => {
    const response = await axios.get(baseURL + '/api/worktype/getWorktypes');
    worktypeIDs.value = response.data;
}

// 載入城市
const loadCity = async () => {
    const response = await axios.get(baseURL + '/api/city/getCities');
    cityIDs.value = response.data;
    console.log(cityIDs.value);
}

// 載入第一頁的工作資料(預設為熱門排序)
const loadWork = async () => {
    if (isEnd.value || isLoading.value) return;
    isLoading.value = true;
    try {
        // 模擬載入時間
        // await new Promise(resolve => setTimeout(resolve, 1000));
        const response = await axios.post(baseURL + "/api/work/getWorks",
            // request body
            filters.value,
            // request params
            {
                params: {
                    page: currentPage.value,
                    size: size,
                    direction: direction,
                    property: property
                }
            }
        );
        works.value = [...works.value, ...response.data.content];
        // 如果已經無法獲取更多的工作，停止發送請求
        if (response.data.last) isEnd.value = true;
        // 否則，準備獲取下一頁的工作
        else currentPage.value++;
    } catch (error) {
        console.error(error);
    } finally {
        isLoading.value = false;
    }
};

const reloadWork = async () => {
    works.value = []; // 清空工作列表
    currentPage.value = 0; // 重設頁數
    isEnd.value = false; // 重設結束標記
    window.scrollTo(0, 0); // 將頁面滾動到最上方

    loadWork();
}

const infiniteScroll = () => {
    if (isLoading.value) return;
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) {
        loadWork();
    }
};


const toggleWorkType = (worktypeID) => {
    const index = filters.value.worktype.indexOf(worktypeID);
    if (index >= 0) {
        // 如果 worktypeID 已經在 filters.worktypeID 中，移除它
        filters.value.worktype.splice(index, 1);
    } else {
        filters.value.worktype.push(worktypeID);
    }
    console.log(toRaw(filters.value));

    reloadWork(); // 重新載入工作列表
};

// 依照熱門、最新、屆期更改工作排序
const toggleSorts = (propertyParam, directionParam) => {
    property = propertyParam; // 更新排序欄位
    direction = directionParam; // 更新排序方向

    reloadWork();
}

// 依照參加人數排序工作
const toggleSortByAttendance = () => {
    isArrowUp.value = !isArrowUp.value;

    if (isArrowUp.value) {
        toggleSorts('attendance', 'ASC')
    } else {
        toggleSorts('attendance', 'DESC')
    }
}

// 格式化日期為"YYYY/MM/DD"
const formatDate = (dateString) => {
    let date = new Date(dateString);
    return `${date.getFullYear()}/${("0" + (date.getMonth() + 1)).slice(-2)}/${("0" + date.getDate()).slice(-2)}`;
}

const checkSticky = () => {
    isSticky.value = window.scrollY > 45;
};


</script>

<style scoped>
.work-search {
    height: 100vh;
}

.fa-arrow-down {
    transition: transform 0.5s;
}

.rotate {
    transform: rotate(180deg);
}

.animate__animated.animate__Fadin {
    --animate-duration: 0.5s;
}

.inline-flex {
    display: flex;
    align-items: baseline;
}

.sticky-header {
    position: sticky;
    top: 0;
    z-index: 1000;
}

.sticky-footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    text-align: center;
    z-index: 1000;
}

.the-end {
    height: 100px
}

/* .work-address {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
} */
</style>
<!-- <style>
.no-scroll {
    overflow: hidden;
    height: 100vh;
}
</style> -->