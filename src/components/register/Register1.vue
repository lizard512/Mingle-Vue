<template>
    <p class="title">設定登入帳號</p>
    <div class="register-icon">
        <img src="@images/icon-progress1.png" width="100px">
    </div>
    <br>
    <p style="color: black;">請輸入Email或電話號碼</p>
    <div class="accountDiv">
        <input type="email" class="account" name="account" placeholder="Email/電話號碼" required autofocus>
    </div>
    <br>
    <br>
    <div class="register-btn">
        <button class="btn btn-lg btn-dark btn-block" type="submit" @click="goToRegister2()">驗證</button>
    </div>
    <br>
    <hr>
    <div class="google-btn">
        <button class="btn btn-outline-dark" type="submit"><img src="@images/icon-google.png"
                width="25px">&nbsp;透過Google帳號登入</button>
    </div>
</template>
    
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
function goToRegister2(){
    router.push('/register/register2')
}
</script>

<style src="@styles/register.css" scoped>
</style>