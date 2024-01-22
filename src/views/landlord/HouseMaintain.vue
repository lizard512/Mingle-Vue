<template>
    <br>
    <div class="tableDiv">
        <table class="table">
            <thead class="table-dark">
                <tr>
                    <th scope="col"></th>
                    <th scope="col">房間ID</th>
                    <th scope="col">圖片</th>
                    <th scope="col">房屋類型</th>
                    <th scope="col">縣市</th>
                    <th scope="col">名稱</th>
                    <th scope="col">房源描述</th>
                    <th scope="col">地址</th>
                    <th scope="col">郵遞區號</th>
                    <th scope="col">床位數</th>
                    <th scope="col">狀態</th>
                    <th scope="col">備註</th>
                    <th scope="col">有Wifi</th>
                    <th scope="col">有TV</th>
                    <th scope="col">有廚房</th>
                    <th scope="col">有洗衣機</th>
                    <th scope="col">有停車位</th>
                    <th scope="col">有冷氣機</th>
                    <th scope="col">有停車位</th>
                    <th scope="col">有游泳池</th>
                    <th scope="col">有健身房</th>
                    <th scope="col">建立日期</th>
                    <th scope="col">更新日期</th>
                    <th scope="col">更新</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="col"></th>
                    <th scope="col">1</th>
                    <th scope="col">
                        <img src="../../assets/images/台東熱氣球活動.jpg" alt="獨棟別墅" class="img-thumbnail">
                    </th>
                    <th scope="col">獨棟別墅</th>
                    <th scope="col">台北市</th>
                    <th scope="col">總統套房</th>
                    <th scope="col">別緻雅房，景觀美麗，交通方便</th>
                    <th scope="col">台北市大安區復興南路一段390號2樓</th>
                    <th scope="col">106407</th>
                    <th scope="col">4</th>
                    <th scope="col">建置中</th>
                    <th scope="col">還不確定名稱</th>
                    <th scope="col">Yes</th>
                    <th scope="col">Yes</th>
                    <th scope="col">Yes</th>
                    <th scope="col">Yes</th>
                    <th scope="col">Yes</th>
                    <th scope="col">Yes</th>
                    <th scope="col">Yes</th>
                    <th scope="col">Yes</th>
                    <th scope="col">Yes</th>
                    <th scope="col">2023-12-28 14:43:36</th>
                    <th scope="col">2023-12-28 14:43:36</th>
                    <th scope="col">
                        <b-button type="button" class="btn btn-light update" v-b-modal.modal-1>修改</b-button>
                        <button type="button" class="btn btn-danger delete">刪除</button>
                    </th>
                </tr>
                <tr>
                    <th scope="col"></th>
                    <th scope="col">2</th>
                    <th scope="col">
                        <img src="../../assets/images/台中實習辦公.jpg" alt="獨棟別墅" class="img-thumbnail">
                    </th>
                    <th scope="col">小木屋</th>
                    <th scope="col">新北市</th>
                    <th scope="col">野外小木屋</th>
                    <th scope="col">坐落於河流野溪旁</th>
                    <th scope="col">新北市金山區陽金公路35號</th>
                    <th scope="col">208365</th>
                    <th scope="col">2</th>
                    <th scope="col">已建立</th>
                    <th scope="col"></th>
                    <th scope="col">Yes</th>
                    <th scope="col">Yes</th>
                    <th scope="col">NO</th>
                    <th scope="col">Yes</th>
                    <th scope="col">Yes</th>
                    <th scope="col">Yes</th>
                    <th scope="col">No</th>
                    <th scope="col">No</th>
                    <th scope="col">No</th>
                    <th scope="col">2023-12-28 14:49:03</th>
                    <th scope="col">2023-12-28 14:49:03</th>
                    <th scope="col">
                        <button type="button" class="btn btn-light update">修改</button>
                        <button type="button" class="btn btn-danger delete">刪除</button>
                    </th>
                </tr>
                <tr>
                    <th scope="col"></th>
                    <th scope="col">3</th>
                    <th scope="col">
                        <img src="../../assets/images/新北浩克漢堡.jpg" alt="獨棟別墅" class="img-thumbnail">
                    </th>
                    <th scope="col">公寓</th>
                    <th scope="col">台中市</th>
                    <th scope="col">公寓</th>
                    <th scope="col">捷運站旁邊，走路五分鐘</th>
                    <th scope="col">台中市西區公正路</th>
                    <th scope="col">40350</th>
                    <th scope="col">5</th>
                    <th scope="col">已建立</th>
                    <th scope="col"></th>
                    <th scope="col">Yes</th>
                    <th scope="col">Yes</th>
                    <th scope="col">Yes</th>
                    <th scope="col">No</th>
                    <th scope="col">Yes</th>
                    <th scope="col">Yes</th>
                    <th scope="col">Yes</th>
                    <th scope="col">Yes</th>
                    <th scope="col">Yes</th>
                    <th scope="col">2023-12-28 14:56:25</th>
                    <th scope="col">2023-12-28 14:56:25</th>
                    <th scope="col">
                        <button type="button" class="btn btn-light update">修改</button>
                        <button type="button" class="btn btn-danger delete">刪除</button>
                    </th>
                </tr>
                <tr>
                    <th scope="col"></th>
                    <th scope="col">4</th>
                    <th scope="col">
                        <img src="../../assets/images/台東貨櫃屋.jpg" alt="獨棟別墅" class="img-thumbnail">
                    </th>
                    <th scope="col">公寓</th>
                    <th scope="col">台中市</th>
                    <th scope="col">公寓</th>
                    <th scope="col">捷運站旁邊，走路五分鐘</th>
                    <th scope="col">台中市西區公正路</th>
                    <th scope="col">40350</th>
                    <th scope="col">5</th>
                    <th scope="col">已建立</th>
                    <th scope="col"></th>
                    <th scope="col">Yes</th>
                    <th scope="col">Yes</th>
                    <th scope="col">Yes</th>
                    <th scope="col">No</th>
                    <th scope="col">Yes</th>
                    <th scope="col">Yes</th>
                    <th scope="col">Yes</th>
                    <th scope="col">Yes</th>
                    <th scope="col">Yes</th>
                    <th scope="col">2023-12-28 14:56:25</th>
                    <th scope="col">2023-12-28 14:56:25</th>
                    <th scope="col">
                        <button type="button" class="btn btn-light update">修改</button>
                        <button type="button" class="btn btn-danger delete">刪除</button>
                    </th>
                </tr>
                <tr>
                    <th scope="col"></th>
                    <th scope="col">5</th>
                    <th scope="col">
                        <img src="../../assets/images/宜蘭小木屋建設.jpg" alt="獨棟別墅" class="img-thumbnail">
                    </th>
                    <th scope="col">公寓</th>
                    <th scope="col">台中市</th>
                    <th scope="col">公寓</th>
                    <th scope="col">捷運站旁邊，走路五分鐘</th>
                    <th scope="col">台中市西區公正路</th>
                    <th scope="col">40350</th>
                    <th scope="col">5</th>
                    <th scope="col">已建立</th>
                    <th scope="col"></th>
                    <th scope="col">Yes</th>
                    <th scope="col">Yes</th>
                    <th scope="col">Yes</th>
                    <th scope="col">No</th>
                    <th scope="col">Yes</th>
                    <th scope="col">Yes</th>
                    <th scope="col">Yes</th>
                    <th scope="col">Yes</th>
                    <th scope="col">Yes</th>
                    <th scope="col">2023-12-28 14:56:25</th>
                    <th scope="col">2023-12-28 14:56:25</th>
                    <th scope="col">
                        <button type="button" class="btn btn-light update">修改</button>
                        <button type="button" class="btn btn-danger delete">刪除</button>
                    </th>
                </tr>
            </tbody>
        </table>
    </div>
    <br>
    <b-modal id="modal-1" title="BootstrapVue">
        <p class="my-4">Hello from modal!</p>
    </b-modal>
</template>

<script setup>

</script>
    
<style scoped>
.tableDiv {
    width: 90%;
    margin: auto;
    text-align: center;
    overflow: scroll;
}

.table tr:nth-child(odd) {
    background-color: #FFD966;
}
</style>