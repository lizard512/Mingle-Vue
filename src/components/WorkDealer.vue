<template>
    <div class="container-fluid px-5 pt-3">
        <div class="row g-4">
            <div class="col-xxl-2 col-xl-3 col-lg-4 col-sm-6" v-for="(work, index) in works" :key="work.workid">
                <router-link class="router-link" :to="`/work-detail/${work.workid}`">
                    <!-- 開牌動畫顯示內容 -->
                    <div v-if="!isFliping[index]" class="list-item overflow-hidden"
                        :class="isAnimationEnabled ? 'animate__animated animate__flipInY' : ''">
                        <div class="overflow-hidden position-relative">
                            <!-- 工作照片 -->
                            <img v-if="work.photosBase64.length" class="img-fluid" :src="work.photosBase64"
                                :alt="work.name">
                            <img v-else class="img-fluid" src="@images/ImageNotFound.jpg" :alt="work.name">
                            <div class="bg-info rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                                {{ work.worktype }}</div>
                            <div
                                class="bg-success rounded-top text-white position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                                {{ work.city }}</div>
                            <!-- 收藏按鈕 -->
                            <button v-if="isLoggedIn" type="button"
                                class="btn rounded-circle keep-btn position-absolute end-0 top-0 m-3"
                                :class="{ 'active': work.kept }"
                                @click.stop.prevent="toggleKeepWork(work.workid, work.kept)"><i
                                    class="fa-solid fa-heart"></i></button>
                            <!-- 檢舉按鈕 -->
                            <button type="button" class="btn rounded-circle report-btn position-absolute end-0 bottom-0 m-3"
                                @click.stop.prevent="reportedWorkName = work.name;" data-bs-toggle="modal"
                                data-bs-target="#reportModal">
                                <i class="fa-solid fa-flag"></i>
                            </button>
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
                    <!-- 蓋牌動畫顯示內容 -->
                    <div v-else class="list-item overflow-hidden"
                        :class="isAnimationEnabled ? 'animate__animated animate__flipOutY' : ''"
                        :style="{ animationDelay: `${index * 0.05}s`, opacity: 1 }">
                        <div class="position-relative overflow-hidden">
                            <img class="img-fluid" src="@images/grey.jpg" :alt="work.name">
                            <div class="bg-info rounded text-info position-absolute start-0 top-0 m-4 py-1 px-3">
                                讀取</div>
                            <div
                                class="bg-success rounded-top text-success position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                                讀取</div>
                            <!-- 收藏按鈕 -->
                            <button v-if="isLoggedIn" type="button"
                                class="btn rounded-circle keep-btn position-absolute end-0 top-0 m-3"><i
                                    class="fa-solid fa-heart"></i></button>
                            <!-- 檢舉按鈕 -->
                            <button v-if="isLoggedIn" type="button"
                                class="btn rounded-circle report-btn position-absolute end-0 bottom-0 m-3">
                                <i class="fa-solid fa-flag"></i></button>
                        </div>
                        <div class="p-4 pt-3 pb-1">
                            <p class="placeholder col-10 placeholder-lg"></p>
                            <p class="placeholder col-12"></p>
                        </div>
                        <div class="d-flex border-top ">
                            <small class="flex-fill text-center py-2">
                                <p class="card-text"><span class="placeholder col-4"></span> <span
                                        class="placeholder col-4"></span></p>
                            </small>
                        </div>
                        <div class="d-flex border-top">
                            <small class="flex-fill text-center py-2 border-end">
                                <p class="card-text placeholder col-9"></p>
                            </small>
                            <small class="flex-fill text-center py-2">
                                <p class="card-text placeholder col-9"></p>
                            </small>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
    <!-- 檢舉視窗 -->
    <div class="modal fade" id="reportModal" tabindex="-1" aria-labelledby="reportModalLabel" aria-hidden="true">
        <!--  @hidden.bs.modal="resetModal" -->
        <div class="modal-dialog report-modal modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="reportModalLabel">匿名檢舉"{{ reportedWorkName }}"</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form @submit.prevent="submitReport">
                    <div class="modal-body">
                        <div class="form-group">
                            <label for="reportType">違規類型</label>
                            <select id="reportType" v-model="reportType" class="form-control" required>
                                <option disabled value="">請選擇違規類型</option>
                                <option value="1">此工作令人感到不適或違反善良風俗</option>
                                <option value="2">重覆刊登／複製他人工作圖文</option>
                                <option value="3">標題濫用文字誤導搜尋</option>
                                <option value="4">違反平台政策</option>
                                <option value="5">其他</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="reportReason">詳細原因</label>
                            <textarea id="reportReason" v-model="reportReason" class="form-control" required></textarea>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">關閉</button>
                        <button type="submit" class="btn btn-primary">送出</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
//// 引用套件
import { ref, watch, computed } from 'vue';
import { toast } from 'vue3-toastify';
import axios from 'axios';
import { useUserStore } from '@store/userStore-localStorage.js';


//// 生命週期

/// 定義props
const props = defineProps({
    works: Array,
    isAnimationEnabled: Boolean,
});


//// 初始化變數
const userID = localStorage.getItem('userID');
const isLoggedIn = computed(() => userStore.isLoggedIn);
const userStore = useUserStore();
// const isKept = ref([]); // 工作清單的收藏狀況
let isFliping = ref([]);
let lastFilp = ref(0); // 保存上一次翻開的進度
const reportedWorkName = ref('');
const reportType = ref('');
const reportReason = ref('');

//// 監聽變數
watch(() => props.works.length, (newLength) => {// 翻牌模擬器好難玩OAQ
    if (newLength < lastFilp.value) {
        lastFilp.value = 0;
        isFliping.value = [];
    }
    if (newLength > lastFilp.value) {
        // if (isLoggedIn.value) {
        //     isKept.value = [];
        //     const promises = props.works.map((work, index) => checkIfWorkIsKept(work.workid, index));
        //     Promise.all(promises);// 等待所有的 checkIfWorkIsKept Promise 完成
        // }
        isFliping.value = [...isFliping.value, ...Array(newLength - lastFilp.value).fill(true)];
        for (let i = lastFilp.value; i < newLength; i++) {
            new Promise((resolve) => {
                // 蓋牌
                setTimeout(() => {
                    isFliping.value[i] = true;
                    resolve();
                }, 500 + i * 50); // 決定蓋牌以後多久開牌
            }).then(() => {
                // 開牌
                isFliping.value[i] = false;
            });
        }
        lastFilp.value = newLength;
    }

});

// const checkIfWorkIsKept = async (workId, index) => {
//     try {
//         const response = await axios.get(`${import.meta.env.VITE_APP_API_URL}/api/volunteer/isWorkKeptByVolunteer`, {
//             params: {
//                 volunteerId: userID,
//                 workId: workId
//             }
//         });
//         // 更新 isKept 陣列的值
//         isKept.value[index] = response.data;
//     } catch (error) {
//         console.error('Failed to check if work is kept:', error);
//     }
// }

//// 定義方法
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
    const work = props.works.find(work => work.workid === workId);
    if (work) {
        work.kept = !kept;
    }
}


const submitReport = () => {
    console.log(reportType.value, reportReason.value);
    toast("已提交檢舉，我們將會盡快審核。<br>恕不另行通知審核結果。", { html: true })
}

</script>

<style scoped>
.list-item {
    background-color: rgba(205, 205, 205, 0.3);
    border-radius: 16px;
    border: 2px solid var(--black);
}

.list-item:hover {
    background-color: var(--white);
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

.report-btn:hover,
.report-btn.active {
    color: white;
    background-color: var(--warning);
}


.router-link {
    color: inherit;
    text-decoration: none;
}

/* .fa-gratipay {
    font-size: 2em;
} */
</style>