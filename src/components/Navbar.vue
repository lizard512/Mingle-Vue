<template>
    <!-- Navbar Start -->
    <div class="container-fluid nav-bar" :class="{ 'sticky-top': isSticky }">
        <nav class="navbar bg-primary navbar-expand-xxl navbar-light py-0 px-4">
            <RouterLink to="/" class="navbar-brand d-flex align-items-center text-center">
                <div class="icon p-2 me-2">
                    <img class="img-fluid" src="@images/icon-main.png" alt="Icon" style="width: 30px; height: 27px;">
                </div>
                <h1 class="m-0 link-secondary">Mingle 名狗</h1>
            </RouterLink>
            <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav ms-auto d-flex align-items-center">
                    <RouterLink class="nav-item nav-link active" to="/">首頁</RouterLink>
                    <RouterLink class="nav-item nav-link" to="#">關於Mingle</RouterLink>
                    <div class="nav-item dropdown">
                        <RouterLink class="nav-link dropdown-toggle" data-bs-toggle="dropdown" to="#">打工換宿資訊</RouterLink>
                        <div class="dropdown-menu rounded-0 m-0">
                            <RouterLink class="dropdown-item" to="/search">瀏覽打工項目</RouterLink>
                            <RouterLink class="dropdown-item" to="#">住宿地點一覽</RouterLink>
                        </div>
                    </div>
                    <div class="nav-item dropdown">
                        <RouterLink class="nav-link dropdown-toggle" data-bs-toggle="dropdown" to="#">論壇日誌</RouterLink>
                        <div class="dropdown-menu rounded-0 m-0">
                            <RouterLink class="dropdown-item" to="#">討論 & 問答</RouterLink>
                            <RouterLink class="dropdown-item" to="#">打工日誌</RouterLink>
                        </div>
                    </div>
                    <RouterLink class="nav-item nav-link" to="/contact-Us">聯絡我們</RouterLink>
                    <div class="nav-item dropdown">
                        <RouterLink class="nav-link dropdown-toggle" data-bs-toggle="dropdown" to="#">待整理功能</RouterLink>
                        <div class="dropdown-menu rounded-0 m-0">
                            <RouterLink class="dropdown-item" to="/chatroom">聊天室</RouterLink>
                        </div>
                    </div>
                    <template v-if="isLoggedIn">
                        <div v-if="isLord" class="nav-item dropdown">
                            <RouterLink class=" btn btn-secondary px-3 dropdown-toggle" data-bs-toggle="dropdown"
                                to="/lord-center">房東中心</RouterLink>
                            <div class="dropdown-menu rounded-0 m-0">
                                <RouterLink class="dropdown-item" to="/houseMaintain">房源維護</RouterLink>
                                <RouterLink class="dropdown-item" to="/order">訂單管理</RouterLink>
                                <RouterLink class="dropdown-item" to="/analyze">後臺數據</RouterLink>
                                <RouterLink class="dropdown-item" to="/review">房東評價</RouterLink>
                                <RouterLink class="dropdown-item" to="#" @click="quitLord">我不當房東了！</RouterLink>
                            </div>
                        </div>
                        <RouterLink v-else class="btn btn-secondary px-3" to="/form-lord" @click="becomeLord">成為提供者
                        </RouterLink>
                        <div class="nav-item dropdown">
                            <RouterLink class="btn btn-dark px-3 m-3 dropdown-toggle" data-bs-toggle="dropdown"
                                to="/user-center">會員中心</RouterLink>
                            <div class="dropdown-menu rounded-0 m-0">
                                <RouterLink class="dropdown-item" to="/321">會員資料</RouterLink>
                                <RouterLink to="#" class="dropdown-item" @click="Logout">登出</RouterLink>
                            </div>
                        </div>

                    </template>
                    <template v-else>
                        <RouterLink class="btn btn-dark px-3" to="/register">成為幫助者</RouterLink>
                        <p class="m-3">已有帳戶? </p>
                        <RouterLink class="btn btn-dark px-3" to="/login" @click="Login">登入</RouterLink>
                    </template>
                </div>


            </div>
        </nav>
    </div>
    <!-- Navbar End -->
</template>
    
<script setup>
import { useUserStore } from '@store/userStore-memory.js';
import { computed } from 'vue';

const userStore = useUserStore();

const isLoggedIn = computed(() => userStore.isLoggedIn);
const isLord = computed(() => userStore.isLord);

const Login = userStore.login;
const Logout = userStore.logout;
const becomeLord = userStore.becomeLord;
const quitLord = userStore.quitLord;

// import { computed } from 'vue';
// import { useStore } from 'vuex';

// const store = useStore();
// const isLoggedIn = computed(() => store.state.isLoggedIn);
// const isLord = computed(() => store.state.isLord);

// function handleLogin() {
//     store.commit('setLoggedIn', true);
// }
// function handleLogout() {
//     store.commit('setLoggedIn', false);
// }
// function becomeLord() {
//     store.commit('setLord', true);
// }
// function quitLord() {
//     store.commit('setLord', false);
// }


// // Sticky Navbar
import { ref, onMounted, onBeforeUnmount } from 'vue';

const isSticky = ref(false);

const checkSticky = () => {
    isSticky.value = window.pageYOffset > 45;
};

onMounted(() => {
    window.addEventListener('scroll', checkSticky);
});

onBeforeUnmount(() => {
    window.removeEventListener('scroll', checkSticky);
});
</script>
    
<style scoped>
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

.navbar {
    box-shadow: 0 0 30px rgba(0, 0, 0, .08);
}

.navbar .dropdown-toggle::after {
    border: none;
    content: "\f107";
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    vertical-align: middle;
    margin-left: 5px;
    transition: .5s;
}

.navbar .dropdown-toggle[aria-expanded=true]::after {
    transform: rotate(-180deg);
}

.navbar-light .navbar-nav .nav-link {
    margin-right: 30px;
    padding: 25px;
    color: #FFFFFF;
    font-size: 15px;
    text-transform: uppercase;
    outline: none;
}

.navbar-light .navbar-nav .nav-link:hover,
.navbar-light .navbar-nav .nav-link.active {
    color: var(--secondary);
}

@media (max-width: 1591.98px) {
    .nav-bar {
        margin: 0;
        padding: 0;
    }

    .navbar-light .navbar-nav .nav-link {
        margin-right: 5;
        padding: 0;
    }
}

.navbar-light .navbar-brand {
    height: 75px;
}

.navbar-light .navbar-nav .nav-link {
    color: var(--dark);
    font-weight: 500;
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