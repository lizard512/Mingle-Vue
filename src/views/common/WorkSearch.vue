<template>
    <div class="container-fluid">
        <!--Search Header Start-->
        <div id="search-header" class="row d-flex align-items-center py-3 pe-2 animate__animated animate__slideInDown" :class="{ 'fixed-top': isSticky }">
            <div class="col-md-5">
                <div class="row g-2">
                    <div class="col-xxl-6 col-md-0 hide-on-small">
                        <div class="text-start mx-auto wow animate__animated animate__slideInLeft inline-flex"
                            data-wow-delay="0.1s">
                            <h3 class="mx-3">打工機會</h3>
                            <span class="badge bg-danger">正在徵求幫助者的項目！</span>
                        </div>
                    </div>
                    <div class="col-xxl-6 col-md-0 d-flex align-items-center mb-1"
                        data-wow-delay="0.1s">
                        <select class="form-select w-50 me-2" v-model="filters.city">
                            <option value="">所有縣市</option>
                            <optgroup v-for="(group, area) in groupedCities" :label="area" :key="area">
                                <option v-for="city in group" :value="city.city" :key="city.city">
                                    {{ city.city }}
                                </option>
                                <option :value="area">所有{{ area.substring(0, 2) }}縣市</option>
                            </optgroup>
                        </select>
                        <div class="input-group w-50">
                            <input type="text" class="form-control" placeholder="關鍵字查詢" v-model="filters.keyword">
                            <button class="btn btn-success" @click="reloadWork()"><i
                                    class="fa fa-search"></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-7">
                <div class="row g-2">
                    <div class="col-xxl-7 col-md-12 d-flex justify-content-md-end justify-content-center"
                        data-wow-delay="0.1s">
                        <div class="btn-group" role="group">
                            <template v-for="(worktypeID, index) in worktypeIDs" :key="worktypeID.worktypeID">
                                <input type="checkbox" class="btn-check" :id="index"
                                    @click="toggleWorkType(worktypeID.worktypeID)">
                                <label class="btn btn-outline-info" :for="index">{{ worktypeID.worktypeID }}</label>
                                <!-- <img :src="`/src/assets/images/icon-${worktypeID.worktypeID}.png`" width="25px" height="25px"> -->
                            </template>
                        </div>
                    </div>
                    <div class="col-xxl-5 col-md-12 d-flex justify-content-md-end justify-content-center"
                        data-wow-delay="0.1s">
                        <div class="btn-group" role="group">
                            <input type="radio" class="btn-check" name="btnradio" id="btnradio1" checked
                                @click="toggleSorts('views', 'DESC')">
                            <label class="btn btn-outline-warning" for="btnradio1">熱門項目</label>
                            <input type="radio" class="btn-check" name="btnradio" id="btnradio2"
                                @click="toggleSorts('createdAt', 'DESC')">
                            <label class="btn btn-outline-warning" for="btnradio2">最新上架</label>
                            <input type="radio" class="btn-check" name="btnradio" id="btnradio3"
                                @click="toggleSorts('endDate', 'ASC')">
                            <label class="btn btn-outline-warning" for="btnradio3">即將截止</label>
                            <input type="radio" class="btn-check" name="btnradio" id="btnradio4"
                                @click="toggleSortByAttendance">
                            <label class="btn btn-outline-warning" name="btnradio" for="btnradio4"><a>參與人數
                                    <i class="fa-solid" :class="arrow"></i></a></label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--Search Header End-->

        <!--Work Cards Start-->
        <WorkDealer :works="works" :isAnimationEnabled="isAnimationEnabled" />
        <!--Work Cards End-->

        <!-- side scrollText start-->
        <div id="scrollText">請向下滾動以瀏覽更多項目</div>
        <!-- side scrollText end-->

        <!--Spinner Start-->
        <div v-if="isLoading" id="spinner">
            <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
        <!--Spinner End-->

        <!--The End Start-->
        <div id="the-end" class="text-center m-5 text-white" v-if="isEnd">已經到底啦~~</div>
        <!--The End End-->

        <!-- Sticky Footer Start-->
        <footer id="search-footer" class="fixed-bottom text-center mt-auto py-3 animate__animated animate__slideInUp row d-flex align-items-center">
            <div class="col-md-5 col-6">
                <div class="row g-2">
                    <div class="col-xxl-5 col-0">
                        <div class="m-0">共有<strong class="h4 mx-3">{{ total }}</strong>筆相符的結果</div>
                        <button class="btn btn-danger py-0" type="button" @click="clearAllFilters"><i class="fa-solid fa-filter"></i>清空所有篩選器</button>
                    </div>
                    <div class="col-xxl-7 col-md-0 d-flex justify-content-xxl-start justify-content-center align-items-center hide-on-small">
                        <div><el-date-picker v-model="filters.workPeriod" type="daterange" start-placeholder="起始日期"
                                end-placeholder="結束日期" format="YYYY-MM-DD ddd" value-format="YYYY-MM-DD" size="large"
                                :disabled-date="daterule" /></div>
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-6">
                <div class="row g-4">
                    <div class="col-xxl-6 col-0 d-flex justify-content-xxl-end justify-content-center">
                        <div class="me-2">隱藏額滿項目</div>
                        <Toggle id="toggleAttendance" :isChecked=false bgColor="black" ballColor="white"
                            iconClass1="fa-solid fa-circle-check" iconClass2="fa-solid fa-circle-xmark" color1="green"
                            color2="red" v-model="filters.hideFull" />
                    </div>
                    <div v-if="isLoggedIn" class="col-xxl-6 col-0 d-flex justify-content-xxl-end justify-content-center">
                        <div class="me-2">顯示收藏清單</div>
                        <Toggle id="toggleKeptwork" :isChecked=false bgColor="black" ballColor="white"
                            iconClass1="fa-solid fa-circle-check" iconClass2="fa-solid fa-circle-xmark" color1="green"
                            color2="red" v-model="filters.showKeptWorkOnly" />
                    </div>
                    <div v-else class="col-xxl-6 col-0 d-flex justify-content-xxl-end justify-content-center">
                        <div class="m-0">登入即可收藏工作！</div>
                    </div>
                </div> 
            </div>
            <div class="col-md-4 hide-on-small">
                <div class="row g-4">
                    <div class="col-xxl-6 col-0 d-flex justify-content-center align-items-center">
                        <div class="me-2">翻牌動畫開關</div>
                        <Toggle id="toggleAnimation" :isChecked=true bgColor="black" ballColor="white"
                            iconClass1="fa-solid fa-circle-check" iconClass2="fa-solid fa-circle-xmark" color1="green"
                            color2="red" v-model="isAnimationEnabled" />
                    </div>
                    <div class="col-xxl-6 col-0 flex-column align-items-center">
                        <div><i class="fa fa-phone-alt me-2"></i>02 6631 6588</div>
                        <div><i class="fa fa-envelope me-2"></i>Mingle@gmail.com</div>
                    </div>
                </div>
            </div>

        </footer>
        <!-- Sticky Footer End-->
    </div>
</template>
    
<script setup>

//// 引用套件、元件、STORE
import { ref, computed, onMounted, onUnmounted, watch } from 'vue';
import axios from 'axios';
import { useUserStore } from '@store/userStore-localStorage.js';
import WorkDealer from '@components/WorkDealer.vue';
import Toggle from '@components/Toggle.vue';


//// 接收資料
let works = ref([]);
let total = ref(0);
const worktypeIDs = ref([]);
const cities = ref([]);
const userID = localStorage.getItem('userID');
const userStore = useUserStore();


//// 宣告變數
// 使用者狀態
const isLoggedIn = computed(() => userStore.isLoggedIn);
// 載入相關
const currentPage = ref(0); // 當前頁數
const size = 12; // 每次載入的數量
const isLoading = ref(false); //避免重複載入
const isEnd = ref(false);
// 排序相關
let direction = 'DESC'; // 排序方向
let property = 'views'; // 排序屬性
const arrow = ref('fa-arrow-up-9-1');
const isArrowUp = ref(true);// 排序按紐的箭頭方向
// 篩選相關
const areaOrder = ['北部區域', '中部區域', '南部區域', '東部區域', '外島區域'];
let filters = ref({
    // 依篩選器變動
    worktype: [],
    city: "",
    keyword: null,
    workPeriod: [],
    hideFull: false,
    showKeptWorkOnly: false,
    // 自定義條件
    showOnShelfOnly: true,
    hideDeleted: true,
    hideExpired: true,
});
// 其他
const isSticky = ref(false); // Sticky Header
const isAnimationEnabled = ref(true);

//// 監聽變數
watch(() => filters.value, () => {
    reloadWork();
}, { deep: true });

//// 生命週期
onMounted(async () => {
    await loadWorktype();
    await loadCity();
    await loadWork();
    window.addEventListener('scroll', infiniteScroll, { passive: true });
    window.addEventListener('scroll', checkSticky, { passive: true });
    // document.body.classList.add('no-scroll');
});
onUnmounted(() => {
    window.removeEventListener('scroll', infiniteScroll, { passive: true });
    window.removeEventListener('scroll', checkSticky, { passive: true });
    // document.body.classList.remove('no-scroll');
});



//// 方法

// 載入工作分類
const loadWorktype = async () => {
    const response = await axios.get(`${import.meta.env.VITE_APP_API_URL}/api/worktype/getWorktypes`);
    worktypeIDs.value = response.data;
}
// 載入城市
const loadCity = async () => {
    const response = await axios.get(`${import.meta.env.VITE_APP_API_URL}/api/city/getCities`);
    cities.value = response.data;
}
// 將城市依area分組、排序
const groupedCities = computed(() => {
    const groups = cities.value.reduce((groups, city) => {
        if (!groups[city.area]) {
            groups[city.area] = [];
        }
        groups[city.area].push(city);
        return groups;
    }, {});

    return Object.keys(groups).sort((a, b) => areaOrder.indexOf(a) - areaOrder.indexOf(b)).reduce((sortedGroups, key) => {
        sortedGroups[key] = groups[key];
        return sortedGroups;
    }, {});
});

// 載入一頁工作列表
const loadWork = async () => {
    if (isEnd.value || isLoading.value) return;
    isLoading.value = true;
    try {
        const response = await axios.post(`${import.meta.env.VITE_APP_API_URL}/api/work/getWorks`,
            // request body
            filters.value,
            // request params
            {
                params: {
                    page: currentPage.value,
                    size: size,
                    direction: direction,
                    property: property,
                    userID: userID,
                }
            }
        );
        total.value = response.data.totalElements;
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

// 重新載入工作列表
const reloadWork = () => {
    works.value = []; // 清空工作列表
    currentPage.value = 0; // 重設頁數
    isEnd.value = false; // 重設結束標記
    window.scrollTo(0, 0); // 將頁面滾動到最上方
    loadWork();
}

// 無限卷軸功能
const infiniteScroll = () => {
    if (isLoading.value) return;
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) {
        loadWork();
    }
};

// 篩選器: 依工作類型
const toggleWorkType = (worktypeID) => {
    const index = filters.value.worktype.indexOf(worktypeID);
    if (index >= 0) {
        filters.value.worktype.splice(index, 1);
    } else {
        filters.value.worktype.push(worktypeID);
    }
};

// 排序: 熱門、最新、即將截止
const toggleSorts = (propertyParam, directionParam) => {
    property = propertyParam; // 更新排序欄位
    direction = directionParam; // 更新排序方向

    reloadWork();
}

// 排序: 參加人數升冪降冪
const toggleSortByAttendance = () => {
    isArrowUp.value = !isArrowUp.value;
    console.log(isArrowUp.value);

    if (isArrowUp.value) {
        arrow.value = 'fa-arrow-up-9-1';
        toggleSorts('attendance', 'ASC')
    } else {
        arrow.value = 'fa-arrow-down-9-1';
        toggleSorts('attendance', 'DESC')
    }
}

// 清空所有篩選器
const clearAllFilters = () => {
    filters.value = {
        worktype: [],
        city: "",
        keyword: null,
        workPeriod: [],
        hideFull: false,
        showKeptWorkOnly: false,
        showOnShelfOnly: true,
        hideDeleted: true,
        hideExpired: true,
    };
    reloadWork();
}

// 格式化日期為"YYYY/MM/DD"
// const formatDate = (dateString) => {
//     let date = new Date(dateString);
//     return `${date.getFullYear()}/${("0" + (date.getMonth() + 1)).slice(-2)}/${("0" + date.getDate()).slice(-2)}`;
// }

// 日期規則
function daterule(time) {
    let today = new Date();
    today.setHours(0, 0, 0, 0); // 將時間設為當天的午夜
    return time.getTime() < today.getTime();
}

// Sticky Header
const checkSticky = () => {
    isSticky.value = window.scrollY > 45;
};

</script>

<style scoped>

/* .container-fluid {
    height: cal(100vh-75px);
} */

#search-header {
    background-color: var(--light);
    box-shadow: 0 8px 4px 0 rgba(0, 0, 0, 0.1);
}

#search-footer {
    background-color: var(--light);
    box-shadow: 0 -8px 4px 0 rgba(0, 0, 0, 0.1);
}

#scrollText {
    position: fixed;
    top: 50%;
    left: 0;
    color: var(--black-50);
    background-color: var(--white-50);
    padding: 10px;
    font-size: 20px;
    writing-mode: vertical-lr;
    text-orientation: upright;
    letter-spacing: 10px; 
}

#spinner {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

#the-end {
    height: 150px
}

.btn-group .btn {
    color: var(--dark);
    
}

.btn-group .btn.active {
    color: #FFFFFF !important;
}

.btn-group .btn-outline-info:hover {
    color: #FFFFFF;
    background-color: var(--info);
}

.btn-group .btn-outline-warning:hover {
    color: #FFFFFF;
    background-color: var(--warning);
}

.fa-arrow-down {
    transition: transform 0.5s;
}

.rotate {
    transform: rotate(180deg);
}

/* .animate__animated.animate__FadIn {
    --animate-duration: 0.5s;
} */

.inline-flex {
    display: flex;
    align-items: baseline;
}

/* .sticky-header {
    position: sticky;
    top: 0;
    z-index: 1000;
} */

/* .sticky-footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    text-align: center;
    z-index: 1000;
} */


@media (max-width: 767.98px) {
    .hide-on-small {
        display: none;
    }
}


@media (max-width: 991.98px) {
    .hide-on-medium {
        display: none;
    }
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