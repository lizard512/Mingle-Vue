<template>
    <div class="container-fluid bg-white vh-100 d-flex flex-column">
        <div class=" col-11 align-self-center ">
            <h3 class="my-5 text-center animate__animated animate__flipInX">工作管理</h3>
            <!-- main-list -->
            <table class="my-5 table table-striped table-hover align-middle text-center" v-show="isShowList">
                <thead class="table-dark">
                    <tr>
                        <th scope="col">No.</th>
                        <th scope="col">照片</th>
                        <th scope="col">打工類型</th>
                        <th scope="col">打工名稱</th>
                        <th scope="col">地區</th>
                        <th scope="col">開始日</th>
                        <th scope="col">結束日</th>
                        <th scope="col">上次修改</th>
                        <th scope="col">報名人數</th>
                        <th scope="col">狀態</th>
                        <th scope="col">管理</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody class="accordion align-middle animate__animated animate__fadeIn" id="accordion-main">
                    <!-- line -->
                    <tr>
                        <td>1</td>
                        <td><img class="rounded-3 work-photo" src="https://picsum.photos/150/150"></td>
                        <td class="text-info">演戲</td>
                        <td>開天窗部隊之在劫難逃</td>
                        <td>台北市</td>
                        <td>2024-01-28</td>
                        <td>2024-06-28</td>
                        <td>{{ modifiedDate }}</td>
                        <td>2/12</td>
                        <td class="text-danger">別急，還沒好</td>
                        <td><button type="button" class="btn btn-primary btn-sm" @click="enterModify">編輯</button> <button
                                type="button" class="btn btn-danger btn-sm">刪除</button></td>
                        <td><button class="accordion-button collapsed acco-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#toggle1" aria-expanded="false"></button></td>
                    </tr>
                    <!-- toggle-line -->
                    <tr>
                        <td class="p-0" colspan="12">
                            <div class="accordion-body collapse bg-light animate__animated animate__fadeIn" id="toggle1"
                                data-bs-parent="#accordion-main">
                                <div class="row">
                                    <div class="col-4 mx-5 my-3 detailed-ul text-start">
                                        <li class="m-2 fw-bold"><i class="fa-solid fa-briefcase me-2"></i>工作時間：<span
                                                class="ms-2 text-dark">爆肝吧</span>
                                        </li>
                                        <li class="m-2 fw-bold"><i class="fa-solid fa-champagne-glasses me-2"></i>休假：<span
                                                class="ms-2 text-dark">看你時數剩多少</span></li>
                                        <li class="m-2 fw-bold"><i class="fa-solid fa-star me-2"></i>福利：<span
                                                class="ms-2 text-dark">茶水、餐巾紙白瞟</span></li>
                                        <li class="m-2 fw-bold"><i class="fa-regular fa-calendar-check me-2"></i>最短工期：<span
                                                class="ms-2 text-dark">結訓前</span></li>
                                    </div>
                                    <div class="col-3 m-3 detailed-ul text-start">
                                        <ul class="detailed-ul text-start">
                                            <li class="m-2 fw-bold"><i class="fa-solid fa-user-clock me-2"></i>(限)年齡：<span
                                                    class="ms-2 text-dark">無</span></li>
                                            <li class="m-2 fw-bold"><i class="fa-solid fa-venus-mars me-2"></i>(限)性別：<span
                                                    class="ms-2 text-dark">無</span></li>
                                            <li class="m-2 fw-bold"><i class="fa-solid fa-language me-2"></i>(限)語言：<span
                                                    class="ms-2 text-dark">會寫就好</span></li>

                                        </ul>
                                    </div>
                                    <div class="col-3 m-3 detailed-ul text-start">
                                        <ul class="detailed-ul text-start">
                                            <li class="m-2 fw-bold"><i class="fa-solid fa-graduation-cap me-2"></i>教育程度：
                                                <span class="ms-2 text-dark">頂大頂碩</span>
                                            </li>
                                            <li class="m-2 fw-bold"><i class="fa-solid fa-briefcase me-2"></i>工作經驗：<span
                                                    class="ms-2 text-dark">新鮮的肝就好</span></li>
                                            <li class="m-2 fw-bold"><i class="fa-regular fa-address-card me-2"></i>證照：<span
                                                    class="ms-2 text-dark">無</span></li>
                                        </ul>
                                    </div>
                                </div>
                                <!-- note -->
                                <div class="row">
                                    <div class="col-4 mx-5 mb-3 detailed-ul text-start">
                                        <li class="m-2 fw-bold"><i class="fa-solid fa-note-sticky me-2"></i>備註：<span
                                                class="ms-2 text-dark">測試排版，資料都是假的</span>
                                        </li>
                                    </div>
                                </div>

                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td><img class="rounded-3 work-photo" src="https://picsum.photos/150/150"></td>
                        <td class="text-danger">詐騙</td>
                        <td>新春放炮</td>
                        <td>台北市</td>
                        <td>2024-01-28</td>
                        <td>2024-06-28</td>
                        <td>{{ modifiedDate }}</td>
                        <td>2/12</td>
                        <td class="text-danger">測試而已</td>
                        <td><button type="button" class="btn btn-primary btn-sm" @click="enterModify">編輯</button> <button
                                type="button" class="btn btn-danger btn-sm">刪除</button></td>
                        <td><button class="accordion-button collapsed acco-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#toggle2" aria-expanded="false"></button></td>
                    </tr>
                    <tr>
                        <td class="p-0" colspan="12">
                            <div class="accordion-body collapse bg-light animate__animated animate__fadeIn" id="toggle2"
                                data-bs-parent="#accordion-main">
                                <div class="row">
                                    <div class="col-4 mx-5 my-3 detailed-ul text-start">
                                        <li class="m-2 fw-bold"><i class="fa-solid fa-briefcase me-2"></i>工作時間：<span
                                                class="ms-2 text-dark">爆肝吧</span>
                                        </li>
                                        <li class="m-2 fw-bold"><i class="fa-solid fa-champagne-glasses me-2"></i>休假：<span
                                                class="ms-2 text-dark">看你時數剩多少</span></li>
                                        <li class="m-2 fw-bold"><i class="fa-solid fa-star me-2"></i>福利：<span
                                                class="ms-2 text-dark">茶水、餐巾紙白瞟</span></li>
                                        <li class="m-2 fw-bold"><i class="fa-regular fa-calendar-check me-2"></i>最短工期：<span
                                                class="ms-2 text-dark">結訓前</span></li>
                                    </div>
                                    <div class="col-3 m-3 detailed-ul text-start">
                                        <ul class="detailed-ul text-start">
                                            <li class="m-2 fw-bold"><i class="fa-solid fa-user-clock me-2"></i>(限)年齡：<span
                                                    class="ms-2 text-dark">無</span></li>
                                            <li class="m-2 fw-bold"><i class="fa-solid fa-venus-mars me-2"></i>(限)性別：<span
                                                    class="ms-2 text-dark">無</span></li>
                                            <li class="m-2 fw-bold"><i class="fa-solid fa-language me-2"></i>(限)語言：<span
                                                    class="ms-2 text-dark">會寫就好</span></li>

                                        </ul>
                                    </div>
                                    <div class="col-3 m-3 detailed-ul text-start">
                                        <ul class="detailed-ul text-start">
                                            <li class="m-2 fw-bold"><i class="fa-solid fa-graduation-cap me-2"></i>教育程度：
                                                <span class="ms-2 text-dark">頂大頂碩</span>
                                            </li>
                                            <li class="m-2 fw-bold"><i class="fa-solid fa-briefcase me-2"></i>工作經驗：<span
                                                    class="ms-2 text-dark">新鮮的肝就好</span></li>
                                            <li class="m-2 fw-bold"><i class="fa-regular fa-address-card me-2"></i>證照：<span
                                                    class="ms-2 text-dark">無</span></li>
                                        </ul>
                                    </div>
                                </div>
                                <!-- note -->
                                <div class="row">
                                    <div class="col-4 mx-5 mb-3 detailed-ul text-start">
                                        <li class="m-2 fw-bold"><i class="fa-solid fa-note-sticky me-2"></i>備註：<span
                                                class="ms-2 text-dark">測試排版，資料都是假的</span>
                                        </li>
                                    </div>
                                </div>

                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <!-- main-form -->
            <form class="row p-4 border border-info border-5 rounded needs-validation animate__animated animate__fadeIn"
                novalidate v-show="isShowModify">
                <!-- basic -->
                <div class="my-3">
                    <h4 class="text-center mb-4 animate__animated animate__flipInX">基本資訊</h4>
                    <div class="row">
                        <div class="form-floating col-4">
                            <select class="form-control" v-model="selectedWorktype" required>
                                <option selected disabled value="">Choose...</option>
                                <option v-for="item in worktype" :value="item">{{ item }}</option>
                            </select>
                            <label for="floatingInput" class="form-label">工作類型</label>
                            <div class="invalid-feedback">
                                請選取您的工作類型
                            </div>
                        </div>
                        <div class="form-floating col-4">
                            <input type="text" class="form-control" id="floatingWorkname" v-model.trim="workname" required>
                            <label for="floatingWorkname">工作名稱</label>
                            <div class="invalid-feedback">
                                請填寫您的工作名稱
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 d-flex justify-content-center">
                    <button class="btn btn-danger m-2" type="submit" @click="validate">確認</button>
                    <button class="btn btn-primary m-2" type="button" @click="cancelModify">取消</button>
                </div>
            </form>
        </div>

    </div>
</template>
    
<script setup>
import { ref, onMounted } from 'vue';
import Swal from 'sweetalert2'

const isShowList = ref(false);
const isShowModify = ref(true);

// form
const worktype = ["人力", "旅店", "活動", "銷售", "辦公", "餐飲", "補教", "其他"]
const selectedWorktype = ref('');
const workname = ref('');

function enterModify() {
    isShowList.value = false;
    isShowModify.value = true;
}
function cancelModify() {
    Swal.fire({
        title: "您確定要返回嗎?",
        icon: "warning",
        text: "系統不會儲存您填寫的資料",
        showCancelButton: true,
        confirmButtonText: "對，快讓我走",
        cancelButtonText: "等等，我怕",
        allowOutsideClick: false
    }).then(function (response) {
        if (response.isConfirmed) {
            isShowList.value = true;
            isShowModify.value = false;
        }
    })
}


let current = new Date();
let modifiedDate = current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + current.getDate() + ' ' + current.getHours() + ':' + current.getMinutes() + ':' + current.getSeconds();

</script>
    
<style scoped>
.acco-button {
    background-color: transparent;
}

.acco-button:after,
.acco-button:active,
.acco-button:focus {
    background-color: transparent !important;
    border-color: transparent !important;
    box-shadow: none !important;
    color: inherit !important;
}

.detailed-ul {
    list-style-type: none;
}

.work-photo {
    width: 150px;
    height: 150px;
}

/* 摺疊間隙 */
.accordion-body {
    padding: 0;
}
</style>