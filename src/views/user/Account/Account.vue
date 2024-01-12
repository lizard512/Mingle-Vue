<template>
    <div class="container-fluid bg-white p-0 row">
        <!-- index Start -->
        <div class="row">
            <!-- left Start -->
            <ANavbar></ANavbar>
            <!-- right Start -->
            <div class="col-9 md-right">
                <br><br>
                <div class="row align-items-start">
                    <h4 class="">歡迎回來</h4>
                </div>
                <br><br>
                <form class="novalidate">
                    <div class="row">
                        <div>
                            <span class="">使用者帳號</span>
                            <span class="changeinput" id="">sheridan</span>
                        </div>
                        <div>
                            <img src="../../../assets/images/user-1.jpg" class="rounded float-end" alt="..."
                                style="width: 200PX;">
                            <br><br>
                            <label for=" Nickname " class=" form-label">暱稱
                                <input type="text" class="" id="Nickname " placeholder="" value="" required>
                            </label>
                            <div class="invalid-feedback">
                                name is required.
                            </div>
                            <br><br><br>
                            <div class="">
                                <label for="email" class="form-label">Email
                                    <input type="email" class="" id="email" placeholder="your@example.com">
                                    <span class="changeinput">變更</span>
                                </label>
                                <div class="invalid-feedback">
                                    Please enter email .
                                </div>
                            </div>
                            <br><br>
                            <div class="">
                                <label for="" class="form-label">手機號碼
                                    <input type="number" class="" id="cellphone" placeholder="0912345678"
                                        maxlength="10"><span class="changeinput">變更</span></label>
                                <div class="invalid-feedback">
                                    Please enter cellphone.
                                </div>
                            </div>
                            <br><br>
                            <div class="col-12">
                                <label for="address2" class="form-label">性別 </label>
                                <input type="radio" class="" name="gender" value="male">男
                                <input type="radio" class="" name="gender" value="female">女
                                <input type="radio" class="" name="gender" value="other">其他
                            </div>
                            <div>
                            </div>
                            <br><br>
                            <label for="" class="form-label"> 生日</label>
                            <select class="" id="" required>
                                <option value="">日</option>
                                <option></option>
                            </select>
                            <select class="" id="" required>
                                <option value="">月</option>
                                <option></option>
                            </select>
                            <select class="" id="" required>
                                <option value="">年</option>
                                <option></option>
                            </select>
                            <a href="index.html"><button class="btn btn-lg btn-warning btn-block float-end"
                                    type="submit">儲存</button></a>
                            <br><br>
                        </div>
                    </div>
                </form>
            </div>
        </div>

        <!-- index End -->
    </div>
</template>
    
<script setup >
import ANavbar from './AccountLeftNavBar.vue';
</script>
    
<style scoped>
.changeinput {
    color: blue;
    padding-left: 50px;
    font-size: larger;
    text-decoration: underline;
}

input {
    margin-left: 50px;
}

select {
    width: 6em;
    margin-left: 50px;
}
</style>