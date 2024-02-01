<template>
    <div class="container-fluid vh-100">
        <!--Search Header Start-->
        <div class="row g-4 align-items-center py-3 bg-light-var" :class="{ 'sticky-header': isSticky }">
            <div class="col-lg-5">
                <div class="row">
                    <div class="col-xxl-6 col-lg-12">
                        <div class="text-start mx-auto wow animate__animated animate__slideInLeft inline-flex"
                            data-wow-delay="0.1s">
                            <h2 class="mx-3">打工機會</h2>
                            <span class="badge bg-danger">正在徵求幫助者的項目！</span>
                        </div>
                    </div>
                    <div class="col-xxl-6 col-lg-12 d-inline-flex animate__animated animate__slideInDown"
                        data-wow-delay="0.1s">
                        <select class="form-select w-50 me-3" v-model="filters.city[0]" @change="reloadWork()">
                            <option value="">所有縣市</option>
                            <optgroup v-for="(group, area) in groupedCities" :label="area" :key="area">
                                <option v-for="city in group" :value="city.city" :key="city.city">
                                    {{ city.city }}
                                </option>
                                <option :value="area">所有{{ area.substring(0, 2) }}縣市</option>
                            </optgroup>
                        </select>
                        <div class="input-group w-50">
                            <input type="text" class="form-control" placeholder="用關鍵字查詢" v-model="filters.keyword[0]"
                                @keyup.enter="reloadWork()">
                            <button class="btn btn-success" @click="reloadWork()"><i
                                    class="fa fa-search text-white"></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-7">
                <div class="row">
                    <div class="col-xxl-7 col-lg-12 my-1 text-end animate__animated animate__slideInDown" data-wow-delay="0.1s">
                        <div class="btn-group" role="group">
                            <template v-for="(worktypeID, index) in worktypeIDs" :key="worktypeID.worktypeID">
                                <input type="checkbox" class="btn-check" :id="index"
                                    @click="toggleWorkType(worktypeID.worktypeID)">
                                <label class="btn btn-outline-info" :for="index">{{ worktypeID.worktypeID }}</label>
                                <!-- <img :src="`/src/assets/images/icon-${worktypeID.worktypeID}.png`" width="25px" height="25px"> -->
                            </template>
                        </div>
                    </div>
                    <div class="col-xxl-5 col-lg-12 my-1 text-end animate__animated animate__slideInRight"
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
                            <label class="btn btn-outline-warning" name="btnradio" for="btnradio4"><a
                                    @click="toggleSortByAttendance">參與人數
                                    <i class="fa fa-arrow-down text-primary"
                                        :class="{ 'rotate': isArrowUp }"></i></a></label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--Search Header End-->
        <!--Work Cards Start-->
        <WorkDealer :works="works" :isAnimationEnabled="isAnimationEnabled" />
        <!--Work Cards End-->
        <div class="the-end text-center m-5" v-if="isEnd">已經到底啦~~</div>

        <!-- Sticky Footer Start-->
        <footer
            class="sticky-footer mt-auto py-3 bg-light-var animate__animated animate__slideInUp row d-flex align-items-center justify-content-center"
            data-wow-delay="0.1s">
            <span class="col-3">請向下滾動以瀏覽更多項目</span>
            <span class="col-3">共有 {{ total }} 筆相符的結果</span>
            <div class="col-3 d-flex justify-content-center">
                <span class="mx-2">翻牌動畫開關</span>
                <Toggle id="toggleAnimation" :isChecked=true bgColor="black" ballColor="white"
                    iconClass1="fa-solid fa-circle-check" iconClass2="fa-solid fa-circle-xmark" color1="green" color2="red"
                    v-model="isAnimationEnabled" />
            </div>
            <div class="col-3">
                <span class="mx-2"><i class="fa fa-phone-alt me-2"></i>02 6631 6588</span>
                <span><i class="fa fa-envelope me-2"></i>Mingle.org@gmail.com</span>
            </div>

        </footer>
        <!-- Sticky Footer End-->
    </div>
</template>
    
<script setup>

//// 引用函示庫
import { ref, computed, onMounted, onUnmounted } from 'vue';
import axios from 'axios';


//// 引用元件
import WorkDealer from '@components/WorkDealer.vue';
import Toggle from '@components/Toggle.vue';
// import { useWorkStore } from '@store/workStore';


//// 接收資料庫資料
let works = ref([]);
let total = ref(0);
const worktypeIDs = ref([]);
const cities = ref([]);


//// 接收元件傳值
// const store = useWorkStore();
// store.setWorks(works);


//// 預設參數
// 載入相關
const currentPage = ref(0); // 當前頁數
const size = 12; // 每次載入的數量
const isLoading = ref(false); //避免重複載入
const isEnd = ref(false);
// 排序相關
let direction = 'DESC'; // 排序方向
let property = 'views'; // 排序屬性
const isArrowUp = ref(true);// 排序按紐的箭頭方向
// 篩選相關
const areaOrder = ['北部區域', '中部區域', '南部區域', '東部區域', '外島區域'];
let filters = ref({
    worktype: [],
    city: [''],
    keyword: [''],
});
// 其他
const isSticky = ref(false); // Sticky Header
const isAnimationEnabled = ref(true);


//// 生命週期
onMounted(async () => {
    await loadWorktype();
    await loadCity();
    await loadWork();
    window.addEventListener('scroll', infiniteScroll);
    window.addEventListener('scroll', checkSticky);
    // document.body.classList.add('no-scroll');
});
onUnmounted(() => {
    window.removeEventListener('scroll', infiniteScroll);
    window.removeEventListener('scroll', checkSticky);
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
                    property: property
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
        // 如果 worktypeID 已經在 filters.worktypeID 中，移除它
        filters.value.worktype.splice(index, 1);
    } else {
        filters.value.worktype.push(worktypeID);
    }

    reloadWork(); // 重新載入工作列表
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

// Sticky Header
const checkSticky = () => {
    isSticky.value = window.scrollY > 45;
};

</script>

<style scoped>
.bg-light-var {
    background-color: var(--light);
}


.btn-group .btn {
    color: var(--dark);
}
.btn-group .btn-outline-info:hover,
.btn-group .btn-outline-info.active {
    color: #FFFFFF;
    background-color: var(--info);
}

.btn-group .btn-outline-warning:hover,
.btn-group .btn-outline-warning.active {
    color: #FFFFFF;
    background-color: var(--warning);
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

.fa {
    color: chocolate;
}

.container-fluid :deep() .fa {
    color: chocolate;
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