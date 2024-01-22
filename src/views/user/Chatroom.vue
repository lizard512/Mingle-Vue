<template>
    <div class="container-fluid row p-0 g-0 max-height chat-main-container">
        <!-- left => headline, pics & messages -->
        <div class="col-md-4 overflow-auto mh-100">
            <div>
                <h3 class="text-center my-4">Message</h3>
            </div>
            <div>
                <div class="ms-5 me-4 list-group" v-for="item in roomList"
                    @click="selectRoom(item.senderid, item.recieverid)">
                    <button type="button" class="list-group-item list-group-item-action">
                        <img class="rounded-circle float-start me-4" src="https://picsum.photos/50/50">
                        <strong>{{ item.recievername }}</strong>
                        <small>{{ item.date }}</small>
                        <p class="text-truncate">{{ item.contents }}</p>
                    </button>
                </div>
            </div>

        </div>
        <!-- Right => chat-name, chat-container, input-group -->
        <div class="col-md-8 mh-100">
            <div class="bg-light chat-name">
                <strong>{{ selectedUserID }}</strong>
            </div>

            <div class="chat-container border overflow-auto d-flex flex-column p-3" ref="chatContainer">
                <template v-for="item in messages">
                    <div v-if="senderID !== item.senderID"
                        class="px-3 py-2 m-1 rounded-3 flex-start align-self-start chat-message chat-received">
                        <p>{{ item.contents }}
                        </p>
                    </div>
                    <div v-if="senderID === item.senderID"
                        class="px-3 py-2 m-1 rounded-3 align-self-end chat-message chat-sent">
                        <p>{{ item.contents }}</p>
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
                    placeholder="在這裡輸入訊息..." rows="2">
                <button class="btn btn-primary" @click="sendMessage">送出</button>
            </div>
        </div>
    </div>
</template>
    
<script setup>
let global = globalThis;
import { ref, onMounted } from 'vue';

// Stomp & Sockjs-client
import SockJS from 'sockjs-client/dist/sockjs.min.js';
import Stomp from 'stompjs';
const socket = new SockJS(path + '/ws');
const stompClient = Stomp.over(socket);
const path = 'http://localhost:8080'

import axios from 'axios';
import VueCookies from 'vue-cookies';
import Swal from 'sweetalert2'
const roomList = ref(null);
const chatContainer = ref(null);
const inputField = ref(null);
const messages = ref([]);
const contents = ref('');
const senderID = ref('');
const selectedUserID = ref('');


onMounted(async () => {
    await initAssign();
    initConnect();
    await findAllChat();
    // await findAllMessages();
    messageEnd();
    inputField.value.focus();
});
// 初始賦值，之後改寫
async function initAssign() {
    senderID.value = getuserid();
}
const getuserid =
    () => {
        const sessionToken = VueCookies.get('sessionToken');
        const userid = String(sessionToken).substring(32, sessionToken.length);
        return userid
    }

function initConnect() {
    stompClient.connect({}, onConnected, onError);
}
function onConnected() {
    stompClient.subscribe(`/user/${senderID.value}/queue/messages`, onMessageReceived);
    stompClient.subscribe(`/user/public`, onMessageReceived);
    console.log('stompClient', stompClient);
    console.log('socket', socket);

    // register the connected user
    // stompClient.send("/app/user.addUser",
    //     {},
    //     JSON.stringify({ senderID: senderID, fullName: fullname, status: 'ONLINE' })
    // );
    // document.querySelector('#connected-user-fullname').textContent = fullname;
    // findAndDisplayConnectedUsers().then();
}
function onError() {
    Swal.fire({
        icon: 'error',
        text: 'BOOOOOOMMMMMM! 連線壞掉囉',
        confirmButtonText: 'Alright....'
    }).then(function (response) {

    })
}
// 滾動到最底、清空對話欄位、焦點設置回欄位
function messageEnd() {
    if (chatContainer.value) {
        chatContainer.value.scroll(0, chatContainer.value.scrollHeight);
    }
    contents.value = ''
    inputField.value.focus();
}
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
async function onMessageReceived(payload) {
    // await findAndDisplayConnectedUsers();
    console.log('Message received', payload);
    const message = JSON.parse(payload.body);
    // displayMessage(message);
    setTimeout(async () => {
        await findAllMessages();
        messageEnd();
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
            messages.value = response.data;
        })
        .catch(function (error) {

        });
}
// 聊天室渲染
async function findAllChat() {
    await axios.get(`${path}/messages/${senderID.value}/preview`)
        .then(function (response) {
            response.data.forEach(function (item) {

                if (item.recieverid == senderID.value) {
                    item.recievername = item.sendername;
                }

                item.createdTime = new Date(item.createdTime);
                const year = item.createdTime.getFullYear();
                const month = item.createdTime.getMonth() + 1;
                const date = item.createdTime.getDate();
                item.date = `${year}/${month}/${date}`;

                const hour = item.createdTime.getHours();
                const minutes = item.createdTime.getMinutes();
                item.time = `${hour}:${minutes}`;
            });
            roomList.value = response.data;
        })
        .catch(function (error) {

        });
}

// 選聊天室
async function selectRoom(userid, recieverid) {
    await assignSelectedUser(userid, recieverid);
    await findAllMessages();
    messageEnd();
}

// 更改selectedID
async function assignSelectedUser(userid, recieverid) {
    if (senderID.value == userid) {
        selectedUserID.value = recieverid;
    } else {
        selectedUserID.value = userid;
    }
}

</script>

<style scoped>
.chat-main-container {
    height: 840px;
}

.chat-name {
    height: 5%;
}

.chat-container {
    /* border: 1px solid #ccc; */
    height: 88%;
}



.input-group {
    height: 7%;
}

.form-control {
    resize: none;
}
</style>
<style>
.chat-message {
    max-width: 50%;
}

.chat-received {
    background-color: #f0f0f0;
}

.chat-sent {
    background-color: #dcf8c6;
}
</style>