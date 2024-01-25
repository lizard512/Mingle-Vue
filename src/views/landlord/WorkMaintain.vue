<template>
    <div class="container-fluid bg-white vh-100 d-flex flex-column">
        <div class=" col-11 align-self-center text-center">
            <h3 class="my-5">工作管理</h3>
            <table class="my-5 table table-striped table-hover align-middle">
                <thead class="table-dark">
                    <tr>
                        <th scope="col">工作編號</th>
                        <th scope="col">建立者</th>
                        <th scope="col">打工類型</th>
                        <th scope="col">打工名稱</th>
                        <th scope="col">地區</th>
                        <th scope="col">開放預訂日</th>
                        <th scope="col">結束預定日</th>
                        <th scope="col">創建日</th>
                        <th scope="col">修改日</th>
                        <th scope="col">狀態</th>
                        <th scope="col">管理</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>0</td>
                        <td>詐騙</td>
                        <td>假資料</td>
                        <td>台北市</td>
                        <td>2024-01-28</td>
                        <td>2024-06-28</td>
                        <td>2023-12-28</td>
                        <td>{{ modifiedDate }}</td>
                        <td class="status">別急，還沒好</td>
                        <td><button type="button" class="btn btn-primary btn-sm">編輯</button> <button type="button"
                                class="btn btn-danger btn-sm">刪除</button></td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
</template>
    
<script setup lang='ts'>
import { ref, onMounted } from 'vue';

let current = new Date();
let modifiedDate = current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + current.getDate() + ' ' + current.getHours() + ':' + current.getMinutes() + ':' + current.getSeconds();

let statusElements = ref<NodeListOf<HTMLElement> | null>(null);



onMounted(() => { // 在 mounted 階段，選取所有帶有 .status 的元素
    statusElements.value = document.querySelectorAll(".status");

    // 操作每個元素的 style
    if (statusElements.value) {
        statusElements.value.forEach(element => {
            if (element.textContent!.trim() === "上架中") {
                element.style.color = "green";
            } else {
                element.style.color = "red";
            }
        });
    }
}
)
</script>
    
<style></style>