<template>
  <div class="container ">
    <form>
      <div v-show="currentPage === 1" class="page1">
        <div style="font-size: large" class="animate__animated animate__fadeInDown">
          <div>
            <div class="row row-cols-3 gx-0 gy-3 justify-content-around" style="" role="group"
                 aria-label="Basic radio toggle button group">
            </div>
          </div>
        </div>
        <div class="py-5">
          <div class="container">
            <div class="col-md-12">
              <h1>下列哪項最符合工作內容？</h1>
            </div>
            <div class="row">
              <div class="col-md-4" style="">
                <div class="col">
                  <input type="radio" class="btn-check" name="workcontain" id="page1radio1" autocomplete="off">
                  <label class="btn btn-outline-primary cusbtn" for="page1radio1">
                    <img src="@images/icon-人力.png">人力 </label>
                </div>
              </div>
              <div class="col-md-4" style="">
                <div class="col">
                  <input type="radio" class="btn-check" name="workcontain" id="page1radio2" autocomplete="off">
                  <label class="btn btn-outline-primary cusbtn" for="page1radio2">
                    <img src="@images/icon-旅店.png">旅店</label>
                </div>
              </div>
              <div class="col-md-4">
                <div class="col">
                  <input type="radio" class="btn-check" name="workcontain" id="page1radio3" autocomplete="off">
                  <label class="btn btn-outline-primary cusbtn" for="page1radio3">
                    <img src="@images/icon-活動.png">活動</label>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4" style="">
                <div class="col">
                  <input type="radio" class="btn-check" name="workcontain" id="page1radio4" autocomplete="off">
                  <label class="btn btn-outline-primary cusbtn" for="page1radio4">
                    <img src="@images/icon-銷售.png">銷售</label>
                </div>
              </div>
              <div class="col-md-4" style="">
                <div class="col">
                  <input type="radio" class="btn-check" name="workcontain" id="page1radio5" autocomplete="off">
                  <label class="btn btn-outline-primary cusbtn" for="page1radio5">
                    <img src="@images/icon-辦公.png">辦公</label>
                </div>
              </div>
              <div class="col-md-4">
                <div class="col">
                  <input type="radio" class="btn-check" name="workcontain" id="page1radio6" autocomplete="off">
                  <label class="btn btn-outline-primary cusbtn" for="page1radio6">
                    <img src="@images/icon-餐飲.png">餐飲</label>
                </div>
              </div>
            </div>
            <div class="row col-12">
              <div class="col" style="">
                <div class="col-4">
                  <input type="radio" class="btn-check" name="workcontain" id="page1radio7" autocomplete="off">
                  <label class="btn btn-outline-primary cusbtn" for="page1radio7">
                    <img src="@images/icon-其他.png">其他</label>
                </div>
              </div>
              <div class="col" style="">
                <div class="col-4">
                  <input type="radio" class="btn-check" name="workcontain" id="page1radio8" autocomplete="off">
                  <label class="btn cusbtn" for="page1radio8">
                    <img src="@images/icon-活動.png">活動</label>
                </div>
              </div>
              <div class="col" style="">
                <div class="col-4">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div ref="node">{{ currentPage }}</div>
      </div>
      <div v-show="currentPage === 2" class="page2">
        <div style="font-size: large" class="animate__animated animate__fadeInDown">
          <div class="row">
            <div class="col">
              <h1>請告訴我們位置！</h1>
            </div>
            <div>
              <div class="col">
                <div class="form-floating mb-3">
                  <input type="text" class="form-control" id="floatingInput" placeholder="">
                  <label for="floatingInput">工作名稱 :</label>
                </div>
              </div>
              <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput" placeholder="">
                <label for="floatingInput">縣市：</label>
              </div>
              <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput" placeholder="">
                <label for="floatingInput">地址：</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-show="currentPage === 3" class="page3">
        <div style="font-size: large" class="animate__animated animate__fadeInDown">
          <h1>太棒了！告訴我們詳細資訊吧！</h1>
          <div class="row g-2">
            <div class="form-floating col">
              <input type="text" class="form-control" id="floatingInput" placeholder="workHour">
              <label for="floatingInput">工時 :</label>
            </div>
            <div class="form-floating col">
              <input type="text" class="form-control" id="floatingInput" placeholder="minDay">
              <label for="floatingInput">可接受最小天數 :</label>
            </div>
          </div>
          <div class="row g-2">
            <div class="col-md">
              <div class="form-floating">
                <select class="form-select" id="floatingSelectGrid" aria-label="accessAge">
                  <option selected>請選擇</option>
                  <option v-for="item in age" value="{{item}}">
                    {{ item }}
                  </option>
                </select>
                <label for="floatingSelectGrid">年齡限制</label>
              </div>
            </div>
            <div class="col-md">
              <div class="form-floating">
                <select class="form-select" id="floatingSelectGrid" aria-label="gender">
                  <option selected>請選擇</option>
                  <option v-for="item in gender" value="{{item}}">
                    {{ item }}
                  </option>
                </select>
                <label for="floatingSelectGrid">性別限制</label>
              </div>
            </div>
          </div>

          <div class="row-cols-1 g-2">
            <div class="form-floating" style="margin-top: 12px">
              <select class="form-select col" id="floatingSelectGrid" aria-label="education">
                <option selected>請選擇</option>
                <option v-for="item in education" value="{{item}}">
                  {{ item }}
                </option>
              </select>
              <label for="floatingSelectGrid">教育程度</label>
            </div>
          </div>
        </div>
      </div>
      <div v-show="currentPage === 4" class="page4">
        <div style="width: 40rem; font-size: large" class="animate__animated animate__fadeInDown">
          <h1>太酷了！讓使用者更容易找到你！</h1>
            <el-upload
              :file-list="fl"
              list-type="picture-card"
              :auto-upload="true"
              :on-success="handleSuccess"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove"
              action="http://192.168.74.123:8080/photoUploadControl"
              ><el-icon><Plus /></el-icon>
            </el-upload>
        </div>
        <el-dialog v-model="dialogVisible">
          <img :src="dialogImager" alt="Preview Image">
        </el-dialog>
      </div>
    </form>
  </div>

  <div class="animate__animated animate__bounceInUp row justify-content-between progress-bar-container fixed-bottom">
    <div class="progress">
      <div class="progress-bar" role="progressbar" v-bind:style="{width: barValue + '%'}"
           style=" background-color: #ffb4aa"
           aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
      </div>
    </div>
    <button type="button" class="btn btn-outline-primary prev col-1 " @click="prev" :disabled="currentPage <= 1">Prev
      Step
    </button>
    <button type="button" class="btn btn-outline-primary next col-1 " @click="next" :disabled="currentPage > 4">Next
      Step
    </button>
  </div>

</template>

<script lang="ts" setup>
import {ref} from 'vue'

const age = ['不拘', '青壯年', '壯年', '老年']
const gender = ['男', '女', '不限制']
const education = ['國小', '國中', '高中職', '學士', '碩士', '博士']
let maxValue = 100 / 4;
let barValue = 0;
let currentPage = ref(4);

import { Plus } from '@element-plus/icons-vue'
import {UploadFile, UploadProps, UploadUserFile} from "element-plus";
import { useQuery } from "vue-query";

const fl = ref<UploadUserFile[]>([

])

const dialogImager = ref('')
const dialogVisible = ref(false)

// const handleSuccess: UploadProps['onSuccess'] = (response, fl) =>
//     console.log(fl)
//     dialogImager.value = URL.createObjectURL(fl)
const handleRemove: UploadProps['onRemove'] = (uploadFile, fl) => {
  console.log(uploadFile,fl)
}

const handlePictureCardPreview: UploadProps['onPreview'] = (uploadFile) => {
  dialogImager.value = uploadFile.url
  dialogVisible.value = true
}
function next() {
  if (currentPage.value <= 4) {
    currentPage.value++;
    barValue += maxValue;
  }
}

function prev() {
  if (currentPage.value >= 1) {
    currentPage.value--;
    barValue -= maxValue;
  }
}
</script>

<style scoped>
.container {
  margin: auto;
  height: 70vh;
  width: 70vh;
  display: flex;
  justify-content: center;
  align-content: center;
  text-align: center;
  flex-wrap: wrap;
}

.cusbtn {
  width: 20vh;
  height: 10vh;
  display: flex;
  font-size: 25px;
  justify-content: space-between;
  border-radius: 10px;
  align-items: center;
  flex-wrap: wrap;
  --bs-btn-color: black;
  --bs-btn-border-color: rgb(231, 230, 230);
  --bs-btn-active-bg: #ffffff00;
  --bs-btn-active-border-color: black;
}

.progress {
  height: 0.5rem;

}

.progress-bar-container > button {
  width: 8rem;
  height: 3rem;
  margin: 2rem 3rem;
}

.next {
  border: #fff9f8 0px solid;
  background-color: #ffb4aa;
  color: darkred;
  --bs-btn-active-bg: palevioletred;
  --bs-btn-active-color: white;
}

.next:hover {
  border: #fff9f8 0px solid;
  background-color: palevioletred;
  color: white;
}

.next:disabled {
  --bs-btn-disabled-color: rgb(128, 128, 128);
}

.prev {
  border: transparent;
  color: black;
  --bs-btn-active-bg: transparent;
  text-decoration: underline;
}

.prev:hover {
  background-color: transparent;

}

.prev:disabled {
  --bs-btn-disabled-color: rgb(128, 128, 128);
}

.col {
  flex: 1;
  margin-bottom: 0.7em;
}

.btn > img {
  justify-content: left;
}

img {
  height: 2rem;
  width: 2rem;
  margin-right: 10px;
}

h1 {

}
</style>
