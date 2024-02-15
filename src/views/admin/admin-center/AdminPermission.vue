<template>
    <div class="container-fluid">
        <h2>管理者權限控管</h2>
        <table class="table">
            <thead>
                <tr>
                    <th>使用者ID</th>
                    <th>使用者名稱</th>
                    <th>管理者權限</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.userid">
                    <td>{{ user.userid }}</td>
                    <td>{{ user.username }}</td>
                    <td>
                        <div class="form-check form-switch">
                            <input v-model="user.isAdmin" class="form-check-input" type="checkbox" id="flexSwitchCheck"
                                @change="updateAdminStatus(user)">
                            <label class="form-check-label" for="flexSwitchCheck"></label>
                        </div>
                    </td>

                </tr>
            </tbody>
        </table>
    </div>
</template>
    
<script setup>
//// 引用函示庫
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { toast } from 'vue3-toastify';

//// 生命週期
onMounted(async () => {
    await loadUsers();
});

//// 宣告變數
const users = ref([]);
const userID = localStorage.getItem('userID');

//// 定義方法
const loadUsers = async () => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_APP_API_URL}/api/volunteer/getAllVolunteers`)
        users.value = response.data;
    } catch (error) {
        console.error(error);
    }
};

const updateAdminStatus = async (volunteer) => {
    if (volunteer.userid === userID) {
        toast("你不能移除自己的管理者權限", {})
        volunteer.isAdmin = true;
        return;
    }

    try {
        const response = await axios.put(`${import.meta.env.VITE_APP_API_URL}/api/volunteer/updateAdminStatus`, volunteer);
    } catch (error) {
        console.error(error);
    }
};
</script>
    
<style scoped></style>