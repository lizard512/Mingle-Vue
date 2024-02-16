<template>
    <div class="container py-5">
        <div class="row">
            <div class="card col-8">
                <div class="card-body">
                    <h2 class="card-title text-center my-4">{{ work.name }}</h2>
                    <h4 class="mt-4 text-center">工作內容</h4>
                    <hr class="divider  rounded mb-4">
                    <p class="card-text my-4">
                    <p class="fw-bold">工作內容：</p> {{ work.description }}</p>
                    <p class="card-text"><span class="fw-bold">工作類型：</span> {{ work.worktype }}</p>
                    <p class="card-text"><span class="fw-bold">地址：</span> {{ work.city }}{{ work.address }}</p>
                    <p class="card-text"><span class="fw-bold">工作時段：</span> {{ work.workTime }}</p>
                    <p class="card-text"><span class="fw-bold">打工福利：</span> {{ work.benefits }}</p>
                    <p class="card-text"><span class="fw-bold">休假制度：</span> {{ work.vacation }}</p>
                    <h4 class="mt-4 text-center">報名資訊</h4>
                    <hr class="divider rounded mb-4">
                    <p class="card-text"><span class="fw-bold">開始日期：</span> {{ work.startDate }}
                    </p>
                    <p class="card-text"><span class="fw-bold">結束日期：</span> {{ work.endDate }}</p>
                    <p class="card-text"><span class="fw-bold">最小報名天數：</span> {{ work.minPeriod }}</p>

                    <h4 class="mt-4 text-center">工作要求</h4>
                    <hr class="divider rounded mb-4">
                    <p class="card-text"><span class="fw-bold">年齡限制：</span> {{ work.ageRestriction }}</p>
                    <p class="card-text"><span class="fw-bold">性別限制：</span> {{ work.genderRestriction }}</p>
                    <p class="card-text"><span class="fw-bold">學歷要求：</span> {{ work.educationRestriction }}</p>
                    <p class="card-text"><span class="fw-bold">工作經歷要求：</span> {{ work.experienceRestriction }}</p>
                    <p class="card-text"><span class="fw-bold">語言要求：</span> {{ work.languageRestriction }}</p>
                    <p class="card-text"><span class="fw-bold">證照要求：</span> {{ work.licenseRestriction }}</p>
                    <h4 class="mt-4 text-center">其他資訊</h4>
                    <hr class="divider rounded mb-4">
                    <p class="card-text"><span class="fw-bold">建立時間：</span> {{ work.createdAt }}</p>
                    <p class="card-text"><span class="fw-bold">更新時間：</span> {{ work.updatedAt }}</p>

                    <p class="card-text"><span class="fw-bold">狀態：</span> {{ work.status }}</p>
                </div>
            </div>
            <div class="col-4 text-center">

                <div v-if="work.photosBase64 && work.photosBase64.length" style="max-heightht: 400px;">
                    <swiper :style="{
                        '--swiper-navigation-color': '#fff',
                        '--swiper-pagination-color': '#fff',
                    }" :centeredSlides="true" :loop="true" :spaceBetween="10" :navigation="true"
                        :thumbs="{ swiper: thumbsSwiper }" :modules="modules" class="mySwiper2">

                        <swiper-slide v-for="(photo, index) in work.photosBase64" :key="index"><img :src="photo"
                                :alt="index"></swiper-slide>
                    </swiper>
                    <swiper v-if="work.photosBase64.length > 1" @swiper="setThumbsSwiper" :loop="true" :spaceBetween="10"
                        :slidesPerView="4" :freeMode="true" :watchSlidesProgress="true" :modules="modules" class="mySwiper">
                        <swiper-slide v-for="(photo, index) in work.photosBase64" :key="index"><img :src="photo"
                                :alt="index"></swiper-slide>
                    </swiper>
                </div>
                <img v-else class="img-fluid" src="@images/ImageNotFound.jpg" :alt="work.name">
                <div class="card mb-4">
                    <div class="card-body text-center position-relative lord-info">
                        <button type="button" class="btn btn-info position-absolute" style="left: 5%; top: 75px;"
                            @click="navigateToUserProfile"><i class="fa-solid fa-circle-info me-1"></i>房東資訊</button>
                        <img v-if="userDetail.photoBase64" :src="userDetail.photoBase64" alt="user"
                            class="rounded-circle img-fluid" style="width: 100px;">
                        <img v-else src="@images/empty-avatar.png" alt="user" class="rounded-circle img-fluid"
                            style="width: 100px;">
                        <button type="button" class="btn btn-primary position-absolute" style="right: 5%; top: 75px;"
                            @click="navigateToChatroom"><i class="fa-solid fa-comment-dots me-1"></i>聯絡房東</button>

                        <h5 class="my-2">{{ userDetail.name }}</h5>
                        <p class="text-muted my-2">{{ userDetail.introduction }}</p>
                        <hr>
                    </div>
                </div>
                <p class="card-text mt-4 fs-5"><span class="fw-bold"><i
                            class="fa-solid fa-person-running me-2"></i>已報名人數：</span>
                    <span :class="{
                        'text-success': work.remaining >= 10,
                        'text-primary': work.remaining < 10
                            && work.remaining >= 5
                        , 'text-danger': work.remaining < 5
                    }
                        ">{{ work.attendance }} / {{ work.maxAttendance
    }}</span>
                </p>
                <p class="card-text fs-5"><span class="fw-bold"><i class="fa-solid fa-eye me-2"></i>瀏覽量：</span> {{
                    work.views }}
                </p>
                <button type="button" class="btn keep-btn me-4" :class="{ 'active': isKept }"
                    @click.stop.prevent="toggleKeepWork"><i class="fa-brands fa-gratipay"></i></button>
                <button v-if="work.attendance < work.maxAttendance" class="btn btn-danger" @click="apply"><i
                        class="fa-solid fa-screwdriver-wrench me-2"></i>報名</button>
                <button v-else class="btn btn-danger" disabled><i
                        class="fa-solid fa-circle-exclamation me-2"></i>已額滿</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';
import { toast } from 'vue3-toastify';
import Swal from 'sweetalert2'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
const modules = [FreeMode, Navigation, Thumbs];
const thumbsSwiper = ref(null);

const setThumbsSwiper = (swiper) => {
    thumbsSwiper.value = swiper;
};


const isKept = ref(false);
const route = useRoute();
const userID = localStorage.getItem('userID');
const workID = route.params.id;
const router = useRouter();
const work = ref({});
const userDetail = ref({});


onMounted(async () => {
    window.scrollTo(0, 0);
    await checkIfWorkIsKept(workID);
    await loadWorkData();
    await loadUserData();
    await increaseViewCount();
});

const loadWorkData = async () => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_APP_API_URL}/api/work/getWork/${workID}`);
        // 開始日
        response.data.startDate = dateFormat(new Date(response.data.startDate));
        // 結束日
        response.data.endDate = dateFormat(new Date(response.data.endDate));
        // 創建日
        response.data.createdAt = dateFormat(new Date(response.data.createdAt));
        // 修改日
        response.data.updatedAt = dateFormat(new Date(response.data.updatedAt));
        response.data.remaining = response.data.maxAttendance - response.data.attendance;
        work.value = response.data;
    } catch (error) {
        console.error('Failed to fetch work data:', error);
    }
}

const loadUserData = async () => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_APP_API_URL}/api/volunteerDetail/lordinfo/${work.value.landlordid}`)
        userDetail.value = response.data;
    } catch (error) {
        console.error('Failed to fetch user data:', error);
    }
}


const dateFormat = (date) => {
    return `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${('0' + date.getDate()).slice(-2)}`;
}

const navigateToChatroom = () => {
    // chatStore.setExternalID(userID)
    // chatStore.setExternalName(user.value.name)
    router.push({ name: "Chatroom", query: { externalID: userDetail.value.userid, externalName: userDetail.value.name } });
};
const navigateToUserProfile = () => {
    router.push({ path: `/user-profile/${userDetail.value.userid}` });
}

const addWorkToKeepList = async () => {
    try {
        await axios.post(`${import.meta.env.VITE_APP_API_URL}/api/volunteer/addWorkToKeepList`, null, {
            params: {
                volunteerId: userID,
                workId: workID
            }
        });
    } catch (error) {
        console.error('Failed to add work to keep list:', error);
    }
}

const removeWorkFromKeepList = async () => {
    try {
        await axios.post(`${import.meta.env.VITE_APP_API_URL}/api/volunteer/removeWorkFromKeepList`, null, {
            params: {
                volunteerId: userID,
                workId: workID
            }
        });
    } catch (error) {
        console.error('Failed to remove work from keep list:', error);
    }
}


const increaseViewCount = async () => {
    try {
        await axios.post(`${import.meta.env.VITE_APP_API_URL}/api/work/increaseViewCount/${workID}`);
    } catch (error) {
        console.error('Failed to increase view count:', error);
    }
}

const toggleKeepWork = () => {
    isKept.value = !isKept.value;
    if (isKept.value) {
        addWorkToKeepList();
        toast("已新增至心願清單", {})
    } else {
        removeWorkFromKeepList();
        toast("已從心願清單移除", {})
    }
    ;
}

const checkIfWorkIsKept = async (workId) => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_APP_API_URL}/api/volunteer/isWorkKeptByVolunteer`, {
            params: {
                volunteerId: userID,
                workId: workId
            }
        });
        isKept.value = response.data;
    } catch (error) {
        console.error('Failed to check if work is kept:', error);
    }
}

const apply = async () => {
    try {
        if (userID != userDetail.value.userid) {
            router.push({ name: 'Order1', query: { workID: workID } });
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
                icon: "warning",
                title: "無法報名自己的工作唷"
            })
        }
    } catch (error) {
        console.error('Failed to apply', error);
    }
}
</script>

<style scoped>
.swiper {
    width: 100%;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
}

.swiper-slide {
    background: #fff;
    background-size: cover;
    background-position: center;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.mySwiper2 {
    height: 80%;
    width: 100%;
}

.mySwiper {
    height: 20%;
    box-sizing: border-box;
    padding: 10px 0;
}

.mySwiper .swiper-slide {
    width: 25%;
    height: 100%;
    opacity: 0.4;
}

.mySwiper .swiper-slide-thumb-active {
    opacity: 1;
}

.fa-gratipay {
    font-size: 2em;
}

.keep-btn:hover,
.keep-btn.active {
    color: var(--danger);
}

.keep-btn {
    border: 0;
}

.divider {
    border: 2px solid
}

.lord-info {
    background-color: aliceblue;
}
</style>