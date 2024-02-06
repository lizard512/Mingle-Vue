<template>
    <div class="vh-100">
        <header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
            <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">Mingle 管理者大平台</a>
            <div class="navbar-nav">
                <div class="nav-item text-nowrap">
                    <RouterLink to="/" class="nav-link px-3"><i class="fa-solid fa-person-through-window me-2"></i>退出管理者介面</RouterLink>
                </div>
            </div>
        </header>

        <div class="container-fluid">
            <div class="row">
                <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-dark sidebar collapse">
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
                                <a class="nav-link" href="#">
                                    <i class="fa fa-solid fa-check-to-slot"></i>
                                    處理工作檢舉
                                </a>
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
                        <div class="dropdown dropup p-3 user-info">
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
                                <li><a class="dropdown-item" href="#"><i class="fa-solid fa-right-from-bracket me-2"></i>登出</a></li>
                                <li class="nav-item text-nowrap">
                    <RouterLink to="/" class="nav-link px-3"><i class="fa-solid fa-person-through-window me-2"></i>退出管理者介面</RouterLink>
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
import { ref, onMounted } from 'vue';
import axios from 'axios';

onMounted(async () => {

    await loadUserData();
});

const userID = localStorage.getItem('userID');
const user = ref({});

const loadUserData = async () => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_APP_API_URL}/api/volunteerDetail/${userID}`);
        user.value = response.data;
    } catch (error) {
        console.error('Failed to fetch user data:', error);
    }
}

</script>
    
<style scoped>
.sidebar {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 100;
    padding: 48px 0 0;
    box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);
}

.sidebar-sticky {
    position: relative;
    top: 0;
    height: calc(100vh - 48px);
    padding-top: .5rem;
    overflow-x: hidden;
    overflow-y: auto;
    /* Scrollable contents if viewport is shorter than content. */
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



.navbar-brand {
    padding-top: .75rem;
    padding-bottom: .75rem;
    font-size: 1rem;
    background-color: rgba(0, 0, 0, .25);
    box-shadow: inset -1px 0 0 rgba(0, 0, 0, .25);
}

.navbar .navbar-toggler {
    top: .25rem;
    right: 1rem;
}

.user-info {
    position: fixed;
    bottom: 0;
    left: 0;
    /* Adjust this value to align with your sidebar */
}
.user-info .fa-solid {
    width: 20px;
    height: 20px;
}
</style>