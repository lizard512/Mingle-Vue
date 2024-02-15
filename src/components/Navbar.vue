<template>
    <!-- Navbar Start -->
    <div class="container-fluid nav-bar" :class="{ 'sticky-top': isSticky }">
        <nav class="navbar navbar-expand-xxl navbar-light py-0 px-4">
            <RouterLink to="/" class="navbar-brand d-flex align-items-center text-center">
                <div class="icon p-2 me-2">
                    <img class="img-fluid" src="@icons/icon-mingle-bold.png" alt="Icon" style="width: 30px; height: 27px;">
                </div>
                <h1 class="m-0 link-secondary">Mingle 打工換宿平台</h1>
            </RouterLink>
            <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav ms-auto d-flex align-items-center">
                    <RouterLink class="nav-item nav-link" to="/"><i class="fa fa-solid fa-house"></i>首頁</RouterLink>
                    <RouterLink class="nav-item nav-link" to="/about"><i class="fa fa-solid fa-circle-info"></i>關於Mingle
                    </RouterLink>
                    <div class="nav-item dropdown">
                        <RouterLink class="nav-link dropdown-toggle" data-bs-toggle="dropdown" to="#"><i
                                class="fa fa-solid fa-mountain-sun"></i>打工換宿資訊</RouterLink>
                        <div class="dropdown-menu rounded-0 m-0">
                            <RouterLink class="dropdown-item" to="/work-search"><i
                                    class="fa fa-solid fa-briefcase"></i>瀏覽打工項目</RouterLink>
                            <RouterLink class="dropdown-item" to="/map"><i class="fa fa-solid fa-map-location-dot"></i>依地圖檢視
                            </RouterLink>
                        </div>
                    </div>
                    <!-- <div class="nav-item dropdown">
                        <RouterLink class="nav-link dropdown-toggle" data-bs-toggle="dropdown" to="#">論壇日誌</RouterLink>
                        <div class="dropdown-menu rounded-0 m-0">
                            <RouterLink class="dropdown-item" to="#">討論 & 問答</RouterLink>
                            <RouterLink class="dropdown-item" to="#">打工日誌</RouterLink>
                        </div>
                    </div> -->
                    <RouterLink class="nav-item nav-link" to="/contact-Us"><i class="fa fa-solid fa-phone"></i>聯絡我們
                    </RouterLink>
                    <template v-if="isLoggedIn">
                        <div v-if="isLandlord" class="nav-item dropdown">
                            <a href="#" class="btn btn-secondary btn-custom px-3 dropdown-toggle"
                                data-bs-toggle="dropdown">房東中心</a>
                            <div class="dropdown-menu rounded-0 m-0">
                                <RouterLink class="dropdown-item" to="/houseMaintain"><i
                                        class="fa fa-solid fa-house-laptop"></i>房源管理</RouterLink>
                                <RouterLink class="dropdown-item" to="/WorkMaintain"><i
                                        class="fa fa-solid fa-laptop-file"></i>工作管理</RouterLink>
                                <RouterLink class="dropdown-item" to="/landlordOrder"><i
                                        class="fa fa-solid fa-cash-register"></i>訂單管理</RouterLink>
                                <RouterLink class="dropdown-item" to="/analyze"><i
                                        class="fa fa-solid fa-chart-column"></i>後臺數據</RouterLink>
                                <RouterLink class="dropdown-item" to="/review"><i
                                        class="fa fa-solid fa-ranking-star"></i>房東評價</RouterLink>
                                <RouterLink class="dropdown-item" to="/provider-form"><i
                                        class="fa fa-solid fa-user-gear"></i>房東資料維護</RouterLink>
                                <RouterLink class="dropdown-item" to="#" @click="userStore.removePermission('lord')">我不當房東了！
                                </RouterLink>
                            </div>
                        </div>
                        <RouterLink v-else class="btn btn-secondary btn-custom px-3" to="/provider-form">
                            <!--@click="userStore.addPermission('lord')"-->
                            成為提供者
                        </RouterLink>
                        <div class="nav-item dropdown">
                            <a href="#" class="btn btn-dark btn-custom m-3 dropdown-toggle d-flex align-items-center"
                                data-bs-toggle="dropdown">
                                <template v-if="user && user.name" class="">
                                    <img v-if="user.photoBase64" :src="user.photoBase64" alt="" width="32" height="32"
                                        class="rounded-circle me-2">
                                    <img v-else src="@images/empty-avatar.png" alt="" width="32" height="32"
                                        class="rounded-circle me-2">
                                    <strong>{{ user.name }}</strong>
                                </template>
                                <span v-else>會員中心</span>
                            </a>
                            <div class="dropdown-menu rounded-0 m-0">
                                <RouterLink class="dropdown-item" :to="getUserProfileLink()"><i
                                        class="fa fa-solid fa-id-card"></i>個人頁面</RouterLink>
                                <RouterLink class="dropdown-item" to="/chatroom"><i class="fa fa-solid fa-comments"></i>聊天室
                                </RouterLink>
                                <RouterLink class="dropdown-item" to="/account"><i
                                        class="fa fa-solid fa-user-gear"></i>會員資料維護</RouterLink>
                                <RouterLink to="#" class="dropdown-item" @click="resetStore()"><i
                                        class="fa fa-solid fa-right-from-bracket"></i>登出</RouterLink>
                                <RouterLink v-if="isAdmin" class="dropdown-item" to="/admin-center"><i
                                        class="fa fa-solid fa-user-secret"></i>管理者平台</RouterLink>
                            </div>
                        </div>
                    </template>
                    <template v-else>
                        <RouterLink class="btn btn-dark px-3" to="/register/register4">成為幫助者</RouterLink>
                        <p class="m-3">已有帳戶? </p>
                        <RouterLink class="btn btn-dark px-3 me-3"
                            :to="{ name: 'Login', query: { redirect: router.currentRoute.value.fullPath } }">登入</RouterLink>
                    </template>
                    <Toggle id="toggleDarkMode" :isChecked=false bgColor="black" ballColor="white" iconClass1="fas fa-moon"
                        iconClass2="fas fa-sun" color1="yellow" color2="orangered" v-model="darkMode" class="my-2" />
                </div>
            </div>
        </nav>
    </div>
    <!-- Navbar End -->
</template>
    
<script setup>

//// 引用套件
import { ref, onMounted, onBeforeUnmount, watchEffect, computed, onBeforeUpdate } from 'vue';
import axios from 'axios';
import Swal from 'sweetalert2';
import router from '@router/router'
import { useUserStore } from '@store/userStore-localStorage.js';

//// 引用元件
import Toggle from '@components/Toggle.vue';


//// 生命週期
onBeforeUpdate(() => {
    if (localStorage.getItem('userID')) {
        loadUserData();
    }
});

onMounted(() => {
    if (localStorage.getItem('userID')) {
        loadUserData();
    }
    window.addEventListener('scroll', checkSticky);
});

onBeforeUnmount(() => {
    window.removeEventListener('scroll', checkSticky);
});


//// 定義變數
// user登入狀態處理
const user = ref(null);
const userStore = useUserStore();
const isLoggedIn = computed(() => userStore.isLoggedIn);
const isLandlord = computed(() => userStore.permissions.includes('lord'));
const isAdmin = computed(() => userStore.permissions.includes('admin'));
// 其他 
const darkMode = ref(false); // 暗黑模式
const isSticky = ref(false); // Sticky Navbar


//// 監聽變數
watchEffect(() => {
    const htmlTag = document.documentElement;
    if (darkMode.value) {
        htmlTag.setAttribute('data-bs-theme', 'dark');
        htmlTag.style.setProperty('--primary', '#DAA520');
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


//// 定義方法

const loadUserData = async () => {
    try {
        const userID = localStorage.getItem('userID');
        const response = await axios.get(`${import.meta.env.VITE_APP_API_URL}/api/volunteerDetail/Base64/${userID}`);
        user.value = response.data;
    } catch (error) {
        console.error('Failed to fetch user data:', error);
    }
}


// 清除使用者localStorage資料
function resetStore() {
    userStore.$reset()
    localStorage.removeItem('user')
    localStorage.removeItem('sessionToken');
    localStorage.removeItem('userID');
    localStorage.removeItem('lordID');
    Swal.fire({
        icon: "success",
        text: "您已成功登出",
        confirmButtonText: "OK",
    })
}

const getUserProfileLink = () => {
    const userID = localStorage.getItem('userID');
    return `/user-profile/${userID}`;
};

const checkSticky = () => {
    // 如果當前的路由是 WorkSearch，則不懸浮 NAVBAR
    if (router.currentRoute.value.name === 'WorkSearch') {
        isSticky.value = false;
    } else {
        isSticky.value = window.scrollY > 45;
    }
};


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

/*** Navbar ***/
.nav-bar {
    position: relative;
    padding: 0;
    transition: .5s;
    z-index: 9999;
}

.nav-bar.sticky-top {
    position: sticky;
    padding: 0;
    z-index: 9999;
}

.navbar-nav .fa {
    margin-right: 24px;
    height: 3px;
    width: 3px;
}

.navbar {
    box-shadow: 0 0 30px rgba(0, 0, 0, .08);
    background-color: var(--primary);
}

.btn-custom {
    height: 40px;
    display: flex;
    align-items: center;
}

.navbar .dropdown-toggle::after {
    transition: .5s;
}

.navbar .dropdown-toggle[aria-expanded=true]::after {
    transform: rotate(-180deg);
}

.navbar-light .navbar-nav .nav-link {
    color: var(--dark);
    margin-right: 40px;
    /* text-transform: uppercase; */
    border-radius: 5px;
    outline: none;
}

.navbar-light .navbar-nav .nav-link:hover,
.navbar-light .navbar-nav .nav-link.active {
    color: var(--dark);
    background-color: var(--light);
}

@media (max-width: 1591.98px) {

    .navbar-light .navbar-nav .nav-link {
        margin-right: 5px;
    }

}

.navbar-light .navbar-brand {
    height: 75px;
}

@media (min-width: 1592px) {
    .navbar .nav-item .dropdown-menu {
        display: block;
        top: 100%;
        margin-top: 0;
        transform: rotateX(-75deg);
        transform-origin: 0% 0%;
        opacity: 0;
        visibility: hidden;
        transition: .5s;

    }

    .navbar .nav-item:hover .dropdown-menu {
        transform: rotateX(0deg);
        visibility: visible;
        transition: .5s;
        opacity: 1;
    }
}
</style>