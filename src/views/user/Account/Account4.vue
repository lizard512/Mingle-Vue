<template>
    <div class="container animate__animated animate__bounceInLeft animate__slow"><br><br>
        <div class="row justify-content-center">
            <h3 class="row col-md-auto">來敘述一下自己，讓大家更快了解你</h3>
            <div style="margin: 20px 0" />
        </div>
        <div class="demo-collapse">
            <el-collapse v-model="activeNames" class="larger">
                <div class="row row-md-auto">
                    <el-collapse-item title="自我介紹" name="1">
                        <!-- [introduction] -->
                        <div>
                            <el-input v-model="userdetails.introduction" maxlength="300" show-word-limit
                                :autosize="{ minRows: 3, maxRows: 6 }" type="textarea" placeholder="請輸入" />
                        </div>
                    </el-collapse-item>
                </div>
                <div class="row row-md-auto">
                    <el-collapse-item title="關於我" name="2">
                        <!-- [background] -->
                        <div>
                            <el-input v-model="userdetails.background" :autosize="{ minRows: 5, maxRows: 10 }"
                                type="textarea" placeholder="請輸入" show-word-limit maxlength="500" />
                        </div>
                    </el-collapse-item>
                </div>
                <el-collapse-item title="語言" name="3">
                    <!-- [language] -->
                    <div>
                        <el-input v-model="userdetails.language" maxlength="100" show-word-limit :autosize="{ maxRows: 2 }"
                            type="textarea" placeholder="請輸入" />
                    </div>
                </el-collapse-item>
                <el-collapse-item title="個人喜好與習慣" name="4">
                    <!-- [hobby] -->
                    <div>
                        <el-input v-model="userdetails.hobby" maxlength="100" show-word-limit :autosize="{ maxRows: 2 }"
                            type="textarea" placeholder="請輸入" />
                    </div>
                </el-collapse-item>
            </el-collapse>
        </div>
        <button class="btn btn-lg btn-danger btn-block float-end" type="submit" v-show="isShowToSubmit"
            @click="submitChanges">儲存</button>

    </div>
</template>
  
<script setup >
import { watch, ref } from 'vue'
// const textarea1 = ref('')
// const textarea2 = ref('')
// const textarea3 = ref('')
// const textarea4 = ref('')
const activeNames = ref(['1'])
// const handleChange = (val: string[]) => {
//      console.log(val)
// }



//============從父層傳值============
//============查詢會員資料============
const props = defineProps({
    userdetails: Object,
})


//按鈕開關
const isShowToSubmit = ref(false);

//監聽改變顯示按鈕
const stopWatch = watch(() => [props.userdetails.introduction, props.userdetails.background, props.userdetails.language, props.userdetails.hobby], function (newValue, oldValue) {
    isShowToSubmit.value = true;
},
    { deep: false }
)
import axios from 'axios'
import Swal from 'sweetalert2';
//送出變更和隱藏按鈕
const submitChanges = () => {

    Swal.fire({
        icon: "info",
        text: "確認更新資料嗎?",
        allowOutsideClick: false,
        confirmButtonText: "確定",
        showCancelButton: true,
        cancelButtonText: "再想想",
    }).then(function (result) {
        if (result.isConfirmed) {
            updateDetail();
        }
    });


}

const updateDetail = async () => {
    const data = {
        update: "introductions",
        introduction: props.userdetails.introduction,
        background: props.userdetails.background,
        language: props.userdetails.language,
        hobby: props.userdetails.hobby
    }
    console.log(data);

    await axios.patch(`${import.meta.env.VITE_APP_API_URL}/api/volunteerDetail/update/details/${localStorage.getItem('userID')}`, data).then(function (response) {
        console.log("我傳回成功啦")
        console.log(response.data)
        if (response.data.success) {
            Swal.fire({
                icon: "success",
                text: "更新成功",
                confirmButtonText: "確定"
            })
            isShowToSubmit.value = false;
        } else {
            Swal.fire({
                icon: "warning",
                title: "哎呀...",
                text: response.data.message,
                confirmButtonText: "確認"
            })
        }
    }).catch(function () {
        Swal.fire({
            icon: "error",
            title: "糟糕...",
            text: "操作失敗",
            confirmButtonText: "確認"
        })
    })
}

</script>


<style scoped>
.larger {
    font-size: 50dvh;
}

.el-collapse {
    --el-collapse-header-font-size: 3vh;
}
</style>