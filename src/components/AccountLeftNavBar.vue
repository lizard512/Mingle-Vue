<template>
    <div class="col-2 md-left bg-primary" style="float: left;font-size:x-large; text-align: center;">
        <br><br>
        <h4>我的帳戶</h4><br><br>
<<<<<<< Updated upstream
        <div class="fa bs-secondary" @click="clickHandler(isShow = 1)"> <a href="#">基本資料</a></div><br><br>
        <div class="fa" @click="clickHandler(isShow = 4)"> <a href="#">個人介紹</a></div><br><br>
        <div class="fa"> <a href="#">住宿/打工預定</a></div><br><br>
        <div class="fa" @click="clickHandler(isShow = 2)"> <a href="#">旅行足跡</a></div><br><br>
        <div class="fa" @click="clickHandler(isShow = 3)"> <a href="#">心願清單</a></div><br><br>
=======
        <div class="fa fa-solid fa-user" @click="clickHandler(isShow = 1)"> <a href="#" class="fa"><font-awesome-icon
                    icon="fa-solid fa-user-secret" />基本資料</a></div><br><br>
        <div class="fa fa-solid fa-pen" @click="clickHandler(isShow = 4)"> <a href="#" class="fa">個人介紹</a></div>
        <br><br>
        <div class="fa fa-brands fa-phoenix-framework"> <a href="#" class="fa">住宿/打工預定</a></div><br><br>
        <div class="fa fa-solid fa-shoe-prints" @click="clickHandler(isShow = 2)"> <a href="#" class="fa">旅行足跡</a>
        </div><br><br>
        <div class="fa fa-brands fa-gratipay" @click="clickHandler(isShow = 3)"> <a href="#" class="fa">心願清單</a></div>
        <br><br>
>>>>>>> Stashed changes
    </div>
</template>

<script setup >
import 'bootstrap-icons/font/bootstrap-icons.css'

const isShow = 1
const emit = defineEmits(["xyzClick"])
const clickHandler = showVeiw => {
    console.log(showVeiw)
    emit("xyzClick", showVeiw)
}
</script>
    
<style>
.fa {
    color: tomato;
    color: chocolate;
}
</style>