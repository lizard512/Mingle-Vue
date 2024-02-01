<template>
  <div>
    <GoogleMap api-key="AIzaSyChYl423JJyZHyoVgPhUWBgi7bLCH3pGNA" :center="mapCenter" :zoom="7"
      style="width: 100%; height: 650px">
      <CustomMarker v-for="(location, index) in locations" :key="index" :options="{
        position: location.position,
        title: location.address,
        draggable: true,
        clickable: true,
      }" @click="openInfoModal(location)">
      <img src="@images/icon-mapIcon.png" alt="Marker Icon" style="width: 30px; height: 30px;">
      </CustomMarker>
      <!-- Modal component -->
      <div v-if="showModal" class="modal-overlay">
        <div class="modal-container">
          <div class="modal-content">
            <button class="modal-close-btn" @click="closeModal">&times;</button>
            <p>打工地點: {{ modalContent.address }}</p>
            <!-- Link to Google homepage -->
            <a href="https://www.google.com" target="_blank">Go to Google</a>
          </div>
        </div>
      </div>
    </GoogleMap>
  </div>
</template>

<script setup>
import { ref, onMounted} from 'vue';
import axios from 'axios';
import { GoogleMap, CustomMarker } from 'vue3-google-map';
// import { Loader } from "@googlemaps/js-api-loader"

const mapCenter = ref({ lat: 25.0330, lng: 121.5654 });

const locations = ref([]);

const showModal = ref(false);
const modalContent = ref({});

const openInfoModal = (location) => {
  modalContent.value = location;
  showModal.value = true; 
};

const closeModal = () => {
  showModal.value = false;
};

onMounted(() => {
  axios.get('http://localhost:8080/api/work/formattedAddresses').then((resp) => {
    for (let address of resp.data) {
      axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
        params: {
          address: address,
          key: 'AIzaSyChYl423JJyZHyoVgPhUWBgi7bLCH3pGNA', // Replace with your actual API key
        },
      }).then((resp) => {
        locations.value.push({ address, position: resp.data.results[0].geometry.location })
      })

    }
  });

})
</script>
    
<style scoped>
/* Add your modal styles here */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-container {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.modal-content {
  padding: 20px;
}

.modal-close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  cursor: pointer;
  border: none;
  background: transparent;
}
</style>