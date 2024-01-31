<template>
    <div class="col-2 md-left bg-primary justify-content-center">

        <h4 class="text-center my-5">我的帳號</h4>
        <div class="row my-5" @click="clickHandler(isShow = 1)"><a href="#" class="styleColor ">
                <i class="fa-solid fa-user" />基本資料</a></div>
        <div class="row my-5" @click="clickHandler(isShow = 4)"><a href="#" class="styleColor ">
                <i class="fa-solid fa-pen" />個人介紹</a></div>
        <div class="row my-5"> <a href="#" class="styleColor "> <i class="fa-brands fa-phoenix-framework" />住宿/打工預定</a>
        </div>
        <div class="row my-5" @click="clickHandler(isShow = 2)">
            <a href="#" class="styleColor">
                <i class="fa-solid fa-shoe-prints" />旅行足跡
            </a>
        </div>
        <div class="row my-5" @click="clickHandler(isShow = 3)"><a href="#" class="styleColor ">
                <i class="fa-brands fa-gratipay" />心願清單</a>
        </div>

    </div>
</template>

<script setup >


const isShow = 1
const emit = defineEmits(["xyzClick"])
const clickHandler = showVeiw => {
    emit("xyzClick", showVeiw)
}
</script>
    
<style scoped>
.styleColor {
    color: tomato;
    color: chocolate;
    text-align: center;
}
</style>