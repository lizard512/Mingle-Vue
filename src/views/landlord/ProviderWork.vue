#                       _oo0oo_
#                      o8888888o
#                      88" . "88
#                      (| -_- |)
#                      0\  =  /0
#                    ___/`---'\___
#                  .' \\|     |// '.
#                 / \\|||  :  |||// \
#                / _||||| -:- |||||- \
#               |   | \\\  -  /// |   |
#               | \_|  ''\---/''  |_/ |
#               \  .-\__  '-'  ___/-. /
#             ___'. .'  /--.--\  `. .'___
#          ."" '<  `.___\_<|>_/___.' >' "".
#         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
#         \  \ `_.   \_ __\ /__ _/   .-` /  /
#     =====`-.____`.___ \_____/___.-`___.-'=====
#                       `=---='
#
#
#     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
#
#               菩提本無樹 明鏡亦非台
#               本來無BUG 何必常修改
<template>
  <button type="button" class="btn btn-outline-success animate__animated animate__fadeInDown" style="position:absolute; top:50%; left:0;" @click="fullData">
    一鍵填表
  </button>
  <div class="container">
    <form class="novalidate">

      <div v-show="currentPage === 1" class="page1" id="page">
        <div style="font-size: large" class="animate__animated animate__fadeInDown">
          <div>
            <div class="row row-cols-3 gx-0 gy-3 justify-content-around" style="" role="group"
                 aria-label="Basic radio toggle button group">
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
                    <input type="radio" class="btn-check" name="fkWorkType" id="page1radio1" autocomplete="off">
                    <label class="btn btn-outline-primary cusbtn" for="page1radio1">
                      <img src="@images/icon-人力.png">人力 </label>
                  </div>
                </div>
                <div class="col-md-4" style="">
                  <div class="col">
                    <input type="radio" class="btn-check" name="fkWorkType" id="page1radio2" autocomplete="off">
                    <label class="btn btn-outline-primary cusbtn" for="page1radio2">
                      <img src="@images/icon-旅店.png">旅店</label>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="col">
                    <input type="radio" class="btn-check" name="fkWorkType" id="page1radio3" autocomplete="off">
                    <label class="btn btn-outline-primary cusbtn" for="page1radio3">
                      <img src="@images/icon-活動.png">活動</label>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4" style="">
                  <div class="col">
                    <input type="radio" class="btn-check" name="fkWorkType" id="page1radio4" autocomplete="off">
                    <label class="btn btn-outline-primary cusbtn" for="page1radio4">
                      <img src="@images/icon-銷售.png">銷售</label>
                  </div>
                </div>
                <div class="col-md-4" style="">
                  <div class="col">
                    <input type="radio" class="btn-check" name="fkWorkType" id="page1radio5" autocomplete="off">
                    <label class="btn btn-outline-primary cusbtn" for="page1radio5">
                      <img src="@images/icon-辦公.png">辦公</label>
                  </div>
                </div>
                <div class="col-md-4" style="">
                  <div class="col">
                    <input type="radio" class="btn-check" name="fkWorkType" id="page1radio6" autocomplete="off">
                    <label class="btn btn-outline-primary cusbtn" for="page1radio6">
                      <img src="@images/icon-餐飲.png">餐飲</label>
                  </div>
                </div>
              </div>
              <div class="row col-md-12">
                <div class="col-md-4" style="">
                  <div class="col">
                    <input type="radio" class="btn-check" name="fkWorkType" id="page1radio8" autocomplete="off">
                    <label class="btn cusbtn" for="page1radio8">
                      <img src="@images/icon-補教.png">補教</label>
                  </div>
                </div>
                <div class="col-md-4" style="">
                  <div class="col">
                    <input type="radio" class="btn-check" name="fkWorkType" id="page1radio7" autocomplete="off">
                    <label class="btn btn-outline-primary cusbtn" for="page1radio7">
                      <img src="@images/icon-其他.png">其他</label>
                  </div>
                </div>
                <div class="col" style="">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-show="currentPage === 2" class="page2" id="page">
        <div style="font-size: large" class="animate__animated animate__fadeInDown">
          <div class="row">
            <div class="col">
              <h1>請告訴我們位置並介紹自己吧！</h1>
            </div>
            <div>
              <div class="col">
                <div class="form-floating mb-3">
                  <input v-model="Data.workName" type="text" class="form-control" id="floatingInput" placeholder="">
                  <label for="floatingInput">工作名稱 :</label>

                </div>
              </div>
              <div class="row g-2">
                <div class="form-floating mb-3 col-3">
                  <el-cascader
                      size="large"
                      placeholder="市/區"
                      v-model="addressValue"
                      :options="addressOptions"
                      :props="addressProps"
                  />
                </div>
                <div class="form-floating mb-3 col-md">
                  <input v-model="Data.address" type="text" class="form-control" id="floatingInput" placeholder="">
                  <label for="floatingInput">地址：</label>
                </div>
              </div>
            </div>
          </div>
          <div class="form-floating">
            <textarea v-model="Data.description" class="form-control" placeholder="Leave a comment here"
                      id="floatingTextarea2" style="height: 100px"></textarea>
            <label for="floatingTextarea2">工作內容：</label>
          </div>
          <div style="margin: 10px 0"/>
          <div class="form-floating">
            <input v-model="Data.benefits" type="text" class="form-control" id="floatingInputGrid"
                   placeholder="福利內容：">
            <label for="floatingInputGrid">福利內容：</label>
          </div>
          <div style="margin: 10px 0"/>
        </div>
      </div>
      <div v-show="currentPage === 3" class="page3" id="page">
        <div style="font-size: large" class="animate__animated animate__fadeInDown">
          <h1>太棒了！告訴我們詳細資訊吧！</h1>
          <div class="row g-2">
            <div class="demo-date-picker">
              <div class="block">
                <span class="demonstration">開放時間：</span>
                <el-date-picker
                    v-model="dateValue1"
                    type="daterange"
                    range-separator="到"
                    start-placeholder="開始時間"
                    end-placeholder="結束時間"
                    format="YYYY-MM-DD"
                    value-format="YYYY-MM-DD"
                />
              </div>
            </div>
          </div>
          <div class="row g-2">
            <div class="form-floating col">
              <input v-model="Data.workTime" type="text" class="form-control" id="floatingInput"
                     placeholder="workTime">
              <label for="floatingInput">工作時間 :</label>
            </div>
            <div class="form-floating col">
              <input v-model="Data.minPeriod" type="text" class="form-control" id="floatingInput"
                     placeholder="minPeriod">
              <label for="floatingInput">可接受最小天數 :</label>
            </div>
          </div>
          <div class="row g-2">
            <div class="col-md">
              <div class="form-floating">
                <select v-model="Data.ageRestriction" class="form-select" id="floatingSelectGrid"
                        aria-label="accessAge">
                  <option selected>請選擇</option>
                  <option v-for="item in age" :key="item">
                    {{ item }}
                  </option>
                </select>
                <label for="floatingSelectGrid">年齡限制</label>
              </div>
            </div>
            <div class="col-md">
              <div class="form-floating">
                <select v-model="Data.genderRestriction" class="form-select" id="floatingSelectGrid"
                        aria-label="gender">
                  <option selected>請選擇</option>
                  <option v-for="item in gender" :key="item">
                    {{ item }}
                  </option>
                </select>
                <label for="floatingSelectGrid">性別限制</label>
              </div>
            </div>
          </div>

          <div class="row g-2" style="margin-top: 0.1vh">
            <div class="form-floating col-md">
              <select v-model="Data.educationRestriction" class="form-select col" id="floatingSelectGrid"
                      aria-label="education">
                <option selected>請選擇</option>
                <option v-for="item in education" :key="item">
                  {{ item }}
                </option>
              </select>
              <label for="floatingSelectGrid">教育程度</label>
            </div>
            <div class="col-md">
              <div class="form-floating col-md">
                <div class="form-floating col">
                  <input v-model="Data.experienceRestriction" type="text" class="form-control" id="floatingInput"
                         placeholder="">
                  <label for="floatingInput">工作經驗 :</label>
                </div>

              </div>
            </div>
          </div>


          <div class="row g-2">
            <div class="form-floating col">
              <input v-model="Data.vacation" type="text" class="form-control" id="floatingInput" placeholder="">
              <label for="floatingInput">休假時間 :</label>
            </div>
            <div class="form-floating col">
              <input v-model="Data.maxAttendance" type="text" class="form-control" id="floatingInput" placeholder="">
              <label for="floatingInput">需要人數 :</label>
            </div>
          </div>
          <div class="form-floating col">
            <input v-model="Data.languageRestriction" type="text" class="form-control" id="floatingInput"
                   placeholder="">
            <label for="floatingInput">可接受語言 :</label>
          </div>

          <div class="form-floating col">
            <input v-model="Data.licenseRestriction" type="text" class="form-control" id="floatingInput"
                   placeholder="">
            <label for="floatingInput">證照要求 :</label>
          </div>


        </div>
      </div>
      <div v-show="currentPage === 4" class="page4" id="page">

        <div style="width: 40rem; font-size: large" class="animate__animated animate__fadeInDown">
          <h1>太酷了！讓使用者更容易找到你！</h1>

          <el-upload
              v-model:file-list="fl"
              list-type="picture-card"
              :auto-upload="true"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove"
              accept=".jpg,.jpeg,.webp,.png"
              :limit="6"
              :multiple="true"
              :headers="upload.headers"
              :on-change="handleChange"
              :action=actionUrl
          >

            <el-icon>
              <Plus/>
            </el-icon>
          </el-upload>
          <div class="el-upload__tip" slot="tip">只能上傳jpg/jpeg/webp/png格式的圖片<br>且檔案應小於50MB</div>
        </div>

        <el-dialog v-model="dialogVisible"
                   width="30%">
          <img width="100%" :src="dialogImager">
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
    <button type="button" class="btn btn-outline-primary next col-1 " v-show="currentPage != 4" @click="next"
            :disabled="currentPage > 4">Next
      Step
    </button>
    <button type="button" class="btn btn-outline-primary next col-1 " v-show="currentPage == 4" @click="submit">送出
    </button>
  </div>

</template>

<script lang="ts" setup>
import {reactive, onMounted, ref} from 'vue'
import {Plus} from '@element-plus/icons-vue'
import {UploadProps, UploadUserFile} from "element-plus";
import Swal from "sweetalert2";
import VueCookies from "vue-cookies";
const age = ['不拘', '青壯年', '壯年', '老年']
const gender = ['男', '女', '不限制']
const education = ['國小', '國中', '高中職', '學士', '碩士', '博士']
let maxValue = 100 / 3;
let barValue = 0;
let currentPage = ref(1);

let dateValue1= ref<String[]>([])
const fl = ref<UploadUserFile[]>([])
const dialogImager = ref('')
const dialogVisible = ref(false)
const actionUrl = import.meta.env.VITE_APP_API_URL + '/api/upload/photoUploadControl'
let lordID;

onMounted( () => {
  initAssign();
})


function initAssign() {
  // const sessionToken = VueCookies.get('sessionToken');
  // lordID = await (await fetch(`${import.meta.env.VITE_APP_API_URL}/landlord/userIDtoLordID/`
  //     + String(sessionToken).substring(32, sessionToken.length), {
  //       method: "GET"
  //     }
  // )).json();
  // console.log(lordID)
  fetch(`${import.meta.env.VITE_APP_API_URL}/api/upload/photoDeleteOnLoadController`, {
    method: "POST",
    headers: getToken()
  })

}

const handleChange: UploadProps['onChange'] = (file, fl) => {
  console.log(fl)
  const size = file.size < 50 * 1024 * 1024;
  // console.log(size)
  if (!size) {
    Swal.mixin({
      toast: true,
      position: 'bottom-end',
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
      title: "檔案大小不能超過50MB!"
    })
    console.log(size)
    fl.splice(-1, 1);
  }
  return size
}


const handleRemove: UploadProps['onRemove'] = (uploadFile, fl) => {
  console.log(uploadFile)
  fetch(`${import.meta.env.VITE_APP_API_URL}/api/upload/photoDeleteController`, {
    method: "POST",
    body: uploadFile.response,
    headers: getToken()
  })
  // console.log(uploadFile, fl)
}

const handlePictureCardPreview: UploadProps['onPreview'] = (uploadFile) => {
  dialogImager.value = uploadFile.url!
  dialogVisible.value = true
}

function next() {
  if (currentPage.value <= 4) {
    currentPage.value++;
    barValue += maxValue;
    console.log(dateValue1)
  }
}

function prev() {
  if (currentPage.value == 2) {
    currentPage.value--;
    barValue = 0;

  } else if (currentPage.value >= 1) {
    currentPage.value--;
    barValue -= maxValue;
  }
}

function getToken() {
  return {"sessionToken": localStorage.getItem("sessionToken")}
}

const upload = reactive({
  open: false,
  title: '',
  headers: {
    'sessionToken': getToken().sessionToken,
  },
})

// const addressChange = (value) => {
//   console.log(value)
// }

const addressProps = {
  expandTrigger: 'hover' as const,
}

const addressValue = ref([])

import original from "@Alladdress/Address.json"
import {async} from "sockjs-client";


const addressOptions = original.map(city => ({
  value: city.name,
  label: city.name,
  children: city.districts.map(district => ({
    value: district.name,
    label: district.name,
  })),
}));

const Data = ref({
  worktype: '',
  workName: '',
  city: '',
  districtName: '',
  address: '',
  startDate: '',
  endDate: '',
  workTime: '',
  minPeriod: '',
  ageRestriction: '請選擇',
  genderRestriction: '請選擇',
  educationRestriction: '請選擇',
  languageRestriction: '',
  vacation: '',
  benefits: '',
  description: '',
  experienceRestriction: '',
  licenseRestriction: '',
  images: [],
  fkLandlordID: '',
  maxAttendance: '',
  sessionToken: '',
});

const getSelectedRadioLabel = (groupName) => {
  const selectedRadio = document.querySelector(`input[name="${groupName}"]:checked`);
  return selectedRadio ? selectedRadio.nextElementSibling.textContent.trim() : null;
};

const submit = async () => {

  Data.value.worktype = getSelectedRadioLabel("fkWorkType");
  Data.value.city = addressValue.value[0];
  Data.value.districtName = addressValue.value[1];
  Data.value.startDate = dateValue1.value[0];
  Data.value.endDate = dateValue1.value[1];
  Data.value.fkLandlordID = localStorage.getItem('lordID');
  Data.value.sessionToken = getToken().sessionToken;
  Data.value.images = fl.value.map((file) => file.url);

  // console.log(Data.value);

  if (!Data.value.worktype ||
      !addressValue.value.length ||
      !Data.value.workName ||
      !Data.value.description ||
      !Data.value.vacation ||
      !Data.value.benefits ||
      !Data.value.address ||
      !Data.value.startDate ||
      !Data.value.endDate ||
      !Data.value.workTime ||
      !Data.value.minPeriod ||
      Data.value.ageRestriction === '請選擇' ||
      Data.value.genderRestriction === '請選擇' ||
      Data.value.educationRestriction === '請選擇' ||
      !Data.value.licenseRestriction ||
      !Data.value.experienceRestriction ||
      !Data.value.languageRestriction ||
      !Data.value.maxAttendance) {
    Swal.fire({
      icon: 'error',
      title: '請填寫所有必填欄位',
    })
  } else {
    submitData()
  }

}

async function submitData() {
  console.log(JSON.stringify(Data.value))
  Swal.fire({
    title: '請稍候...',
    allowEscapeKey: false,
    allowOutsideClick: false,
    showConfirmButton: false,
    timer: 2000,
    onOpen: () => {
      Swal.showLoading();
    },
  });
  try {
    const res = await fetch(`${import.meta.env.VITE_APP_API_URL}/api/work/addWork`, {
      method: "POST",
      body: JSON.stringify(Data.value),
      headers: new Headers({
        "Content-Type": "application/json"
      }),
    })
    if (res.ok) {
      Swal.close()
      Swal.fire({
        icon: 'success',
        title: '新增成功',
      })
    } else {
      throw new Error("新增失敗")
    }
  } catch (error) {
    console.error(error);
    Swal.fire({
      icon: 'error',
      title: '發生錯誤',
      text: '新增失敗請重新嘗試。',
    });};
}

function getRandomWorkType() {
  // 取得所有 radio 按鈕的節點
  var radioButtons = document.getElementsByName('fkWorkType');

  // 隨機生成一個索引值
  var randomIndex = Math.floor(Math.random() * radioButtons.length);

  // 將該索引值對應的 radio 按鈕標記為選中狀態
  radioButtons[randomIndex].checked = true;
}

function fullData() {
  getRandomWorkType()
  let date = new Date();
  Data.value.worktype = getSelectedRadioLabel("fkWorkType");
  addressValue.value[0] = '臺北市';
  addressValue.value[1] = '大安區';
  Data.value.city = '臺北市';
  Data.value.districtName = '大安區';
  Data.value.workName = '血汗碼農';
  Data.value.address = '復興南路一段390號2樓'; // Assuming workName is your input's v-model
  Data.value.startDate = date.toISOString();
  Data.value.endDate = new Date(date.getTime() + (180 * 24 * 60 * 60 * 1000)).toISOString();
  const data = reactive({
    value: {
      startDate: Data.value.startDate,
      endDate:Data.value.endDate
    }
  })
  dateValue1 = ref([data.value.startDate, data.value.endDate]);
  Data.value.workTime = '10hr' // Replace with your input's v-model
  Data.value.minPeriod = '180' // Replace with your input's v-model
  Data.value.ageRestriction = '不拘' // Replace with your input's v-model
  Data.value.genderRestriction = '不限制' // Replace with your input's v-model
  Data.value.educationRestriction = '學士'; // Replace with your input's v-model
  Data.value.languageRestriction = 'english'; // Assuming acceptLanguage is your input's v-model
  Data.value.vacation = '全年無休';
  Data.value.benefits = '無';
  Data.value.description = '一直打code';
  Data.value.experienceRestriction = '10年以上';
  Data.value.licenseRestriction = '無';
  Data.value.fkLandlordID = localStorage.getItem('lordID');
  Data.value.maxAttendance = '6';
  Data.value.sessionToken = getToken().sessionToken;
  currentPage.value = 4;
  barValue = 100;
  // submitData();
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

h1 {

}

:deep(.el-input--large) {
  height: calc(3.5rem + calc(var(--bs-border-width) * 2));
}


.demo-date-picker {
  display: flex;
  width: 100%;
  padding: 0;
  flex-wrap: wrap;
}

.demo-date-picker .block {
  padding: 15px 0;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  flex: 1;
}

.demo-date-picker .block:last-child {
  border-right: none;
}

.demo-date-picker .demonstration {
  display: block;
  color: var(--bs-body-color);
  font-size: 23px;
  margin-bottom: 10px;
}
</style>
