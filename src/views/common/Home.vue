<template>
  <!-- Header Start -->
  <div class="container-fluid header bg-white p-0">
    <div class="row g-0 align-items-center flex-column-reverse flex-md-row">
      <div class="col-md-6 p-5 mt-lg-5 text-center">
        <h1 class="display-5 animated fadeIn mb-4">一點 <span class="text-info ">幫助</span>
          ，一晚<span class="text-info "> 住宿。</span>
        </h1>
        <p class="animated fadeIn mb-4 pb-2">全台 26 縣市提供打工換宿</p>
        <a href="" class="btn btn-secondary py-3 px-5 me-3 animated fadeIn">了解詳情</a>
      </div>
      <div class="col-md-6 animated fadeIn">
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
              aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
              aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
              aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="@images/carousel-1.jpg" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
              <img src="@images/carousel-2.jpg" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
              <img src="@images/carousel-1.jpg" class="d-block w-100" alt="...">
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- Header End -->
</template>
  
<script setup>

</script>
  
<style scoped>
.d-block {
  object-fit: cover;
  max-height: 700px;
}
</style>