<template>
    <div class="container animate__animated animate__bounceInLeft animate__slow">
        <br><br>
        <h2 class="container" style="background-color: #bb810d;text-align: center;">心願清單</h2>
        <div class="card  mb-3" style="max-width: 100%;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="../../../assets/images/心願清單.jpg" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">打工項目1</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="card mb-3" style="max-width: 100%;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="../../../assets/images/心願清單2.jpg" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">打工項目2</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="card mb-3" style="max-width: 100%;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="../../../assets/images/心願清單3.jpg" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">打工項目3</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="card mb-3" style="max-width: 100%;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="../../../assets/images/心願清單4.jpg" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">打工項目4</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

// const loaduserDetail = async () => {
//     const response = await axios.get(`${import.meta.env.VITE_APP_API_URL}/api/volunteerDetail/` + getuserid());
//     // Object.assign(userdetails, response.data);
//     userdetails.value = response.data
//     console.log(userdetails)
//     // if (userdetails.isDeleted) {
//     //     Swal.fire({
//     //         icon: 'warning',
//     //         text: '此帳號已被停權，重新登入或註冊會員',
//     //         confirmButtonText: '好的',
//     //     });
//     //     const router = useRouter();
//     //     router.push({
//     //         name: "Login",
//     //     });
//     //     return;
//     // }
// }
// onMounted(async () => {
//     await loaduserDetail();
// });

</script>
    
<style></style>