<template>
    <div class="container-fluid row p-0 g-0 max-height main-container">
        <!-- left => headline, pics message -->
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
        <!-- Right => chat-name, chat-box, input-group -->
        <div class="col-md-8 mh-100">
            <div class="bg-light chat-name">
                <strong>AAA</strong>
            </div>
            <div class="chat-container border overflow-auto d-flex flex-column p-3">
                <div class="px-3 py-2 m-1 rounded-3 flex-start align-self-start message received" v-for="item in 10">
                    <p>Hello there!
                    </p>
                </div>
                <div class="px-3 py-2 m-1 rounded-3 align-self-end message sent" v-for="item in 10">
                    <p>Hi! How can I help you?</p>
                </div>
            </div>
            <div class="input-group">
                <input type="file" id="fileInput" style="display: none;">
                <button class="btn btn-secondary" onclick="document.getElementById('fileInput').click();">
                    <i class="bi bi-file-earmark-arrow-up-fill"></i></button>
                <input type="file" id="imageInput" accept="image/*" style="display: none;">
                <button class="btn btn-secondary" onclick="document.getElementById('imageInput').click();">
                    <i class="bi bi-image"></i></button>
                <textarea class="form-control" placeholder="在這裡輸入訊息..." rows="2"></textarea>
                <button class="btn btn-primary">送出</button>
            </div>
        </div>
    </div>
</template>
    
<script setup lang='ts'>

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