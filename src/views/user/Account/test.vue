<template>
    <body class="bg-body-tertiary py-3">

        <div class="container-fluid">
            <div class="card border-0 shadow-sm">
                <div class="card-header bg-body py-3">
                    <form class="row row-cols-sm-auto g-3 align-items-center">
                        <div class="col-12">
                            <div class="row">
                                <label for="username" class="col-sm-auto col-form-label">房客名稱</label>
                                <div class="col">
                                    <input type="text" class="form-control" id="username" name="username">
                                </div>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="row">
                                <label for="phone" class="col-sm-auto col-form-label">電話</label>
                                <div class="col">
                                    <input type="email" class="form-control" id="phone" name="phone">
                                </div>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="row">
                                <label for="beginTime" class="col-sm-auto col-form-label">創建時間</label>
                                <div class="col">
                                    <div class="input-group">
                                        <input type="text" readonly class="form-control" aria-label="q" placeholder="開始時間"
                                            name="beginTime" id="beginTime">
                                        <span class="input-group-text"><i class="bi bi-arrow-left-right"></i></span>
                                        <input type="text" readonly class="form-control" aria-label="q" placeholder="結束時間"
                                            name="endTime" id="endTime">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="row">
                                <label for="status" class="col-sm-auto col-form-label ">訂單狀態</label>
                                <div class="col">
                                    <select class="selectpicker form-select">
                                        <option value="0">所有</option>
                                        <option value="1">正常</option>
                                        <option value="2">停用</option>
                                    </select>
                                </div>
                            </div>
                        </div>


                        <div class="col-12 gap-2">

                            <button type="button" class="btn btn-light bsa-querySearch-btn">
                                <i class="bi bi-search"></i>查詢
                            </button>
                            <button type="button" class="btn btn-light bsa-reset-btn">
                                <i class="bi bi-arrow-clockwise"></i>重置
                            </button>
                        </div>
                    </form>
                </div>
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
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="singleOrder in order" :key="singleOrder.order.orderid">
                                <td>{{ singleOrder.order.orderid }}</td>
                                <td>{{ singleOrder.order.userid }}</td>
                                <td>{{ singleOrder.workName }}</td>
                                <td>{{ singleOrder.houseName }}</td>
                                <td>{{ singleOrder.order.notes }}</td>
                                <td>{{ singleOrder.order.needs }}</td>
                                <td>{{ singleOrder.formatStartDate }}</td>
                                <td>{{ singleOrder.formatEndDate }}</td>
                                <td>{{ singleOrder.formatCreatedAt }}</td>
                                <td
                                    v-html="format(singleOrder.order.isCancelled, singleOrder.order.isRefunded, singleOrder.order.status)">
                                </td>
                                <td>
                                    <button v-if="singleOrder.order.status === '待房東確認'" type="button"
                                        style="margin-right: 1rem" class="btn btn-success"
                                        @click="acceptOrder(singleOrder.order.orderid)">付款
                                    </button>
                                    <button v-if="singleOrder.order.status === '待房東確認'" type="button" class="btn btn-danger"
                                        @click="rejectOrder(singleOrder.order.orderid)">拒絕</button>

                                </td>
                                <!-- Add more cells based on your data structure -->
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

const order = ref({})

onMounted(() => {
    initAssign();
});

const getLordID = () => {
    return { "lordID": localStorage.getItem("lordID") };
};

const initAssign = async () => {
    try {
        const lordID = getLordID().lordID;
        const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/order/findAllOrder/${lordID}`);
        const data = await response.json();
        order.value = data;
        // console.log(data)
        // console.log(lordID)
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

    const index = order.value.findIndex(singleOrder => singleOrder.order.orderid === updatedOrder.order.orderid);

    if (index !== -1) {
        order.value[index] = updatedOrder;
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
  