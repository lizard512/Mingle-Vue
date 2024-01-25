<template>
  <br>
  <div class="tableDiv" id="app">
    <h3>房源表</h3>
    <table class="table">
      <thead class="table-dark">
        <tr>
          <th>House ID</th>
          <th>Lord ID</th>
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
          <th>是否刪除</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="house in mappedHouses" :key="house.houseid">
          <td>{{ house.houseid }}</td>
          <td>{{ house.lordid }}</td>
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
          <td>{{ house.isDeleted }}</td>
        </tr>
      </tbody>
    </table>
    <!-- modal is here -->
    <div class="modal" tabindex="-1" role="dialog" v-show="isUpdateModalVisible">
      <div class="modal-dialog" role="document">
        <!-- Modal content -->
        <div class="modal-content">
          <span class="close" @click="closeUpdateModal">&times;</span>
          <!-- Update form or content here -->
          <h2>Update House</h2>
          <!-- Add your form fields for updating -->
          <p>Updating House ID: {{ currentHouseToUpdate }}</p>
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

const houses = ref([]);
const isUpdateModalVisible = ref(false);
let currentHouseToUpdate = null;

const fetchHouses = () => {
  fetch('http://localhost:8080/api/house/findAll')
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

const openUpdateModal = (houseId) => {
  currentHouseToUpdate = houseId;
  isUpdateModalVisible.value = true;
};

const closeUpdateModal = () => {
  currentHouseToUpdate = null;
  isUpdateModalVisible.value = false;
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
      axios.delete(`http://localhost:8080/api/house/delete/${houseId}`)
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
  z-index: 1050; /* or a higher value */
}
</style>