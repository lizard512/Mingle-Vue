<template>
    <div>
        <div id="map"></div>
    </div>
</template>
    
<!-- <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyChYl423JJyZHyoVgPhUWBgi7bLCH3pGNA&libraries=places"></script> -->
<script setup>
import { ref, onMounted } from 'vue';

const workCoordinates = ref([]);
const map = ref(null);

const fetchWorkCoordinates = () => {
  // Fetch work coordinates using your API endpoint
  // Update the workCoordinates ref with the fetched data
};

const initMap = () => {
  // Initialize Google Maps
  map.value = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 0, lng: 0 },
    zoom: 2,
  });

  // Add markers for each work coordinate
  workCoordinates.value.forEach((workCoordinate) => {
    // Perform geocoding here using workCoordinate.address
    // Create markers on the map
  });
};

onMounted(() => {
  fetchWorkCoordinates();
});
</script>
    
<style scoped>
#map {
  height: 600px;
}
</style>