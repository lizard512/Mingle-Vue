<template>
    <!-- Content Start -->
    <div class="row">
        <div class="col-lg-4 register-frame">
            <div class="container-xxl bg-white p-5 register-form">
                <p class="title">Email或手機驗證</p>
                <div class="register-icon">
                    <img src="../../assets/images/icon-progress2.png" width="100px">
                </div>
                <br>
                <p style="color: black; font-weight: bold; font-size: 20px;">請輸入驗證碼</p>
                <span style="color: black;">驗證碼已寄送至</span>
                <span id="accountID" style="color: black;">0975813702</span>
                <p style="color: black;">若使用Email驗證但未收到信件，請至垃圾郵件中尋找</p>
                <div id="otp" class="inputs d-flex flex-row justify-content-center mt-2">
                    <input class="m-2 text-center form-control rounded" type="text" id="first" maxlength="1" />
                    <input class="m-2 text-center form-control rounded" type="text" id="second" maxlength="1" />
                    <input class="m-2 text-center form-control rounded" type="text" id="third" maxlength="1" />
                    <input class="m-2 text-center form-control rounded" type="text" id="fourth" maxlength="1" />
                    <input class="m-2 text-center form-control rounded" type="text" id="fifth" maxlength="1" />
                    <input class="m-2 text-center form-control rounded" type="text" id="sixth" maxlength="1" />
                </div>
                <br>
                <br>
                <div class="register-btn">
                    <button class="btn btn-lg btn-dark btn-block" type="submit">下一步:設定密碼</button>
                </div>
                <br>
            </div>
        </div>
    </div>
    <!-- Content End -->
</template>
    
<script setup>
document.addEventListener("DOMContentLoaded", function (event) {
    function OTPInput() {
        const inputs = document.querySelectorAll('#otp > *[id]');
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].addEventListener('keydown', function (event) {
                if (event.key === "Backspace") {
                    inputs[i].value = ''; if (i !== 0) inputs[i - 1].focus();
                } else {
                    if (i === inputs.length - 1 && inputs[i].value !== '') {
                        return true;
                    } else if (event.keyCode > 47 && event.keyCode < 58) {
                        inputs[i].value = event.key; if (i !== inputs.length - 1) inputs[i + 1].focus(); event.preventDefault();
                    } else if (event.keyCode > 64 && event.keyCode < 91) {
                        inputs[i].value = String.fromCharCode(event.keyCode); if (i !== inputs.length - 1) inputs[i + 1].focus(); event.preventDefault();
                    }
                }
            });
        }
    } OTPInput();
});
</script>
    
<style scoped>
.row {
    margin-top: 2em;
}

.register-frame {
    margin: auto;
    border: 1px solid black;
    border-radius: 10px;
    padding: 10px;
    background-color: #d63384;
}

.register-form {
    border: 1px solid black;
    border-radius: 10px;
}

.title {
    text-align: center;
    color: black;
    font-size: 25px;
    margin-top: -30px;
}

.register-icon {
    margin: auto;
    text-align: center;
}

input {
    padding: 10px;
    border-radius: 30px;
}

.register-btn {
    margin: auto;
    text-align: center;
}

.register-btn button {
    background-color: #d63384;
}

.btn-dark {
    border-radius: 50px;
    color: white;
}

.btn-outline-dark {
    border-radius: 50px;
}

.inputs input {
    width: 40px;
    height: 40px;
}

input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0
}
</style>