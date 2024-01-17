<template>
    <div class="container-fluid row p-0 g-0 max-height main-container">
        <!-- left => headline, pics & messages -->
        <div class="col-md-4 overflow-auto mh-100">
            <div>
                <h3 class="text-center my-4">Message</h3>
            </div>
            <div>
                <div class="ms-5 mb-5 me-4" v-for="item in 15">
                    <img class="rounded-circle float-start me-4" src="https://picsum.photos/50/50">
                    <strong>AAA</strong>
                    <small>Wed</small>
                    <p class="text-truncate">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati aliquid
                        harum
                    </p>
                </div>
            </div>

        </div>
        <!-- Right => chat-name, chat-container, input-group -->
        <div class="col-md-8 mh-100">
            <div class="bg-light chat-name">
                <strong>AAA</strong>
            </div>

            <div class="chat-container border overflow-auto d-flex flex-column p-3" ref="chatContainer">
                <template v-for="item in messages">
                    <div v-if="senderID !== item.senderID"
                        class="px-3 py-2 m-1 rounded-3 flex-start align-self-start message received">
                        <p>{{ item.contents }}
                        </p>
                    </div>
                    <div v-if="senderID === item.senderID" class="px-3 py-2 m-1 rounded-3 align-self-end message sent">
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
                <input type="text" v-model="contents" class="form-control" placeholder="在這裡輸入訊息..." rows="2">
                <button class="btn btn-primary" @click="sendMessage()">送出</button>
            </div>
        </div>
    </div>
</template>
    
<script setup>
let global = globalThis;
import { ref, onMounted } from 'vue';
import SockJS from 'sockjs-client/dist/sockjs.min.js';
import Stomp from 'stompjs';
import axios from 'axios';
const path = 'http://localhost:8080'
const socket = new SockJS(path + '/ws');
const stompClient = Stomp.over(socket);
const chatContainer = ref(null);
const messages = ref([]);
const contents = ref('');
const senderID = '1@gmail.com';
const recieverID = '2@gmail.com';

// import { reactive } from 'vue';
// const data = {
//     senderID: "",
//     recieverID: "",
//     messages: "",
// }

onMounted(async () => {
    initConnect();
    await findAllMessages();
    scrollToButtom();
});
function initConnect() {
    stompClient.connect({}, onConnected, onError);
}
function onConnected() {
    stompClient.subscribe(`/user/${senderID}/queue/messages`, onMessageReceived);
    stompClient.subscribe(`/user/public`, onMessageReceived);

    // register the connected user
    // stompClient.send("/app/user.addUser",
    //     {},
    //     JSON.stringify({ senderID: senderID, fullName: fullname, status: 'ONLINE' })
    // );
    // document.querySelector('#connected-user-fullname').textContent = fullname;
    // findAndDisplayConnectedUsers().then();
}
function sendMessage(event) {
    const trimmedContents = contents.value.trim();
    if (trimmedContents !== '' && stompClient) {
        const chatMessage = {
            senderID: senderID,
            recieverID: recieverID,
            contents: trimmedContents,
            createdTime: new Date()
        };
        stompClient.send("/app/chat", {}, JSON.stringify(chatMessage));
        // displayMessage(senderID, trimmedContents);

        // const messageDiv = document.createElement('div');
        // messageDiv.classList.add('px-3', 'py-2', 'm-1', 'rounded-3', 'align-self-end', 'message', 'sent');
        // messageDiv.innerHTML = `<p>${trimmedContents}</p>`;
        // chatContainer.value.appendChild(messageDiv);
        // contents.value = '';

        scrollToButtom();
    }
}


async function onMessageReceived(payload) {
    // await findAndDisplayConnectedUsers();
    // console.log('Message received', payload);
    // const message = JSON.parse(payload.body);
    // if (selectedUserId && selectedUserId === message.senderId) {
    //     displayMessage(message.senderId, message.content);
    //     chatArea.scrollTop = chatArea.scrollHeight;
    // }

    // if (selectedUserId) {
    //     document.querySelector(`#${selectedUserId}`).classList.add('active');
    // } else {
    //     messageForm.classList.add('hidden');
    // }

    // const notifiedUser = document.querySelector(`#${message.senderId}`);
    // if (notifiedUser && !notifiedUser.classList.contains('active')) {
    //     const nbrMsg = notifiedUser.querySelector('.nbr-msg');
    //     nbrMsg.classList.remove('hidden');
    //     nbrMsg.textContent = '';
    // }
}

async function findAllMessages() {
    await axios.get(`${path}/messages/${senderID}/${recieverID}`)
        .then(function (response) {
            // console.log(response.data)
            messages.value = response.data;
        })
        .catch(function (error) {

        });
}
function onError() {

}

function scrollToButtom() {
    if (chatContainer.value) {
        // console.log(chatContainer.value)
        chatContainer.value.scroll(0, chatContainer.value.scrollHeight);
    }
}
</script>

<style scoped>
.main-container {
    height: 840px;
}

.chat-name {
    height: 5%;
}

.chat-container {
    /* border: 1px solid #ccc; */
    height: 88%;
}

.message {
    max-width: 50%;
}

.received {
    background-color: #f0f0f0;
}

.sent {
    background-color: #dcf8c6;
}

.input-group {
    height: 1%;
}

.form-control {
    resize: none;
}
</style>