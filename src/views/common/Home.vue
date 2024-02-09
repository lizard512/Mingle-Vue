<template>
  <!-- Header Start -->
  <div class="container p-0">
    <div class="row g-0 align-items-center header">
      <div class="col-xl-6 text-center animate__animated animate__fadeIn">
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
    <div class="row">
      <div class="col-xxl-3 col-lg-6 work-deck h-100">
        <h2>最多人看</h2>
        <WorkDeck autoplayDelay="2500"/>
      </div>
      <div class="col-xxl-3 col-lg-6 work-deck h-100">
        <h2>最新上架</h2>
        <WorkDeck property="createdAt" autoplayDelay="3500"/>
      </div>
      <div class="col-xxl-3 col-lg-6 work-deck  h-100">
        <h2>即將截止</h2>
        <WorkDeck property="endDate" direction="ASC" autoplayDelay="2500"/>
      </div>
      <div class="col-xxl-3 col-lg-6 work-deck h-100">
        <h2>搶手項目</h2>
        <WorkDeck property="attendance" autoplayDelay="3500"/>
      </div>
    </div>
  </div>
  <!--Work Card End-->
</template>
  
<script setup>
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

</script>
  

<!-- Customized CSS -->
<style scoped>
.header {
  background-color: var(--light);
}

.title-text {
  color: var(--black);
}

.work-deck{
text-align: center;
padding: 12px 32px;

}
.swiper {

}

.swiper-slide img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.swiper-slide {
}
</style>