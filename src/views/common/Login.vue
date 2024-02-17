<template>
    <div class="row" id="app">
        <div class="col-lg-4 login-frame p-5">
            <div class="container-xxl bg-white p-5 login-form">
                <div class="login-icon">
                    <img src="@icons/icon-mingle-bold.png" width="50px">
                </div>
                <br>
                <div class="accountDiv">
                    <input id="username" v-model="username" type="text" class="account" name="account" placeholder="使用者名稱"
                        required autofocus>
                </div>
                <br>
                <br>
                <div class="passwordDiv">
                    <input id="password" v-model="password" @keydown.enter="handleEnterKey"
                        :type="showPassword ? 'text' : 'password'" class="password" name="password" placeholder="請輸入密碼"
                        required>
                </div>
                <br>
                <div class="reminder">
                    <div class="checkboxDiv">
                        <label>
                            <input id="checkbox" v-model="showPassword" class="checkbox" type="checkbox" value="show-me">
                            顯示密碼
                        </label>
                    </div>
                    <div class="forget-password">
                        <a href="/forgetpassword">忘記密碼</a>
                    </div>
                </div>
                <br>
                <br>
                <div class="login-btn">
                    <button @click="login" class="btn btn-lg btn-secondary btn-block" type="submit">登入</button>
                </div>
                <!-- <br>
                <p class="or">或</p>
                <div class="google-btn">
                    <button @click="gotGoogleLoginPage" class="btn btn-outline-dark" type="submit"><img
                            src="@icons/icon-google.png" width="25px">&nbsp;透過Google帳號登入</button>
                </div>
                <br> -->
                <!-- <div class="login-btn">
                    <button class="btn btn-lg btn-warning btn-block" type="submit"
                        @click="loginTestUsingPinia">登入(Pinia測試)</button>
                </div> -->
            </div>
        </div>
        <div>
            <h5 class="text-center">測試用帳號</h5>
                <!-- For Presentation Only-->
                <!-- User -->
                <h6 class="text-center">一般使用者</h6>
                <div class="autoLogin-btn text-center">
                    <button class="btn" type="button" v-for="user in autoLoginUsers.slice(0, 3)" :key="user.name"
                        @click="autoLogin(user)">
                        {{ user.name }}
                    </button>
                </div>
                <!-- Landlord1 -->
                <h6 class="text-center">房東身分組</h6>
                <div class="autoLogin-btn text-center">
                    <button class="btn" type="button" v-for="user in autoLoginUsers.slice(3, 8)" :key="user.name"
                        @click="autoLogin(user)">
                        {{ user.name }}
                    </button>
                </div>
                <!-- Landlord2 -->
                <div class="autoLogin-btn text-center">
                    <button class="btn" type="button" v-for="user in autoLoginUsers.slice(8, 13)" :key="user.name"
                        @click="autoLogin(user)">
                        {{ user.name }}
                    </button>
                </div>
                <!-- Admin -->
                <h6 class="text-center">管理者身分</h6>
                <div class="autoLogin-btn text-center">
                    <button class="btn" type="button" v-for="user in autoLoginUsers.slice(13)" :key="user.name" @click="autoLogin(user)">
                        {{ user.name }}
                    </button>
                </div>
                <!-- For Presentation Only -->
        </div>
    </div>
</template>
    
<script setup>
import { useUserStore } from '@store/userStore-localStorage.js';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useRoute } from 'vue-router';

const route = useRoute();
const userStore = useUserStore();
const router = useRouter();
const autoLoginUsers = [
    { name: 'Lizard', username: 'lizard', password: 'lizard'},
    { name: 'Wizard', username: 'wizard', password: 'wizard' },
    { name: 'Blizzard', username: 'blizzard', password: 'blizzard' },
    { name: 'Alice', username: 'alice0322', password: '20000322' },
    { name: 'Bob', username: 'bob0920', password: '19750920' },
    { name: 'Charlie', username: 'charlie0210', password: '19950210' },
    { name: 'Diana', username: 'diana1130', password: '19881130' },
    { name: 'Eva', username: 'eva0725', password: '19920725' },
    { name: 'Frank', username: 'frank0405', password: '19981212' },
    { name: 'Grace', username: 'grace1212', password: '19830318' },
    { name: 'Henry', username: 'henry0318', password: '19911225' },
    { name: 'Ivy', username: 'ivy0908', password: '19930908' },
    { name: 'Jack', username: 'jack0628', password: '19870628' },
    { name: 'Admin', username: 'admin', password: 'P@ssw0rd' },
    { name: 'Test', username: 'test', password: 'testtest' },
    { name: 'User', username: 'user', password: 'useruser' },
];

let username = ref('');
let password = ref('');
let redirect = route.query.redirect;
// console.log(redirect)
const showPassword = ref(false);

const handleEnterKey = () => {
    // Trigger the login function when Enter key is pressed
    login();
};

async function gotGoogleLoginPage() {
    window.location.href = `${import.meta.env.VITE_APP_API_URL}/google-login`;
}


const login = function () {


    Swal.fire({
        text: "Loading.......",
        allowOutsideClick: false,
        showConfirmButton: false
    });

    if (username === "") {
        username = null;
    }
    if (password === "") {
        password = null;
    }
    let request = {
        username: username.value,
        password: password.value,
    }
    axios.post(`${import.meta.env.VITE_APP_API_URL}/login.controller`, request)
        .then(function (response) {
            if (response.data.success) {
                // console.log(response.data.message);
                Swal.fire({
                    icon: "success",
                    text: "登入成功",
                    confirmButtonText: "OK",
                })
                document.cookie = `sessionToken=${response.data.sessionToken}; path=/`;
                localStorage.setItem('sessionToken', response.data.sessionToken)
                if (response.data.userID) {
                    localStorage.setItem('userID', response.data.userID);
                    userStore.login(response.data.userID); // reflect user permission on navbar
                }
                if (response.data.lordID) {
                    localStorage.setItem('lordID', response.data.lordID);
                    userStore.addPermission('lord') // reflect landlord permission on navbar
                }
                if (response.data.adminPermission) {
                    userStore.addPermission('admin') // reflect admin permission on navbar
                }

                if (redirect) {
                    router.push(redirect);
                } else {
                    router.push({ name: 'Home' });
                }

            } else {
                console.log(response.data.message);
                Swal.fire({
                    icon: "error",
                    text: "登入失敗：" + response.data.message,
                    confirmButtonText: "確認"
                });
            }
        })
        .catch(function (error) {
            console.error(error);
            Swal.fire({
                icon: "warning",
                text: "登入失敗：伺服器錯誤",
                confirmButtonText: "確認"
            });
        })
        .finally(function () {
        });
};


const autoLogin = (user) => {
    username.value = user.username;
    password.value = user.password;
};

</script>
    
<style scoped>
.row {}

.login-frame {
    margin: auto;
}

.login-form {
    border: 1px solid black;
    border-radius: 10px;
}

.login-icon {
    border: 3px solid #ffc107;
    border-radius: 50px;
    background-color: #ffc107;
    width: 60px;
    height: 60px;
    text-align: center;
    margin: auto;
    line-height: 55px;
}

.accountDiv {
    text-align: center;
}

.passwordDiv {
    text-align: center;
}

input {
    padding: 10px;
    border-radius: 30px;
}

.account {
    overflow: hidden;
    width: 100%;
}

.password {
    overflow: hidden;
    width: 100%;
}

.checkboxDiv {
    float: left;
}

.checkbox {
    accent-color: #ffc107;
}

.forget-password {
    margin-right: 0px;
    float: right;
}

.login-btn {
    margin: auto;
    text-align: center;
}

.login-btn .btn-secondary {
    border-radius: 50px;
    color: white;
}

.or {
    text-align: center;
    margin-top: -20px;
}

.google-btn {
    margin: auto;
    text-align: center;
}

.btn-outline-dark {
    border-radius: 50px;
}

.autoLogin-btn .btn {
    margin: 0 5px 10px;
    border: #ffc107 2px solid;
    background-color: rgba(255, 255, 255, 0.5);
}
</style>