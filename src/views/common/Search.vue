<template>
    <!-- Search Start -->
    <div class="container-fluid bg-primary mb-5 wow fadeIn" data-wow-delay="0.1s" style="padding: 35px;">
        <div class="container">
            <div class="row g-2">
                <div class="col-md-10">
                    <div class="row g-2">
                        <div class="col-md-4">
                            <input type="text" class="form-control border-0 py-3" placeholder="用關鍵字查詢">
                        </div>
                        <div class="col-md-4">
                            <select class="form-select border-0 py-3">
                                <option selected>換宿地區</option>
                                <option value="1">東區</option>
                                <option value="2">北區</option>
                                <option value="3">西區</option>
                                <option value="4">南區</option>
                            </select>
                        </div>
                        <div class="col-md-4">
                            <select class="form-select border-0 py-3">
                                <option selected>打工類型</option>
                                <option value="1">類型1</option>
                                <option value="2">類型2</option>
                                <option value="3">類型3</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="col-md-2">
                    <button class="btn btn-dark border-0 w-100 py-3">開始搜尋</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Search End -->

    <!-- List Start -->
    <div class="container-xxl py-5">
        <div class="container">
            <div class="row g-0 gx-5 align-items-end">
                <div class="col-lg-6">
                    <div class="text-start mx-auto mb-5 wow slideInLeft" data-wow-delay="0.1s">
                        <h1 class="mb-3">打工機會</h1>
                        <p>快來查看正在徵求幫助者的項目！</p>
                    </div>
                </div>
                <div class="col-lg-6 text-start text-lg-end wow slideInRight" data-wow-delay="0.1s">
                    <ul class="nav nav-pills d-inline-flex justify-content-end mb-5">
                        <li class="nav-item me-2">
                            <a class="btn btn-outline-primary active" data-bs-toggle="pill" href="#tab-1">熱門項目</a>
                        </li>
                        <li class="nav-item me-2">
                            <a class="btn btn-outline-primary" data-bs-toggle="pill" href="#tab-2">最新開放</a>
                        </li>
                        <li class="nav-item me-0">
                            <a class="btn btn-outline-primary" data-bs-toggle="pill" href="#tab-3">即將截止</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="tab-content">
                <div id="tab-1" class="tab-pane fade show p-0 active">
                    <div class="row g-4">

                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s" v-for="work in works" :key="name">
                            <div class="list-item rounded overflow-hidden">
                                <div class="position-relative overflow-hidden">
                                    <a href=""><img class="img-fluid" :src="work.photo" :alt="work.name"></a>
                                    <div
                                        class="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                                        {{ work.worktype }}</div>
                                    <div
                                        class="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                                        {{ work.city }}</div>
                                </div>
                                <div class="p-4 pb-0">
                                    <a class="d-block h5 mb-2" href="">{{ work.name }}</a>
                                    <p><i class="fa fa-map-marker text-primary me-2"></i>{{ work.address }}</p>
                                    <p>{{ work.description}}</p>
                                </div>
                                <div class="d-flex border-top">
                                    <small class="flex-fill text-center border-end py-2"><i
                                            class="fa fa-calendar text-primary me-2"></i>{{ formatDate(work.startDate) }} ~ {{ formatDate(work.endDate) }}</small>
                                    <small class="flex-fill text-center border-end py-2"><i
                                            class="fa fa-user text-primary me-2"></i>剩下 {{ work.numbers }} 個名額</small>
                                    <small class="flex-fill text-center py-2"><i
                                            class="fa fa-star text-primary me-2"></i>{{ work.views }} 次瀏覽</small>
                                </div>
                            </div>
                        </div>


                        <div class="col-12 text-center wow fadeInUp" data-wow-delay="0.1s">
                            <a class="btn btn-secondary py-3 px-5" href="">瀏覽更多打工機會 </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- List End -->
</template>
    
<script setup>
import { ref } from 'vue'
import axios from 'axios';

const works = ref([]);

axios.get('http://localhost:8080/works')
    .then(response => {
        works.value = response.data;
    })
    .catch(error => {
        console.error(error);
    });

// 格式化日期為"YYYY/MM/DD"
const formatDate = (dateString) => {
    let date = new Date(dateString);
    return `${date.getFullYear()}/${("0" + (date.getMonth() + 1)).slice(-2)}/${("0" + date.getDate()).slice(-2)}`;
}

</script>

<style></style>