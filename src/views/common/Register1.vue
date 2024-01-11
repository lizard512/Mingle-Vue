<template>
    <!-- Content Start -->
    <div class="row">
        <div class="col-lg-4 register-frame">
            <div class="container-xxl bg-white p-5 register-form">
                <p class="title">設定登入帳號</p>
                <div class="register-icon">
                    <img src="../../assets/images/icon-progress1.png" width="100px">
                </div>
                <br>
                <p style="color: black;">請輸入Email或電話號碼</p>
                <div class="accountDiv">
                    <input type="email" class="account" name="account" placeholder="Email/電話號碼" required autofocus>
                </div>
                <br>
                <br>
                <div class="register-btn">
                    <a href="index.html"><button class="btn btn-lg btn-dark btn-block" type="submit">驗證</button></a>
                </div>
                <br>
                <hr>
                <div class="google-btn">
                    <button class="btn btn-outline-dark" type="submit"><img src="../../assets/images/icon-google.png"
                            width="25px">&nbsp;透過Google帳號登入</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Content End -->
</template>
    
<script setup>

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

.accountDiv {
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

.google-btn {
    margin: auto;
    text-align: center;
}

.btn-outline-dark {
    border-radius: 50px;
}
</style>