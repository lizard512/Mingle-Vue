<template>
    <div class="container-fluid px-5 pt-3">
        <div class="row g-4">
            <div class="col-xxl-2 col-xl-3 col-lg-4 col-md-6 animate__animated animate__fadeIn" v-for="work in works"
                :key="work.workid">
                <router-link class="router-link" :to="`/work-detail/${work.workid}`">
                    <div class="list-item rounded overflow-hidden">
                        <div class="position-relative overflow-hidden">
                            <img class="img-fluid" src="@images/台東熱氣球活動.jpg" :src="work.photo"
                                @error="work.photo = '@images/grey.jpg'" :alt="work.name">
                            <div class="bg-info rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                                {{ work.worktype }}</div>
                            <div
                                class="bg-success rounded-top text-white position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                                {{ work.city }}</div>
                            <button type="button" class="btn position-absolute end-0 top-0 m-3"
                                :class="{ 'active': isKept }" @click.stop.prevent="keepWork"><i
                                    class="fa-brands fa-gratipay"></i></button>
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
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { toast } from 'vue3-toastify';
// import { useWorkStore } from '@store/workStore';
// const store = useWorkStore();

const isKept = ref(false);

const props = defineProps({
    works: Array
});

const keepWork = () => {
    isKept.value = !isKept.value;
    if(isKept.value) {
        toast("已新增至心願清單", {})
    }else{
        toast("已從心願清單移除", {})
    }

  ; // ToastOptions
}
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
}</style>