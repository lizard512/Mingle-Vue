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
            <div class="col-4">
                <img v-if="work.photosBase64 && work.photosBase64.length" class="img-fluid" :src="work.photosBase64" :alt="work.name">
                <img v-else class="img-fluid" src="@images/ImageNotFound.jpg" :alt="work.name">
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

const route = useRoute()
const workID = route.params.id
const work = ref({});

onMounted(async () => {
    await loadWorkData();
});


const loadWorkData = async () => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_APP_API_URL}/api/work/getWork/${workID}`);
        work.value = response.data;
    } catch (error) {
        console.error('Failed to fetch work data:', error);
    }
}
</script>