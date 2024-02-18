<template>
  <div class="container-fluid animate__animated animate__fadeIn">

    <!-- Ad Bannner start -->
    <div id="ad-left" class="ad-banner-container">
      <div class="ad-banner" v-for="index in 4" :key="index">
        <p>廣告版面預覽 左{{ index }}</p>
      </div>
    </div>
    <div id="ad-right" class="ad-banner-container">
      <div class="ad-banner" v-for="index in 4" :key="index">
        <p>廣告版面預覽 右{{ index }}</p>
      </div>
    </div>
    <!-- Ad Bannner end -->

    <div class="container p-0">
      <!-- Header Start -->
      <div class="row g-0 align-items-center header">
        <div class="col-xl-6 p-5 text-center animate__animated animate__fadeIn">
          <h1 class="display-5 mb-4 title-text">一點 <span class="text-info">幫助</span>
            ，一晚<span class="text-info"> 住宿。</span>
          </h1>
          <p class="display-6 mb-4 pb-2 text-dark-var">全台 26 縣市提供打工換宿</p>
          <RouterLink class="btn btn-secondary py-2 px-4" to="/about">了解詳情</RouterLink>
        </div>
        <div class="col-xl-6">
          <swiper :style="{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          }" :centeredSlides="true" :loop="true" :navigation="true" :modules="modules"
            :pagination="{ clickable: true }" :autoplay="{ disableOnInteraction: true }" class="mySwiper">
            <swiper-slide><img src="@images/carousel-1.jpg" alt="..."></swiper-slide>
            <swiper-slide><img src="@images/carousel-2.jpg" alt="..."></swiper-slide>
            <swiper-slide><img src="@images/carousel-3.jpg" alt="..."></swiper-slide>
            <swiper-slide><img src="@images/carousel-4.jpg" alt="..."></swiper-slide>
            <swiper-slide><img src="@images/carousel-5.jpg" alt="..."></swiper-slide>
            <swiper-slide><img src="@images/carousel-6.jpg" alt="..."></swiper-slide>
          </swiper>
        </div>
      </div>
      <!-- Header End -->

      <!--Work Card Start-->
      <div>
        <h2 class="text-center mt-5">目前正在徵求幫助者的項目</h2>
        <h5 class="text-center text-info mb-2">來尋找最適合你的打工換宿機會！</h5>
        <div class="row px-4">
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
        <div class="text-center mt-4">
          <RouterLink class="btn btn-secondary py-2 px-4" to="/work-search">瀏覽更多打工項目</RouterLink>
        </div>
      </div>
      <!--Work Card End-->

      <!--Reviews Start-->
      <div class="pb-5">
        <h2 class="text-center mt-5">好評不斷的打工換宿體驗</h2>
        <h5 class="text-center text-info">來看看參加過的幫助者們怎麼說！</h5>
        <ReviewSwiper :reviews="firstHalf" />
        <ReviewSwiper :reviews="secondHalf" :reverseDirection="true" />
      </div>
      <!--Reviews End-->
    </div>
  </div>
</template>
  
<script setup>
//// 引用套件
import { ref, onMounted, computed } from 'vue';
import axios from 'axios';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const modules = [Autoplay, Pagination, Navigation];

//// 引用元件
import WorkDeck from '@components/WorkDeck.vue';
import ReviewSwiper from '@components/ReviewSwiper.vue';

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


<style scoped>

#ad-left {
  left: 0;
}

#ad-right {
  right: 0;
}

.ad-banner-container {
  position: absolute;
  top: 150px;
  width: 15%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.ad-banner {
  height: 30vh;
  width: 100%;
  margin-bottom: 25px;
  color: rgba(0, 0, 0, 0.5);
  background-color: rgba(255, 255, 255, 0.5);
  font-size: 20px;
  text-align: center;
  position: relative;
  overflow: hidden;
  padding: 30px;
  transition: all 0.3s ease;
  /* z-index: 1; */
}

.ad-banner:hover {
  border-color: transparent;
  transform: translateY(-25px);
}

.container-fluid {}

.container {
  background-color: var(--white-50);
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.5);
}

.header {
  background-color: var(--light);
}

.title-text {
  color: var(--black);
}

.btn-secondary {
  border: 0.5rem outset pink;
}

.work-deck {
  height: 100%;
  text-align: center;
  padding: 12px 40px;
}



/* .swiper-slide {

} */

.swiper-slide img {
  display: block;
  height: 30vh;
  width: 100%;
  object-fit: cover;
}
</style>