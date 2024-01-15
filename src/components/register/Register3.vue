<template>
    <p class="title">設定登入密碼</p>
    <div class="register-icon">
        <img src="@images/icon-progress3.png" width="100px">
    </div>
    <br>
    <p style="text-align: center; color: black; font-weight: bold; font-size: 20px; margin-top: -20px;">您的帳號為
    </p>
    <div class="account-icon">
        <img src="@images/icon-account2.png" width="50px">
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
</template>
    
<script setup>
</script>


<style src="@styles/register.css" scoped></style>
<style scoped>

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


.account {
    overflow: hidden;
    width: 100%;
}

.password {
    overflow: hidden;
    width: 100%;
}



</style>