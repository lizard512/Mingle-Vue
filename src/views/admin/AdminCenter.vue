<template>
    <div class="vh-100">
        <!-- Navbar Start -->
        <nav class="navbar sticky-top bg-dark py-0 px-4">
            <RouterLink to="/admin-center" class="d-flex align-items-center">
                <div class="icon p-2 me-2">
                    <img class="img-fluid" src="@images/icon-mingle-bold.png" alt="Icon" style="width: 30px; height: 27px;">
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
                        <RouterLink class="dropdown-item" :to="getUserProfileLink()"><i class="fa-solid fa-id-card me-2"></i>個人頁面</RouterLink>
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
                <Toggle id="toggleDarkMode" :isChecked=true bgColor="black" ballColor="white" iconClass1="fas fa-moon"
                    iconClass2="fas fa-sun" color1="yellow" color2="orangered" v-model="darkMode" class="my-2" />
            </div>
        </nav>
        <!-- Navbar End -->
        <div class="container-fluid" :class="{ 'collapsed': isCollapse }">
            <div class="row">
                <!-- Sidebar Start -->
                <nav class="col-xxl-2 col-xl-3 col-md-4 col-2 d-block navbar-dark sidebar">
                    <ul class="nav flex-column">
                        <button type="button" class="bg-info navbar-toggler" @click="isCollapse = !isCollapse">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <li class="nav-item">
                            <RouterLink class="nav-link" active-class="active" :to="{ name: 'AdminHome' }">
                                <i class="fa fa-solid fa-clipboard-list"></i>
                                <span>管理者主控台</span>
                            </RouterLink>
                        </li>
                        <div class="h6 sidebar-heading"><i class="fa fa-solid fa-database"></i><span>資料管理</span>
                        </div>
                        <li class="nav-item">
                            <RouterLink class="nav-link" active-class="active" :to="{ name: 'AdminUser' }">
                                <i class="fa fa-solid fa-users"></i>
                                <span>Users</span>
                            </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink class="nav-link" active-class="active" :to="{ name: 'AdminWork' }">
                                <i class="fa fa-solid fa-briefcase"></i>
                                <span>Works</span>
                            </RouterLink>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                <i class="fa fa-house"></i>
                                <span>Houses</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                <i class="fa fa-shopping-cart"></i>
                                <span>Orders</span>
                            </a>
                        </li>
                    </ul>
                    <h6 class="sidebar-heading"><i class="fa fa-solid fa-screwdriver-wrench"></i><span>管理者功能</span>
                    </h6>
                    <ul class="nav flex-column mb-2">
                        <li class="nav-item">
                            <RouterLink class="nav-link d-flex justify-content-between" active-class="active" :to="{ name: 'AdminWorkReview' }">
                                <div class="d-flex justify-content-between">
                                    <i class="fa fa-solid fa-check-to-slot"></i><span>審核工作檢舉</span>
                                </div>
                                <span class="badge bg-danger m-2 d-flex align-items-center sidebar-text">{{
                                    pendingReviewCount }}</span>
                            </RouterLink>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                <i class="fa fa-solid fa-user-shield"></i><span>管理者權限控管</span>
                            </a>
                        </li>
                    </ul>
                    <!-- Sidebar user info -->
                    <div class="dropdown dropup p-3 sidebar-user-info">
                        <a href="#" class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="@images/user/woman.png" alt="" width="32" height="32" class="rounded-circle me-2">
                            <strong>{{ user.name }}</strong>
                        </a>
                        <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
                            <li><a class="dropdown-item" href="#"><i class="fa-solid fa-gear me-2"></i>設定</a></li>
                            <RouterLink class="dropdown-item" :to="getUserProfileLink()"><i class="fa-solid fa-id-card me-2"></i>個人頁面</RouterLink>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <RouterLink to="#" class="dropdown-item" @click="resetStore"><i
                                    class="fa-solid fa-right-from-bracket me-2"></i>登出</RouterLink>
                            <li class="nav-item text-nowrap">
                                <RouterLink to="/" class="dropdown-item"><i
                                        class="fa-solid fa-person-through-window me-2"></i>退出管理者介面</RouterLink>
                            </li>
                        </ul>
                    </div>
                </nav>
                <!-- Sidebar End -->
                <main class="col-xxl-10 col-xl-9 col-md-8 col-10">
                    <RouterView></RouterView>
                </main>
            </div>
        </div>
    </div>
</template>

<script setup>
//// 引用函式庫
import { ref, onMounted, watch, watchEffect } from 'vue';
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
// 樣式相關
const darkMode = ref(true); // 暗黑模式
const pendingReviewCount = ref(0);
const isCollapse = ref(false);

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

const getUserProfileLink = () => {
    const userID = localStorage.getItem('userID');
    return `/user-profile/${userID}`;
};

// 清除使用者localStorage資料
const resetStore = () => {
    userStore.$reset()
    localStorage.removeItem('user')
    localStorage.removeItem('sessionToken');
    localStorage.removeItem('userID');
    localStorage.removeItem('lordID');
}


//// 監聽變數
watchEffect(() => {
    const htmlTag = document.documentElement;
    if (darkMode.value) {
        htmlTag.setAttribute('data-bs-theme', 'dark');
        htmlTag.style.setProperty('--primary', '#d29f05');
        htmlTag.style.setProperty('--light', '#0E2E50');
        htmlTag.style.setProperty('--dark', '#EFFDF5');
        htmlTag.style.setProperty('--white', '#000000');
        htmlTag.style.setProperty('--black', '#FFFFFF');
    } else {
        htmlTag.removeAttribute('data-bs-theme');
        htmlTag.style.setProperty('--primary', '#ffc107');
        htmlTag.style.setProperty('--light', '#EFFDF5');
        htmlTag.style.setProperty('--dark', '#0E2E50');
        htmlTag.style.setProperty('--white', '#FFFFFF');
        htmlTag.style.setProperty('--black', '#000000');
    }
});


//// 監聽路由
watch(router.currentRoute, async () => {
    await countPendingReview();
}, { immediate: true });

</script>
    
<style scoped>
/*** Icon ***/
.icon {
    padding: 15px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: #FFFFFF;
    border-radius: 50px;
    border: 1px dashed var(--primary);
}
.navbar {
    height: 75px;
}

.sidebar {
    padding: 0;
    background-color: var(--light);
    height: 100vh;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 1);
}

.sidebar-heading {
    background-color: var(--white);
    /* px-3 mt-3 mb-1 */
    /* 3 * 4px */
    margin-top: 16px;
    /* 4 * 4px */
    margin-bottom: 4px;
    /* 1 * 4px */
    display: flex;
    align-items: center;
    justify-content: start;
    border-top: 2px solid black;
    border-bottom: 2px solid black;
}

.sidebar-heading .fa {
    height: 30px;
    width: 30px;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.sidebar .nav-link {
    color: var(--dark);
    display: flex;
    align-items: center;
    justify-content: start;
}

.sidebar .nav-link .fa {
    color: var(--light);
    background-color: var(--dark);
    padding: 5px;
    border-radius: 4px;
    height: 30px;
    width: 30px;
    margin-right: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.sidebar .nav-link.active {
    background-color: var(--primary);
}

.sidebar .nav-link:hover {
    background-color: var(--secondary);
}

.sidebar-user-info {
    position: fixed;
    bottom: 0;
    left: 0;
    width: inherit;
    background-color: #727272;
}

.sidebar-user-info .fa-solid,
.navbar-user-info .fa-solid {
    width: 20px;
    height: 20px;
}


/* 過渡效果 */
.sidebar {
    transition: width 0.3s ease;
}

h1.m-0.link-primary {
    transition: font-size 0.3s ease, font-weight 0.3s ease;
}


/* 響應式 */
@media (max-width: 768px) {

    .sidebar .nav-link span,
    .sidebar .nav-item span,
    .sidebar-heading span,
    .sidebar-user-info strong,
    .navbar-user-info strong,
    .navbar-toggler {
        display: none !important;
    }

    .sidebar .nav-link .fa {
        height: 50px;
        width: 50px;
        padding: 10px;
        margin-right: 0;
        font-size: 1.5rem;
    }

    .sidebar-heading {
        justify-content: center;
    }

    h1.m-0.link-primary {
        font-size: 1.5rem;
        /* h6的預設字體大小 */
        font-weight: 1000;
        /* h6的預設字體粗細 */
    }

}
</style>
<style scoped lang="scss">
/* 摺疊 */
.collapsed {

    .sidebar .nav-link span,
    .sidebar .nav-item span,
    .sidebar-heading span,
    .sidebar-user-info strong {
        display: none !important;
    }

    .sidebar .nav-link .fa {
        height: 50px;
        width: 50px;
        padding: 10px;
        margin-right: 0;
        font-size: 1.5rem;
    }

    .sidebar-heading {
        justify-content: center;
    }

    .sidebar {
        width: 82px !important;
    }
}
</style>