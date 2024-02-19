<template>
    <swiper v-if="reviews.length" :loop="true" :slidesPerView="3" :spaceBetween="30" :freeMode="true" :speed="2500"
        :autoplay="{ delay: 0, disableOnInteraction: true, reverseDirection: reverseDirection }" :modules="modules"
        class="review-swiper">
        <swiper-slide v-for="review in reviews">
            <div class="scrolling-review p-4 my-5">
                <div class="">
                    <RouterLink :to="`/work-detail/${review.workid}`">
                        <h5 class="mb-1 text-truncate">{{ review.workName }}</h5>
                    </RouterLink>
                    <h6 class="card-title text-md-start text-secondary"> 評價分數: <span class="text-primary"
                            v-for="i in review.stars" :key="i"><i class="fa-solid fa-star"></i></span><span
                            v-for="i in 5 - review.stars" :key="i"><i class="fa-regular fa-star"></i></span></h6>
                    <p class="my-text-truncate">{{ review.content }}</p>
                </div>
                <img v-if="review.photosBase64.length" class="img-fluid" :src="review.photosBase64" :alt="review.name">
                <img v-else class="img-fluid" src="@images/ImageNotFound.jpg" alt="review-photo">
            </div>
        </swiper-slide>
    </swiper>
    <!--Spinner Start-->
    <div v-else id="spinner">
        <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
    <!--Spinner End-->
</template>

<script setup>
//// 引用套件
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
// import required modules
import { FreeMode, Autoplay } from 'swiper/modules';
const modules = [FreeMode, Autoplay];

const props = defineProps({
    reviews: {
        type: Array,
        required: true
    },
    reverseDirection: {
        type: Boolean,
        default: false
    }
});
</script>

<style scoped>

#spinner {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 175px;
}
/* .review-container {
} */
.my-text-truncate {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.review-swiper {
    margin-top: -25px;
    height: 200px;
}

.scrolling-review {
    background-color: var(--light);
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 2px solid var(--black);
    height: 75%;
}

.scrolling-review img {
    height: 100%;
    width: 33%;
    aspect-ratio: 4 / 3;
    object-fit: cover;
    margin-left: 8px;
}
</style>