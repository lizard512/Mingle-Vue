<template>
    <div class="container-fluid px-5 pt-3">
        <div class="row g-4">
            <div class="col-xxl-2 col-xl-3 col-lg-4 col-md-6 animate__animated animate__fadeIn" v-for="work in works"
                :key="work.workid">
                <div class="list-item rounded overflow-hidden">
                    <div class="position-relative overflow-hidden">
                        <img class="img-fluid" src="@images/台東熱氣球活動.jpg" :src="work.photo"
                            @error="work.photo = '@images/grey.jpg'" :alt="work.name">
                        <div class="bg-info rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                            {{ work.worktype }}</div>
                        <div class="bg-success rounded-top text-white position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                            {{ work.city }}</div>
                    </div>
                    <div class="p-4 pb-0">
                        <p class="text-truncate h5" href="">{{ work.name }}</p>
                        <p class="text-truncate"><i class="fa fa-map-marker me-2"></i>{{
                            work.address }}</p>
                        <!-- <p>{{ work.description }}</p> -->
                    </div>
                    <div class="d-flex border-top">
                        <small class="flex-fill text-center border-end py-2"><i class="fa fa-calendar me-2"></i>{{
                            work.startDate.toString().substring(0, 10) }} ~
                            {{ work.endDate.toString().substring(0, 10) }}</small>
                    </div>
                    <div class="d-flex border-top">
                        <small class="flex-fill text-center border-end py-2"><i class="fa fa-user me-2"></i>{{
                            work.attendance }} /
                            {{ work.maxAttendance }} 人已報名</small>
                        <small class="flex-fill text-center py-2"><i class="fa fa-solid fa-eye me-2"></i>{{
                            work.views }} 次瀏覽</small>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
import { useWorkStore } from '@store/workStore';

const props = defineProps({
    works: Array
});

const store = useWorkStore();
</script>

<style scoped>
.list-item {
    box-shadow: 0 0 30px rgba(0, 0, 0, .15);
}

.list-item img {
    transition: .5s;
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
</style>