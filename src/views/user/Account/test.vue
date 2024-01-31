
<template>
    <div class="my-5 animate__animated animate__rollIn animate__slow">
        <div class="row align-items-start">
            <h3 class="col-1" />
            <h3 class="col-6">歡迎回來 </h3>
            <h3 class="col-3"> {{ userdetails.name }}</h3>
        </div>
        <br><br>
        <!-- 表單開始 -->
        <form ref="form" class="needs-validation container-xxl" novalidate @submit.prevent="submitForm">
            <div class="container">
                <!-- 大頭貼上傳和預覽 -->
                <div class="col-6 float-end">
                    <a href="#" class="btn">
                        <label for="formFile" class="form-label">點我上傳大頭貼<br></label>
                        <img v-if="image" :src="image" width=300 alt="@images/user-3.jpg"
                            class="img-fluid rounded float-end rounded-circle img1" for="formFile">
                    </a>
                    <input type="file" class="imagefile" id="formFile" @change="fileSelected">
                </div>
                <div class="col-3">
                    <!-- 使用者設定名稱 -->
                    <div class="row mb-3">
                        <label for="validationCustomUsername" class="col-4 mb-4 col-form-label">暱稱</label>
                        <div class="col-8"><input type="text" class="form-control" id="validationCustomUsername"
                                placeholder="取一個響亮的名稱吧" aria-describedby="inputGroupPrepend" required>
                            <div class="invalid-feedback ">
                                請輸入名稱
                            </div>
                        </div>
                    </div>
                    <!-- email並驗證 -->
                    <div class="row mb-3 position-relative">
                        <label for="validationCustom02" class="col-4 mb-4 form-label">Email</label>
                        <div class="col-8">
                            <input type="email" class="form-control" id="validationCustom02"
                                placeholder="your@example.email.com" required>
                            <div class="valid-feedback">
                                驗證成功!
                            </div>
                            <div class="invalid-feedback">
                                請輸入 email並驗證
                            </div>
                        </div>
                    </div>
                    <!-- 手機號碼(驗證) -->
                    <div class="row mb-3">
                        <label for="validationCustom05" class="col-sm-4 mb-4 col-form-label">手機號碼</label>
                        <div class="col-sm-8">
                            <input type="phone" class="form-control" id="validationCustom05" placeholder="0912345678"
                                maxlength="20" required>
                            <div class="invalid-feedback">
                                請輸入手機號碼
                            </div>
                        </div>
                    </div>
                    <!-- 性別 -->
                    <div class="row mb-3">
                        <label for="" class="col-sm-4 mb-4 col-form-label">性別</label>
                        <div class="col-sm-8">
                            <input type="radio" class="" name="gender" value="Male" v-model="userdetails.gender" required>男
                            <input type="radio" class="" name="gender" value="Female" v-model="userdetails.gender">女
                            <input type="radio" class="" name="gender" value="Other" v-model="userdetails.gender">保密(其他)
                            <div class="invalid-feedback">請點選性別</div>
                        </div>
                    </div>
                    <!-- 出生日期 -->
                    <div class="row mb-3">
                        <label for="colFormLabel" class="col-sm-3 mb-4 col-form-label">生日</label>
                        <div class="col-sm-3 d-flex flex-wrap">
                            <select class="form-select" id="" required>
                                <option value="">日</option>
                                <option v-for="i in 31" :key="i">{{ i }}日</option>
                            </select>
                            <div class="invalid-feedback">
                                請選取日期
                            </div>
                        </div>
                        <div class="col-sm-3 d-flex flex-wrap">
                            <select class="form-select" id="" required>
                                <option value="">月</option>
                                <option v-for="i in 12" :key="i">{{ i }}月</option>
                            </select>
                            <div class="invalid-feedback">
                                請選取月份
                            </div>
                        </div>
                        <div class="col-sm-3 d-flex flex-wrap">
                            <select class="form-select" id="" required>
                                <option value="">年</option>
                                <option v-for="i in 300" :key="i">{{ i + 1911 }}年</option>
                            </select>
                            <div class="invalid-feedback">
                                請選取年份
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 按鈕 -->
                <button class="btn btn-lg btn-danger btn-block float-end" type="submit" v-show="isShowToSubmit"
                    @click="submitChanges">儲存</button>
                <span class="btn btn-lg btn-primary btn-block float-end" @click="enterimput"
                    v-show="isShowToChange">變更</span><br><br>
            </div>
        </form>
    </div>
</template>

<script setup>


const props = defineProps({
    userdetails: Object,
})

</script>