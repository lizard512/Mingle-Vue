<template>
  <div>
    <GoogleMap api-key="AIzaSyChYl423JJyZHyoVgPhUWBgi7bLCH3pGNA" :center="mapCenter" :zoom="7"
      style="width: 100%; height: 650px">
      <CustomMarker v-for="(location, index) in locations" :key="index" :options="{
        position: location.position,
        title: location.address,
        draggable: true,
        clickable: true,
      }" @click="openInfoWindow(location)">
      <img src="@images/icon-mapIcon.png" alt="Marker Icon" style="width: 30px; height: 30px;">
      </CustomMarker>

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

const openInfoWindow = (location) => {
  alert('打工地點: '+location.address); // You can replace this with your logic to display a custom info window
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
    
<style scoped></style>