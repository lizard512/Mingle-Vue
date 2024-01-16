<template>
    <div class="row" id="app">
        <div class="col-lg-4 login-frame">
            <div class="container-xxl bg-white p-5 login-form">
                <div class="login-icon">
                    <img src="@images/icon-main.png" width="50px">
                </div>
                <br>
                <div class="accountDiv">
                    <input id="userid" v-model="data.userid" type="email" class="account" name="account" placeholder="Email/電話號碼"
                        required autofocus>
                </div>
                <br>
                <br>
                <div class="passwordDiv">
                    <input id="password" v-model="data.password" type="password" class="password" name="password"
                        placeholder="請輸入密碼" required>
                </div>
                <br>
                <div class="reminder">
                    <div class="checkboxDiv">
                        <label>
                            <input id="checkbox" @change="checkPassword" class="checkbox" type="checkbox"
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
                    <button class="btn btn-outline-dark" type="submit"><img src="@images/icon-google.png"
                            width="25px">&nbsp;透過Google帳號登入</button>
                </div>
            </div>
        </div>
    </div>
    <h1>{{ data.userid }},{{ data.password }}</h1>
</template>
    
<script setup>
import { createApp, ref } from 'vue';
import VueSweetalert2 from 'vue-sweetalert2';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import axios from 'axios';

function checkPassword() {
    let password = document.getElementById("password");
    if (checkbox.checked == true) {
        password.type = "text";
    } else {
        password.type = "password"
    }
}

const data = {
    userid: "",
    password: "",
    loading: false  // Add loading property to track loading state
};

const login = function () {
    // Set loading to true when login starts
    data.loading = true;

    Swal.fire({
        text: "Loading.......",
        allowOutsideClick: false,
        showConfirmButton: false
    });

    if (data.userid === "") {
        data.userid = null;
    }
    if (data.password === "") {
        data.password = null;
    }
    let request = {
        userid: data.userid,
        password: data.password, 
    }
    axios.post("http://localhost:8080/secure/ajax/login", request)
        .then(function (response) {
            console.log(response);

            if (response.data.success) {
                console.log(response.data.message);
                Swal.fire({
                    icon: "success",
                    text: "登入成功",
                    confirmButtonText: "確認"
                }).then(function (result) {
                    if (result.isConfirmed) {
                        document.location.href = `${contextPath}/index`;
                    }
                });
            } else {
                console.log(response.data.message);
                Swal.fire({
                    icon: "error",
                    text: "登入失敗：" + response.data.message, // Display the server-side error message
                    confirmButtonText: "確認"
                });
            }
        })
        .catch(function (error) {
            console.error(error);
            Swal.fire({
                icon: "warning",
                text: "登入失敗：伺服器錯誤",  // Display a generic server error message
                confirmButtonText: "確認"
            });
        })
        .finally(function () {
            // Set loading to false when the request is complete, whether it succeeded or failed
            data.loading = false;
        });
};

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
</style>