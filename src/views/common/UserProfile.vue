<template>
    <div class="container py-5" v-if="userDetail">
        <div class="row">
            <div class="col-lg-4">
                <div class="card mb-4">
                    <div class="card-body text-center position-relative">
                        <button type="button" class="btn btn-danger position-absolute" style="left: 3%; top: 75px;"
                            @click="showAlert"><i class="fa-solid fa-thumbs-down me-1"></i>超爛房東</button>
                        <img :src="userDetail.photoBase64" alt="user" class="rounded-circle img-fluid user-photo" style="width: 150px;">
                        <button type="button" class="btn btn-primary position-absolute" style="right: 3%; top: 75px;"
                            @click="navigateToChatroom"><i class="fa-solid fa-comment-dots me-1"></i>聯絡用戶</button>
                        <h5 class="my-2">{{ userDetail.name }}</h5>
                        <span class="text-muted my-2">加入時間：{{ userDetail.createdAt.toString().substring(0, 10) }}</span>
                        <p class="text-muted my-2">{{ userDetail.introduction }}</p>
                        <div class="row mb-3 mt-3">
                            <div class="col">
                                <h6 class="text-muted">最後上線時間</h6>
                                <div class="text-black text-decoration-underline">{{ userDetail.lastLogin }} 小時前</div>
                            </div>
                            <div class="col mx-auto">
                                <div class="d-flex justify-content-between">
                                    <h6 class="text-muted">回覆率</h6>
                                    <h6 class="">100%</h6>
                                </div>
                                <div class="progress">
                                    <div class="progress-bar progress-bar-striped progress-bar-animated bg-primary"
                                        role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0"
                                        aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>

                        <hr>
                        <div class="my-2">
                            <span class="text-muted me-3 fa fa-star" v-if="true"> 打工換宿達人</span>
                            <span class="text-muted  me-3 fa fa-solid fa-address-card" v-if="userDetail.email"> 身分已驗證</span>
                            <span class="text-primary me-3 fa fa-solid fa-medal" v-if="true"> 超讚房東</span>
                        </div>
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
                                <p class="text-muted mb-0">{{ userDetail.gender }}</p>
                            </div>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-sm-3">
                                <p class="mb-0">Birth</p>
                            </div>
                            <div class="col-sm-9">
                                <p class="text-muted mb-0">{{ userDetail.birth.toString().substring(0, 10) }}</p>
                            </div>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-sm-3">
                                <p class="mb-0">Country</p>
                            </div>
                            <div class="col-sm-9">
                                <p class="text-muted mb-0">{{ userDetail.country }}</p>
                            </div>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-sm-3">
                                <p class="mb-0">Background</p>
                            </div>
                            <div class="col-sm-9">
                                <p class="text-muted mb-0">{{ userDetail.background }}</p>
                            </div>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-sm-3">
                                <p class="mb-0">Language</p>
                            </div>
                            <div class="col-sm-9">
                                <p class="text-muted mb-0">{{ userDetail.language }}</p>
                            </div>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-sm-3">
                                <p class="mb-0">Hobby</p>
                            </div>
                            <div class="col-sm-9">
                                <p class="text-muted mb-0">{{ userDetail.hobby }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
// 引用函式庫
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import { useRoute } from 'vue-router'
// 引用 store
// import { useStore } from '@store/chatStore.js'

const route = useRoute()
const userID = route.params.id
const lordID = localStorage.getItem('lordID');
const router = useRouter();
const userDetail = ref(null);
const landlordBean = ref(null);
// const chatStore = useStore()


onMounted(async () => {
    await loadUserData();
    if (lordID) {
        await axios.get(`${import.meta.env.VITE_APP_API_URL}/landlord/getLandlordById/${lordID}`)
        .then(response => {
            landlordBean.value = response.data;
        })
        .catch(error => {
            console.log(error);
        });
    }
});


const loadUserData = async () => {
    try {
    const response = await axios.get(`${import.meta.env.VITE_APP_API_URL}/api/volunteerDetail/Base64/${userID}`)
        userDetail.value = response.data;
    } catch (error) {
        console.error('Failed to fetch user data:', error);
    }
}

const navigateToChatroom = () => {
    // chatStore.setExternalID(userID)
    // chatStore.setExternalName(user.value.name)
    router.push({name: "Chatroom", query: {externalID: userID, externalName: userDetail.value.name}});
};

const showAlert = () => {
    alert('我就爛👍');
};


</script>

<style scoped>
.user-photo {
    height: 150px;
    width: 150px;
    object-fit: cover;
}
</style>