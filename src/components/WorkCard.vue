<template>
    <div class="container-fluid px-5 pt-3">
        <div class="row g-4">
            <div class="col-xxl-2 col-xl-3 col-lg-4 col-md-6 " v-for="(work, index) in works" :key="work.workid">
                <router-link class="router-link" :to="`/work-detail/${work.workid}`">
                    <!-- <transition name="flip"> -->
                    <!-- 開牌 -->
                    <div v-if="!isFliping[index]"
                        class="list-item rounded overflow-hidden animate__animated animate__flipInY">
                        <div class="position-relative overflow-hidden">
                            <img v-if="work.photosBase64.length" class="img-fluid" :src="work.photosBase64" :alt="work.name">
                            <img v-else class="img-fluid" src="@images/ImageNotFound.jpg" :alt="work.name">
                            <div class="bg-info rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                                {{ work.worktype }}</div>
                            <div
                                class="bg-success rounded-top text-white position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                                {{ work.city }}</div>
                            <button type="button" class="btn position-absolute end-0 top-0 m-3"
                                :class="{ 'active': isKept }" @click.stop.prevent="keepWork"><i
                                    class="fa-brands fa-gratipay"></i></button>
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
                    <!-- 蓋牌 -->
                    <div v-else
                        class="list-item rounded overflow-hidden placeholder-glow animate__animated animate__flipOutY"
                        :style="{ animationDelay: `${index * 0.1}s`, opacity: 1 }">
                        <div class="position-relative overflow-hidden">
                            <img class="img-fluid" src="@images/grey.jpg" :alt="work.name">
                            <div class="bg-info rounded text-info position-absolute start-0 top-0 m-4 py-1 px-3">
                                讀取</div>
                            <div
                                class="bg-success rounded-top text-success position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                                讀取</div>
                            <button type="button" class="btn position-absolute end-0 top-0 m-3"
                                :class="{ 'active': isKept }" @click.stop.prevent="keepWork"><i
                                    class="fa-brands fa-gratipay"></i></button>
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
                    <!-- </transition> -->
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { toast } from 'vue3-toastify';
// import { useWorkStore } from '@store/workStore';
// const store = useWorkStore();

// Define props
const props = defineProps({
    works: Array,
});


const isKept = ref(false);

// 翻牌模擬器好難玩OAQ
let isFliping = ref([]);
let lastFilp = ref(0); // 保存上一次翻開的進度
watch(() => props.works.length, (newLength) => {
    if (newLength < lastFilp.value) {
        lastFilp.value = 0;
        isFliping.value = [];
    }
    if (newLength > lastFilp.value) {
        isFliping.value = [...isFliping.value, ...Array(newLength - lastFilp.value).fill(true)];
        for (let i = lastFilp.value; i < newLength; i++) {
            new Promise((resolve) => {
                // 蓋牌
                setTimeout(() => {
                    isFliping.value[i] = true;
                    resolve();
                }, 500+i * 100); // 決定每次蓋牌以後多久開牌，但和animationDelay是分開計算的
            }).then(() => {
                // 開牌
                isFliping.value[i] = false;
            });
        }
        lastFilp.value = newLength;
    }

});

const keepWork = () => {
    isKept.value = !isKept.value;
    if (isKept.value) {
        toast("已新增至心願清單", {})
    } else {
        toast("已從心願清單移除", {})
    }

    ; // ToastOptions
}
</script>

<style scoped>
.list-item {
    box-shadow: 0 0 25px rgba(0, 0, 0, .15);
}

.list-item img {
    transition: .5s;
    aspect-ratio: 1 / 1;
    width: 100%;
    height: 100%;
    object-fit: cover; /* 裁減以符合元件大小 */
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