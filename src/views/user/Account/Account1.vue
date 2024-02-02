<template>
    <div class="my-5 animate__animated animate__rollIn animate__slow">
        <div class="row align-items-start">
            <h3 class="col-2" />
            <h3 class="col-6">歡迎回來 </h3>
            <h3 class="col-3"> {{ userdetails.name }}</h3>
        </div>
        <br><br>
        <div class="container" v-show="isShowToChange">
            <!-- 大頭貼上傳和預覽 -->
            <div class="col-6 float-end">
                <a href="#" class="btn">
                    <img src="@images/user-3.jpg" class="img-fluid float-end rounded-circle" width="300" for="formFile">
                </a>
            </div>
            <div class="col-3">
                <!-- 使用者設定名稱 -->
                <div class="row mb-3">
                    <div class="col-sm-4 ">暱稱 </div>
                    <div class="col-sm-6"><span>{{ userdetails.name }}</span></div>
                </div>
                <!-- email並驗證 -->
                <div class="row mb-3">
                    <div class="col-sm-4 mb-4">Email </div>
                    <div class="col-sm-6"><span>{{ userdetails.email }}</span></div>
                </div>
                <!-- 手機號碼(驗證) -->
                <div class="row mb-3">
                    <div class="col-sm-4 mb-4">手機號碼 </div>
                    <div class="col-sm-6"><span>{{ userdetails.phone }}</span></div>
                </div>
                <!-- 性別 -->
                <div class="row mb-3">
                    <div class="col-sm-4 mb-4">性別 </div>
                    <div class="col-sm-6"><span>{{ userdetails.gender === "Male" ? "男" : (userdetails.gender ===
                        "Female" ? "女" : "保密") }}</span></div>
                </div>
                <!-- 國家 -->
                <div class="row mb-3">
                    <div class="col-sm-4 mb-4">國家 </div>
                    <div class="col-sm-6"><span>{{ userdetails.country === null ? "尚未設定" : userdetails.country
                    }}</span></div>
                </div>
                <!-- 出生日期 -->
                <div class="row mb-3">
                    <div class="col-sm-4 mb-4">生日 </div>
                    <div class="col-sm-6"><span>{{ formatDate(props.userdetails.birth) }}</span></div>
                </div>
                <!-- 按鈕 -->
                <span class="btn btn-lg btn-primary btn-block float-end" @click="enterimput">變更</span><br><br>
            </div>
        </div>

        <!-- 表單開始 -->
        <form ref="form" class="needs-validation container-xxl animate__animated animate__rubberBand" novalidate
            @submit.prevent="submitForm" v-show="isShowToSubmit">
            <div class="container">
                <!-- 大頭貼上傳和預覽 -->
                <div class="col-6 float-end">
                    <label for="formFile" class="form-label">點我上傳大頭貼<br></label><br>

                    <img v-if="true" :src="props.userdetails.image" class="img-fluid float-end rounded-circle" width="300"
                        height="300">

                    <input type="file" class="imagefile" id="formFile" @change="fileSelected">
                </div>
                <div class="col-3">
                    <!-- 使用者設定名稱 -->
                    <div class="row mb-3">
                        <label for="validationCustomUsername" class="col-4 col-form-label">暱稱</label>
                        <div class="col-8 mb-4"><input type="text" class="form-control" id="validationCustomUsername"
                                placeholder="取一個響亮的名稱吧" aria-describedby="inputGroupPrepend"
                                v-model="props.userdetails.name" required>
                            <div class="invalid-feedback">
                                請輸入名稱
                            </div>
                        </div>
                    </div>
                    <!-- email並驗證 -->
                    <div class="row mb-3 position-relative">
                        <label for="validationCustom02" class="col-4 mb-4 form-label">Email</label>
                        <div class="col-8">
                            <input type="email" class="form-control" id="validationCustom02"
                                placeholder="your@example.email.com" required v-model="props.userdetails.email">
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
                                maxlength="20" required v-model="props.userdetails.phone">
                            <div class="invalid-feedback">
                                請輸入手機號碼
                            </div>
                        </div>
                    </div>
                    <!-- 性別 -->
                    <div class="row mb-3">
                        <label for="" class="col-sm-4 mb-4 col-form-label">性別</label>
                        <div class="col-sm-8 mb-4 large">
                            <input type="radio" class="form-check-input " name="gender" value="Other"
                                v-model="props.userdetails.gender" required>保密(其他)
                            <input type="radio" class="form-check-input" name="gender" value="Male"
                                v-model="props.userdetails.gender" required>男
                            <input type="radio" class="form-check-input" name="gender" value="Female"
                                v-model="props.userdetails.gender" required>女
                            <div class="invalid-feedback">請點選性別</div>
                        </div>
                    </div>
                    <!-- 國家 -->
                    <div class="row mb-3">
                        <label for="" class="col-sm-3 mb-4 col-form-label">國家</label>
                        <div class="col-sm-8 d-flex flex-wrap">
                            <select class="form-select" id="" required v-model="props.userdetails.country">
                                <option v-for="(country, index) in countries" :key="index" :value="country.countryid">{{
                                    country.countryid }}</option>
                                <!-- <option v-for="i in countries.length" :key="i">{{ countries[i - 1].countryid }}</option> -->
                            </select>
                            <div class="invalid-feedback">
                                請選取所在國家
                            </div>
                        </div>
                    </div>
                    <!-- 出生日期 -->
                    <div class="row mb-3">
                        <label for="colFormLabel" class="col-sm-3 mb-4 col-form-label">生日</label>
                        <div class="col-sm-8 d-flex flex-wrap">
                            <select class="form-select" id="" required v-model="birth.year">
                                <option value="" selected disabled hidden>年</option>
                                <option v-for="i in 300" :key="i" :value="i + 1911">{{ i + 1911 }}年</option>
                            </select>
                            <div class="invalid-feedback">
                                請選取年份
                            </div>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-sm-3"></div>
                        <div class="col-sm-4 d-flex flex-wrap">
                            <select class="form-select" id="" required v-model="birth.month">
                                <option value="" selected disabled hidden>月</option>
                                <option v-for="i in 12" :key="i" :value="i < 10 ? '0' + i : i">{{ i < 10 ? '0' + i : i
                                }}月</option>
                            </select>
                            <div class="invalid-feedback">
                                請選取月份
                            </div>
                        </div>
                        <div class="col-sm-4 d-flex flex-wrap">
                            <select class="form-select" id="" required v-model="birth.day">
                                <option value="" selected disabled hidden>日</option>
                                <option v-for="i in 31" :key="i" :value="i < 10 ? '0' + i : i">{{ i < 10 ? '0' + i : i
                                }}日</option>
                            </select>
                            <div class="invalid-feedback">
                                請選取日期
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 按鈕 -->
                <button class="btn btn-lg btn-danger btn-block " type="submit" @click="submitChanges">儲存</button>
                <button class="btn btn-lg btn-danger btn-block ms-5" type="button" @click="ChangesPassword">更改密碼</button>
                <button class="btn btn-lg btn-warning btn-block ms-5" type="button" @click="changeVeiw">返回</button>
            </div>
        </form>


        <!-- 按鈕 -->
    </div>
</template>
    
<script setup>
import { onMounted, ref, reactive } from 'vue'
import axios from 'axios';
import Swal from 'sweetalert2';
//============從父層傳值============
//============查詢會員資料============
const props = defineProps({
    userdetails: Object,
})

// 格式化日期為"YYYY/MM/DD"
const formatDate = (dateString) => {
    if (dateString === null || dateString === undefined || dateString === "" || dateString.length === 0) return "尚未設定生日";
    let date = new Date(dateString);
    return `${date.getFullYear()}/${("0" + (date.getMonth() + 1)).slice(-2)}/${("0" + date.getDate()).slice(-2)}`;
}


//變更開關
const isShowToChange = ref(true);
const isShowToSubmit = ref(false);

const changeVeiw = () => {
    isShowToChange.value = !isShowToChange.value;
    isShowToSubmit.value = !isShowToSubmit.value;
}
const enterimput = () => {
    changeVeiw();
    findcountry();
    ToBirth();
}

const countries = reactive([])
const findcountry = async () => {
    const API_URL = `${import.meta.env.VITE_APP_API_URL}/api/country/getCountries`
    const response = await axios.get(API_URL);
    countries.push(...response.data);
}
const birth = reactive({
    year: '',
    month: '',
    day: '',
})
const ToBirth = () => {
    if (formatDate(props.userdetails.birth) !== "尚未設定生日") {
        birth.year = formatDate(props.userdetails.birth).split("/")[0]; birth.month = formatDate(props.userdetails.birth).split("/")[1]; birth.day = formatDate(props.userdetails.birth).split("/")[2];
    }
    console.log(birth)
}

const submitChanges = (event) => {
    // 阻止表单的默认提交行为
    //event.preventDefault();
    console.log("這是要傳的檔案");
    const data = {
        name: props.userdetails.name,
        email: props.userdetails.email,
        phone: props.userdetails.phone,
        gender: props.userdetails.gender,
        country: props.userdetails.country,
        birth: birth.year + '-' + birth.month + '-' + birth.day,
    }
    console.log(data);
    // enterimput();
}

const ChangesPassword = () => {
    Swal.fire({
        icon: 'question',
        text: '是否要修改密碼',
        confirmButtonText: '好的',
    });
}

//使用bootstrap驗證
const bookStrapValidation = () => {
    let forms = document.querySelectorAll('.needs-validation');

    // Loop over forms and add submit event listener
    Array.from(forms).forEach((form) => {
        form.addEventListener('submit', (event) => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        });
    });
}


//上傳圖片
const image = ref('');
function fileSelected(e) {
    console.log(e)
    const file = e.target.files.item(0);
    const reader = new FileReader();
    reader.addEventListener('load', imageLoaded);
    reader.readAsDataURL(file);
}
function imageLoaded(e) {
    console.log(e.target.result)
    image.value = e.target.result;
}


// upload() {
//     // 用base64字串的方式上傳
//     axios.post('/upload', { image: this.image });
//     // 用FormData這種非字串的方式上傳
//     //const form = new formData();
//     //form.append(this.file, this.file.name)

// }




onMounted(async () => {
    bookStrapValidation();
    formatDate(props.userdetails.birth);
});
</script>
    
<style scoped>
.blueUnderline {
    color: blue;
    padding-left: 50px;
    font-size: larger;
    text-decoration: underline;
}

select {
    width: 150px;
    height: 40px;
    padding-right: 30px;
    margin-bottom: 10px;
}

.large {
    font-size: large;
}




.imagefile {
    display: none;
}
</style>