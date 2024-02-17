<template>
    <div class="container-fluid">
        <h2>管理者權限控管</h2>
        <div class="row mt-3">
            <!-- 管理者列表 Start-->
            <div class="col-xxl-6 col-12">
                <UserList :isAdmin="true"></UserList>
            </div>
            <!-- 管理者列表 End-->

            <!-- 使用者列表 Start-->
            <div class="col-xxl-6 col-12">
                <UserList :isAdmin="false"></UserList>
            </div>
            <!-- 使用者列表 End-->
        </div>

    </div>
</template>
    
<script setup>
//// 引用套件

//// 引用元件
import UserList from '@/components/UserList.vue';

//// 生命週期


//// 宣告變數

//// 定義方法

</script>
    
<style scoped>

</style>