<template>
  <button type="button" class="btn btn-outline-success animate__animated animate__fadeInDown"
    style="position:absolute; top:50%; left:0;" @click="fullData">
    一鍵填表
  </button>
  <div class="container">
    <form class="novalidate">

      <div v-show="currentPage === 1" class="page1" id="page">
        <div style="font-size: large" class="animate__animated animate__fadeInDown">

          <div class="py-5">
            <div class="container">
              <div class="col-md-12">
                <h1>下列哪項最符合房子類型？</h1>
              </div>
              <div class="row">
                <div class="col-md-4" style="">
                  <div class="col">
                    <input type="radio" class="btn-check" name="fkHouseType" id="page1radio1" autocomplete="off">
                    <label class="btn btn-outline-primary cusbtn" for="page1radio1">
                      <img src="@icons/icon-公寓.png">公寓 </label>
                  </div>
                </div>
                <div class="col-md-4" style="">
                  <div class="col">
                    <input type="radio" class="btn-check" name="fkHouseType" id="page1radio2" autocomplete="off">
                    <label class="btn btn-outline-primary cusbtn" for="page1radio2">
                      <img src="@icons/icon-木屋.png">木屋</label>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="col">
                    <input type="radio" class="btn-check" name="fkHouseType" id="page1radio3" autocomplete="off">
                    <label class="btn btn-outline-primary cusbtn" for="page1radio3">
                      <img src="@icons/icon-民宿.png">民宿</label>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4" style="">
                  <div class="col">
                    <input type="radio" class="btn-check" name="fkHouseType" id="page1radio4" autocomplete="off">
                    <label class="btn btn-outline-primary cusbtn" for="page1radio4">
                      <img src="@icons/icon-旅館.png">旅館</label>
                  </div>
                </div>
                <div class="col-md-4" style="">
                  <div class="col">
                    <input type="radio" class="btn-check" name="fkHouseType" id="page1radio5" autocomplete="off">
                    <label class="btn btn-outline-primary cusbtn" for="page1radio5">
                      <img src="@icons/icon-貨櫃屋.png">貨櫃屋</label>
                  </div>
                </div>
                <div class="col-md-4" style="">
                  <div class="col">
                    <input type="radio" class="btn-check" name="fkHouseType" id="page1radio6" autocomplete="off">
                    <label class="btn btn-outline-primary cusbtn" for="page1radio6">
                      <img src="@icons/icon-雅房.png">雅房</label>
                  </div>
                </div>
              </div>
              <div class="row col-md-12">
                <div class="col-md-4" style="">
                  <div class="col">
                    <input type="radio" class="btn-check" name="fkHouseType" id="page1radio8" autocomplete="off">
                    <label class="btn cusbtn" for="page1radio8">
                      <img src="@icons/icon-獨棟房屋.png">獨棟房屋</label>
                  </div>
                </div>
                <div class="col-md-4" style="">
                  <div class="col">
                    <input type="radio" class="btn-check" name="fkHouseType" id="page1radio7" autocomplete="off">
                    <label class="btn btn-outline-primary cusbtn" for="page1radio7">
                      <img src="@icons/icon-露營車.png">露營車</label>
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
              <h1>請告訴我們一些資訊吧！</h1>
            </div>
            <div>
              <div class="col">
                <div class="form-floating mb-3">
                  <input v-model="Data.name" type="text" class="form-control" id="floatingInput" placeholder="">
                  <label for="floatingInput">房屋名稱 :</label>
                </div>
              </div>
              <div class="row g-2">
                <div class="form-floating mb-3 col-3">
                  <el-cascader size="large" placeholder="市/區" v-model="addressValue" :options="addressOptions"
                    :props="addressProps" />
                </div>
                <div class="form-floating mb-3 col-md">
                  <input v-model="raw.address" type="text" class="form-control" id="floatingInput" placeholder="">
                  <label for="floatingInput">地址：</label>
                </div>
              </div>
            </div>
          </div>
          <div class="form-floating">
            <textarea v-model="Data.description" class="form-control" placeholder="" id="floatingTextarea2"
              style="height: 100px"></textarea>
            <label for="floatingTextarea2">房屋內容：</label>
          </div>

          <el-select style="margin-top: 1.4vh" v-model="SelectedOption" multiple placeholder="福利設施："
            @change="handleSelectChange">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
          <div class="form-floating mb-3" style="margin-top: 1.4vh">
            <input type="text" v-model="Data.beds" class="form-control" id="floatingInput" placeholder=""
              @input="handleInput('beds')">
            <label for="floatingInput">剩餘床位 :</label>
          </div>
        </div>
      </div>

      <div v-show="currentPage === 3" class="page4" id="page">

        <div style="width: 40rem; font-size: large" class="animate__animated animate__fadeInDown">
          <h1>太酷了！上傳幾張照片，<br>讓使用者更了解這間房屋吧！</h1>

          <el-upload v-model:file-list="fl" list-type="picture-card" :auto-upload="true"
            :on-preview="handlePictureCardPreview" :on-remove="handleRemove" accept=".jpg,.jpeg,.webp,.png" :limit="6"
            :multiple="true" drag :headers="upload.headers" :on-change="handleChange" :action=actionUrl
            :on-exceed="handleExceed">

            <el-icon>
              <Plus />
            </el-icon>
          </el-upload>
          <div class="el-upload__tip" slot="tip">最多六張,只能上傳jpg/jpeg/webp/png格式的圖片<br>且檔案應小於50MB</div>
        </div>

        <el-dialog v-model="dialogVisible" width="30%">
          <img width="100%" :src="dialogImager">
        </el-dialog>
      </div>
    </form>
  </div>


  <div class="animate__animated animate__bounceInUp row justify-content-between progress-bar-container fixed-bottom">
    <div class="progress">
      <div class="progress-bar" role="progressbar" v-bind:style="{ width: barValue + '%' }"
        style=" background-color: #ffb4aa" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
      </div>
    </div>
    <button type="button" class="btn btn-outline-primary prev col-1 " @click="prev" :disabled="currentPage <= 1">Prev
      Step
    </button>
    <button type="button" class="btn btn-outline-primary next col-1 " v-show="currentPage != 3" @click="next"
      :disabled="currentPage > 3">Next
      Step
    </button>
    <button type="button" class="btn btn-outline-primary next col-1 " v-show="currentPage == 3" @click="submit">送出
    </button>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { Plus } from "@element-plus/icons-vue";
import original from "@Alladdress/Address.json"
import { onMounted } from "vue";
import { UploadProps, UploadUserFile } from "element-plus";
import Swal from "sweetalert2";
import { useRouter } from 'vue-router';



const actionUrl = import.meta.env.VITE_APP_API_URL + '/api/upload/photoUploadControl'

const raw = ref({
  address: '',
})

const SelectedOption = ref([])

let maxValue = 100 / 2;
let barValue = 0;
let currentPage = ref(1);
const Data = ref({
  lordid: '',
  houseType: '',
  address: '',
  name: '',
  postCode: '',
  description: '',
  beds: '',
  hasWifi: '0',
  hasTV: '0',
  hasKitchen: '0',
  hasLaundry: '0',
  hasParkingLot: '0',
  hasAirconditioner: '0',
  hasPersonalSpace: '0',
  hasPool: '0',
  hasGym: '0',
  city: '',
  sessionToken: '',
}
)
const addressValue = ref([])
const addressProps = {
  expandTrigger: 'hover' as const,

}
// 路由
const router = useRouter();

const addressOptions = original.map(city => ({
  value: city.name,
  label: city.name,
  children: city.districts.map(district => ({
    value: [district.name, district.zip],
    label: district.name,
  })),
}));

const options = [
  { value: 'hasTV', label: '電視' },
  { value: 'hasWifi', label: 'WIFI' },
  { value: 'hasKitchen', label: '廚房' },
  { value: 'hasLaundry', label: '洗衣機' },
  { value: 'hasParkingLot', label: '停車場' },
  { value: 'hasAirconditioner', label: '冷氣' },
  { value: 'hasPersonalSpace', label: '私人空間' },
  { value: 'hasPool', label: '泳池' },
  { value: 'hasGym', label: '健身房' }
]

const handleSelectChange = () => {
  options.forEach(option => {
    const isSelected = SelectedOption.value.indexOf(option.value) !== -1;
    const value = isSelected ? '1' : '0';
    Data.value[option.value] = value;
  });
}

function next() {
  if (currentPage.value <= 4) {
    currentPage.value++;
    barValue += maxValue;
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

const handleInput = (dataProperty: string) => {
  // Remove non-numeric characters, including 'e', from the input
  Data.value[dataProperty] = Data.value[dataProperty].replace(/\D/g, '');
}


onMounted(() => {
  initAssign();
})


function initAssign() {
  fetch(`${import.meta.env.VITE_APP_API_URL}/api/upload/photoDeleteOnLoadController`, {
    method: "POST",
    headers: getToken()
  })

}

const handleExceed = () => {
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
    title: "檔案不能超過六張!"
  })
}

const handleChange: UploadProps['onChange'] = (file, fl) => {
  // console.log(fl)
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
    // console.log(size)
    fl.splice(-1, 1);
  }
  return size
}

function getToken() {
  return { "sessionToken": localStorage.getItem("sessionToken") }
}

const upload = reactive({
  open: false,
  title: '',
  headers: {
    'sessionToken': getToken().sessionToken,
  },
})

const fl = ref<UploadUserFile[]>([])
const dialogImager = ref('')
const dialogVisible = ref(false)

const handleRemove: UploadProps['onRemove'] = (uploadFile, fl) => {
  // console.log(uploadFile)
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

const getSelectedRadioLabel = (groupName) => {
  const selectedRadio = document.querySelector(`input[name="${groupName}"]:checked`);
  return selectedRadio ? selectedRadio.nextElementSibling.textContent.trim() : null;
};

const submit = () => {
  if (addressValue.value.length === 0) {
    Swal.fire({
      icon: 'error',
      title: '請填寫所有必填欄位',
    })
  } else {
    Data.value.houseType = getSelectedRadioLabel('fkHouseType')
    Data.value.lordid = localStorage.getItem('lordID')
    Data.value.address = addressValue.value[0] + addressValue.value[1][0] + raw.value.address
    Data.value.postCode = addressValue.value[1][1]
    Data.value.city = addressValue.value[0];

    const hasProperties = Object.keys(Data.value).filter(key => !key.startsWith('has'));
    const isEmptyHasProperty = hasProperties.some(property => !Data.value[property]);
    if (isEmptyHasProperty) {
      Swal.fire({
        icon: 'error',
        title: '請填寫所有必填欄位',
      })
    }
    goData();
  }
}

async function goData() {
  // console.log(Data.value)
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
    const res = await fetch(`${import.meta.env.VITE_APP_API_URL}/api/house/addHouse`, {
      method: "POST",
      body: JSON.stringify(Data.value),
      headers: new Headers({
        "Content-Type": "application/json",
        "sessionToken": getToken().sessionToken
      }),
    })
    if (res.ok) {
      Swal.close()
      Swal.fire({
        icon: 'success',
        title: '新增成功',
        confirmButtonText: '前往房源管理',
        allowOutsideClick: false,
        preConfirm: () => {
          router.push('/houseMaintain');
        }
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
    });
  }
}

function getRandomWorkType() {
  // 取得所有 radio 按鈕的節點
  var radioButtons = document.getElementsByName('fkHouseType');

  // 隨機生成一個索引值
  var randomIndex = Math.floor(Math.random() * radioButtons.length);

  // 將該索引值對應的 radio 按鈕標記為選中狀態
  radioButtons[randomIndex].checked = true;
}

function fullData() {
  getRandomWorkType();
  Data.value.lordid = localStorage.getItem('lordID');
  Data.value.houseType = getSelectedRadioLabel('fkHouseType');
  Data.value.address = '復興南路一段';
  raw.value.address = '復興南路一段';
  Data.value.name = '超讚套房';
  addressValue.value = ['臺北市', ['大安區', '106']];
  Data.value.city = addressValue.value[0];
  Data.value.postCode = '106';
  Data.value.description = '這是間超讚房子';
  Data.value.beds = '3';
  SelectedOption.value = ['hasWifi', 'hasKitchen'];
  Data.value.hasWifi = '0';
  Data.value.hasTV = '0';
  Data.value.hasKitchen = '1';
  Data.value.hasLaundry = '0';
  Data.value.hasParkingLot = '1';
  Data.value.hasAirconditioner = '0';
  Data.value.hasPersonalSpace = '1';
  Data.value.hasPool = '0';
  Data.value.hasGym = '1';
  currentPage.value = 3;
  barValue = 100
}
</script>

<style scoped>
h1 {
  align-content: center;
  justify-content: center;
  display: flex;
}


.container {
  margin: auto;
  height: 70vh;
  width: 70vh;
  display: flex;
  justify-content: center;
  align-content: center;
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

.cusbtn>img {
  width: 4vh;
  height: 4vh;
}

.progress {
  height: 0.5rem;

}

.progress-bar-container>button {
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

:deep(.el-input--large) {
  height: calc(3.5rem + calc(var(--bs-border-width) * 2));
}

:deep(.el-select__selection) {
  height: calc(3.5rem + calc(var(--bs-border-width) * 2));
}

:deep(.el-tag__close) {
  --el-icon-size: 18px;
}

:deep(.el-tag) {
  --el-tag-font-size: 15px;
}

:deep(.el-select__selected-item.el-select__placeholder.is-transparent)>span {
  font-size: 1rem;
}

:deep(.el-input__inner) {
  font-size: 1rem;
}

:deep(.el-upload-list--picture-card) {
  align-content: center;
  justify-content: center;
  display: flex;
}

:deep(.el-upload__tip) {
  align-content: center;
  justify-content: center;
  display: flex;
}

:deep(.el-upload-dragger) {
  height: var(--el-upload-picture-card-size);
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
}

:deep(.el-dialog) {
  width: 50%;
}
</style>