<template>
    <div class="text-center">
        <p class="title">設定登入帳號</p>
        <div class="register-icon">
            <img src="@images/icon-progress1.png" width="100px">
        </div>
        <br>
        <p style="color: black;">請輸入使用者名稱及密碼</p>
        <div class="accountDiv">
            <input type="email" class="account" v-model="username" name="account" placeholder="使用者名稱" required autofocus>
        </div>
        <br>
        <div class="passwordDiv">
            <input type="password" class="password" v-model="password" name="password" placeholder="請輸入密碼" required>
        </div>
        <br>
        <p class="hint" style="color: red;">•請使用英文字母、數字與符號的半形字元</p>
        <p class="hint">•不可有空格</p>
        <br>
        <div class="register-btn">
            <button class="btn btn-lg btn-dark btn-block" type="submit" @click="register">註冊</button>
        </div>
        <br>
        <hr>
        <div class="google-btn">
            <button @click="gotGoogleLoginPage" class="btn btn-outline-dark" type="submit"><img
                    src="@images/icon-google.png" width="25px">&nbsp;透過Google帳號登入</button>
        </div>
    </div>
</template>
    
<script setup>
import { createApp, ref } from 'vue';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import axios from 'axios';

let username = ref('');
let password = ref('');
let loading = false;

const register = async function () {
    // Set loading to true when login starts
    loading = true;

    Swal.fire({
        text: "Loading.......",
        allowOutsideClick: false,
        showConfirmButton: false
    });

    if (username === "") {
        username = null;
    }
    if (password === "") {
        password = null;
    }
    let request = {
        username: username.value,
        password: password.value,
    }
    await axios.post("http://localhost:8080/register.controller", request)
        .then( function (response) {
            console.log(response);
            if (request.username.valueOf == null || request.password.valueOf == null) {
                console.log(response.data.message);
                Swal.fire({
                    icon: "error",
                    text: "註冊失敗：" + response.data.message,
                    confirmButtonText: "確認"
                });
            } else if (response.data.success) {
                console.log(response.data.message);
                Swal.fire({
                    icon: "success",
                    text: "註冊成功",
                    confirmButtonText: "確認"
                }).then(function (result) {
                    if (result.isConfirmed) {
                        document.location.href = `http://localhost:7890/login`;
                    }
                });
            } else {
                console.log(response.data.message);
                Swal.fire({
                    icon: "error",
                    text: "註冊失敗：" + response.data.message,
                    confirmButtonText: "確認"
                });
            }
        })
        .catch(function (error) {
            console.error(error);
            Swal.fire({
                icon: "warning",
                text: "註冊失敗：伺服器錯誤",
                confirmButtonText: "確認"
            });
        })
        .finally(function () {
            // Set loading to false when the request is complete, whether it succeeded or failed
            loading = false;
        });
}

function gotGoogleLoginPage() {
    window.location.href = "http://localhost:8080/google-login";
}
</script>

<style src="@styles/register.css" scoped></style>
<style scoped>
.accountDiv {
    text-align: center;
}

.passwordDiv {
    text-align: center;
}

.password {
    width: 100%;
}

.hint{
    text-align: left;
}
</style>