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
                            <input v-model="user.isAdmin" class="form-check-input" type="checkbox"
                                id="flexSwitchCheck" @change="updateUser(user)">
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
import { ElTable, ElTableColumn } from 'element-plus';

//// 生命週期
onMounted(async () => {
    await loadUsers();
});

//// 宣告變數
const users = ref([]);

//// 定義方法
const loadUsers = async () => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_APP_API_URL}/api/volunteer/getAllVolunteers`)
        users.value = response.data;
    } catch (error) {
        console.error(error);
    }
};

const updateUser = (user) => {
    // 這裡是更新使用者資訊的方法，你需要實現這個方法來將更新後的使用者資訊發送到後端
    console.log(user);
};
</script>
    
<style scoped></style>