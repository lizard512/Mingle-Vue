<template>
    <div class=""><br><br>
        <div class="row align-items-start">
            <h3 class="col-3"></h3>
            <h3 class="col-3">歡迎回來 </h3>
            <h3 class="col-2"> {{ userdetails.name }}</h3>
        </div>
        <br><br>
        <!-- 表單開始 -->
        <div class="container-xxl">
            <div class="col-9">
                <!-- 大頭貼上傳和預覽 -->
                <div class="col float-end">
                    <a href="#" class="btn">
                        <img width=300 src="@images/user-1.jpg" class="rounded float-end img1" for="formFile">
                    </a>
                </div>
                <!-- 使用者設定名稱 -->
                <div class="row mb-3">
                    <div class="col-sm-4">暱稱 </div>
                    <div class="col-sm-6"><span>{{ userdetails.name }}</span></div>
                </div>
                <!-- email並驗證 -->
                <div class="row mb-3">
                    <div class="col-sm-4">Email </div>
                    <div class="col-sm-6"><span>{{ userdetails.email }}</span></div>
                </div>
                <!-- 手機號碼(驗證) -->
                <div class="row mb-3">
                    <div class="col-sm-4">手機號碼 </div>
                    <div class="col-sm-6"><span>{{ userdetails.phone }}</span></div>
                </div>
                <!-- 性別 -->
                <div class="row mb-3">
                    <div class="col-sm-4">性別 </div>
                    <div class="col-sm-6"><span>{{ userdetails.gender === "Male" ? "男" : (userdetails.gender === "Female" ?
                        "女" : "保密") }}</span></div>
                </div>
            </div>
            <!-- 出生日期 -->
            <div class="row mb-3 ">
                <div class="col-sm-4">生日 </div>
                <div class="col-sm-6"><span>{{ formatDate(userdetails.birth) }}</span></div>
            </div>

        </div>


        <!-- 按鈕 -->
        <span class="btn  btn-primary btn-block float-end" @click="enterimput" v-show="isShowToChange">變更</span><br><br>
        <button class="btn btn-lg btn-danger btn-block float-end" type="submit" v-show="isShowToSubmit"
            @click="submitChanges">儲存</button>
    </div>
</template>
    
<script setup>
import { onMounted, ref, reactive } from 'vue'
//變更開關
const isShowToChange = ref(true);
const isShowToSubmit = ref(false);
const enterimput = () => {
    isShowToChange.value = false;
    isShowToSubmit.value = true;
}

const submitChanges = () => {
    enterimput();
}
//送出變更
// const submitChanges = () => {
//     // Fetch all the forms we want to apply custom Bootstrap validation styles to
//     var forms = document.querySelectorAll('.novalidate')

//     // Loop over them and prevent submission
//     Array.prototype.slice.call(forms).forEach(function (form) {
//         form.addEventListener('submit', function (event) {
//             if (!form.checkValidity()) {
//                 event.preventDefault()
//                 event.stopPropagation()
//             }

//             form.classList.add('was-validated')
//         }, false)
//     })()

// }

//使用bootstrap驗證
const formRef = ref(null);

const submitForm = () => {
    const form = formRef.value;
    if (form.checkValidity()) {
        // Handle form submission logic here
        console.log('Form submitted successfully');
    } else {
        // Prevent form submission and apply validation styles
        form.classList.add('was-validated');
        console.log('Form validation failed');
    }
};

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

//============查詢會員資料============

import VueCookies from 'vue-cookies';
import axios from 'axios';

const userdetails = reactive({})

const getuserid =
    () => {
        const sessionToken = VueCookies.get('sessionToken');
        const userid = String(sessionToken).substring(32, sessionToken.length);
        return userid
    }

const User_API_URL = 'http://localhost:8080/order/' + getuserid();

const loaduserDetail = async () => {
    const response = await axios.get(User_API_URL);
    //console.log(response)
    Object.assign(userdetails, response.data);
    console.log(userdetails)


}

// 格式化日期為"YYYY/MM/DD"
const formatDate = (dateString) => {
    let date = new Date(dateString);
    return `${date.getFullYear()}/${("0" + (date.getMonth() + 1)).slice(-2)}/${("0" + date.getDate()).slice(-2)}`;
}
// import { ref } from 'vue'
// const image = ref('');
// function fileSelected(e) {
//     const file = e.target.files.item(0);
//     const reader = new FileReader();
//     reader.addEventListener('load', imageLoaded);
//     reader.readAsDataURL(file);
// }
// function imageLoaded(e) {
//     image = e.target.result;
// }
// upload() {
//     // 用base64字串的方式上傳
//     axios.post('/upload', { image: this.image });
//     // 用FormData這種非字串的方式上傳
//     //const form = new formData();
//     //form.append(this.file, this.file.name)

// }
onMounted(async () => {
    await loaduserDetail();
    bookStrapValidation();
});
</script>
    
<style scoped>
.blueUnderline {
    color: blue;
    padding-left: 50px;
    font-size: larger;
    text-decoration: underline;
}

input {
    margin-left: 50px;
}

select {
    width: 150px;
    padding-right: 30px;
    margin-bottom: 10px;
}

.invalid-feedback,
.valid-feedback {
    margin-left: 50px;
}

.img1 {
    background-position: center center;
}

.imagefile {
    display: none;
}
</style>