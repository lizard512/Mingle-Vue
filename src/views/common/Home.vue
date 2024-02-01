<template>
  <!-- Header Start -->
  <div class="container-fluid header bg-white p-0">
    <div class="row g-0 align-items-center flex-column-reverse flex-md-row">
      <div class="col-md-6 p-5 mt-lg-5 text-center">
        <h1 class="display-5 animated fadeIn mb-4 text-black">一點 <span class="text-info ">幫助</span>
          ，一晚<span class="text-info "> 住宿。</span>
        </h1>
        <p class="animated fadeIn mb-4 pb-2 text-black">全台 26 縣市提供打工換宿</p>
        <a href="" class="btn btn-secondary py-3 px-5 me-3 animated fadeIn">了解詳情</a>
      </div>
      <swiper :loop="true" :navigation="true" :modules="modules" :pagination="{ clickable: true }"
        :autoplay="{ delay: 2500, disableOnInteraction: false }" class="mySwiper">
        <swiper-slide><img src="@images/carousel-1.jpg" class="d-block w-100" alt="..."></swiper-slide>
        <swiper-slide><img src="@images/carousel-2.jpg" class="d-block w-100" alt="..."></swiper-slide>
      </swiper>
    </div>
  </div>
  <!-- Header End -->
  <!--Work Card Start-->
  <div>
    <h2 class="mx-3">目前最熱門的打工項目</h2>
    <WorkCard :works="works" />
  </div>
  
  <!--Work Card End-->
</template>
  
<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const modules = [Pagination, Navigation];

//// 引用元件
import WorkCard from '@components/WorkCard.vue';

//// 接收資料庫資料
let works = ref([]);

//// 預設參數
// 載入相關
const currentPage = ref(0); // 當前頁數
const size = 6; // 每次載入的數量
const isLoading = ref(false); //避免重複載入
const isEnd = ref(false);
// 排序相關
let direction = 'DESC'; // 排序方向
let property = 'views'; // 排序屬性
// 篩選相關
let filters = ref({
    worktype: [],
    city: [''],
    keyword: [''],
});

//// 生命週期
onMounted(async () => {
    await loadWork();
});

//// 方法
// 載入一頁工作列表
const loadWork = async () => {
    if (isEnd.value || isLoading.value) return;
    isLoading.value = true;
    try {
        const response = await axios.post(`${import.meta.env.VITE_APP_API_URL}/api/work/getWorks`,
            // request body
            filters.value,
            // request params
            {
                params: {
                    page: currentPage.value,
                    size: size,
                    direction: direction,
                    property: property
                }
            }
        );
        works.value = [...works.value, ...response.data.content];
        // 如果已經無法獲取更多的工作，停止發送請求
        if (response.data.last) isEnd.value = true;
        // 否則，準備獲取下一頁的工作
        else currentPage.value++;
    } catch (error) {
        console.error(error);
    } finally {
        isLoading.value = false;
    }
};

</script>
  

<!-- Customized CSS -->
<style scoped>
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