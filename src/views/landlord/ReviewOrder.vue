<template>
    <div class="row justify-content-center text-center">
 
        <div class="col-md-8 px-md-4 mx-auto animate__animated animate__fadeInUp justify-content-center">
            <br>
            <h2>訂單評價</h2>
            <!-- 評價 start-->
            <div>
                <div class="row justify-content-center">
                    <div class="col-8">
                        <div class="card-body">
                            <h5 class=" card-title text-md-start text-secondary text-md-center"> 評價分數: </h5>
                                <el-rate v-model="star" size='large'
                                    />
              
                            <!-- 回應訊息 -->
                            <div class="input-group col-12">
                                <el-input v-model="content" :autosize="{ minRows: 5, maxRows: 10 }" type="textarea"
                                    placeholder="請輸入" show-word-limit maxlength="500">
                                </el-input>
                                <!-- 上傳圖片 start -->
                                <div class="col-12">
                                    <div class=" m-3 p-3 animate__animated animate__fadeInUp">
                                        <el-upload v-model:file-list="fileList" action="#" list-type="picture-card"
                                            :auto-upload="false" :on-change="addToTotal" :show-file-list="false"
                                           
                                            accept=".jpg,.jpeg,.webp,.png" multiple drag>
                                            <el-icon>
                                                <Plus />
                                            </el-icon>
                                            <template #tip>
                                                <div class="el-upload__tip secondary">
                                                    圖片只允許 .jpg,.jpeg,.webp,.png，最多6張
                                                </div>
                                            </template>

                                        </el-upload>
                                        <!-- preview -->
                                        <div class="row">
                                            <div v-for=" item, index  in  fileList "
                                                class="col d-flex justify-content-center" :key="index">
                                                <figcaption class="position-relative">
                                                    <i class="fa-solid fa-xmark fa-2xl position-absolute xmark"
                                                        @click="deletePhoto(item, index)"></i>
                                                    <img :src="item.url"
                                                        class=" border-primary rounded previewPhoto animate__animated animate__fadeIn">
                                                </figcaption>
                                            </div>
                                        </div>
                                    </div>


                                </div>

                                <!-- <h4 class="text-center my-5 animate__animated animate__flipInX">上傳圖片</h4> -->




                                <div><button class="btn btn-primary dol-1  col-12" @click="submitReply()">送出</button></div>
                            </div>
                            <!-- ---- -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



    
<script  setup>

import axios from 'axios';
import { onMounted, reactive, ref } from 'vue';
import { Plus } from '@element-plus/icons-vue'
import { useRouter, useRoute } from 'vue-router';
import Swal from "sweetalert2";

const route = useRoute();
const orderId = route.query.orderId;
console.log(orderId);





const router = useRouter();
const goToAccount = () => {
    router.push({ path: '/Account' });
}



const disabled = ref(false)


const star = ref(0)
const content = ref('')

// 工作照片相關
const fileList = ref([]);               // [傳]上傳
const newList = ref([]);                // [新]新照片(file)



// 預覽照片
async function addToTotal(e) {
    if (fileList.value.length <= 5) {
        await newList.value.push(e.raw);
    } else {
        Swal.mixin({
            toast: true,
            position: 'bottom-top',
            showConfirmButton: false,
            timer: 3000,
            padding: 10,
            width: 310,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
                toast.style.bottom = '120px';
            }
        }).fire({
            icon: "error",
            title: "照片最多為6張!"
        })
    }
}
// 刪除照片
function deletePhoto(item, index) {
    fileList.value.splice(index, 1);
}


const review = ref({
    "orderid": 0,
    "content": "",
    "stars": 0,
    "createdAt": new Date().toISOString(),
    "updatedAt": new Date().toISOString()
})


// =========送出評價request============

const submitReply = async () => {

    const Reply_API_URL = `${import.meta.env.VITE_APP_API_URL}/review/create/review`
    
    if(star.value == 0){
        Swal.mixin({
            toast: true,
            position: 'bottom-top',
            showConfirmButton: false,
            timer: 3000,
            padding: 10,
            width: 310,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
                toast.style.bottom = '120px';
            }
        }).fire({
            icon: "error",
            title: "請評價分數!"
        })
        return
    }



    if(content.value == ""){
        Swal.mixin({
            toast: true,
            position: 'bottom-top',
            showConfirmButton: false,
            timer: 3000,
            padding: 10,
            width: 310,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
                toast.style.bottom = '120px';
            }
        }).fire({
            icon: "error",
            title: "請輸入評價內容!"
        })
        return
    }

    if(fileList.value.length > 6){
        Swal.mixin({
            toast: true,
            position: 'bottom-top',
            showConfirmButton: false,
            timer: 3000,
            padding: 10,
            width: 310,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
                toast.style.bottom = '120px';
            }
        }).fire({
            icon: "error",
            title: "照片最多6張!"
        })
        return
    }

    review.value = {
        "orderid": orderId,
        "content": content.value,
        "stars": star.value,
        "createdAt": new Date().toISOString(),
        "updatedAt": new Date().toISOString()

    }
    const replyresponse = await axios.post(
        Reply_API_URL, review.value
    );
    console.log(replyresponse.data)

    const Photo_API_URL = `${import.meta.env.VITE_APP_API_URL}/review/create/review/photo`

    const formData = new FormData();
    console.log(newList.value)
    // 添加每个文件到 formData 中

    for (const file of newList.value) {
        console.log(file)
        formData.append('photo', file);
    }
    formData.append('reviewid', replyresponse.data.reviewid);
    formData.append('replyCreatedAt', new Date());
    formData.append('replyUpdatedAt', new Date());
    console.log(formData)

    const photoresponse = await axios.post(
        Photo_API_URL, formData, {

        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }
    );

    console.log(photoresponse.data)

    goToAccount();


}


onMounted(async () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    console.log(orderId)
})






</script>
    
<style scoped>
/* 自定義樣式 */

.text-align-right {
    text-align: right;
}


.read-the-docs {
    color: #888;
}

.input-group {
    margin: auto;
    height: 3%;
    border: 1px solid #ffc107;
    border-radius: 1px;
    overflow: hidden;

}

.form-control {
    resize: none;
}

.btn-color {
    background-color: #ffc107;
    border: none;
}

.avatar-uploader .el-upload {
    border: 1px dashed var(--el-border-color);
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
    border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    text-align: center;
}


.previewPhoto {
    height: 125px;
    width: 125px;
    object-fit: contain;
}

.xmark {
    top: 14px;
    right: 7px;
    z-index: 1000;
}

figcaption:hover .xmark {
    transform: rotate(270deg);
    /* 設置 xmark 的旋轉效果 */
}

figcaption:hover img {
    transform: scale(1.1);
    /* 設置圖片的縮放效果 */
    transition: transform 0.3s ease;
    /* 添加過渡效果，使縮放平滑過渡 */
}

.xmark {
    transition: transform 0.3s ease;
    /* 添加過渡效果，使旋轉平滑過渡 */
}

.photo-container {
    width: 100%;
    /* 设置包装容器宽度为 100%，占满表格列 */
    max-width: 300px;
    /* 设置包装容器最大宽度，调整根据需求 */
    margin: auto;
    /* 水平居中 */
    overflow: hidden;
    /* 隐藏溢出的图像部分 */
}

.photo-container {
    width: 80%;
    /* 设置包装容器宽度为 100%，占满表格列 */
    max-width: 400px;
    /* 设置包装容器最大宽度，调整根据需求 */
    margin: auto;
    /* 水平居中 */
    overflow: hidden;
    /* 隐藏溢出的图像部分 */
}


.swiper {
    width: 100%;
    height: 100%;
}

.swiper-slide img {
    display: block;
    height: 100%;
    object-fit: contain;
}

.el-rate  {
    font-size: 500px; /* 調整星星的尺寸，請根據需要自行調整大小 */
}
</style>