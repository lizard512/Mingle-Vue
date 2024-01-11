<template>
    <!-- Content Start -->
    <div class="row">
        <div class="col-lg-4 register-frame">
            <div class="container-xxl bg-white p-5 register-form">
                <p class="title">設定登入密碼</p>
                <div class="register-icon">
                    <img src="../../assets/images/icon-progress3.png" width="100px">
                </div>
                <br>
                <p style="text-align: center; color: black; font-weight: bold; font-size: 20px; margin-top: -20px;">您的帳號為
                </p>
                <div class="account-icon">
                    <img src="../../assets/images/icon-account2.png" width="50px">
                </div>
                <p id="accountID" style="text-align: center;">0975813702</p>
                <br>
                <div class="passwordDiv">
                    <input type="password" class="password" name="password" placeholder="請輸入密碼" required>
                </div>
                <br>
                <div class="passwordDiv">
                    <input type="password" class="password" name="password" placeholder="確認密碼" required>
                </div>
                <p style="color: red;">•密碼長度為 8 - 50 個字元</p>
                <p>•請使用英文字母、數字與符號的半形字元</p>
                <p>•密碼前後不可空格</p>
                <p>•密碼與確認密碼必須相同</p>
                <br>
                <div class="register-btn">
                    <button class="btn btn-lg btn-dark btn-block" type="submit">設定完成</button>
                </div>
                <br>
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

.account-icon {
    text-align: center;
    margin-top: -10px;
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