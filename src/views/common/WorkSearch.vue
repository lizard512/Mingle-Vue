<template>
    <!-- Search Start -->
    <div id="work-search">
        <div class="container-fluid bg-primary mb-5" style="padding: 35px;">
            <div class="container">
                <div class="row g-2">
                    <div class="col-md-10">
                        <div class="row g-2">
                            <div class="col-md-4">
                                <input type="text" class="form-control border-0 py-3" placeholder="用關鍵字查詢">
                            </div>
                            <div class="col-md-4">
                                <select class="form-select border-0 py-3">
                                    <option selected>換宿地區</option>
                                    <option value="1">東區</option>
                                    <option value="2">北區</option>
                                    <option value="3">西區</option>
                                    <option value="4">南區</option>
                                </select>
                            </div>
                            <div class="col-md-4">
                                <select class="form-select border-0 py-3">
                                    <option selected>打工類型</option>
                                    <option value="1">類型1</option>
                                    <option value="2">類型2</option>
                                    <option value="3">類型3</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <button class="btn btn-dark border-0 w-100 py-3">開始搜尋</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- Search End -->

        <!-- List Start -->
        <div class="container-xxl py-5">
            <div class="container">
                <div class="row g-0 gx-5 align-items-end">
                    <div class="col-lg-6">
                        <div class="text-start mx-auto mb-5 wow animate__animated animate__slideInLeft"
                            data-wow-delay="0.1s">
                            <h1 class="mb-3">打工機會</h1>
                            <p>快來查看正在徵求幫助者的項目！</p>
                        </div>
                    </div>
                    <div class="col-lg-6 text-start text-lg-end wow animate__animated animate__slideInRight"
                        data-wow-delay="0.1s">
                        <ul class="nav nav-pills d-inline-flex justify-content-end mb-5">
                            <!-- <li class="nav-item me-2">
                            <a class="btn btn-outline-primary active" data-bs-toggle="pill" href="#tab-1">熱門項目</a>
                        </li>
                        <li class="nav-item me-2">
                            <a class="btn btn-outline-primary" data-bs-toggle="pill" href="#tab-2">最新開放</a>
                        </li>
                        <li class="nav-item me-0">
                            <a class="btn btn-outline-primary" data-bs-toggle="pill" href="#tab-3">即將截止</a>
                        </li> -->
                            <ul class="nav nav-pills d-inline-flex justify-content-end mb-5">
                                <li class="nav-item me-2">
                                    <a class="btn btn-outline-primary active" data-bs-toggle="pill"
                                        @click="getWorks('/getHotWorks')">熱門項目</a>
                                </li>
                                <li class="nav-item me-2">
                                    <a class="btn btn-outline-primary" data-bs-toggle="pill"
                                        @click="getWorks('/getLatestWorks')">最新上架</a>
                                </li>
                                <li class="nav-item me-2">
                                    <a class="btn btn-outline-primary" data-bs-toggle="pill"
                                        @click="getWorks('/getDeadlineWorks')">即將截止</a>
                                </li>
                                <li class="nav-item me-2">
                                    <a class="btn btn-outline-primary" data-bs-toggle="pill"
                                        @click="getWorksByRemainingSpots">剩餘名額 <i class="fa fa-arrow-down"
                                            :class="{ 'rotate': isArrowUp }"></i></a>
                                </li>
                            </ul>
                        </ul>
                    </div>
                </div>
                <div>
                    <div class="row g-4">
                        <div class="col-lg-3 col-md-6" v-for="work in works" :key="work.workid">
                            <div class="list-item rounded overflow-hidden">
                                <div class="position-relative overflow-hidden">
                                    <a href=""><img class="img-fluid" src="@images/台東熱氣球活動.jpg" :src="work.photo"
                                            :alt="work.name"></a>
                                    <div
                                        class="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                                        {{ work.worktype }}</div>
                                    <div
                                        class="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                                        {{ work.city }}</div>
                                </div>
                                <div class="p-4 pb-0">
                                    <a class="d-block h5 mb-2" href="">{{ work.name }}</a>
                                    <p><i class="fa fa-map-marker text-primary me-2"></i>{{ work.address }}</p>
                                    <p>{{ work.description }}</p>
                                </div>
                                <div class="d-flex border-top">
                                    <small class="flex-fill text-center border-end py-2"><i
                                            class="fa fa-calendar text-primary me-2"></i>{{ formatDate(work.startDate) }} ~
                                        {{ formatDate(work.endDate) }}</small>
                                </div>
                                <div class="d-flex border-top">
                                    <small class="flex-fill text-center border-end py-2"><i
                                            class="fa fa-user text-primary me-2"></i>剩下 {{ work.maxAttendance }} 個名額</small>
                                    <small class="flex-fill text-center py-2"><i
                                            class="fa fa-solid fa-eye text-primary me-2"></i>{{
                                                work.views }} 次瀏覽</small>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 text-center py-3 px-5" v-if="isLoading">正在加載...</div>
                    </div>
                </div>
            </div>
        </div>
        <!-- List End -->
    </div>
</template>
    
<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import axios from 'axios';

// 接收從後端傳來的工作資料
let works = ref([]);
// 定義基礎api URL
const baseAPIURL = "http://localhost:8080/api/work";
// 分頁用資料
let page = ref(0);
let isLoading = ref(false);
let isEnd = ref(false);
const size = 1; // 每頁的數量
// 追蹤剩餘名額排序按紐的箭頭是否應該向上
let isArrowUp = ref(false);



onMounted(async () => {
    await loadMore();
    window.addEventListener('scroll', handleScroll);
    // document.body.classList.add('no-scroll');
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
    // document.body.classList.remove('no-scroll');
});

const loadMore = async () => {
    if (isLoading.value || isEnd.value) return;
    isLoading.value = true;
    try {
        const response = await axios.get(`${baseAPIURL}/getWorks?page=${page.value}&size=${size}`);
        works.value = [...works.value, ...response.data.content];
        if (response.data.last) isEnd.value = true;
        else page.value++;
    } catch (error) {
        console.error(error);
    } finally {
        isLoading.value = false;
    }
};

const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        loadMore();
    }
};


// 依照按鈕功能，更改工作排序
const getWorks = (path) => {
    axios.get(baseAPIURL + path)
        .then(response => {
            works.value = response.data;
        })
        .catch(error => {
            console.error(error);
        });
}

// 依照剩餘名額排序工作
const getWorksByRemainingSpots = () => {
    isArrowUp.value = !isArrowUp.value; // 每次點擊時，將 isArrowUp 的值反轉
    if (isArrowUp.value) {
        getWorks('/getWorksByRemainingSpotsAsc');
    } else {
        getWorks('/getWorksByRemainingSpotsDesc');
    }
}

// 格式化日期為"YYYY/MM/DD"
const formatDate = (dateString) => {
    let date = new Date(dateString);
    return `${date.getFullYear()}/${("0" + (date.getMonth() + 1)).slice(-2)}/${("0" + date.getDate()).slice(-2)}`;
}



</script>

<style scoped>
/* #work-search {
    overflow: auto;
    height: calc(100vh - 50px - 100px);
} */

    .fa-arrow-down {
    transition: transform 0.5s;
}

.rotate {
    transform: rotate(180deg);
}
</style>
<!-- <style>
.no-scroll {
    overflow: hidden;
    height: 100vh;
}
</style> -->