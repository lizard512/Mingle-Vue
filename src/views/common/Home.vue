<template>
  <!-- Header Start -->
  <div class="container p-0">
    <div class="row g-0 align-items-center header">
      <div class="col-xl-6 p-5 text-center animate__animated animate__fadeIn">
        <h1 class="display-5 mb-4 title-text">一點 <span class="text-info">幫助</span>
          ，一晚<span class="text-info"> 住宿。</span>
        </h1>
        <p class="display-6 mb-4 pb-2 text-dark-var">全台 26 縣市提供打工換宿</p>
        <a href="" class="btn btn-secondary py-3 px-5">了解詳情</a>
      </div>
      <div class="col-xl-6">
        <swiper :style="{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }" :centeredSlides="true" :loop="true" :navigation="true" :modules="modules" :pagination="{ clickable: true }"
          :autoplay="{ disableOnInteraction: true }" class="mySwiper">
          <swiper-slide><img src="@images/carousel-1.jpg" alt="..."></swiper-slide>
          <swiper-slide><img src="@images/carousel-2.jpg" alt="..."></swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
  <!-- Header End -->
  <!--Work Card Start-->
  <div class="container">
    <h2 class="text-center mt-5">目前正在徵求幫助者的項目</h2>
    <h5 class="text-center text-info mb-2">來尋找最適合你的打工換宿機會！</h5>
    <div class="row">
      <div class="col-xxl-3 col-lg-5 col-10 mx-auto work-deck">
        <h3 class="badge bg-warning fs-4">最多人看</h3>
        <WorkDeck :autoplayDelay="4600" />
      </div>
      <div class="col-xxl-3 col-lg-5 col-10 mx-auto work-deck">
        <h3 class="badge bg-warning fs-4">最新上架</h3>
        <WorkDeck property="createdAt" :autoplayDelay="4700" />
      </div>
      <div class="col-xxl-3 col-lg-5 col-10 mx-auto work-deck">
        <h3 class="badge bg-warning fs-4">即將截止</h3>
        <WorkDeck property="endDate" direction="ASC" :autoplayDelay="4800" />
      </div>
      <div class="col-xxl-3 col-lg-5 col-10 mx-auto work-deck">
        <h3 class="badge bg-warning fs-4">搶手項目</h3>
        <WorkDeck property="attendance" :autoplayDelay="4900" />
      </div>
    </div>
  </div>
  <!--Work Card End-->
  <!--Reviews Start-->
  <div class="container review-container">
    <h2 class="text-center mt-5">好評不斷的打工項目</h2>
    <h5 class="text-center text-info">來看看參加過的幫助者們怎麼說！</h5>
    <swiper v-if="reviews.length" :loop="true" :slidesPerView="3" :spaceBetween="30" :freeMode="true" :speed="2500"
      :autoplay="{ delay: 0, disableOnInteraction: true }" :modules="modules" class="review-swiper">
      <swiper-slide v-for="(review, index) in firstHalf">
        <div class="scrolling-review p-4 my-5">
          <div class="d-flex">
            <img class="img-fluid" src="@images/user/woman.png" style="width: 50px; height: 50px;">
            <div class="">
              <h5 class="mb-1">工作名稱 {{ index + 1 }}</h5>
              <h6 class="card-title text-md-start text-secondary"> 評價分數: <span class="text-primary"
                  v-for="i in review.stars" :key="i"><i class="fa-solid fa-star"></i></span><span
                  v-for="i in 5 - review.stars" :key="i"><i class="fa-regular fa-star"></i></span></h6>
            </div>
          </div>
          <p class="text-truncate">{{ review.content }}</p>
        </div>
      </swiper-slide>
    </swiper>
    <swiper v-if="reviews.length" :loop="true" :slidesPerView="3" :spaceBetween="30" :freeMode="true" :speed="2500"
      :autoplay="{ delay: 0, disableOnInteraction: true, reverseDirection: true}" :modules="modules" class="review-swiper">
      <swiper-slide v-for="(review, index) in secondHalf">
        <div class="scrolling-review p-4 my-5">
          <div class="d-flex">
            <img class="img-fluid" src="@images/user/woman.png" style="width: 50px; height: 50px;">
            <div class="">
              <h5 class="mb-1">工作名稱 {{ index + 1 }}</h5>
              <h6 class="card-title text-md-start text-secondary"> 評價分數: <span class="text-primary"
                  v-for="i in review.stars" :key="i"><i class="fa-solid fa-star"></i></span><span
                  v-for="i in 5 - review.stars" :key="i"><i class="fa-regular fa-star"></i></span></h6>
            </div>
          </div>
          <p class="text-truncate">{{ review.content }}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
  <!--Reviews End-->
</template>
  
<script setup>
//// 引用套件
import { ref, onMounted, computed } from 'vue';
import axios from 'axios';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { FreeMode, Autoplay, Pagination, Navigation } from 'swiper/modules';
const modules = [FreeMode, Autoplay, Pagination, Navigation];

//// 引用元件
import WorkDeck from '@components/WorkDeck.vue';

//// 生命週期
onMounted(() => {
  getReview();
});

//// 宣告變數
const reviews = ref([]);
const firstHalf = computed(() => reviews.value.slice(0, reviews.value.length / 2));
const secondHalf = computed(() => reviews.value.slice(reviews.value.length / 2));

const getReview = async () => {
  const response = await axios.get(`${import.meta.env.VITE_APP_API_URL}/review/getReviewsByStarsDesc?limit=10`);
  reviews.value = response.data.content;
}

</script>
  

<!-- Customized CSS -->
<style scoped>
.header {
  background-color: var(--light);
}

.title-text {
  color: var(--black);
}

.work-deck {
  height: 100%;
  text-align: center;
  padding: 12px 32px;

}

.swiper-slide {
  text-align: center;
}

.swiper-slide img {
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
}


.review-container {
}

.review-swiper {
  margin-top: -25px;
  height: 200px;
}

.scrolling-review {
  background-color: var(--light);
}
</style>