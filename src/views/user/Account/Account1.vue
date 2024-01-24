<template>
    <div class=""><br><br>
        <div class="row align-items-start">
            <h4 class="" style="text-align: center;">歡迎回來</h4>
        </div>
        <br><br>
        <!-- 表單開始 -->
        <form ref="form" class="needs-validation container-xxl" novalidate @submit.prevent="submitForm">
            <div class="row">
                <div class="row mb-3">
                    <!-- 使用者帳號，不可更改 -->
                    <span class="col-sm-1 col-form-label">使用者帳號</span>
                    <div class="col-sm-6">
                        <span class="changeinput" id="">sheridan</span>
                    </div>
                </div>
                <br><br>
                <!-- 使用者設定名稱 -->
                <div class="row mb-3">
                    <label for="validationCustomUsername" class="col-sm-1 col-form-label">暱稱</label>
                    <div class="col-sm-6 ">
                        <input type="text" class="form-control" id="validationCustomUsername" placeholder="取一個響亮的名稱吧"
                            aria-describedby="inputGroupPrepend" required>

                        <div class="invalid-feedback ">
                            請輸入名稱
                        </div>
                    </div>
                </div>
                <!-- email並驗證 -->
                <div class="row mb-3 position-relative">
                    <label for="validationCustom02" class="col-sm-1 form-label">Email</label>
                    <div class="col-sm-6">
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
                    <label for="validationCustom05" class="col-sm-1 col-form-label">手機號碼</label>
                    <div class="col-sm-6">
                        <input type="phone" class="form-control" id="validationCustom05" placeholder="0912345678"
                            maxlength="20" required>

                        <div class="invalid-feedback">
                            請輸入手機號碼
                        </div>
                    </div>
                </div>
                <!-- 性別 -->
                <div class="row mb-3">
                    <label for="" class="col-sm-1 col-form-label">性別</label>
                    <div class="col-sm-6">
                        <input type="radio" class="" name="gender" value="male" required>男
                        <input type="radio" class="" name="gender" value="female">女
                        <input type="radio" class="" name="gender" value="other">其他
                    </div>
                </div>
                <!-- 出生日期 -->
                <div class="row mb-3 ">
                    <label for="colFormLabel" class="col-sm-1 col-form-label">生日</label>
                    <div class="col-sm-2 d-flex flex-wrap">
                        <select class="form-select" id="" required>
                            <option value="">日</option>
                            <option v-for="i in 31" :key="i">{{ i }}日</option>
                        </select>
                        <div class="invalid-feedback">
                            請選取日期
                        </div>
                    </div>
                    <div class="col-sm-2 d-flex flex-wrap">
                        <select class="form-select" id="" required>
                            <option value="">月</option>
                            <option v-for="i in 12" :key="i">{{ i }}月</option>
                        </select>
                        <div class="invalid-feedback">
                            請選取月份
                        </div>
                    </div>
                    <div class="col-sm-2 d-flex flex-wrap">
                        <select class="form-select" id="" required>
                            <option value="">年</option>
                            <option v-for="i in 300" :key="i">{{ i + 1911 }}年</option>
                        </select>
                        <div class="invalid-feedback">
                            請選取年份
                        </div>
                    </div>
                </div>
                <!-- 大頭貼上傳和預覽 -->
                <div>
                    <div>
                        <label for="formFile" class="form-label">上傳大頭貼
                            <img v-if="image" :src="image" width="200" alt="../...." class="rounded float-end"
                                for="formFile">
                        </label>
                        <input type="file" class=" float-end" id="formFile" @change="fileSelected">
                    </div>
                </div>
            </div>
            <!-- 按鈕 -->
            <span class="btn  btn-primary btn-block float-end" @click="enterimput" v-show="isShowToChange">變更</span><br><br>
            <button class="btn btn-lg btn-danger btn-block float-end" type="submit" v-show="isShowToSubmit"
                @click="submitChanges">儲存</button>
        </form>
    </div>
</template>
    
<script setup>
import { onMounted, ref } from 'vue'
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
onMounted(() => {
    const forms = document.querySelectorAll('.needs-validation');

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
});


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
    width: 150px;
    padding-right: 30px;
    margin-bottom: 10px;
}

.invalid-feedback,
.valid-feedback {
    margin-left: 50px;
}
</style>