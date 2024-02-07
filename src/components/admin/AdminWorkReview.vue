<template>
    <div>
        <div class="">
            <h2>Work Review</h2>
        </div>

        <div>
            <div class="row">
                <span>審核進度：{{currentIndex}} / {{ total }}</span>
                <div class=" col-xxl-4 col-lg-6 col-12 p-3" v-for="(work, index) in works" :key="work.workid"
                    v-show="index === currentIndex">
                    <router-link class="router-link" :to="`/work-detail/${work.workid}`">
                        <!-- <transition name="flip"> -->
                        <!-- 開牌 -->
                        <div class="list-item overflow-hidden">
                            <div class="overflow-hidden position-relative">
                                <img v-if="work.photosBase64.length" class="img-fluid" :src="work.photosBase64"
                                    :alt="work.name">
                                <img v-else class="img-fluid" src="@images/ImageNotFound.jpg" :alt="work.name">
                                <div class="bg-info rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                                    {{ work.worktype }}</div>
                                <div
                                    class="bg-success rounded-top text-white position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
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
                    <div class="d-flex justify-content-center mt-2">
                        <button class="btn btn-success me-2" @click="showNext">通過</button>
                        <button class="btn btn-danger" @click="showNext">不通過</button>
                    </div>
                </div>
                <div>
                    <div v-if="reportEnds">
                        <p>審核已完成！做的好</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
    
<script setup>
//// 引用函式庫
import { ref, onMounted } from 'vue';
import axios from 'axios';

//// 生命週期
onMounted(async () => {
    await loadWork();
});

//// 初始化變數

// 載入相關
let works = ref([]);
let total = ref(0);
let currentIndex = ref(0);
const currentPage = ref(0); // 當前頁數
const size = 99; // 每次載入的數量
const isLoading = ref(false); //避免重複載入
const isEnd = ref(false);
const reportEnds = ref(false);
// 排序相關
let direction = 'DESC'; // 排序方向
let property = 'createdAt'; // 排序屬性
// 篩選相關
let filters = ref({
    // 自定義條件
    workStatus: ["待審核"],
});


//// 定義方法
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
                }
            }
        );
        total.value = response.data.totalElements;
        works.value = [...works.value, ...response.data.content];
        if (response.data.last) isEnd.value = true;
        else currentPage.value++;
    } catch (error) {
        console.error(error);
    } finally {
        isLoading.value = false;
    }
};

const showNext = () => {
    if (currentIndex.value < works.value.length) {
        currentIndex.value++;
    }
    if (currentIndex.value == works.value.length){
        reportEnds.value = true;
    }
};

</script>
    
<style scoped>
.list-item {
    box-shadow: 0 0 12px rgba(0, 0, 0, .5);
    background-color: var(--white);
    border-radius: 15px;
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
</style>