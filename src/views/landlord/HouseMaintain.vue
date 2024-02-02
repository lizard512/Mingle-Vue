<template>
  <br>
  <div class="tableDiv" id="app">
    <h3>房源表</h3>
    <table class="table">
      <thead class="table-dark">
        <tr>
          <th>House ID</th>
          <th>Lord ID</th>
          <th>圖片</th>
          <th>更新</th>
          <th>房源類型</th>
          <th>縣市</th>
          <th>名稱</th>
          <th>描述</th>
          <th>地址</th>
          <th>郵遞區號</th>
          <th>床位</th>
          <th>狀態</th>
          <th>備註</th>
          <th>有Wifi</th>
          <th>有TV</th>
          <th>有廚房</th>
          <th>有洗衣機</th>
          <th>有停車位</th>
          <th>有冷氣</th>
          <th>有私人空間</th>
          <th>有游泳池</th>
          <th>有健身房</th>
          <th>新增時間</th>
          <th>更新時間</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="house in mappedHouses" :key="house.houseid">
          <td>{{ house.houseid }}</td>
          <td>{{ house.lordid }}</td>
          <td>
            <!-- 'data:image/'+house.housePhotos[0].contentType+';base64,' + house.housePhotos[0].photo -->
            <img :src="'data:image/' + house.housePhotos[0].contentType + ';base64,' + house.housePhotos[0].photo"
              alt="House Photo" style="max-width: 100px; max-height: 100px;">
          </td>
          <td>
            <button type="button" class="btn btn-light update" @click="openUpdateModal(house.houseid)">修改</button>
            <button type="button" class="btn btn-danger delete" @click="confirmDelete(house.houseid)">刪除</button>
          </td>
          <td>{{ house.houseType }}</td>
          <td>{{ house.city }}</td>
          <td>{{ house.name }}</td>
          <td>{{ house.description }}</td>
          <td>{{ house.address }}</td>
          <td>{{ house.postCode }}</td>
          <td>{{ house.beds }}</td>
          <td>{{ house.status }}</td>
          <td>{{ house.notes }}</td>
          <td>{{ house.hasWifi }}</td>
          <td>{{ house.hasTV }}</td>
          <td>{{ house.hasKitchen }}</td>
          <td>{{ house.hasLaundry }}</td>
          <td>{{ house.hasParkingLot }}</td>
          <td>{{ house.hasAirconditioner }}</td>
          <td>{{ house.hasPersonalSpace }}</td>
          <td>{{ house.hasPool }}</td>
          <td>{{ house.hasGym }}</td>
          <td>{{ house.createdAt }}</td>
          <td>{{ house.updatedAt }}</td>
        </tr>
      </tbody>
    </table>
    <!-- Modal for updating specific house data -->
    <div v-if="isUpdateModalVisible" class="modal fade show" style="display: block;">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Update House</h5>
            <button type="button" class="btn-close" @click="closeUpdateModal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="handleUpdateSubmit">
              <!-- Add your form fields for updating specific house data -->
              <p style="text-align: left; font-weight: bold;">更新房屋:(0為否，1為是)</p>
              <input v-model="updateFormData.houseid" type="hidden">
              <!-- Image preview section -->
              <div class="mb-3 row">
                <label class="col-sm-2 col-form-label">圖片預覽:</label>
                <div class="col-sm-10">
                  <div id="imageCarousel" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                      <div v-for="(photo, index) in updateFormData.housePhotos" :key="index"
                        :class="{ 'carousel-item': true, 'active': index === 0 }">
                        <img :src="'data:image/' + photo.contentType + ';base64,' + photo.photo" class="d-block w-100"
                          alt="Image Preview">
                      </div>
                    </div>
                    <button class="carousel-control-prev" type="button" id="imageCarouselPrev" data-bs-target="#imageCarousel"
                      data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true" style="background-color: orange;"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" id="imageCarouselNext" data-bs-target="#imageCarousel"
                      data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true" style="background-color: orange;"></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
              </div>
              <!-- Add your input for uploading images -->
              <div class="mb-3 row">
                <label for="photos" class="col-sm-2 col-form-label">上傳圖片:</label>
                <div class="col-sm-10">
                  <input type="file" id="photos" @change="handleImageUpload" accept="image/*" multiple>
                </div>
              </div>
              <div class="mb-3 row">
                <label for="name" class="col-sm-2 col-form-label">名稱:</label>
                <div class="col-sm-10">
                  <input v-model="updateFormData.name" type="text" class="form-control" id="name">
                </div>
              </div>

              <div class="mb-3 row">
                <label for="description" class="col-sm-2 col-form-label">描述:</label>
                <div class="col-sm-10">
                  <textarea v-model="updateFormData.description" class="form-control" id="description"
                    rows="3"></textarea>
                </div>
              </div>

              <div class="mb-3 row">
                <label for="address" class="col-sm-2 col-form-label">地址:</label>
                <div class="col-sm-10">
                  <input v-model="updateFormData.address" type="text" class="form-control" id="address">
                </div>
              </div>

              <div class="mb-3 row">
                <label for="postCode" class="col-sm-2 col-form-label">郵遞區號:</label>
                <div class="col-sm-10">
                  <input v-model="updateFormData.postCode" type="text" class="form-control" id="postCode">
                </div>
              </div>

              <div class="mb-3 row">
                <label for="beds" class="col-sm-2 col-form-label">床位:</label>
                <div class="col-sm-10">
                  <input v-model="updateFormData.beds" type="text" class="form-control" id="beds">
                </div>
              </div>

              <div class="mb-3 row">
                <label for="notes" class="col-sm-2 col-form-label">備註:</label>
                <div class="col-sm-10">
                  <input v-model="updateFormData.notes" type="text" class="form-control" id="notes">
                </div>
              </div>

              <div class="mb-3 row">
                <label for="hasWifi" class="col-sm-2 col-form-label">有Wifi:</label>
                <div class="col-sm-10">
                  <input v-model="updateFormData.hasWifi" type="text" class="form-control" id="hasWifi">
                </div>
              </div>

              <div class="mb-3 row">
                <label for="hasTV" class="col-sm-2 col-form-label">有TV:</label>
                <div class="col-sm-10">
                  <input v-model="updateFormData.hasTV" type="text" class="form-control" id="hasTV">
                </div>
              </div>

              <div class="mb-3 row">
                <label for="hasKitchen" class="col-sm-2 col-form-label">有廚房:</label>
                <div class="col-sm-10">
                  <input v-model="updateFormData.hasKitchen" type="text" class="form-control" id="hasKitchen">
                </div>
              </div>

              <div class="mb-3 row">
                <label for="hasLaundry" class="col-sm-2 col-form-label">有洗衣機:</label>
                <div class="col-sm-10">
                  <input v-model="updateFormData.hasLaundry" type="text" class="form-control" id="hasLaundry">
                </div>
              </div>

              <div class="mb-3 row">
                <label for="hasParkingLot" class="col-sm-2 col-form-label">有停車位:</label>
                <div class="col-sm-10">
                  <input v-model="updateFormData.hasParkingLot" type="text" class="form-control" id="hasParkingLot">
                </div>
              </div>

              <div class="mb-3 row">
                <label for="hasAirconditioner" class="col-sm-2 col-form-label">有冷氣:</label>
                <div class="col-sm-10">
                  <input v-model="updateFormData.hasAirconditioner" type="text" class="form-control"
                    id="hasAirconditioner">
                </div>
              </div>

              <div class="mb-3 row">
                <label for="hasPersonalSpace" class="col-sm-2 col-form-label">有私人空間:</label>
                <div class="col-sm-10">
                  <input v-model="updateFormData.hasPersonalSpace" type="text" class="form-control" id="hasPersonalSpace">
                </div>
              </div>

              <div class="mb-3 row">
                <label for="hasPool" class="col-sm-2 col-form-label">有游泳池:</label>
                <div class="col-sm-10">
                  <input v-model="updateFormData.hasPool" type="text" class="form-control" id="hasPool">
                </div>
              </div>

              <div class="mb-3 row">
                <label for="hasGym" class="col-sm-2 col-form-label">有健身房:</label>
                <div class="col-sm-10">
                  <input v-model="updateFormData.hasGym" type="text" class="form-control" id="hasGym">
                </div>
              </div>
              <br>
              <button type="submit" class="btn btn-primary">儲存</button>
              <button type="button" @click="closeUpdateModal" class="btn btn-secondary">取消</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { ref, onMounted, computed } from 'vue';
import Swal from 'sweetalert2';
import axios from 'axios';

let path = import.meta.env.VITE_APP_API_URL;
const houses = ref([]);
const isUpdateModalVisible = ref(false);

const fetchHouses = () => {
  fetch(`${path}/api/house/findAllHousesWithPhotos`)
    .then((response) => response.json())
    .then((data) => {
      houses.value = data;
    })
    .catch((error) => {
      console.error('Error fetching houses:', error);
    });
};

const mapBoolToString = (value) => {
  return +value ? '是' : '否';
};

const mappedHouses = computed(() => {
  return houses.value.map((house) => {
    return {
      ...house,
      hasWifi: mapBoolToString(house.hasWifi),
      hasTV: mapBoolToString(house.hasTV),
      hasKitchen: mapBoolToString(house.hasKitchen),
      hasLaundry: mapBoolToString(house.hasLaundry),
      hasParkingLot: mapBoolToString(house.hasParkingLot),
      hasAirconditioner: mapBoolToString(house.hasAirconditioner),
      hasPersonalSpace: mapBoolToString(house.hasPersonalSpace),
      hasPool: mapBoolToString(house.hasPool),
      hasGym: mapBoolToString(house.hasGym),
      isDeleted: mapBoolToString(house.isDeleted),
    };
  });
});

const updateFormData = ref({
  houseid: '',
  lordid: '',
  houseType: '',
  city: '',
  name: '',
  description: '',
  address: '',
  postCode: '',
  beds: '',
  status: '',
  notes: '',
  hasWifi: '',
  hasTV: '',
  hasKitchen: '',
  hasLaundry: '',
  hasParkingLot: '',
  hasAirconditioner: '',
  hasPersonalSpace: '',
  hasPool: '',
  hasGym: '',
  createdAt: '',
  updatedAt: '',
  isDeleted: '',
  housePhotos: [{ photo: '', contentType: '', photoSize: '', updatedAt: '', createdAt: '', isDeleted: '', houseid: '' }],
});

const openUpdateModal = async (houseId) => {
  // Find the specific house data using houseId
  const houseToUpdate = await houses.value.find(house => house.houseid === houseId);
  // Set the values in the updateFormData
  updateFormData.value.houseid = houseToUpdate.houseid;
  updateFormData.value.lordid = houseToUpdate.lordid;
  updateFormData.value.houseType = houseToUpdate.houseType;
  updateFormData.value.city = houseToUpdate.city;
  updateFormData.value.name = houseToUpdate.name;
  updateFormData.value.description = houseToUpdate.description;
  updateFormData.value.address = houseToUpdate.address;
  updateFormData.value.postCode = houseToUpdate.postCode;
  updateFormData.value.beds = houseToUpdate.beds;
  updateFormData.value.status = houseToUpdate.status;
  updateFormData.value.notes = houseToUpdate.notes;
  updateFormData.value.hasWifi = houseToUpdate.hasWifi;
  updateFormData.value.hasTV = houseToUpdate.hasTV;
  updateFormData.value.hasKitchen = houseToUpdate.hasKitchen;
  updateFormData.value.hasLaundry = houseToUpdate.hasLaundry;
  updateFormData.value.hasParkingLot = houseToUpdate.hasParkingLot;
  updateFormData.value.hasAirconditioner = houseToUpdate.hasAirconditioner;
  updateFormData.value.hasPersonalSpace = houseToUpdate.hasPersonalSpace;
  updateFormData.value.hasPool = houseToUpdate.hasPool;
  updateFormData.value.hasGym = houseToUpdate.hasGym;
  updateFormData.value.createdAt = houseToUpdate.createdAt;
  updateFormData.value.updatedAt = houseToUpdate.updatedAt;
  updateFormData.value.isDeleted = houseToUpdate.isDeleted;
  updateFormData.value.housePhotos = houseToUpdate.housePhotos;

  isUpdateModalVisible.value = true;
};

const closeUpdateModal = () => {
  isUpdateModalVisible.value = false;
};


const handleImageUpload = (event) => {
  const files = event.target.files;

  if (files && files.length > 0) {
    // Clear existing images
    updateFormData.value.housePhotos = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();

      reader.onload = () => {
        const base64String = reader.result.split(",")[1];
        const contentType = file.type;

        // Add the image to the housePhotos array
        updateFormData.value.housePhotos.push({
          photo: base64String,
          contentType: contentType,
        });
      };

      // Read the file content as Data URL
      reader.readAsDataURL(file);
    }
  }
};

const handleUpdateSubmit = () => {
  // Call your Spring Boot update API here with updateFormData using Axios
  axios.put(`${path}/api/house/modify/${updateFormData.value.houseid}`, updateFormData._rawValue)
    .then(() => {
      // Show a success message
      Swal.fire('更新成功!', '房源資料已更新成功', 'success');
      // Fetch the updated list of houses
      fetchHouses();
      // Close the modal
      closeUpdateModal();
    })
    .catch((error) => {
      console.error('更新失敗', error);
      // Show an error message if update fails
      Swal.fire('更新失敗', '在更新時發生錯誤', 'error');
    });
};

const confirmDelete = (houseId) => {
  Swal.fire({
    title: '你確定要刪除嗎',
    text: '這沒辦法復原資料的',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
    confirmButtonText: 'Yes'
  }).then((result) => {
    if (result.isConfirmed) {
      // Call your Spring Boot delete API here with houseId using Axios
      axios.delete(`${path}/api/house/delete/${houseId}`)
        .then(() => {
          // Show a success message
          Swal.fire('刪除成功!', '你的資料已刪除成功', 'success');
          // Fetch the updated list of houses
          fetchHouses();
        })
        .catch((error) => {
          console.error('刪除失敗', error);
          // Show an error message if deletion fails
          Swal.fire('刪除失敗', '你在刪除時產生錯誤', 'error');
        });
    }
  });
};

onMounted(() => {
  // Fetch data from your Spring Boot backend when the component is mounted
  fetchHouses();
});
</script>
    
<style scoped>
.tableDiv {
  width: 90%;
  margin: auto;
  text-align: center;
  overflow: scroll;
}

.table tr:nth-child(even) {
  --bs-table-bg: #FFD966;
}

table {
  border: 3px solid #0E2E50;
}

table td {
  border: 1px solid #0E2E50;
}

.modal {
  z-index: 1050;
  /* or a higher value */
}
</style>