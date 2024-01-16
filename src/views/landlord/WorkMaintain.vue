<template>
    <div id="container" class="container-fluid bg-white p-0 vh-100">

        <!-- Start -->
        <div class="container-fluid header bg-white p-0 d-flex justify-content-center">
            <div class="justify-content-center col-10 mt-5">
                <h3 class="mb-3">工作管理</h3>
                <table class="table table-striped table-sm table-hover">
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
                            <td>裕烜</td>
                            <td>人力</td>
                            <td>搬槓片</td>
                            <td>台北市</td>
                            <td>2024-01-28</td>
                            <td>2024-06-28</td>
                            <td>2023-12-28</td>
                            <td>{{ modifiedDate }}</td>
                            <td class="status">上架中</td>
                            <td><button type="button" class="btn btn-primary btn-sm">編輯</button> <button type="button"
                                    class="btn btn-danger btn-sm">刪除</button></td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>士軒</td>
                            <td>旅店</td>
                            <td>尖叫旅社</td>
                            <td>桃園市</td>
                            <td>2024-01-28</td>
                            <td>2024-06-28</td>
                            <td>2023-12-28</td>
                            <td>{{ modifiedDate }}</td>
                            <td class="status">未上架</td>
                            <td><button type="button" class="btn btn-primary btn-sm">編輯</button> <button type="button"
                                    class="btn btn-danger btn-sm">刪除</button></td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>珈晟</td>
                            <td>補教</td>
                            <td>Hibernate 3天$12000</td>
                            <td>新北市</td>
                            <td>2024-01-28</td>
                            <td>2024-06-28</td>
                            <td>2023-12-28</td>
                            <td>{{ modifiedDate }}</td>
                            <td class="status">上架中</td>
                            <td><button type="button" class="btn btn-primary btn-sm">編輯</button> <button type="button"
                                    class="btn btn-danger btn-sm">刪除</button></td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>鈺真</td>
                            <td>銷售</td>
                            <td>賣肝</td>
                            <td>新北市</td>
                            <td>2024-01-28</td>
                            <td>2024-06-28</td>
                            <td>2023-12-28</td>
                            <td>{{ modifiedDate }}</td>
                            <td class="status">未上架</td>
                            <td><button type="button" class="btn btn-primary btn-sm">編輯</button> <button type="button"
                                    class="btn btn-danger btn-sm">刪除</button></td>
                        </tr>
                        <tr>
                            <th scope="row">5</th>
                            <td>立則</td>
                            <td>辦公</td>
                            <td>打地舖</td>
                            <td>台中市</td>
                            <td>2024-01-28</td>
                            <td>2024-06-28</td>
                            <td>2023-12-28</td>
                            <td>{{ modifiedDate }}</td>
                            <td class="status">上架中</td>
                            <td><button type="button" class="btn btn-primary btn-sm">編輯</button> <button type="button"
                                    class="btn btn-danger btn-sm">刪除</button></td>
                        </tr>
                        <tr>
                            <th scope="row">6</th>
                            <td>瀚平</td>
                            <td>人力</td>
                            <td>掃雞舍</td>
                            <td>宜蘭市</td>
                            <td>2024-01-28</td>
                            <td>2024-06-28</td>
                            <td>2023-12-28</td>
                            <td>{{ modifiedDate }}</td>
                            <td class="status">未上架</td>
                            <td><button type="button" class="btn btn-primary btn-sm">編輯</button> <button type="button"
                                    class="btn btn-danger btn-sm">刪除</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
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