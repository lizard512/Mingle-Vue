<template>
    <div class="container py-5">
        <div class="row" v-if="userDetail">
            <div class="col-lg-4">
                <div class="card mb-4">
                    <div class="card-body text-center position-relative">
                        <button type="button" class="btn btn-danger position-absolute" style="left: 3%; top: 75px;"
                            @click="showAlert"><i class="fa-solid fa-thumbs-down me-1"></i>超爛房東</button>
                        <img v-if="userDetail.photoBase64" :src="userDetail.photoBase64" alt="user"
                            class="rounded-circle img-fluid avatar">
                        <img v-else src="@images/empty-avatar.png" alt="user" class="rounded-circle img-fluid avatar">
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
                            <span class="text-muted me-3 fa fa-solid fa-address-card" v-if="userDetail.email"> 身分已驗證</span>
                            <span class="text-muted me-3 fa fa-solid fa-medal" v-if="true"> 超讚房東</span>
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
                    <div class="card-title">
                        <h4 class="text-center pt-4">會員資料</h4>
                    </div>
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
                                <p class="text-muted mb-0">{{ userDetail.birth?.toString().substring(0, 10) }}</p>
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
                <div class="card mb-4">
                    <div class="card-title">
                        <h4 class="text-center pt-4">房東評價一覽</h4>
                    </div>
                    <div class="card-body">
                        <ReviewCustom v-if="routeLordID" :lordID="routeLordID"></ReviewCustom>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="container py-5" v-else>
            <div class="row">
                <div class="col-lg-12">
                    <div class="card mb-4">
                        <div class="card-body text-center">
                            <h5>這位使用者很懶，好像還沒有設定會員資料</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->
    </div>
</template>

<script setup>
//// 引用套件
import { ref, onMounted } from 'vue';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useRouter } from 'vue-router';
import { useRoute } from 'vue-router'


//// 引用元件
import ReviewCustom from '@views/common/ReviewCustom.vue';

//// 引用 store
// import { useStore } from '@store/chatStore.js'

//// 生命週期
onMounted(async () => {
    await loadUserData();
    await getLordID();
    console.log(routeLordID.value);
    if (routeLordID.value) {
        await loadLandlordData();
    }
});


//// 宣告變數
const userID = localStorage.getItem('userID');
const route = useRoute()
const router = useRouter();
const routeUserID = route.params.id
const routeLordID = ref(null);
const userDetail = ref(null);
const landlordBean = ref(null);
// const chatStore = useStore()


const loadUserData = async () => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_APP_API_URL}/api/volunteerDetail/Base64/${routeUserID}`)
        userDetail.value = response.data;

        // 若使用者尚未設定會員資料，跳出提示視窗
        if (userID === routeUserID) {
            if (!userDetail.value || !userDetail.value.name) {
                const result = await Swal.fire({
                    title: '提示',
                    text: '你好像還沒有設定過會員資料，快去輸入吧',
                    confirmButtonText: '前往更新會員資料',
                    confirmButtonColor: 'var(--info)',
                    allowOutsideClick: false,
                    showCloseButton: true
                });
                if (result.isConfirmed) {
                    router.push('/account');
                }
            }

            // 暫緩，因為 lastLogin, status都可能為NULL
            //
            // // 檢查 userDetail 的每個屬性是否為 null
            // for (let key in userDetail.value) {
            //     if (userDetail.value[key] === null) {
            //         // 如果任何一個屬性為 null，則顯示 Swal
            //         const result = await Swal.fire({
            //             title: '提示',
            //             text: '你好像還有一些會員資料尚未設定，快去輸入吧',
            //             confirmButtonText: '前往更新會員資料',
            //             confirmButtonColor: 'var(--info)',
            //             showCloseButton: true
            //         });

            //         if (result.isConfirmed) {
            //             router.push('/account');
            //         }

            //         // 找到任一 null 屬性，即跳出迴圈
            //         break;
            //     }
            // }
        }
    } catch (error) {
        console.error('Failed to fetch user data:', error);
    }
}

const getLordID = async () => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_APP_API_URL}/landlord/userIDtoLordID/${routeUserID}`)
        routeLordID.value = response.data;
    } catch (error) {
        console.error('Failed to fetch landlord id:', error);
    }
}

const loadLandlordData = async () => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_APP_API_URL}/landlord/getLandlordById/${routeLordID.value}`)
        landlordBean.value = response.data;
    } catch (error) {
        console.error('Failed to fetch landlord data:', error);
    }
}


const navigateToChatroom = () => {
    // chatStore.setExternalID(routeUserID)
    // chatStore.setExternalName(user.value.name)
    router.push({ name: "Chatroom", query: { externalID: routeUserID, externalName: userDetail.value.name } });
};

const showAlert = () => {
    alert('我就爛👍');
};


</script>

<style scoped>
.avatar {
    height: 150px;
    width: 150px;
    object-fit: cover;
}
</style>