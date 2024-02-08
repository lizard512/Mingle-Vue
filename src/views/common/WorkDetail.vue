<template>
    <div class="container py-5">
        <div class="row">
            <div class="col-8 card">
                <div class="card-body">
                    <h5 class="card-title">{{ work.name }}</h5>
                    <p class="card-text">{{ work.description }}</p>
                    <p class="card-text">工作類型: {{ work.worktype }}</p>
                    <p class="card-text">狀態: {{ work.status }}</p>
                    <p class="card-text">備註: {{ work.notes }}</p>
                    <p class="card-text">城市: {{ work.city }}</p>
                    <p class="card-text">地址: {{ work.address }}</p>
                    <p class="card-text">開始日期: {{ work.startDate }}</p>
                    <p class="card-text">結束日期: {{ work.endDate }}</p>
                    <p class="card-text">最小報名天數: {{ work.minPeriod }}</p>
                    <p class="card-text">最高招募人數: {{ work.maxAttendance }}</p>
                    <p class="card-text">已報名人數: {{ work.attendance }}</p>
                    <p class="card-text">工作時段: {{ work.workTime }}</p>
                    <p class="card-text">休假制度: {{ work.vacation }}</p>
                    <p class="card-text">年齡限制: {{ work.ageRestriction }}</p>
                    <p class="card-text">性別限制: {{ work.genderRestriction }}</p>
                    <p class="card-text">學歷要求: {{ work.educationRestriction }}</p>
                    <p class="card-text">工作經歷要求: {{ work.experienceRestriction }}</p>
                    <p class="card-text">語言要求: {{ work.languageRestriction }}</p>
                    <p class="card-text">駕照要求: {{ work.licenseRestriction }}</p>
                    <p class="card-text">打工福利: {{ work.benefits }}</p>
                    <p class="card-text">建立時間: {{ work.createdAt }}</p>
                    <p class="card-text">更新時間: {{ work.updatedAt }}</p>
                    <p class="card-text">是否刪除: {{ work.isDeleted }}</p>
                    <p class="card-text">瀏覽量: {{ work.views }}</p>
                </div>
            </div>
            <div class="col-4 text-center">
                <button type="button" class="btn keep-btn" :class="{ 'active': isKept }"
                    @click.stop.prevent="toggleKeepWork"><i class="fa-brands fa-gratipay"></i></button>
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
            </div>
            <button class="btn btn-light" @click="apply">報名</button>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';
import { toast } from 'vue3-toastify';

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


onMounted(async () => {
    window.scrollTo(0, 0);
    await checkIfWorkIsKept(workID);
    await loadWorkData();
    await increaseViewCount();
});


const loadWorkData = async () => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_APP_API_URL}/api/work/getWork/${workID}`);
        work.value = response.data;
    } catch (error) {
        console.error('Failed to fetch work data:', error);
    }
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
        router.push({ name: 'Order1', query: { workID: workID } });
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
</style>