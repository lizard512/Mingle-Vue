<template>
    <div class="text-center">
        <p class="title">Email或手機驗證</p>
        <div class="register-icon">
            <img src="@icons/icon-progress2.png" width="100px">
        </div>
        <br>
        <p style="color: black; font-weight: bold; font-size: 20px;">請輸入驗證碼</p>
        <span style="color: black;">驗證碼已寄送至</span>
        <span id="accountID" style="color: black;">0975813702</span>
        <p style="color: black;">若使用Email驗證但未收到信件，請至垃圾郵件中尋找</p>
        <otp :digit-count="6" @update:otp="otpValue = $event" ></otp>
        <p>The current OTP value is: {{ otpValue }} </p>
        <!-- <div id="otp" class="inputs d-flex flex-row justify-content-center mt-2">
        <input class="m-2 text-center form-control rounded" type="text" id="first" maxlength="1" />
        <input class="m-2 text-center form-control rounded" type="text" id="second" maxlength="1" />
        <input class="m-2 text-center form-control rounded" type="text" id="third" maxlength="1" />
        <input class="m-2 text-center form-control rounded" type="text" id="fourth" maxlength="1" />
        <input class="m-2 text-center form-control rounded" type="text" id="fifth" maxlength="1" />
        <input class="m-2 text-center form-control rounded" type="text" id="sixth" maxlength="1" />
    </div> -->
        <br>
        <br>
        <div class="register-btn">
            <button class="btn btn-lg btn-dark btn-block" type="submit" @click="goToRegister3">下一步:設定密碼</button>
        </div>
        <br>
    </div>
</template>
    
<script setup>
import otp from "@components/OTPInput.vue";
import { ref } from "vue";
const otpValue = ref('')

// document.addEventListener("DOMContentLoaded", function (event) {
//     function OTPInput() {
//         const inputs = document.querySelectorAll('#otp > *[id]');
//         for (let i = 0; i < inputs.length; i++) {
//             inputs[i].addEventListener('keydown', function (event) {
//                 if (event.key === "Backspace") {
//                     inputs[i].value = ''; if (i !== 0) inputs[i - 1].focus();
//                 } else {
//                     if (i === inputs.length - 1 && inputs[i].value !== '') {
//                         return true;
//                     } else if (event.keyCode > 47 && event.keyCode < 58) {
//                         inputs[i].value = event.key; if (i !== inputs.length - 1) inputs[i + 1].focus(); event.preventDefault();
//                     } else if (event.keyCode > 64 && event.keyCode < 91) {
//                         inputs[i].value = String.fromCharCode(event.keyCode); if (i !== inputs.length - 1) inputs[i + 1].focus(); event.preventDefault();
//                     }
//                 }
//             });
//         }
//     } OTPInput();
// });

import { useRouter } from 'vue-router'
const router = useRouter()
const goToRegister3 = () => {
    router.push('/register/register3')
}
</script>

<style src="@styles/register.css" scoped></style>
<style scoped>
/* .inputs input {
    width: 40px;
    height: 40px;
}

input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0
} */
</style>