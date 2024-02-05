<template>
    <div class="container-fluid row p-0 g-0 chat-main-container">
        <!-- left => headline, pics & messages -->
        <div class="col-md-4 overflow-auto mh-100 bg-light">
            <h1 class="text-center my-2">Message</h1>
            <div class="mb-4 d-flex justify-content-center">
                <div class="form-floating mb-3 w-75">
                    <input class="form-control" list="datalistOptions" placeholder="Type to search..." @change="switchUser">
                    <datalist id="datalistOptions">
                        <option :value="item.name" v-for="item in otherUser"></option>
                    </datalist>
                    <label for="floatingInput">請輸入用戶名稱</label>
                </div>
            </div>
            <div>
                <div class="ms-4 me-4 border  border-2 border-light rounded-3 list-group" v-for="item in roomList"
                    @click="selectRoom(item.senderid, item.recieverid, item.sendername, item.recievername)">
                    <a href="#" class="list-group-item list-group-item-action list-group-item-light"
                        :class="{ 'active': item.senderid == selectedUserID || item.recieverid == selectedUserID }">
                        <!--渲染時，判斷selectedid是否為該聊天室的sender或reciever-->
                        <img class="mt-1 ms-1 me-4 rounded-circle float-start" src="https://picsum.photos/50/50"
                            :src="item.photo">
                        <div class="mt-1 d-flex justify-content-between align-items-center">
                            <div>
                                <strong>{{ item.recievername }}</strong>
                            </div>
                            <div class="text-end">
                                <small class="">{{ item.date }} {{ item.time }}</small>
                            </div>
                        </div>
                        <p class="text-truncate">{{ item.contents }}</p>
                    </a>
                </div>
            </div>
        </div>
        <!-- Right => chat-name, chat-container, input-group -->
        <div class="col-md-8 mh-100">
            <div class="p-2 chat-name text-center">
                <strong class="ms-2 animate__animated animate__fadeIn">
                    <i class="me-1 fa-solid fa-house-chimney-user"></i>{{ selectedUserName }}</strong>
            </div>
            <div class="chat-container border overflow-auto d-flex flex-column p-3" ref="chatContainer">
                <div class="d-flex justify-content-center align-items-center flex-grow-1" v-if="beginChat">
                    <h1 class="text-dark"> 請點擊左側聊天室列表開始聊天 <i class="fa-solid fa-comment-sms"></i></h1>
                </div>
                <template v-for="item in messages">
                    <div v-if="senderID !== item.senderID" class="my-3 d-flex">
                        <div
                            class="shadow-sm p-3 px-3 py-2 m-1 rounded-3 chat-message chat-received text-break animate__animated animate__fadeIn">
                            {{ item.contents }} </div>
                        <div
                            class="ms-1 mb-2 d-flex flex-column align-self-end animate__animated animate__fadeIn message-time">
                            {{
                                item.time }}
                        </div>
                    </div>
                    <div v-if="senderID === item.senderID" class="my-3 align-self-end d-flex">
                        <div
                            class="me-1 mb-2 d-flex flex-column align-self-end animate__animated animate__fadeIn message-time">
                            {{ item.time }}</div>
                        <div
                            class="shadow-sm p-3 px-3 py-2 m-1 rounded-3 chat-message chat-sent text-break animate__animated animate__fadeIn">
                            {{ item.contents }}
                        </div>
                    </div>
                </template>
            </div>
            <div class="input-group">
                <input type="file" id="fileInput" style="display: none;">
                <button class="btn btn-secondary" onclick="document.getElementById('fileInput').click();">
                    <i class="bi bi-file-earmark-arrow-up-fill"></i></button>
                <input type="file" id="imageInput" accept="image/*" style="display: none;">
                <button class="btn btn-secondary" onclick="document.getElementById('imageInput').click();">
                    <i class="bi bi-image"></i></button>
                <input type="text" v-model="contents" ref="inputField" @keydown.enter="sendMessage" class="form-control"
                    :disabled="beginChat" placeholder="在這裡輸入訊息..." rows="2">
                <button class="btn btn-primary" @click="sendMessage">送出</button>
            </div>
        </div>
    </div>
</template>
    
<script setup>
let global = globalThis; // 因應stomp及sockjs-client所設
import { ref, onMounted, onUnmounted } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';
import { useUserStore } from '@store/userStore-localStorage.js';
import Swal from 'sweetalert2'

// 接收 router.push query的值
// import { useStore } from '@store/chatStore.js'
// const chatStore = useStore()
const route = useRoute()
const externalID = route.query.externalID
const externalName = route.query.externalName

// Stomp & Sockjs-client
import SockJS from 'sockjs-client/dist/sockjs.min.js';
import Stomp from 'stompjs';
let path = import.meta.env.VITE_APP_API_URL;
const socket = new SockJS(path + "/ws");
const stompClient = Stomp.over(socket);

const roomList = ref(null);         // 左側列表，初始、收發訊息時渲染。
const chatContainer = ref(null);    // 右側訊息，初始、收發訊息、點擊聊天列表時渲染。
const contents = ref('');           // 左側資料
const messages = ref([]);           // 右側資料
const senderID = ref('');           // 本使用者id，初始時賦值，之後永不變更。
const selectedUserID = ref(null);     // 對方使用者id，點擊聊天列表更新。
const selectedUserName = ref('');   // 對方使用者姓名，點擊聊天列表更新。
const inputField = ref(null);       // 訊息輸入欄位，enter可觸發。
const beginChat = ref(true);        // 初始畫面，提醒點擊。
const otherUser = ref([]);          // 其他使用者資料，搜尋用。

// 賦值→連線→渲染(左側)聊天列表→
onMounted(async () => {
    await initAssign();
    await initConnect();
    await initsearch();
    await findAllChat();
    if (selectedUserID && selectedUserID.value != senderID.value) {
        await findAllMessages();
    }
    // messageEnd();
});
onUnmounted(() => {
    chatStore.$reset();

})
// 初始賦值(確定使用者)
async function initAssign() {
    const sessionToken = localStorage.getItem('sessionToken');
    senderID.value = String(sessionToken).substring(32, sessionToken.length);

    // 外部進入
    if (externalID && externalID != senderID.value) {
        selectedUserID.value = externalID;
        selectedUserName.value = externalName;
        beginChat.value = false;        // 關掉初始提醒
    }
}
// stompjs連線
async function initConnect() {
    stompClient.connect({}, onConnected, onError);
}
// 訂閱
function onConnected() {
    stompClient.subscribe(`/user/${senderID.value}/queue/messages`, onMessageReceived);
    stompClient.subscribe(`/user/public`, onMessageReceived);
    // console.log('stompClient', stompClient);
    // console.log('socket', socket);

    // register the connected user
    // stompClient.send("/app/user.addUser",
    //     {},
    //     JSON.stringify({ senderID: senderID, fullName: fullname, status: 'ONLINE' })
    // );
    // document.querySelector('#connected-user-fullname').textContent = fullname;
    // findAndDisplayConnectedUsers().then();
}
// 連線中斷
function onError() {
    console.log("BOOOOOOMMMMMM! 連線壞掉囉");
}
// 搜尋列初始化(先不用)
async function initsearch() {
    await axios.get(`${path}/messages/${senderID.value}/findAllUser`)
        .then(function (response) {
            otherUser.value = response.data;
        })
        .catch(function (error) {

        });
}
// 切換使用者(先不用)
async function switchUser(event) {
    // console.log(event);
    // const selectedUserName = event.target.value;
    // const selectedUser = otherUser.value.find(item => item.name === selectedUserName);

    // if (selectedUser) {
    // 在這裡使用 selectedUser 資料，例如將其傳遞到其他方法或執行相應的邏輯
    // console.log('Selected User:', selectedUser);
    // }
}
// 滾動到最底、清空對話欄位、焦點設置回欄位
function messageEnd() {
    if (chatContainer.value) {
        chatContainer.value.scroll(0, chatContainer.value.scrollHeight);
    }
    contents.value = ''
    inputField.value.focus();
}
// 傳
async function sendMessage(event) {
    const trimmedContents = contents.value.trim();
    if (trimmedContents !== '' && stompClient) {
        const chatMessage = {
            senderID: senderID.value,
            recieverID: selectedUserID.value,
            contents: trimmedContents,
            createdTime: new Date()
        };
        stompClient.send("/app/chat", {}, JSON.stringify(chatMessage));
        setTimeout(async () => {
            await findAllMessages();
            messageEnd();
            findAllChat();
        }, 100);
        // displayMessage(trimmedContents);
    }
    // await findAllMessages();
    // messageEnd();
}
// 收
async function onMessageReceived(payload) {
    console.log('Message received', payload);
    const message = JSON.parse(payload.body);
    // displayMessage(message);
    setTimeout(async () => {
        if (selectedUserID.value == message.senderID) {     // 收到訊息時，若當下是與「發信者」聊天，才執行右側渲染
            await findAllMessages();                        // 不然方法的url會錯
            messageEnd();
        }
        findAllChat();
    }, 100);
    // messageEnd();
}
// 收發訊息渲染 (先不用)
function displayMessage(message) {
    const messageDiv = document.createElement('div');
    if (selectedUserID.value && selectedUserID.value === message.senderID) {
        messageDiv.classList.add('px-3', 'py-2', 'm-1', 'rounded-3', 'align-self-start', 'chat-message', 'chat-received');
        messageDiv.innerHTML = `<p>${message.contents}</p>`;
        chatContainer.value.appendChild(messageDiv);
    } else {
        messageDiv.classList.add('px-3', 'py-2', 'm-1', 'rounded-3', 'align-self-end', 'chat-message', 'chat-sent');
        messageDiv.innerHTML = `<p>${message}</p>`;
        chatContainer.value.appendChild(messageDiv);
    }
    // console.log(chatContainer.value)
}
// 訊息渲染
async function findAllMessages() {
    await axios.get(`${path}/messages/${senderID.value}/${selectedUserID.value}`)
        .then(function (response) {
            response.data.forEach(function (item) {
                item.createdTime = new Date(item.createdTime)
                const hour = ('0' + item.createdTime.getHours()).slice(-2);
                const minutes = ('0' + item.createdTime.getMinutes()).slice(-2);
                item.time = `${hour}:${minutes}`;
                messages.value = response.data;
            });
        })
        .catch(function (error) {

        });
}
// 聊天列表渲染
async function findAllChat() {
    await axios.get(`${path}/messages/${senderID.value}/preview`)
        .then(function (response) {
            response.data.forEach(function (item) {
                /* 
                最後一筆訊息可能是自己送出，也可能是對方送出。
                由於聊天室永遠顯示對方名字，因此畫面渲染前，須將收信者名字固定為對方。
                */
                if (item.recieverid == senderID.value) {
                    item.recievername = item.sendername;
                }

                // 日期整理 (補'0'+取末2位)
                item.createdTime = new Date(item.createdTime);
                const year = item.createdTime.getFullYear();
                const month = ('0' + (item.createdTime.getMonth() + 1)).slice(-2);
                const date = ('0' + item.createdTime.getDate()).slice(-2);
                item.date = `${year}/${month}/${date}`;
                // 時間整理 (同上)
                const hour = ('0' + item.createdTime.getHours()).slice(-2);
                const minutes = ('0' + item.createdTime.getMinutes()).slice(-2);
                item.time = `${hour}:${minutes}`;
            });
            roomList.value = response.data;
        })
        .catch(function (error) {

        });
}
// 選聊天室
async function selectRoom(senderid, recieverid, sendername, recievername) {
    beginChat.value = false;        // 關掉初始提醒
    await assignSelectedUser(senderid, recieverid, sendername, recievername);
    await findAllMessages();
    messageEnd();
}
// 更改selectedID
async function assignSelectedUser(senderid, recieverid, sendername, recievername) {
    if (senderID.value == senderid) {
        selectedUserID.value = recieverid;
        selectedUserName.value = recievername;
    } else {
        selectedUserID.value = senderid;
        selectedUserName.value = sendername;
    }
}
</script>

<style scoped>
.chat-main-container {
    height: calc(100vh - 75px);
    ;
}

.chat-name {
    height: 34px;
    background-color: aliceblue;
}

.chat-container {
    height: calc(100% - 81px);
    background-color: antiquewhite;
}

.input-group {
    height: 47px;
}

.form-control {
    resize: none;
}
</style>
<style>
.chat-message {
    max-width: 500px;
}

.chat-received {
    background-color: #f0f0f0;
}

.chat-sent {
    background-color: #dcf8c6;
}

.message-time {
    font-size: 0.7em;
}
</style>