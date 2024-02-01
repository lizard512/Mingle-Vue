<template>
  <!-- Header Start -->
  <div class="container-fluid header p-0">
    <div class="row g-0 align-items-center flex-column-reverse flex-md-row">
      <div class="col-md-6 p-5 mt-lg-5 text-center">
        <h1 class="display-5 animated fadeIn mb-4 text-dark-var">一點 <span class="text-info ">幫助</span>
          ，一晚<span class="text-info "> 住宿。</span>
        </h1>
        <p class="animated fadeIn mb-4 pb-2 text-dark-var">全台 26 縣市提供打工換宿</p>
        <a href="" class="btn btn-secondary py-3 px-5 me-3 animated fadeIn">了解詳情</a>
      </div>
      <swiper :centeredSlides="true" :loop="true" :navigation="true" :modules="modules" :pagination="{ clickable: true }"
        :autoplay="{ delay: 2500, disableOnInteraction: false }" class="mySwiper">
        <swiper-slide><img src="@images/carousel-1.jpg" class="d-block w-100" alt="..."></swiper-slide>
        <swiper-slide><img src="@images/carousel-2.jpg" class="d-block w-100" alt="..."></swiper-slide>
      </swiper>
    </div>
  </div>
  <!-- Header End -->
  <!--Work Card Start-->
  <div class="container-fluid p-0">
    <div class="row">
      <div class="col-4 justify-items-center text-center h-100">
        <h2 class="mx-3">最多人看</h2>
        <WorkDeck />
      </div>
      <div class="col-4 justify-items-center text-center h-100">
        <h2 class="mx-3">最新上架</h2>
        <WorkDeck property="createdAt"/>
      </div>
      <div class="col-4 justify-items-center text-center h-100">
        <h2 class="mx-3">即將截止</h2>
        <WorkDeck property="endDate" direction="ASC"/>
      </div>
    </div>
  </div>


  <div>


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
import { Autoplay, Pagination, Navigation, EffectCards } from 'swiper/modules';
const modules = [Autoplay, Pagination, Navigation];

//// 引用元件
import WorkDeck from '@components/WorkDeck.vue';






</script>
  

<!-- Customized CSS -->
<style scoped>
.text-dark-var{
  color: var(--dark);
}
.swiper {
  width: 50%;
  height: 50%;
}

.swiper-slide img {
  display: block;
  max-height: 100%;
  object-fit: cover;
}
</style>