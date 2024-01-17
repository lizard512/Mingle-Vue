<template>
    <div class="col-9 md-right">
        <br><br>
        <div class="row align-items-start">
            <h4 class="" style="text-align: center;">歡迎回來</h4>
        </div>
        <br><br>
        <form class="novalidate container-xxl ">
            <div class="row">
                <div class="row mb-3">
                    <span class="col-sm-1 col-form-label">使用者帳號</span>
                    <div class="col-sm-6">
                        <span class="changeinput" id="">sheridan</span>
                    </div>
                </div>
                <br><br>

                <div class="row mb-3">
                    <label for="Nickname" class="col-sm-1 col-form-label">暱稱</label>
                    <div class="col-sm-6">
                        <input type="text" class="form-control" id="Nickname" placeholder="" required>
                    </div>
                    <div class="invalid-feedback">
                        請輸入名稱
                    </div>
                </div>

                <div class="row mb-3">
                    <label for="Aemail" class="col-sm-1 col-form-label">Email</label>
                    <div class="col-sm-6">
                        <input type="email" class="form-control" id="Aemail" placeholder="your@example.com" required>
                    </div>
                    <div class="invalid-feedback">
                        請輸入 email
                    </div>
                </div>

                <div class="row mb-3">
                    <label for="Acellphone" class="col-sm-1 col-form-label">手機號碼</label>
                    <div class="col-sm-6">
                        <input type="phone" class="form-control" id="Acellphone" placeholder="0912345678" maxlength="20"
                            required>
                    </div>
                    <div class="invalid-feedback">
                        請輸入手機號碼
                    </div>
                </div>



                <div class="row mb-3">
                    <label for="" class="col-sm-1 col-form-label">性別</label>
                    <div class="col-sm-6">
                        <input type="radio" class="" name="gender" value="male" required>男
                        <input type="radio" class="" name="gender" value="female">女
                        <input type="radio" class="" name="gender" value="other">其他
                    </div>
                </div>

                <div class="row mb-3">
                    <label for="colFormLabel" class="col-sm-1 col-form-label">生日</label>
                    <div class="col-sm-2">
                        <select class="" id="" required>
                            <option value="">日</option>
                            <option v-for="i in 31" :key="i">{{ i }}日</option>
                        </select>
                    </div>
                    <div class="col-sm-2">
                        <select class="" id="" required>
                            <option value="">月</option>
                            <option v-for="i in 12" :key="i">{{ i }}月</option>
                        </select>
                    </div>
                    <div class="col-sm-2">
                        <select class="" id="" required>
                            <option value="">年</option>
                            <option v-for="i in 300" :key="i">{{ i + 1911 }}年</option>
                        </select>
                    </div>


                </div>







                <div>
                    <!--   
                    <div class="float-end">
                        <div class="mb-3">
                            <img src="../../../assets/images/user-1.jpg" class="rounded float-end" alt="..."
                                style="width: 200PX;" for="formFile">

                            <input class="form-control" type="image" id="formFile">
                        </div>
                    </div> 
                -->

                    <!-- <div>
                        <input type="file" @change="fileSelected(e)">
                        <img v-if="image" :src="image" width="200" />
                        <button @click="upload">
                            Upload
                        </button>
                    </div> -->
                </div>

            </div>
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
const submitChanges = () => {

    var forms = document.querySelectorAll('.novalidate')
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }
                form.classList.add('was-validated')
            }, false)
        });
}
onMounted(() => {
    //在DOM准備好時執行
    submitChanges();
})

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
    width: 6em;
    margin-bottom: 50px;
}
</style>