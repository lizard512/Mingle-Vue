<template>
    <GoogleMap api-key="AIzaSyChYl423JJyZHyoVgPhUWBgi7bLCH3pGNA" :center="mapCenter" :zoom="7"
      style="width: 100%; height: 650px">
      <CustomMarker v-for="(location, index) in locations" :key="index" :options="{
        position: location.position,
        title: location.address,
        draggable: true,
        clickable: true,
      }" @click="openInfo(location)">
        <img src="@images/icon-mapIcon.png" alt="Marker Icon" style="width: 30px; height: 30px;">
      </CustomMarker>
      <!-- Modal component -->
      <div v-if="showInfo" class="modal-overlay">
        <div class="modal-container">
          <div class="modal-content">
            <button class="modal-close-btn" @click="closeInfo">&times;</button>
            <p>打工地點: {{ infoAddress }}</p>
            <!-- Links to Work Deatil page -->
            <RouterLink v-for="(work, index) in infoWorks" :key="index" :to="`/work-detail/${work.workid}`">
              <p>【{{ work.worktype }}】{{ work.name }}</p>
            </RouterLink>
          </div>
        </div>
      </div>
    </GoogleMap>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { GoogleMap, CustomMarker } from 'vue3-google-map';
// import { Loader } from "@googlemaps/js-api-loader"

const mapCenter = ref({ lat: 25.0330, lng: 121.5654 });

const locations = ref([]);

const infoAddress = ref({});

const infoWorks = ref([]);

const showInfo = ref(false);

const openInfo = async (location) => {
  infoAddress.value = location.address.slice(3);

  try {
    const response = await axios.get(`${import.meta.env.VITE_APP_API_URL}/api/work/getWorksByAddress/${infoAddress.value}`);
    console.log(response.data)
    if (response.data) {
      infoWorks.value = response.data;
    }
  } catch (error) {
    console.error('Failed to fetch infoWorks:', error);
  }

  console.log(infoWorks.value);

  showInfo.value = true;
};

const closeInfo = () => {
  showInfo.value = false;
};

onMounted(() => {
  axios.get(`${import.meta.env.VITE_APP_API_URL}/api/work/formattedAddresses`).then((resp) => {
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