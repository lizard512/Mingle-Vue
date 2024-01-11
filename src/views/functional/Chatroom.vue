<template>
    <div class="container-fluid  bg-white p-0 vh-100">
        <div class="row g-0 flex-column-reverse flex-md-row">
            <!-- left => headline, pics message -->
            <div class="col-md-4 left">
                <div>
                    <h3 class="headline">Message(這邊是左側)</h3>
                </div>

                <div>
                    <a href="#" class="list-group-item list-group-item-action active py-3 lh-tight" aria-current="true">
                        <div class="d-flex w-100 align-items-center justify-content-between">
                            <strong class="mb-1">List group item heading</strong>

                        </div>
                        <div class="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and
                            date.</div>
                    </a>
                    <div class="ms-5 mb-5">
                        <img class="pic me-4" src="https://picsum.photos/50/50">
                        <strong>AAA</strong>
                        <small>Wed</small>
                        <p class="txt">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati aliquid
                            harum
                        </p>
                    </div>
                    <div class="ms-5 mb-5">
                        <img class="pic me-4" src="https://picsum.photos/50/50">
                        <strong>AAA</strong>
                        <small>Wed</small>
                        <p class="txt">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati aliquid
                            harum
                        </p>
                    </div>
                    <div class="ms-5 mb-5">
                        <img class="pic me-4" src="https://picsum.photos/50/50">
                        <strong>AAA</strong>
                        <small>Wed</small>
                        <p class="txt">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati aliquid
                            harum
                        </p>
                    </div>
                    <div class="ms-5 mb-5">
                        <img class="pic me-4" src="https://picsum.photos/50/50">
                        <strong>AAA</strong>
                        <small>Wed</small>
                        <p class="txt">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati aliquid
                            harum
                        </p>
                    </div>
                    <div class="ms-5 mb-5">
                        <img class="pic me-4" src="https://picsum.photos/50/50">
                        <strong>AAA</strong>
                        <small>Wed</small>
                        <p class="txt">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati aliquid
                            harum
                        </p>
                    </div>
                </div>

            </div>
            <!-- Right => chat-name, chat-box, input-group -->
            <div class="col-md-8 right">
                <div class="chat-name">
                    <strong>AAA</strong>
                </div>
                <div class="chat-container">
                    <div class="chat-box">
                        <div class="message received">
                            <p>Hello there!</p>
                        </div>
                        <div class="message sent">
                            <p>Hi! How can I help you?</p>
                        </div>
                        <div class="message received">
                            <p>Hello there!</p>
                        </div>
                        <div class="message sent">
                            <p>Hi! How can I help you?</p>
                        </div>
                        <div class="message received">
                            <p>Hello there!</p>
                        </div>
                        <div class="message sent">
                            <p>Hi! How can I help you?</p>
                        </div>
                        <div class="message received">
                            <p>Hello there!</p>
                        </div>
                        <div class="message sent">
                            <p>Hi! How can I help you?</p>
                        </div>
                        <div class="message received">
                            <p>Hello there!</p>
                        </div>
                        <div class="message sent">
                            <p>Hi! How can I help you?</p>
                        </div>
                        <div class="message received">
                            <p>Hello there!</p>
                        </div>
                        <div class="message sent">
                            <p>Hi! How can I help you?</p>
                        </div>
                        <div class="message received">
                            <p>Hello there!</p>
                        </div>
                        <div class="message sent">
                            <p>Hi! How can I help you?</p>
                        </div>
                        <div class="message received">
                            <p>Hello there!</p>
                        </div>
                        <div class="message sent">
                            <p>Hi! How can I help you?</p>
                        </div>
                        <div class="message received">
                            <p>Hello there!</p>
                        </div>
                    </div>
                </div>
                <div class="input-group">
                    <input type="file" id="fileInput" style="display: none;">
                    <button class="btn btn-secondary" onclick="document.getElementById('fileInput').click();">🖇</button>
                    <input type="file" id="imageInput" accept="image/*" style="display: none;">
                    <button class="btn btn-secondary" onclick="document.getElementById('imageInput').click();">🖼️</button>
                    <textarea class="form-control" placeholder="在這裡輸入訊息..." rows="2"></textarea>
                    <button class="btn btn-primary">送出</button>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script setup lang='ts'>

</script>
    
<style scoped>
body {
    overflow-y: hidden;
}

.left {
    height: 88vh;
    overflow-y: auto;
}

.right {
    height: 88vh;
    overflow-y: auto;
}

.headline {
    text-align: center;
}

.pic {
    border-radius: 50%;
    float: left;

}

.txt {
    overflow: hidden;
}


.chat-name {
    background-color: antiquewhite;
    height: 5%;
    vertical-align: middle;
}

.chat-container {
    border: 1px solid #ccc;
    padding: 10px;
    overflow-y: scroll;
    height: 85%;
}

.chat-box {
    display: flex;
    flex-direction: column;

}

.message {
    padding: 8px 12px;
    border-radius: 8px;
    margin: 4px;
    max-width: 70%;
}

.received {
    background-color: #f0f0f0;
    align-self: flex-start;
}

.sent {
    background-color: #dcf8c6;
    align-self: flex-end;
}

.input-group {
    height: 3%;
}

.form-control {
    resize: none;
}
</style>