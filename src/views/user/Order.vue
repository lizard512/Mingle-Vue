<template>
    <!-- form start -->
    <div class="container">
        <main>

            <!-- 訂單狀況 -->
            <div class="py-5 text-center">
                <h2>訂單資訊</h2>
                <div class="container py-5 h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-12">
                            <div class="card card-stepper text-black" style="border-radius: 16px;">

                                <div class="card-body p-5">

                                    <div class="d-flex justify-content-between align-items-center mb-5">
                                        <div>
                                            <h5 class="mb-0">訂單編號 <span
                                                    class="text-primary font-weight-bold">ID1234567</span></h5>
                                        </div>
                                        <div class="text-end">
                                            <p class="mb-0">預計出發日:</p>
                                            <p>2023/02/20</p>
                                        </div>
                                    </div>

                                    <!-- 變動狀態標籤 -->
                                    <ul id="progressbar-2"
                                        class="d-flex justify-content-between mx-0 mt-0 mb-5 px-0 pt-0 pb-2">
                                        <li class="step0 active text-center" id="step1"></li>
                                        <li class="step0 text-muted  text-center" id="step2"></li>
                                        <li class="step0 text-muted  text-center" id="step3"></li>
                                        <li class="step0 text-muted text-end" id="step4"></li>
                                    </ul>





                                    <div class="d-flex justify-content-between">
                                        <div class="d-lg-flex align-items-center">
                                            <i class="fas fa-briefcase fa-3x me-lg-4 mb-3 mb-lg-0"></i>
                                            <div>
                                                <p class="fw-bold mb-1">order</p>
                                                <p class="fw-bold mb-0">work</p>
                                            </div>
                                        </div>
                                        <div class="d-lg-flex align-items-center">
                                            <i class="fas fa-home fa-3x me-lg-4 mb-3 mb-lg-0"></i>
                                            <div>
                                                <p class="fw-bold mb-1">order</p>
                                                <p class="fw-bold mb-0">house</p>
                                            </div>
                                        </div>
                                        <div class="d-lg-flex align-items-center">
                                            <i class="fas fa-clipboard-list fa-3x me-lg-4 mb-3 mb-lg-0"></i>
                                            <div>
                                                <p class="fw-bold mb-1">order</p>
                                                <p class="fw-bold mb-0">confirm</p>
                                            </div>
                                        </div>
                                        <div class="d-lg-flex align-items-center">
                                            <i class="fas fa-envelope fa-3x me-lg-4 mb-3 mb-lg-0"></i>
                                            <div>
                                                <p class="fw-bold mb-1">order</p>
                                                <p class="fw-bold mb-0">finish</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 訂單狀況 -->



            <!-- 預定打工 -->
            <div class="row g-5 justify-content-center">

                <!--  right card start  -->

                <!-- 打工預定 card -->

                <div class="col-md-3 col-lg-4 order-md-last">

                    <h4 class="justify-content-between align-items-center  text-center mb-3">
                        您的預定
                    </h4>


                    <ul class="list-group mb-3">
                        <li class="list-group-item d-flex justify-content-between lh-sm">
                            <div>
                                <h6 class="my-0">打工類型</h6>
                                <small class="text-muted">work type</small>
                            </div>
                            <span class="text-muted">照護</span>
                        </li>

                        <li class="list-group-item d-flex justify-content-between lh-sm">
                            <div>
                                <h6 class="my-0">打工項目</h6>
                                <small class="text-muted">work name</small>
                            </div>
                            <span class="text-muted">照顧老人</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between lh-sm">
                            <div>
                                <h6 class="my-0">打工期間</h6>
                                <small class="text-muted">work period</small>
                            </div>
                            <span class="text-muted">7天</span>
                        </li>

                        <li class="list-group-item d-flex justify-content-between lh-sm">
                            <div>
                                <h6 class="my-0">打工人數</h6>
                                <small class="text-muted">order applicants</small>
                            </div>
                            <span class="text-muted">1人</span>
                        </li>

                        <li class="list-group-item d-flex justify-content-between lh-sm">
                            <div>
                                <h6 class="my-0">開始日期</h6>
                                <small class="text-muted">order startDate</small>
                            </div>
                            <span class="text-muted">2023/11/20</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between lh-sm">
                            <div>
                                <h6 class="my-0">結束日期</h6>
                                <small class="text-muted">order endDate</small>
                            </div>
                            <span class="text-muted">2023/11/27</span>
                        </li>
                    </ul>

                    <!-- 房源預定 Card -->
                    <!-- <h4 class="d-flex justify-content-between align-items-center mb-3">
                            <span class="text-primary">住宿預定</span>
                        </h4>
                        <ul class="list-group mb-3">
                            <li class="list-group-item d-flex justify-content-between lh-sm">
                                <div>
                                    <h6 class="my-0">房型</h6>
                                    <small class="text-muted">house type</small>
                                </div>
                                <span class="text-muted">雙人房</span>
                            </li>
                        </ul> -->

                    <!-- 媒合費用 Card -->
                    <h4 class=" justify-content-between align-items-center  text-center mb-3">
                        媒合費用
                    </h4>

                    <ul class="list-group mb-3">
                        <li class="list-group-item d-flex justify-content-between lh-sm">
                            <div>
                                <h6 class="my-0">打工人數</h6>
                                <small class="text-muted">order applicants</small>
                            </div>
                            <span class="text-muted">2023/11/20</span>
                        </li>

                        <li class="list-group-item d-flex justify-content-between bg-light">
                            <div>
                                <h6 class="my-0">媒合費用</h6>
                                <small class="text-muted">service price</small>
                            </div>
                            <strong>$300<span>(TWD)</span></strong>
                        </li>
                    </ul>
                </div>

                <!--  right card end  -->


                <!-- form start -->
                <div class="col-12 col-md-8  ">
                    <h4 class="justify-content-between align-items-center  text-center mb-3">
                        您的資料
                    </h4>

                    <form class="needs-validation" novalidate>

                        <!-- 基本資料 -->
                        <div class="row g-3"
                            style="border: 1px solid wheat; padding: 20px; border-radius: 10px; margin: 10px;">
                            <h6 class="mb-3">請確認會員資料</h6>

                            <!-- name  自動帶入會員資料-->
                            <div class="col-sm-6">
                                <label for="fullName" class="form-label">會員全名 (name) </label>
                                <input type="text" class="form-control" id="fullName" placeholder="" value="" required>
                                <div class="invalid-feedback">
                                    務必填寫會員全名。
                                </div>
                            </div>

                            <!-- email 自動帶入會員資料-->
                            <div class="col-sm-6">
                                <label for="email" class="form-label">信箱 (Email)</label>
                                <input type="email" class="form-control" id="email" placeholder="you@example.com" value=""
                                    required>
                                <div class="invalid-feedback">
                                    務必填寫email。
                                </div>
                            </div>

                            <div class="col-md-4">
                                <label for="phone" class="form-label">電話 (phone)</label>
                                <input type="phone" class="form-control" id="phone" placeholder="" value="" required>
                                <div class="invalid-feedback">
                                    務必填寫連絡電話。
                                </div>
                            </div>


                            <!-- address 自動帶入會員資料-->
                            <div class="col-md-4">
                                <label for="country" class="form-label">居住國家 (Country)　</label>
                                <select class="form-select" id="country" required>
                                    <option value="">Choose...</option>
                                    <option>United States</option>
                                </select>
                                <div class="invalid-feedback">
                                    請選擇居住國家。
                                </div>
                            </div>

                            <div class="col-md-4">
                                <label for="zip" class="form-label">郵遞區號 (zip)</label>
                                <input type="text" class="form-control" id="zip" placeholder="" required>
                                <div class="invalid-feedback">
                                    請輸入郵遞區號。
                                </div>
                            </div>


                            <div class="col-12">
                                <label for="address" class="form-label">通訊地址 (Address) </label>
                                <input type="text" class="form-control" id="address" placeholder="1234 Main St" required>
                                <div class="invalid-feedback">
                                    請輸入完整地址。
                                </div>
                            </div>

                            <hr class="my-4">

                            <h6 class="mb-3">您為誰預定呢? </h6>
                            <div class="my-3">
                                <span class="form-check">
                                    <input id="myself" name="orderby" type="radio" class="form-check-input" checked
                                        required>
                                    <label class="form-check-label" for="myself">我為自己預定</label>
                                </span>
                                <div class="form-check">
                                    <input id="other" name="orderby" type="radio" class="form-check-input" required>
                                    <label class="form-check-label" for="other">幫別人預定</label>
                                </div>
                            </div>
                        </div>
                        <!-- 基本資料 -->



                        <hr class="my-4">

                        <!--打工項目 check box -->
                        <div class="row g-3"
                            style="border: 1px solid wheat; padding: 20px; border-radius: 10px; margin: 10px;">
                            <h6 class="mb-3">預定打工項目 </h6>

                            <div class="col-md-6">
                                <label for="work_numbers" class="form-label">人數 ( applicants) </label>
                                <select class="form-select" id="work_numbers" required>
                                    <option value="">Choose...</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                                <div class="invalid-feedback">
                                    請選擇打工人數。
                                </div>
                            </div>

                            <div class="col-md-6">
                                <label for="work_period" class="form-label">打工區間 (work period)</label>
                                <select class="form-select" id="work_period" required>
                                    <option value="">Choose...</option>
                                    <option>7天</option>
                                    <option>14天</option>
                                    <option>1個月</option>
                                    <option>2個月</option>
                                    <option>3個月</option>
                                    <option>4個月</option>
                                    <option>5個月</option>
                                    <option>6個月</option>
                                </select>
                                <div class="invalid-feedback">
                                    請選擇打工區間。
                                </div>
                            </div>


                            <div class="col-md-6">
                                <label for="work_startDate" class="form-label"> 開始日期 (startDate) </label>
                                <input type="date" class="form-control" id="work_startDate" name="work_startDate"
                                    value="2018-07-22" min="2023-11-20" max="2023-11-29" required />
                                <div class="invalid-feedback">
                                    請選擇開始日期。
                                </div>
                            </div>

                            <div class="col-md-6">
                                <label for="work_endDate" class="form-label"> 結束日期 (endDate) </label>
                                <input type="date" class="form-control" id="work_endDate" name="work_endDate"
                                    value="2018-07-22" min="2023-11-20" max="2023-11-29" required />
                                <div class="invalid-feedback">
                                    請選擇結束日期。
                                </div>
                            </div>



                            <!-- 自動產出 -->

                            <div class="col-md-12">
                                <label for="work_address" class="form-label">打工詳細資料</label>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nulla, unde vel iusto
                                    fugit perferendis commodi a asperiores tempora mollitia! Dicta sapiente, quod magni
                                    nostrum rerum dignissimos placeat debitis, ipsam ad distinctio animi quae?
                                    Necessitatibus delectus nobis perspiciatis tempore dolorum expedita, quidem aut illo
                                    explicabo officia corrupti ad neque et non quisquam eligendi quis vero ea vitae qui
                                    deserunt facilis ab! Iure harum a ab illo doloribus nesciunt corporis! Placeat ut
                                    tempore quas necessitatibus eius asperiores, laborum, repudiandae ratione aperiam,
                                    reprehenderit tenetur eaque. Fugiat et assumenda sunt maiores sit voluptates, natus,
                                    quaerat iusto quidem officia, obcaecati aliquam quasi. Quibusdam, minus!</p>
                            </div>
                        </div>

                        <!--打工 check box -->


                        <hr class="my-4">


                        <!--住宿 check box -->
                        <div class="row g-3"
                            style="border: 1px solid wheat; padding: 20px; border-radius: 10px; margin: 10px;">
                            <h6 class="mb-3">預定住宿項目 </h6>

                            <div class="col-md-4">
                                <label for="house_type" class="form-label">房型 (house type)</label>
                                <select class="form-select" id="house_type" required>
                                    <option value="">Choose...</option>
                                    <option>雙人房</option>
                                    <option>單人房</option>
                                </select>
                                <div class="invalid-feedback">
                                    請選擇房源類型。
                                </div>
                            </div>

                            <div class="col-md-4">
                                <label for="room_name" class="form-label">房間 (room name)</label>
                                <select class="form-select" id="room_name" required>
                                    <option value="">Choose...</option>
                                    <option>親子房</option>
                                    <option>301</option>
                                    <option>405</option>
                                    <option>505</option>
                                </select>
                                <div class="invalid-feedback">
                                    請選擇房間。
                                </div>
                            </div>

                            <div class="col-md-4">
                                <label for="room_numbers" class="form-label">間數 (number) </label>
                                <select class="form-select" id="room_numbers" required>
                                    <option value="">Choose...</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                                <div class="invalid-feedback">
                                    請選擇間數。
                                </div>
                            </div>

                            <!-- 自動產出 -->
                            <div class="col-md-12">
                                <label for="house_address" class="form-label">住宿地點詳細內容 (address)</label>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nulla, unde vel iusto
                                    fugit perferendis commodi a asperiores tempora mollitia! Dicta sapiente, quod magni
                                    nostrum rerum dignissimos placeat debitis, ipsam ad distinctio animi quae?
                                    Necessitatibus delectus nobis perspiciatis tempore dolorum expedita, quidem aut illo
                                    explicabo officia corrupti ad neque et non quisquam eligendi quis vero ea vitae qui
                                    deserunt facilis ab! Iure harum a ab illo doloribus nesciunt corporis! Placeat ut
                                    tempore quas necessitatibus eius asperiores, laborum, repudiandae ratione aperiam,
                                    reprehenderit tenetur eaque. Fugiat et assumenda sunt maiores sit voluptates, natus,
                                    quaerat iusto quidem officia, obcaecati aliquam quasi. Quibusdam, minus!</p>
                            </div>

                            <hr class="my-4">

                            <!-- ====================================================================== -->

                            <!-- name  住宿者資料-->
                            <div class="col-sm-4">
                                <label for="fullName" class="form-label">住宿者全名 (name) </label>
                                <input type="text" class="form-control" id="fullName" placeholder="" value="" required>
                                <div class="invalid-feedback">
                                    務必填寫會員全名。
                                </div>
                            </div>

                            <!-- email 住宿者資料-->
                            <div class="col-sm-4">
                                <label for="email" class="form-label">信箱 (Email)</label>
                                <input type="email" class="form-control" id="email" placeholder="you@example.com" value=""
                                    required>
                                <div class="invalid-feedback">
                                    務必填寫email。
                                </div>
                            </div>

                            <!-- phone 住宿者資料-->
                            <div class="col-md-4">
                                <label for="phone" class="form-label">電話 (phone)</label>
                                <input type="phone" class="form-control" id="phone" placeholder="" value="" required>
                                <div class="invalid-feedback">
                                    務必填寫連絡電話。
                                </div>
                            </div>

                            <!-- ====================================================================== -->

                            <!-- name  住宿者資料-->
                            <div class="col-sm-4">
                                <label for="fullName" class="form-label">住宿者全名 (name) </label>
                                <input type="text" class="form-control" id="fullName" placeholder="" value="" required>
                                <div class="invalid-feedback">
                                    務必填寫會員全名。
                                </div>
                            </div>

                            <!-- email 住宿者資料-->
                            <div class="col-sm-4">
                                <label for="email" class="form-label">信箱 (Email)</label>
                                <input type="email" class="form-control" id="email" placeholder="you@example.com" value=""
                                    required>
                                <div class="invalid-feedback">
                                    務必填寫email。
                                </div>
                            </div>

                            <!-- phone 住宿者資料-->
                            <div class="col-md-4">
                                <label for="phone" class="form-label">電話 (phone)</label>
                                <input type="phone" class="form-control" id="phone" placeholder="" value="" required>
                                <div class="invalid-feedback">
                                    務必填寫連絡電話。
                                </div>
                            </div>

                            <!-- ====================================================================== -->


                            <div class="col-md-12">
                                <label for="house_need" class="form-label">其他住宿需求 (need)</label>
                                <input type="textarea" class="form-control" id="house_need" value="其他需求...">
                            </div>

                        </div>

                        <!--住宿 check box -->


                        <hr class="my-4">

                        <!-- button start -->
                        <button class="w-100 btn btn-primary btn-lg" type="submit"><a href="order2.html">下一步</a></button>
                        <!-- button end -->
                    </form>

                </div>
                <!-- form end-->

            </div>




            <!-- 預定打工 -->
        </main>
        <!-- 第一個form -->
        <!-- form end -->
    </div>
</template>
    
<script setup>
import { onMounted } from 'vue';

const validation = function () {

    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
};

onMounted(() => {
    // 在DOM准备好时执行渲染
    validation();
})

</script>



<style scoped>
.card-stepper {
    z-index: 0
}

#progressbar-2 {
    color: #455A64;
}

#progressbar-2 li {
    list-style-type: none;
    font-size: 13px;
    width: 33.33%;
    float: left;
    position: relative;
}

#progressbar-2 #step1:before {
    content: '\f058';
    font-family: "Font Awesome 5 Free";
    color: #fff;
    width: 37px;
    margin-left: 0px;
    padding-left: 0px;
}

/* 變動狀態標籤 */
#progressbar-2 #step2:before {
    content: '\f111';
    font-family: "Font Awesome 5 Free";
    color: #fff;
    width: 37px;
    margin-right: 0;
    text-align: center;
}

/* 變動狀態標籤 */
#progressbar-2 #step3:before {
    content: '\f111';
    font-family: "Font Awesome 5 Free";
    color: #fff;
    width: 37px;
    margin-right: 0;
    text-align: center;
}

/* 變動狀態標籤 */
#progressbar-2 #step4:before {
    content: '\f111';
    font-family: "Font Awesome 5 Free";
    color: #fff;
    width: 37px;
    margin-right: 0;
    text-align: center;
}

#progressbar-2 li:before {
    line-height: 37px;
    display: block;
    font-size: 12px;
    background: #c5cae9;
    border-radius: 50%;
}

#progressbar-2 li:after {
    content: '';
    width: 100%;
    height: 10px;
    background: #c5cae9;
    position: absolute;
    left: 0%;
    right: 0%;
    top: 15px;
    z-index: -1;
}


/* 變動狀態長度 */

#progressbar-2 li:nth-child(1):after {
    left: 1%;
    width: 100%;
    background: #c5cae9 !important;
}

#progressbar-2 li:nth-child(2):after {
    left: 1%;
    width: 100%;

}


#progressbar-2 li:nth-child(3):after {
    left: 1%;
    width: 100%;

}

#progressbar-2 li:nth-child(4) {
    left: 0;
    width: 37px;
}

#progressbar-2 li:nth-child(4):after {
    left: 0;
    width: 0;
}

#progressbar-2 li.active:before,
#progressbar-2 li.active:after {
    background: #ffc107;
}
</style>