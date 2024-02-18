<template>
    <swiper :style="{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff',
    }" :effect="'cards'" :grabCursor="true" :navigation="true" :modules="modules"
        :autoplay="{ delay: autoplayDelay, disableOnInteraction: true }" class="mySwiper">
        <swiper-slide class="list-item overflow-hidden" v-for="work in works" :key="work.workid">
            <router-link class="router-link" :to="`/work-detail/${work.workid}`">
                <div class="position-relative overflow-hidden">
                    <img v-if="work.photosBase64.length" class="img-fluid" :src="work.photosBase64" :alt="work.name">
                    <img v-else class="img-fluid" src="@images/ImageNotFound.jpg" :alt="work.name">
                    <div class="bg-info rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                        {{ work.worktype }}</div>
                    <div class="bg-success rounded-top text-white position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                        {{ work.city }}</div>
                    <button v-if="isLoggedIn" type="button"
                        class="btn rounded-circle keep-btn position-absolute end-0 top-0 m-3"
                        :class="{ 'active': work.kept }" @click.stop.prevent="toggleKeepWork(work.workid, work.kept)"><i
                            class="fa-solid fa-heart"></i></button>
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
            </router-link>
        </swiper-slide>
    </swiper>
</template>

<script setup>
//// 引用外部JS
import { toast } from 'vue3-toastify';
// Swiper.js
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, EffectCards, Navigation } from 'swiper/modules';
const modules = [Autoplay, EffectCards, Navigation];


//// 引用套件
import { ref, onMounted, computed, watch } from 'vue';
import axios from 'axios';
import { useUserStore } from '@store/userStore-localStorage.js';




// Define props
const props = defineProps({
    size: {
        type: Number,
        default: 10,
    },
    direction: {
        type: String,
        default: 'DESC'
    },
    property: {
        type: String,
        default: 'views'
    },
    autoplayDelay: {
        type: Number,
        default: 1000
    },
    landlordid: {
        type: Number,
        default: null
    }
});


//// 宣告變數
// 接收資料
let works = ref([]);
const userID = localStorage.getItem('userID');
const userStore = useUserStore();
const isLoggedIn = computed(() => userStore.isLoggedIn);
// 載入相關
const currentPage = ref(0); // 當前頁數
const isLoading = ref(false); // 避免重複載入
const isEnd = ref(false); // 停止載入工作
const totals = ref(0); // 總工作數
// 篩選相關
let filters = ref({
    showOnShelfOnly: true,
    hideFull: true,
    hideDeleted: true,
    hideExpired: true,
    landlordid: props.landlordid,
});

// let autoplay = ref(true);

const emit = defineEmits(['update-totals']);
watch(totals, (newVal) => {
    emit('update-totals', newVal);
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
                    property: props.property,
                    userID: userID,
                }
            }
        );
        totals.value = response.data.totalElements;
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


const addWorkToKeepList = async (workId) => {
    try {
        await axios.post(`${import.meta.env.VITE_APP_API_URL}/api/volunteer/addWorkToKeepList`, null, {
            params: {
                volunteerId: userID,
                workId: workId
            }
        });
    } catch (error) {
        console.error('Failed to add work to keep list:', error);
    }
}

const removeWorkFromKeepList = async (workId) => {
    try {
        await axios.post(`${import.meta.env.VITE_APP_API_URL}/api/volunteer/removeWorkFromKeepList`, null, {
            params: {
                volunteerId: userID,
                workId: workId
            }
        });
    } catch (error) {
        console.error('Failed to remove work from keep list:', error);
    }
}

const toggleKeepWork = (workId, kept) => {
    if (kept) {
        removeWorkFromKeepList(workId);
        toast("已從心願清單移除", {})
    } else {
        addWorkToKeepList(workId);
        toast("已新增至心願清單", {})
    }
    // 更新 work.kept 的值
    const work = works.value.find(work => work.workid === workId);
    if (work) {
        work.kept = !kept;
    }
}


</script>

<style scoped>
.list-item {
    border: 2px solid var(--black) !important;
    background-color: var(--white);
    border-radius: 12px;
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
    border-top: 1px solid var(--black) !important;
}

.list-item .border-end {
    border-right: 1px solid var(--black) !important;
}

.list-item .btn .fa-solid {
    height: 28px;
    width: 16px;
    padding: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.list-item .btn {
    border: 0;
    font-size: 1.25rem;
    background-color: var(--white);
    border: 1.5px solid var(--black) !important;
}

.keep-btn:hover,
.keep-btn.active {
    color: white;
    background-color: var(--danger);
}

.router-link {
    color: inherit;
    text-decoration: none;
}

.fa-gratipay {
    font-size: 2em;
}
</style>