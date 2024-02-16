<template>
    <div class="reset-password">
        <h1>重置密碼</h1>
        <form @submit.prevent="resetPassword">
            <!-- Hidden email input field -->
            <input type="hidden" id="email" v-model="email">

            <!-- Password fields -->
            <div class="form-group">
                <label for="password">新密碼:</label>
                <input :type="showPassword ? 'text' : 'password'" id="password" v-model="password" required>
            </div>
            <div class="form-group">
                <label for="confirm-password">確認密碼:</label>
                <input :type="showPassword ? 'text' : 'password'" id="confirm-password" v-model="confirmPassword" required>
            </div>
            <div class="checkboxDiv">
                <label>
                    <input id="checkbox" v-model="showPassword" class="checkbox" type="checkbox" value="show-me"> 顯示密碼
                </label>
            </div>
            <div class="form-group">
                <button type="submit">重置</button>
            </div>
        </form>
    </div>
</template>
    
<script setup>
import { ref } from 'vue';
import axios from 'axios';
import Swal from 'sweetalert2';
import router from '@/router/router';

// Retrieve the email parameter from the URL
const urlParams = new URLSearchParams(window.location.search);
const email = ref(urlParams.get('email') || '');

const password = ref('');
const confirmPassword = ref('');
const showPassword = ref(false);

const resetPassword = async () => {
    // Check if passwords match
    if (password.value !== confirmPassword.value) {
        Swal.fire({
            icon: 'error',
            title: '密碼不一致',
            text: '請確認密碼相同'
        });
        return;
    }

    try {
        // Send reset password request to backend
        const response = await axios.post(`${import.meta.env.VITE_APP_API_URL}/reset-password`, {
            email: email.value,
            password: password.value
        });
        Swal.fire({
            icon: 'success',
            title: '更改密碼成功',
            text: response.data.message
        });
        router.push("/login");
    } catch (error) {
        console.error('Error resetting password:', error);
        Swal.fire({
            icon: 'error',
            title: '錯誤',
            text: '您可能輸入了錯誤的密碼，請再試一次'
        });
    }
};
</script>
    
<style scoped>
.reset-password {
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

input[type="password"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

input[type="text"] {
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