<template>
    <div>
    <GmapMap
      :center="mapCenter"
      :zoom="10"
      style="width: 100%; height: 500px"
    >
      <GmapMarker
        v-for="(address, index) in formattedAddresses"
        :key="index"
        :position="getCoordinates(address)"
      ></GmapMarker>
    </GmapMap>
  </div>
</template>
    
<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const mapCenter = ref({ lat: 0, lng: 0 });
const formattedAddresses = ref([]);

const getCoordinates = async (address) => {
  try {
    const response = await axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
      params: {
        address: address,
        key: 'YOUR_GOOGLE_MAPS_API_KEY', // Replace with your actual API key
      },
    });

    if (response.data.results && response.data.results.length > 0) {
      const location = response.data.results[0].geometry?.location;

      if (location) {
        return { lat: location.lat, lng: location.lng };
      } else {
        console.error('No coordinates found in the API response:', response.data);
        return { lat: 0, lng: 0 };
      }
    } else {
      console.warn('No results found in the API response for address:', address);
      console.log('API Response:', response.data); // Log the entire API response for debugging
      return { lat: 0, lng: 0 };
    }
  } catch (error) {
    console.error('Error fetching coordinates:', error);
    return { lat: 0, lng: 0 };
  }
};

onMounted(async () => {
  try {
    // Example backend API endpoint to fetch formatted addresses
    const backendResponse = await axios.get('/api/getFormattedAddresses');

    // Assuming the backend response contains an array of formatted addresses
    formattedAddresses.value = backendResponse.data;
  } catch (error) {
    console.error('Error fetching formatted addresses:', error);
  }
});
</script>
    
<style scoped>

</style>