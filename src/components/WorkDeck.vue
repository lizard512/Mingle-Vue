<template>
    <swiper :effect="'cards'" :grabCursor="true" :navigation="true" :modules="modules" class="mySwiper">
        <swiper-slide v-for="work in works" :key="work.workid">
            <router-link class="router-link" :to="`/work-detail/${work.workid}`">
                <div class="list-item rounded overflow-hidden placeholder-glow">
                    <div class="position-relative overflow-hidden">
                        <img v-if="work.photosBase64.length" class="img-fluid" :src="work.photosBase64" :alt="work.name">
                        <img v-else class="img-fluid" src="@images/ImageNotFound.jpg" :alt="work.name">
                        <div class="bg-info rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                            {{ work.worktype }}</div>
                        <div class="bg-success rounded-top text-white position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                            {{ work.city }}</div>
                    </div>
                    <div class="p-4 pt-3 pb-0">
                        <p class="text-truncate h5">{{ work.name }}</p>
                        <p class="text-truncate"><i class="fa fa-map-marker me-2"></i>{{
                            work.address }}</p>
                    </div>
                    <div class="d-flex border-top">
                        <small class="flex-fill text-center py-2"><i class="fa fa-calendar me-2"></i>{{
                            work.startDate.toString().substring(0, 10) }} ~
                            {{ work.endDate.toString().substring(0, 10) }}</small>
                    </div>
                    <div class="d-flex border-top">
                        <small class="flex-fill text-center py-2 border-end"><i class="fa fa-user me-2"></i>{{
                            work.attendance }} /
                            {{ work.maxAttendance }} 人已報名</small>
                        <small class="flex-fill text-center py-2"><i class="fa fa-solid fa-eye me-2"></i>{{
                            work.views }} 次瀏覽</small>
                    </div>
                </div>
            </router-link>
        </swiper-slide>
    </swiper>
</template>

<script setup>
////
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';
// import required modules
import { EffectCards, Pagination, Navigation } from 'swiper/modules';
const modules = [EffectCards, Navigation];

//// 引用函式庫
import { ref, onMounted } from 'vue';
import axios from 'axios';

//// 接收資料庫資料
let works = ref([]);

//// 預設參數
// 載入相關
const currentPage = ref(0); // 當前頁數
const isLoading = ref(false); // 避免重複載入
const isEnd = ref(false); // 停止載入工作
// 篩選相關
let filters = ref({
    worktype: [],
    city: [''],
    keyword: [''],
});

// Define props
const props = defineProps({
    size: {
        type: Number,
        default: 6
    },
    direction: {
        type: String,
        default: 'DESC'
    },
    property: {
        type: String,
        default: 'views'
    },
});

//// 生命週期
onMounted(async () => {
    await loadWork();
});


//// 方法
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
                    size: props.size,
                    direction: props.direction,
                    property: props.property
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
</script>

<style scoped>
.list-item {
    box-shadow: 0 0 25px rgba(0, 0, 0, .15);
    background-color: var(--light);
}

.list-item img {
    transition: .5s;
    aspect-ratio: 1 / 1;
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* 裁減以符合元件大小 */
    /* object-fit: contain; 保留完整的寬或高 */
    object-position: center;
}

.list-item:hover img {
    transform: scale(1.1);
}

.list-item .border-top {
    border-top: 1px dashed rgba(0, 185, 142, .3) !important;
}

.list-item .border-end {
    border-right: 1px dashed rgba(0, 185, 142, .3) !important;
}

.list-item .btn:hover,
.btn.active {
    color: var(--danger);
}

.list-item .btn {
    border: 0;
}

.router-link {
    color: inherit;
    text-decoration: none;
}

.fa-gratipay {
    font-size: 2em;
}


.swiper {
    width: 50%;
}
</style>