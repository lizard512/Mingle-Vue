<template>
    <div class="container py-5" v-if="user">
        <div class="row">
            <div class="col-lg-4">
                <div class="card mb-4">
                    <div class="card-body text-center position-relative">
                        <button type="button" class="btn btn-danger position-absolute" style="left: 5%; top: 75px;"
                            @click="showAlert">超爛房東</button>
                        <img src="@images/user-2.jpg" alt="user" class="rounded-circle img-fluid" style="width: 150px;">
                        <button type="button" class="btn btn-primary position-absolute" style="right: 5%; top: 75px;"
                            @click="router.push('/chatroom');">聯絡用戶</button>
                        <h5 class="my-2">{{ user.name }}</h5>
                        <span class="text-muted my-2">加入時間：{{ user.createdAt.toString().substring(0, 10) }}</span>
                        <div class="my-2">
                            <span class="text-muted me-3 fa fa-star"> NAN 則評價</span>
                            <span class="text-muted  me-3 fa fa-solid fa-address-card"> 身分已驗證</span>
                            <span class="text-primary me-3 fa fa-solid fa-medal" v-if="true"> 超讚房東</span>
                        </div>
                        <div class="row mb-3 mt-3">
                            <div class="col">
                                <h6 class="text-muted">最後上線時間</h6>
                                <div class="text-black">8小時前 {{ user.lastLogin }}</div>
                            </div>
                            <div class="col mx-auto">
                                <div class="d-flex justify-content-between">
                                    <h6 class="text-muted">回覆率</h6>
                                    <h6 class="">95%</h6>
                                </div>
                                <div class="progress">
                                    <div class="progress-bar progress-bar-striped progress-bar-animated bg-primary"
                                        role="progressbar" style="width: 95%" aria-valuenow="95" aria-valuemin="0"
                                        aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                        <p class="text-muted my-2">{{ user.introduction }}</p>
                        <hr>
                        <div class="d-flex justify-content-between text-center py-1">
                            <div>
                                <p class="mb-1 h5" data-toggle="counter-up">25 則</p>
                                <p class="small text-muted mb-0">評價</p>
                            </div>
                            <div class="px-3">
                                <p class="mb-1 h5">5 件</p>
                                <p class="small text-muted mb-0">上架中的工作</p>
                            </div>
                            <div>
                                <p class="mb-1 h5">10 位</p>
                                <p class="small text-muted mb-0">每年接洽的幫助者</p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <div class="col-lg-8">
                <div class="card mb-4">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-sm-3">
                                <p class="mb-0">Gender</p>
                            </div>
                            <div class="col-sm-9">
                                <p class="text-muted mb-0">{{ user.gender }}</p>
                            </div>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-sm-3">
                                <p class="mb-0">Birth</p>
                            </div>
                            <div class="col-sm-9">
                                <p class="text-muted mb-0">{{ user.birth.toString().substring(0, 10) }}</p>
                            </div>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-sm-3">
                                <p class="mb-0">Country</p>
                            </div>
                            <div class="col-sm-9">
                                <p class="text-muted mb-0">{{ user.country }}</p>
                            </div>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-sm-3">
                                <p class="mb-0">Background</p>
                            </div>
                            <div class="col-sm-9">
                                <p class="text-muted mb-0">{{ user.background }}</p>
                            </div>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-sm-3">
                                <p class="mb-0">Language</p>
                            </div>
                            <div class="col-sm-9">
                                <p class="text-muted mb-0">{{ user.language }}</p>
                            </div>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-sm-3">
                                <p class="mb-0">Hobby</p>
                            </div>
                            <div class="col-sm-9">
                                <p class="text-muted mb-0">{{ user.hobby }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import VueCookies from 'vue-cookies';

const userid = ref('');

const router = useRouter();

let user = ref(null);

onMounted(async () => {
    getuserid();
    await loadUserData();
});

const getuserid = () => {
        const sessionToken = VueCookies.get('sessionToken');
        userid.value = String(sessionToken).substring(32, sessionToken.length);
}

const loadUserData = async () => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_APP_API_URL}/api/volunteerDetail/${userid.value}`);
        user.value = response.data;
    } catch (error) {
        console.error('Failed to fetch user data:', error);
    }
}

const showAlert = () => {
    alert('我就爛👍');
};


</script>