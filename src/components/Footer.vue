<template>
  <!-- Footer Start -->
  <div class="container-fluid bg-dark text-white-50 footer pt-5">
    <div class="container py-5">
      <div class="row g-5">
        <div class="col-lg-4 col-md-6">
          <h5 class="text-white mb-4">平台資訊</h5>
          <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>台北市大安區復興南路一段390號2樓</p>
          <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>02 6631 6588</p>
          <p class="mb-2"><i class="fa fa-envelope me-3"></i>Mingle.org@gmail.com</p>
          <div class="d-flex pt-2">
            <a class="btn btn-outline-light btn-social" href="https://github.com/lizard512/Mingle-Vue" target="_blank"><i class="fab fa-github"></i></a>
            <a class="btn btn-outline-light btn-social" href="#"><i class="fab fa-facebook-f"></i></a>
            <a class="btn btn-outline-light btn-social" href="#"><i class="fab fa-youtube"></i></a>
            <a class="btn btn-outline-light btn-social" href="#"><i class="fa-brands fa-instagram"></i></a>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <h5 class="text-white mb-4">用戶規範</h5>
          <a class="btn btn-link text-white-50" href="#">服務條款</a>
          <a class="btn btn-link text-white-50" href="#">隱私政策</a>
          <a class="btn btn-link text-white-50" href="#">使用者合約</a>
        </div>
        <!-- <div class="col-lg-3 col-md-6">
          <h5 class="text-white mb-4">活動相簿</h5>
          <div class="row g-2 pt-2">
            <div class="col-4">
              <img class="img-fluid rounded bg-light p-1" src="@images/property-1.jpg" alt="">
            </div>
            <div class="col-4">
              <img class="img-fluid rounded bg-light p-1" src="@images/property-2.jpg" alt="">
            </div>
            <div class="col-4">
              <img class="img-fluid rounded bg-light p-1" src="@images/property-3.jpg" alt="">
            </div>
            <div class="col-4">
              <img class="img-fluid rounded bg-light p-1" src="@images/property-4.jpg" alt="">
            </div>
            <div class="col-4">
              <img class="img-fluid rounded bg-light p-1" src="@images/property-5.jpg" alt="">
            </div>
            <div class="col-4">
              <img class="img-fluid rounded bg-light p-1" src="@images/property-6.jpg" alt="">
            </div>
          </div>
        </div> -->
        <div class="col-lg-4 col-md-6">
          <h5 class="text-white mb-4">訂閱電子報</h5>
          <p>成為Mingle的訂閱戶，<br>即時接收最新的消息！</p>
          <div class="position-relative mx-auto" style="max-width: 400px;">
            <input class="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" placeholder="請填入email">
            <button type="button" class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">送出</button>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="copyright">
        <div class="row">
          <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
            &copy; <a class="border-bottom" href="#">Mingle</a>, All Right Reserved.
            Designed By <a class="border-bottom" href="https://www.ispan.com.tw/">Mingle
              Co.,Ltd. 名狗團隊</a>
          </div>
          <div class="col-md-6 text-center text-md-end">
            <div class="footer-menu">
              <a href="#">返回首頁</a>
              <a href="#">Cookies</a>
              <a href="#">聯絡我們</a>
              <a href="#">常見 Q&A</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Footer End -->
</template>
    
<script setup>
</script>
    
<style scoped>
/*** Footer ***/
.footer .btn.btn-social {
    margin-right: 5px;
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 35px;
    transition: .3s;
}

.footer .btn.btn-social:hover {
    color: var(--primary);
    border-color: var(--light);
}

.footer .btn.btn-link {
    display: block;
    margin-bottom: 5px;
    padding: 0;
    text-align: left;
    font-size: 15px;
    font-weight: normal;
    text-transform: capitalize;
    transition: .3s;
}

.footer .btn.btn-link::before {
    position: relative;

    margin-right: 10px;
}

.footer .btn.btn-link:hover {
    letter-spacing: 1px;
    box-shadow: none;
}

.footer .form-control {
    border-color: rgba(255, 255, 255, 0.5);
}

.footer .copyright {
    padding: 25px 0;
    font-size: 15px;
    border-top: 1px solid rgba(256, 256, 256, .1);
}

.footer .copyright a {
    color: white;
}

.footer .footer-menu a {
    margin-right: 15px;
    padding-right: 15px;
    border-right: 1px solid rgba(255, 255, 255, .1);
}

.footer .footer-menu a:last-child {
    margin-right: 0;
    padding-right: 0;
    border-right: none;
}
</style>