<template>
    <div class="container-fluid">
        <h2>管理者權限控管</h2>
        <div class="row mt-3">
            <div class="col-xxl-6 col-12">
                <!-- 使用者搜尋欄位 -->
                <form @submit.prevent="searchUser">
                    <div class="w-50 input-group m-3 mx-auto">
                        <input type="text" class="form-control" placeholder="依使用者名稱搜尋" v-model="keyword">
                        <button class="btn btn-info" type="submit">搜尋</button>
                    </div>
                </form>
                <!-- 使用者列表 Start-->
                <table class="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th class="w-25" @click="sortUsers('userid')">使用者ID</th>
                            <th class="w-50" @click="sortUsers('username')">使用者名稱</th>
                            <th class="w-25">管理者權限</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-if="!isLoading" v-for="user in users" :key="user.userid">
                            <td>{{ user.userid }}</td>
                            <td>{{ user.username }}</td>
                            <td>
                                <div class="form-check form-switch">
                                    <input v-model="user.isAdmin" class="form-check-input" type="checkbox"
                                        id="flexSwitchCheck" @change="updateAdminStatus(user)">
                                    <label class="form-check-label" for="flexSwitchCheck"></label>
                                </div>
                            </td>
                        </tr>

                    </tbody>
                </table>
                <!--The End-->
                <div class="text-center m-3 text-white" v-if="isEnd">已經到底啦~~</div>
                <!-- 使用者列表 End-->
                <!-- 分頁元件 -->
                <nav aria-label="Page navigation example">
                    <ul class="pagination justify-content-center">
                        <li class="page-item" :class="{ disabled: page === 0 }">
                            <a class="page-link" href="#" @click.prevent="prevPage">上一頁</a>
                        </li>
                        <li class="page-item" :class="{ disabled: isEnd }">
                            <a class="page-link" href="#" @click.prevent="nextPage">下一頁</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>


    </div>
</template>
    
<script setup>
//// 引用套件
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
const total = ref(0); // 使用者總數
const sortOrder = ref('asc'); // 排序順序
const sortField = ref('userid'); // 排序欄位
const page = ref(0); // 當前頁數
const pageSize = ref(15); // 每次載入的數量
const keyword = ref(''); // 使用者名稱搜尋關鍵字
const isLoading = ref(false); //避免重複載入
const isEnd = ref(false);

//// 定義方法
const loadUsers = async () => {
    if (isLoading.value) return;
    isLoading.value = true;
    try {
        const response = await axios.get(`${import.meta.env.VITE_APP_API_URL}/api/volunteer/getAllVolunteers`, {
            params: {
                page: page.value,
                size: pageSize.value,
                keyword: keyword.value,
                sortField: sortField.value,
                sortOrder: sortOrder.value,
            }
        });
        total.value = response.data.totalElements;
        users.value = response.data.content;
        isEnd.value = response.data.last;
    } catch (error) {
        console.error(error);
    } finally {
        isLoading.value = false;
    }

};

const searchUser = () => {
    page.value = 0;
    loadUsers();
};

const sortUsers = async (field) => {
    sortField.value = field;
    sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc';
    await loadUsers();
};

const prevPage = () => {
    if (page.value > 0) {
        page.value--;
        loadUsers();
    }
};

const nextPage = () => {
    if (!isEnd.value) {
        page.value++;
        loadUsers();
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
    
<style scoped>
.page-item .page-link {
    color: var(--black);
}
</style>