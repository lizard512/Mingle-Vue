<template>
    <body class="bg-body-tertiary py-3">
        <div class="container-fluid">
            <div class="card border-0 shadow-sm">
                <el-table style="width: 100%" :data="details">
                    <el-table-column label="訂單編號" width="180">
                        <template #default="scope">
                            <div style="display: flex; align-items: center">
                                <span style="margin-left: 10px">{{ scope.row.order.orderid }}</span>
                            </div>
                        </template>
                    </el-table-column>

                    <el-table-column label="房客ID" width="180">
                        <template #default="scope">
                            <div style="display: flex; align-items: center">
                                <span style="margin-left: 10px">{{ scope.row.workName }}</span>
                            </div>
                        </template>
                    </el-table-column>

                    <!-- <el-table-column label="工作名稱" width="180">
                        <template #default="singleOrder">
                            <el-popover effect="light" trigger="hover" placement="top" width="auto">
                                <template #default>
                                    <div>name: {{ singleOrder.workName }}</div>
                                    <div>address: </div>
                                </template>
                                <template #reference>
                                    <el-tag>{{ singleOrder.workName }}</el-tag>
                                </template>
                            </el-popover>
                        </template>
                    </el-table-column>

                    <el-table-column label="房源名稱" width="180">
                        <template #default="singleOrder">
                            <div style="display: flex; align-items: center">
                                <span style="margin-left: 10px">{{ singleOrder.houseName }}</span>
                            </div>
                        </template>
                    </el-table-column>

                    <el-table-column label="備註" width="180">
                        <template #default="singleOrder">
                            <div style="display: flex; align-items: center">

                                <span style="margin-left: 10px">{{ singleOrder.order.notes }}</span>
                            </div>
                        </template>
                    </el-table-column>

                    <el-table-column label="特殊需求" width="180">
                        <template #default="singleOrder">
                            <div style="display: flex; align-items: center">
                                <span style="margin-left: 10px">{{ singleOrder.order.needs }}</span>
                            </div>
                        </template>
                    </el-table-column>

                    <el-table-column label="開始時間" width="180">
                        <template #default="singleOrder">
                            <div style="display: flex; align-items: center">
                                <el-icon>
                                    <timer />
                                </el-icon>
                                <span style="margin-left: 10px">{{ singleOrder.formatStartDate }}</span>
                            </div>
                        </template>
                    </el-table-column>

                    <el-table-column label="結束時間" width="180">
                        <template #default="singleOrder">
                            <div style="display: flex; align-items: center">
                                <el-icon>
                                    <timer />
                                </el-icon>
                                <span style="margin-left: 10px">{{ singleOrder.formatEndDate }}</span>
                            </div>
                        </template>
                    </el-table-column>

                    <el-table-column label="下單時間" width="180">
                        <template #default="singleOrder">
                            <div style="display: flex; align-items: center">

                                <span style="margin-left: 10px">{{ singleOrder.formatCreatedAt }}</span>
                            </div>
                        </template>
                    </el-table-column>

                    <el-table-column label="狀態" width="180">
                        <template #default="singleOrder">
                            <el-popover effect="light" trigger="hover" placement="top" width="auto">
                                <template #reference>
                                    <div
                                        v-html="format(singleOrder.order.isCancelled, singleOrder.order.isRefunded, singleOrder.order.status)">
                                    </div>
                                </template>
                            </el-popover>
                        </template>
                    </el-table-column>

                    <el-table-column label="操作">
                        <template #default="singleOrder">
                            <el-button v-if="singleOrder.order.status === '房東已接受'" size="small"
                                @click="acceptToPayOrder(singleOrder.order.orderid)">付款</el-button>
                            <el-button v-if="singleOrder.order.status === '待房東確認'" size="small" type="danger"
                                @click="rejectOrder(singleOrder.order.orderid)">Delete</el-button>
                        </template>
                    </el-table-column> -->
                </el-table>
            </div>
        </div>
    </body>
</template>
  

<script lang="ts" setup>
import { Timer } from '@element-plus/icons-vue'

// const handleEdit = (index: number, row: singleOrder) => {
//     console.log(index, row)
// }
// const handleDelete = (index: number, row: singleOrder) => {
//     console.log(index, row)
// }

import { onMounted, ref } from "vue";

const details = ref({})

onMounted(() => {
    initAssign();
});

const getLordID = () => {
    return { "lordID": localStorage.getItem("lordID") };
};

const initAssign = async () => {
    try {
        const lordID = getLordID().lordID;
        const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/order/findAllOrder/2`);
        const data = await response.json();
        details.value = data;
        // console.log(data)
        console.log(details)
    } catch (error) {
        console.error('獲取資料失敗:', error);
    }
};

function format(isCancelled, isRefunded, status) {
    if (isCancelled) {
        return '<span class="badge text-bg-danger">已取消</span>';
    } else if (isRefunded) {
        return '<span class="badge text-bg-danger">已退款</span>';
    } else if (status === "待房東確認") {
        return '<span class="badge text-bg-danger">待確認</span>';
    } else {
        return '<span class="badge text-bg-success">已確認</span>'
    }
}


const acceptToPayOrder = async (orderId) => {
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
        if (Array.isArray(updatedOrderWithDetails)) {
            updatedOrderWithDetails.forEach(updatedOrder => {
                if (updatedOrder && updatedOrder.order) {
                    updateOrderInArray(updatedOrder);
                }
                // console.log(updatedOrderWithDetails)
            })
        }
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
        if (Array.isArray(updatedOrderWithDetails)) {
            updatedOrderWithDetails.forEach(updatedOrder => {
                if (updatedOrder && updatedOrder.order) {
                    updateOrderInArray(updatedOrder);
                }
                // console.log(updatedOrderWithDetails)
            })
        }
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



// //付款按鈕
// let path = import.meta.env.VITE_APP_API_URL;
// const amount = ref('');
// function getPaid() {
//     amount.value = 100;
//     window.location.href = `${path}/ecpayCheckout/${amount.value}`;
// }

</script>
<style scoped></style>
