<template>
    <div>
        <div class="">
            <h2>審核工作檢舉</h2>
        </div>
        <div>
            <div class="row" v-for="(work, index) in works" :key="work.workid" v-show="index === currentWork">
                <div class="col-xxl-8 col-12 p-3">
                    <h6 class="text-center">工作審核進度：{{ currentWork }} / {{ totalWorks }}</h6>
                    <router-link class="router-link row" :to="`/work-detail/${work.workid}`">
                        <div class="col-xl-4 col-12">
                            <div class="list-item overflow-hidden">
                                <div class="overflow-hidden position-relative">
                                    <img v-if="work.photosBase64.length" class="img-fluid" :src="work.photosBase64[0]"
                                        :alt="work.name">
                                    <img v-else class="img-fluid" src="@images/ImageNotFound.jpg" :alt="work.name">
                                    <div class="bg-info rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                                        {{ work.worktype }}</div>
                                    <div
                                        class="bg-success rounded-top text-white position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                                        {{ work.city }}</div>
                                </div>
                                <div class="p-4 pt-3 pb-0">
                                    <p class="h5">{{ work.name }}</p>
                                    <p class=""><i class="fa fa-map-marker me-2"></i>{{
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
                        </div>
                        <div class="col-xl-8 col-12">
                            <div class="p-4">
                                <h5 class="mb-3">工作詳情</h5>
                                <p class="mb-2"><strong>工作描述：</strong>{{ work.description }}</p>
                                <p class="mb-2"><strong>工作時段：</strong>{{ work.workTime }}</p>
                                <p class="mb-2"><strong>休假制度：</strong>{{ work.vacation }}</p>
                                <p class="mb-2"><strong>年齡限制：</strong>{{ work.ageRestriction }}</p>
                                <p class="mb-2"><strong>性別限制：</strong>{{ work.genderRestriction }}</p>
                                <p class="mb-2"><strong>學歷要求：</strong>{{ work.educationRestriction }}</p>
                                <p class="mb-2"><strong>工作經歷要求：</strong>{{ work.experienceRestriction }}</p>
                                <p class="mb-2"><strong>語言要求：</strong>{{ work.languageRestriction }}</p>
                                <p class="mb-2"><strong>駕照要求：</strong>{{ work.licenseRestriction }}</p>
                                <p class="mb-2"><strong>打工福利：</strong>{{ work.benefits }}</p>
                                <p class="mb-2"><strong>建立時間：</strong>{{ work.createdAt }}</p>
                                <p class="mb-2"><strong>更新時間：</strong>{{ work.updatedAt }}</p>
                                <p class="mb-2"><strong>是否刪除：</strong>{{ work.isDeleted ? '是' : '否' }}</p>
                                <p class="mb-2"><strong>是否上架：</strong>{{ work.isOnShelf ? '是' : '否' }}</p>
                            </div>
                        </div>
                    </router-link>
                    <div class="d-flex justify-content-center mt-2">
                        <button class="btn btn-success me-2" @click="showNext">通過</button>
                        <button class="btn btn-danger" @click="showNext">封禁</button>
                    </div>
                </div>
                <div class="col-xxl-4 col-12 p-3">
                    <h6 class="text-center">檢舉檢視進度：{{ currentReport }} / {{ totalReports }}</h6>
                    <div v-for="report in reports.filter(r => r.workID === work.workid)" :key="report.reportID"
                        class="list-item m-3 p-3">
                        <h5>檢舉ID：{{ report.reportID }}</h5>
                        <p>違規類型：{{ report.type }}</p>
                        <p>詳細原因：{{ report.reason }}</p>
                        <p>檢舉狀態：{{ report.status }}</p>
                        <p>創建時間：{{ report.createdAt.toString().substring(0, 10) }}</p>
                    </div>
                </div>
            </div>
            <div v-if="reportEnds">
                <p>審核已完成！做的好</p>
            </div>
        </div>
    </div>
</template>
    
<script setup>
//// 引用套件
import { ref, onMounted } from 'vue';
import axios from 'axios';

//// 生命週期
onMounted(async () => {
    await loadReport();
    await loadWork();
});

//// 宣告變數
// 載入相關
const reports = ref([]);
const currentReport = ref(0);
const totalReports = ref(0);
const works = ref([]);
const currentWork = ref(0);
const totalWorks = ref(0);
const reportEnds = ref(false);



//// 定義方法
// 載入待審核的檢舉列表
const loadReport = async () => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_APP_API_URL}/api/report/statusZero`);
        reports.value = response.data;
        totalReports.value = reports.value.length;
    } catch (error) {
        console.error(error);
    }
};

// 根據被檢舉的工作ID載入列表
const loadWork = async () => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_APP_API_URL}/api/report/worksByReportBeans`,
            reports.value);// request body
        works.value = response.data;
        totalWorks.value = works.value.length;
    } catch (error) {
        console.error(error);
    }
};

const showNext = () => {
    if (currentWork.value < works.value.length) {
        currentWork.value++;
    }
    if (currentWork.value == works.value.length) {
        reportEnds.value = true;
    }
};

</script>
    
<style scoped>
.list-item {
    background-color: rgba(150, 100, 0, 0.1);
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