<template>
    <div class="password-reset">
        <h1>忘記密碼</h1>
        <form @submit.prevent="submitForm">
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" v-model="email" required>
            </div>
            <div class="form-group">
                <button type="submit">重置信件寄出</button>
            </div>
        </form>
    </div>
</template>
    
<script setup>
import { ref } from 'vue';
import axios from 'axios';
import Swal from 'sweetalert2';
import router from '@/router/router';

const email = ref('');

const submitForm = async () => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_APP_API_URL}/forgot-password`, { email: email.value });
        console.log(response.data);
        if (response.status === 200) {
            Swal.fire({
                icon: 'success',
                title: '已寄出重置密碼郵件',
                text: '請確認您的信箱，並依指示重置密碼'
            });
            router.push("/login");
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: response.data.message
            });
        }
    } catch (error) {
        console.error('Error sending password reset request:', error);
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'An error occurred while processing your request. Please try again later.'
        });
    }
};
</script>
    
<style scoped>
.password-reset {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0f0f0;
}

.form-container {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.form-group {
    margin-bottom: 15px;
}

label {
    font-weight: bold;
}

input[type="email"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

button[type="submit"] {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button[type="submit"]:hover {
    background-color: #0056b3;
}
</style>