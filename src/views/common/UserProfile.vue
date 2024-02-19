<template>
    <div class="container py-5 animate__animated animate__fadeIn">
        <div class="row" v-if="userDetail">
            <div class="col-lg-4">
                <div class="card mb-4">
                    <div class="card-body text-center position-relative">
                        <!-- <button type="button" class="btn btn-danger position-absolute" style="left: 3%; top: 75px;"
                            @click="showAlert"><i class="fa-solid fa-thumbs-down me-1"></i>超爛房東</button> -->
                        <img v-if="userDetail.photoBase64" :src="userDetail.photoBase64" alt="user"
                            class="rounded-circle img-fluid avatar">
                        <img v-else src="@images/empty-avatar.png" alt="user" class="rounded-circle img-fluid avatar">
                        <button v-if="userID !== routeUserID" type="button" class="btn btn-primary position-absolute" style="right: 3%; top: 75px;"
                            @click="navigateToChatroom"><i class="fa-solid fa-comment-dots me-1"></i>聯絡用戶</button>
                        <h5 class="my-2">{{ userDetail.name }}</h5>
                        <span class="text-muted my-2">加入時間：{{ userDetail.createdAt.toString().substring(0, 10) }}</span>
                        <p class="text-muted my-2">{{ userDetail.introduction }}</p>
                        <div class="row mb-3 mt-3">
                            <div class="col">
                                <h6 class="text-muted">最後上線時間</h6>
                                <div class="text-black text-decoration-underline">{{ userDetail.lastLogin }} 0 小時前</div>
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
                            <span class="text-muted me-3 fa fa-star" v-if="false">打工換宿達人</span>
                            <span class="text-muted me-3 fa fa-solid fa-address-card" v-if="userDetail.email">身分已驗證</span>
                            <span class="text-muted me-3 fa fa-solid fa-medal" v-if="routeLordID"> 超讚房東</span>
                        </div>
                        <div class="d-flex justify-content-center text-center py-1">
                            <div class="px-3">
                                <p class="mb-1 h5">{{ totals }} 件</p>
                                <p class="small text-muted mb-0">上架中的工作</p>
                            </div>
                            <!-- <div>
                                <p class="mb-1 h5">位</p>
                                <p class="small text-muted mb-0">每年接洽的幫助者</p>
                            </div> -->
                        </div>
                    </div>
                </div>
                <!-- 房東資料 -->
                <div class="card mb-4" v-if="routeLordID && landlordBean">
                    <div class="card-title">
                        <h5 class="text-center pt-4">房東個人資料</h5>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-sm-3">
                                <p class="mb-0">所在縣市</p>
                            </div>
                            <div class="col-sm-9">
                                <p class="text-muted mb-0">{{ landlordBean.city }}</p>
                            </div>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-sm-3">
                                <p class="mb-0">所在地址</p>
                            </div>
                            <div class="col-sm-9">
                                <p class="text-muted mb-0">{{ landlordBean.address }}</p>
                            </div>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-sm-3">
                                <p class="mb-0">地點特色</p>
                            </div>
                            <div class="col-sm-9">
                                <p class="text-muted mb-0">{{ landlordBean.feature }}</p>
                            </div>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-sm-3">
                                <p class="mb-0">寵物限制</p>
                            </div>
                            <div class="col-sm-9">
                                <p class="text-muted mb-0">{{ landlordBean.pet }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 房東工作 -->
                <div class="card mb-4" v-if="routeLordID">
                    <div class="card-title">
                        <h5 class="text-center pt-4">查看這位房東的所有工作</h5>
                    </div>
                    <div class="card-body work-deck">
                        <WorkDeck :autoplayDelay="4600" :landlordid="routeLordID"  @update-totals="handleUpdateTotals"/>
                    </div>
                    <button class="btn btn-primary" type="button" @click="popUpAllWork">
                        <i class="fa-solid fa-arrow-up-right-from-square"></i>前往瀏覽更多工作</button>
                </div>
            </div>
            <div class="col-lg-8">
                <div class="card mb-4">
                    <!-- 會員資料 -->
                    <div class="card-title">
                        <h5 class="text-center pt-4">會員個人資料</h5>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-sm-3">
                                <p class="mb-0">性別</p>
                            </div>
                            <div class="col-sm-9">
                                <p class="text-muted mb-0">{{ userDetail.gender }}</p>
                            </div>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-sm-3">
                                <p class="mb-0">生日</p>
                            </div>
                            <div class="col-sm-9">
                                <p class="text-muted mb-0">{{ userDetail.birth?.toString().substring(0, 10) }}</p>
                            </div>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-sm-3">
                                <p class="mb-0">國籍</p>
                            </div>
                            <div class="col-sm-9">
                                <p class="text-muted mb-0">{{ userDetail.country }}</p>
                            </div>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-sm-3">
                                <p class="mb-0">個人背景</p>
                            </div>
                            <div class="col-sm-9">
                                <p class="text-muted mb-0">{{ userDetail.background }}</p>
                            </div>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-sm-3">
                                <p class="mb-0">語言</p>
                            </div>
                            <div class="col-sm-9">
                                <p class="text-muted mb-0">{{ userDetail.language }}</p>
                            </div>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-sm-3">
                                <p class="mb-0">興趣</p>
                            </div>
                            <div class="col-sm-9">
                                <p class="text-muted mb-0">{{ userDetail.hobby }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 房東評價一覽 -->
                <div class="card mb-4" v-if="routeLordID">
                    <div class="card-title">
                        <h5 class="text-center pt-4">房東評價一覽</h5>
                    </div>
                    <div class="card-body">
                        <ReviewCustom :lordID="routeLordID"></ReviewCustom>
                        <!-- <div v-else>
                            <h6 class="text-center">此用戶尚未成為房東</h6>
                        </div> -->
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
import { ref, onMounted} from 'vue';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useRouter } from 'vue-router';
import { useRoute } from 'vue-router'


//// 引用元件
import ReviewCustom from '@views/common/ReviewCustom.vue';
import WorkDeck from '@components/WorkDeck.vue';

//// 引用 store
// import { useStore } from '@store/chatStore.js'

//// 生命週期
onMounted(async () => {
    await loadUserData();
    await getLordID();
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
let totals = ref(0);
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
        }else{
            if (!userDetail.value || !userDetail.value.name) {
                const result = await Swal.fire({
                    title: '系統通知',
                    text: '這位使用者很懶，好像還沒有設定會員資料',
                    confirmButtonText: '返回上一頁',
                    confirmButtonColor: 'var(--info)',
                    allowOutsideClick: false,
                });
                if (result.isConfirmed) {
                    router.go(-1);
                }
            }
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

const reportLandlord = () => {
    Swal.fire({
        title: '超爛房東',
        text: '你確定要檢舉這位房東嗎？',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: 'var(--danger)',
        cancelButtonColor: 'var(--info)',
        confirmButtonText: '確定',
        cancelButtonText: '取消'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                '檢舉成功',
                '我們已經收到你的檢舉，會盡快處理',
                'success'
            )
        }
    })
}


const popUpAllWork = () => {
    router.push(`/work-search`);
}

const handleUpdateTotals = (newTotal) => {
    totals.value = newTotal;
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

.work-deck {
    height: 100%;
    text-align: center;
    padding: 12px 80px;
}
</style>