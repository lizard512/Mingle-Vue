<template>
    <div class="vh-100">
        <nav class="navbar sticky-top bg-dark py-0 px-4">
            <RouterLink to="/admin-center" class="navbar-brand d-flex align-items-center text-center">
                <div class="icon p-2 me-2">
                    <img class="img-fluid" src="@images/icon-main.png" alt="Icon" style="width: 30px; height: 27px;">
                </div>
                <h1 class="m-0 link-primary">Mingle 管理者大平台</h1>
            </RouterLink>
            <div class="d-flex align-items-center">
                <!-- Navbar user info -->
                <div class="dropdown p-3 navbar-user-info">
                    <a href="#" class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="@images/user/woman.png" alt="" width="32" height="32" class="rounded-circle me-2">
                        <strong>{{ user.name }}</strong>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
                        <li><a class="dropdown-item" href="#"><i class="fa-solid fa-gear me-2"></i>設定</a></li>
                        <li><a class="dropdown-item" href="#"><i class="fa-solid fa-id-card me-2"></i>個人檔案</a></li>
                        <li>
                            <hr class="dropdown-divider">
                        </li>
                        <RouterLink to="#" class="dropdown-item" @click="resetStore"><i
                                class="fa-solid fa-right-from-bracket me-2"></i>登出</RouterLink>
                        <li class="nav-item text-nowrap">
                            <RouterLink to="/" class="nav-link px-3"><i
                                    class="fa-solid fa-person-through-window me-2"></i>退出管理者介面</RouterLink>
                        </li>
                    </ul>
                </div>
                <Toggle id="toggleDarkMode" :isChecked=false bgColor="black" ballColor="white" iconClass1="fas fa-moon"
                    iconClass2="fas fa-sun" color1="yellow" color2="orangered" v-model="darkMode" class="my-2" />
            </div>
        </nav>

        <div class="container-fluid">
            <div class="row">
                <nav class="col-md-3 col-lg-2 d-md-block navbar-dark bg-black sidebar collapse">
                    <div class="position-sticky pt-3">
                        <ul class="nav flex-column">
                            <li class="nav-item">
                                <RouterLink class="nav-link active" :to="{ name: 'AdminHome' }">
                                    <i class="fa fa-solid fa-clipboard-list"></i>
                                    Dashboard
                                </RouterLink>
                            </li>
                            <h6 class="sidebar-heading px-3 mt-4 mb-1 text-light"><i class="fa fa-solid fa-database"></i>
                                Data Management
                            </h6>
                            <li class="nav-item">
                                <RouterLink class="nav-link" :to="{ name: 'AdminUser' }">
                                    <i class="fa fa-solid fa-users"></i>
                                    Users
                                </RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink class="nav-link" :to="{ name: 'AdminWork' }">
                                    <i class="fa fa-solid fa-briefcase"></i>
                                    Works
                                </RouterLink>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    <span class="fa fa-house"></span>
                                    Houses
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    <span class="fa fa-shopping-cart"></span>
                                    Orders
                                </a>
                            </li>
                        </ul>

                        <h6 class="sidebar-heading px-3 mt-4 mb-1 text-light"><i class="fa-solid fa-screwdriver-wrench"></i>
                            Admin Function
                        </h6>
                        <ul class="nav flex-column mb-2">
                            <li class="nav-item">
                                <RouterLink class="nav-link d-flex justify-content-between"
                                    :to="{ name: 'AdminWorkReview' }">
                                    <span>
                                        <i class="fa fa-solid fa-check-to-slot"></i>
                                        審核工作檢舉</span>
                                    <span class="badge bg-danger ml-2 d-flex align-items-center">{{ pendingReviewCount
                                    }}</span>
                                </RouterLink>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    <i class="fa fa-solid fa-user-check"></i>
                                    封鎖使用者帳戶
                                </a>
                            </li>
                        </ul>
                        <hr>
                        <!-- Sidebar user info -->
                        <div class="dropdown dropup p-3 sidebar-user-info">
                            <a href="#" class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="@images/user/woman.png" alt="" width="32" height="32" class="rounded-circle me-2">
                                <strong>{{ user.name }}</strong>
                            </a>
                            <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
                                <li><a class="dropdown-item" href="#"><i class="fa-solid fa-gear me-2"></i>設定</a></li>
                                <li><a class="dropdown-item" href="#"><i class="fa-solid fa-id-card me-2"></i>個人檔案</a></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <RouterLink to="#" class="dropdown-item" @click="resetStore"><i
                                        class="fa-solid fa-right-from-bracket me-2"></i>登出</RouterLink>
                                <li class="nav-item text-nowrap">
                                    <RouterLink to="/" class="nav-link px-3"><i
                                            class="fa-solid fa-person-through-window me-2"></i>退出管理者介面</RouterLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    <RouterView></RouterView>
                </main>
            </div>
        </div>
    </div>
</template>

<script setup>
//// 引用函式庫
import { ref, onMounted, watch } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import { useUserStore } from '@store/userStore-localStorage.js';

//// 引用元件
import Toggle from '@components/Toggle.vue';

//// 生命週期
onMounted(async () => {
    await loadUserData();
    // await countPendingReview();
});



//// 初始化變數
const userID = localStorage.getItem('userID');
const user = ref({});
const userStore = useUserStore();
const router = useRouter();

const pendingReviewCount = ref(0);

//// 定義方法
const loadUserData = async () => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_APP_API_URL}/api/volunteerDetail/${userID}`);
        user.value = response.data;
    } catch (error) {
        console.error('Failed to fetch user data:', error);
    }
}

const countPendingReview = async () => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_APP_API_URL}/api/work/countPendingReview`);
        pendingReviewCount.value = response.data;
    } catch (error) {
        console.error('Failed to fetch pending review count:', error);
    }
}

// 清除使用者localStorage資料
const resetStore = () => {
    userStore.$reset()
    localStorage.removeItem('user')
    localStorage.removeItem('sessionToken');
    localStorage.removeItem('userID');
    localStorage.removeItem('lordID');
}


//// 監聽路由
watch(router.currentRoute, async () => {
    await countPendingReview();
}, { immediate: true });

</script>
    
<style scoped>
.navbar {
    height: 75px;
}

.sidebar {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    padding: 75px 0 0;
}

.sidebar .nav-link {
    color: var(--light);
}

.sidebar .nav-link .fa {
    margin-right: 4px;
    color: #727272;
    background-color: #eee;
    padding: 5px;
    border-radius: 4px;
    height: 30px;
    width: 30px;
    text-align: center;
}

.sidebar .nav-link.active {
    color: var(--primary) !important;
}

.sidebar .nav-link:hover {
    color: var(--secondary);
}

.sidebar-user-info {
    position: fixed;
    bottom: 0;
    left: 0;
}

.sidebar-user-info .fa-solid,
.navbar-user-info .fa-solid {
    width: 20px;
    height: 20px;
}
</style>