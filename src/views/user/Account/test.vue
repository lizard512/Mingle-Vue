<template>
    <body class="bg-body-tertiary py-3">

        <div class="container-fluid">
            <div class="card border-0 shadow-sm">
                <div class="card-body">
                    <!--  訂單資料表格    -->
                    <table id="table" class="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th style="width: 8rem">訂單編號</th>
                                <th>房客ID</th>
                                <th>工作名稱</th>
                                <th>房源名稱</th>
                                <th>備註</th>
                                <th>特殊需求</th>
                                <th>開始時間</th>
                                <th>結束時間</th>
                                <th>下單時間</th>
                                <th>狀態</th>
                                <th>操作</th>
                                <th>評價</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="singleOrder in details" :key="singleOrder.order.orderid">
                                <td>{{ singleOrder.order.orderid }}</td>
                                <td>{{ singleOrder.order.userid }}</td>
                                <td>{{ singleOrder.workName }}</td>
                                <td>{{ singleOrder.houseName }}</td>
                                <td>{{ singleOrder.order.notes }}</td>
                                <td>{{ singleOrder.order.needs }}</td>
                                <td>{{ singleOrder.formatStartDate }}</td>
                                <td>{{ singleOrder.formatEndDate }}</td>
                                <td>{{ singleOrder.formatCreatedAt }}</td>
                                <td>
                                    <el-text class="mx-1" v-if="singleOrder.order.status === '待房東確認'"
                                        type="success">待確認</el-text>
                                    <el-text class="mx-1" v-if="singleOrder.order.status === '已完成訂單'"
                                        type="primary">已完成</el-text>
                                    <el-text class="mx-1" v-if="singleOrder.order.isCancelled" type="info">已取消</el-text>
                                    <el-text class="mx-1" v-if="singleOrder.order.isRefunded" type="warning">已退款</el-text>
                                    <el-text class="mx-1" v-if="singleOrder.order.status === '房東已接受'"
                                        type="danger">待付款</el-text>
                                </td>
                                <td>
                                    <Payment :people="singleOrder.order.numbers" :orderid="singleOrder.order.orderid">
                                    </Payment>
                                    <!-- <button v-if="singleOrder.order.status === '待房東確認'" type="button"
                                        style="margin-right: 1rem" class="btn btn-success"
                                        @click="acceptOrder(singleOrder.order.orderid)">接受
                                    </button>
                                    <button v-if="singleOrder.order.status === '待房東確認'" type="button" class="btn btn-danger"
                                        @click="rejectOrder(singleOrder.order.orderid)">拒絕</button> -->
                                </td>
                                <td>
                                    <button v-if=true style="margin-right: 1rem" class="btn btn-success"
                                        @click="toReviewOrder(singleOrder.order.orderid)">評價
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </body>
</template>
  
<script setup>
import { onMounted, ref } from "vue";
import Payment from "../Payment.vue";
import { useRouter } from 'vue-router';
const details = ref({})


onMounted(() => {
    initAssign();
});

const getuserid = () => {
    return { "userID": localStorage.getItem("userID") };
};

const initAssign = async () => {
    try {
        // const lordID = getLordID().lordID;
        const userID = localStorage.getItem("userID");
        const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/order/findAllOrder/byUserId/${userID}`);
        const data = await response.json();
        details.value = data;
        // console.log(details)
        // console.log(lordID)
    } catch (error) {
        console.error('獲取資料失敗:', error);
    }
};


const acceptOrder = async (orderId) => {
    try {
        // console.log(orderId)
        const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/order/acceptOrder/${orderId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        // window.location.reload();
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const updatedOrderWithDetails = await response.json();
        updateOrderInArray(updatedOrderWithDetails);
        // console.log(updatedOrderWithDetails)


    } catch (error) {
        console.error('Error accepting order:', error);
    }
};

const rejectOrder = async (orderId) => {
    try {

        // 發送 fetch 請求以更新訂單狀態
        const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/order/rejectOrder/${orderId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const updatedOrderWithDetails = await response.json();
        updateOrderInArray(updatedOrderWithDetails);
        // console.log(updatedOrderWithDetails)

    } catch (error) {
        console.error('Error rejecting order:', error);
    }
};

function updateOrderInArray(updatedOrder) {
    const index = details.value.findIndex(singleOrder => singleOrder.order.orderid === updatedOrder.order.orderid);
    if (index !== -1) {
        details.value[index] = updatedOrder;
    }
}

const router = useRouter();
const toReviewOrder = async (orderId) => {
    try {
        router.push({ name: 'ReviewOrder', query: { orderId: orderId } });
    } catch (error) {
        console.error('Failed to apply', error);
    }
}

</script>
<style scoped>
th {
    text-align: center;
}

td {
    text-align: center;
}

td>.btn {
    width: 3.5rem;
    height: 2rem;
    font-size: 14px;

}
</style>
  