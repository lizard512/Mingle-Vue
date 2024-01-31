<template>
    <div class="row" id="app">
        <div class="col-lg-4 login-frame">
            <div class="container-xxl bg-white p-5 login-form">
                <div class="login-icon">
                    <img src="@images/icon-main.png" width="50px">
                </div>
                <br>
                <div class="accountDiv">
                    <input id="userid" v-model="userid" type="email" class="account" name="account" placeholder="Email/電話號碼"
                        required autofocus>
                </div>
                <br>
                <br>
                <div class="passwordDiv">
                    <input id="password" v-model="password" @keydown.enter="handleEnterKey"
                        :type="showPassword ? 'text' : 'password'" class="password" name="password" placeholder="請輸入密碼"
                        required>
                </div>
                <br>
                <div class="reminder">
                    <div class="checkboxDiv">
                        <label>
                            <input id="checkbox" v-model="showPassword" class="checkbox" type="checkbox"
                                value="remember-me"> 顯示密碼
                        </label>
                    </div>
                    <div class="forget-password">
                        <a href="404.html">忘記密碼</a>
                    </div>
                </div>
                <br>
                <br>
                <div class="login-btn">
                    <button @click="login" class="btn btn-lg btn-warning btn-block" type="submit">登入</button>
                </div>
                <br>
                <p class="or">或</p>
                <div class="google-btn">
                    <button @click="gotGoogleLoginPage" class="btn btn-outline-dark" type="submit"><img
                            src="@images/icon-google.png" width="25px">&nbsp;透過Google帳號登入</button>
                </div>
                <br>

                <div class="login-btn">
                    <button class="btn btn-info" @click="autoLogin1">Alice</button>
                    <button class="btn btn-info" @click="autoLogin2">Bob</button>
                    <button class="btn btn-info" @click="autoLogin3">Charlie</button>
                    <button class="btn btn-info" @click="autoLogin4">Diana</button>
                    <button class="btn btn-info" @click="autoLogin5">Eva</button>
                </div>

                <!-- <div class="login-btn">
                    <button class="btn btn-lg btn-warning btn-block" type="submit"
                        @click="loginTestUsingPinia">登入(Pinia測試)</button>
                </div> -->
            </div>
        </div>
    </div>
</template>
    
<script setup>
import { useUserStore } from '@store/userStore-localStorage.js';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import axios from 'axios';

const userStore = useUserStore();
const router = useRouter();

function gotGoogleLoginPage() {
    window.location.href = `${import.meta.env.VITE_APP_API_URL}/google-login`;
}

let userid = ref('');
let password = ref('');
let loading = false;
const showPassword = ref(false);

const handleEnterKey = () => {
    // Trigger the login function when Enter key is pressed
    login();
};

const login = function () {
    // Set loading to true when login starts
    loading = true;

    Swal.fire({
        text: "Loading.......",
        allowOutsideClick: false,
        showConfirmButton: false
    });

    if (userid === "") {
        userid = null;
    }
    if (password === "") {
        password = null;
    }
    let request = {
        userid: userid.value,
        password: password.value,
    }
    axios.post(`${import.meta.env.VITE_APP_API_URL}/login.controller`, request)
        .then(function (response) {
            if (response.data.success) {
                console.log(response.data.message);
                Swal.fire({
                    icon: "success",
                    text: "登入成功",
                    confirmButtonText: "確認"
                }).then(function (result) {
                    if (result.isConfirmed) {
                        document.cookie = `sessionToken=${response.data.sessionToken}; path=/`;
                        localStorage.setItem('sessionToken', response.data.sessionToken)
                        if (response.data.lordID) {
                            localStorage.setItem('lordID', response.data.lordID);
                        }
                        userStore.login();
                        router.push({ name: 'Home' });
                    }
                });
            } else {
                console.log(response.data.message);
                Swal.fire({
                    icon: "error",
                    text: "登入失敗：" + response.data.message,
                    confirmButtonText: "確認"
                });
            }
        })
        .catch(function (error) {
            console.error(error);
            Swal.fire({
                icon: "warning",
                text: "登入失敗：伺服器錯誤",
                confirmButtonText: "確認"
            });
        })
        .finally(function () {
            // Set loading to false when the request is complete, whether it succeeded or failed
            loading = false;
        });
};

const autoLogin1 = () => {
    userid.value = '1@gmail.com';
    password.value = '1';
};
const autoLogin2 = () => {
    userid.value = '2@gmail.com';
    password.value = '2';
};
const autoLogin3 = () => {
    userid.value = '3@gmail.com';
    password.value = '3';
}
const autoLogin4 = () => {
    userid.value = '4@gmail.com';
    password.value = '4';
}
const autoLogin5 = () => {
    userid.value = '5@gmail.com';
    password.value = '5';
}

</script>
    
<style scoped>
.row {
    margin-top: 2em;
}

.login-frame {
    margin: auto;
}

.login-form {
    border: 1px solid black;
    border-radius: 10px;
}

.login-icon {
    border: 3px solid #ffc107;
    border-radius: 50px;
    background-color: #ffc107;
    width: 60px;
    height: 60px;
    text-align: center;
    margin: auto;
    line-height: 55px;
}

.accountDiv {
    text-align: center;
}

.passwordDiv {
    text-align: center;
}

input {
    padding: 10px;
    border-radius: 30px;
}

.account {
    overflow: hidden;
    width: 100%;
}

.password {
    overflow: hidden;
    width: 100%;
}

.checkboxDiv {
    float: left;
}

.checkbox {
    accent-color: #ffc107;
}

.forget-password {
    margin-right: 0px;
    float: right;
}

.login-btn {
    margin: auto;
    text-align: center;
}

.btn-warning {
    border-radius: 50px;
    color: white;
}

.or {
    text-align: center;
    margin-top: -20px;
}

.google-btn {
    margin: auto;
    text-align: center;
}

.btn-outline-dark {
    border-radius: 50px;
}
.login-btn .btn{
    margin-right: 10px;
    color:white;
}
</style>