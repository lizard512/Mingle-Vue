<template>
    <body class="bg-body-tertiary py-3">

        <div class="container-fluid">
            <div class="card border-0 shadow-sm">
                <div class="card-body">
                    <!--  訂單資料表格    -->
                    <table id="table" class="table table-success table-striped table-hover">
                        <thead>
                            <tr>
                                <th style="width: 8rem">訂單編號</th>
                                <th>房東</th>
                                <th>訂單報名總人數</th>
                                <th>工作名稱</th>
                                <th>房源名稱</th>
                                <th>特殊需求</th>
                                <th>開始時間</th>
                                <th>結束時間</th>
                                <th>下單時間</th>
                                <th>狀態</th>
                                <th>操作</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="singleOrder in details" :key="singleOrder.order.orderid">
                                <td>{{ singleOrder.order.orderid }}</td>
                                <td> <el-button type="primary" text
                                        @click="navigateToLandlordProfile(singleOrder.landlordUserId)">{{
                                            singleOrder.landlordName }}</el-button></td>
                                <td><el-tag type="success" effect="dark" round size="large">{{ singleOrder.order.numbers
                                }}</el-tag></td>
                                <td>{{ singleOrder.workName }}</td>
                                <td>{{ singleOrder.houseName }}</td>
                                <td>{{ singleOrder.order.needs }}</td>
                                <td>{{ singleOrder.formatStartDate }}</td>
                                <td>{{ singleOrder.formatEndDate }}</td>
                                <td>{{ singleOrder.formatUpdatedAt }}</td>
                                <td>
                                    <el-text class="mx-1" v-if="singleOrder.order.isCancelled" type="info">已取消</el-text>
                                    <el-tag class="mx-1" v-if="singleOrder.order.status === '待房東確認'"
                                        type="success">待確認</el-tag>
                                    <el-tag class="mx-1" v-if="singleOrder.order.status === '房東已接受'"
                                        type="danger">待付款</el-tag>
                                    <el-text class="mx-1" v-if="singleOrder.order.status === '已完成訂單'"
                                        type="primary">已完成</el-text>
                                    <el-text class="mx-1" v-if="singleOrder.order.status === '訂單已評價'"
                                        type="warning">已評價</el-text>
                                </td>
                                <td>
                                    <el-button v-if="singleOrder.order.status === '待房東確認'" style="margin-right: 1rem "
                                        class="btn btn-success w-100"
                                        @click="open(singleOrder.order.orderid, singleOrder.order.needs)">修改需求</el-button>
                                    <Payment v-if="singleOrder.order.status === '房東已接受'" :people="singleOrder.order.numbers"
                                        :orderid="singleOrder.order.orderid">
                                    </Payment>
                                    <button v-if="singleOrder.order.status === '已完成訂單'" style="margin-right: 1rem"
                                        class="btn btn-success" @click="toReviewOrder(singleOrder.order.orderid)">評價
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
import Payment from "@views/user/Payment.vue";
import { useRouter } from 'vue-router';
import Swal from 'sweetalert2';
const details = ref({})
const router = useRouter();

const dialogVisible = ref(false);
const formLabelWidth = '140px'


onMounted(() => {
    initAssign();
});

const open = (orderId, needs) => {
    ElMessageBox.prompt('可以不輸入值表示沒有特殊需求', '請輸入新的特殊需求讓房東知道', {
        confirmButtonText: '送出',
        cancelButtonText: '取消',
        inputPlaceholder: needs,
        inputType: 'textarea',
        inputValue: needs,
        draggable: true,
    })
        .then(({ value }) => {
            if (value !== "" && value.length > 250) {
                ElMessageBox.alert('需求太多啦，請簡短敘述', '請輸入250字以內', {
                    confirmButtonText: 'OK',
                    type: 'error',
                })
                return
            }
            updateNeeds(orderId, value)
            ElMessageBox.alert('修改成功', {
                confirmButtonText: 'OK',
                type: 'success',
            })
        })
        .catch(() => {
            ElMessageBox.alert('操作取消，沒有修改', {
                confirmButtonText: 'OK',
                type: 'error',
            })
        })
}
const getuserid = () => {
    return { "userID": localStorage.getItem("userID") };
};

const initAssign = async () => {
    try {
        const userID = getuserid().userID;
        const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/order/findAllOrder/byUserId/${userID}`);
        const data = await response.json();
        details.value = data;
        console.log(details.value)
        if (details.value.length === 0) {
            Swal.fire({
                icon: "warning",
                title: "哎呀...",
                text: "您還沒有建立任何訂單喔",
                confirmButtonText: "這就開始",
            })
            try {
                router.push({ name: 'WorkSearch' });
            } catch (error) {
                console.error('Failed to apply', error);
            }
        }
    } catch (error) {
        console.error('獲取資料失敗:', error);
    }
};


const updateNeeds = async (orderId, value) => {
    try {
        const updateData = {
            orderId: orderId,
            needs: value,
        };
        const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/order/update/needs`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updateData),
        });
        const re = await response.json();
        console.log(re)
        if (re.success) {
            initAssign();
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "請重新輸入您的需求",
                confirmButtonText: "好的",
            })
        }

        // const updatedOrderWithDetails = await response.json();
        // updateOrderInArray(updatedOrderWithDetails);
        // console.log(updatedOrderWithDetails)


    } catch (error) {
        console.error('Error accepting order:', error);
    }
};


const toReviewOrder = async (orderId) => {
    try {
        router.push({ name: 'ReviewOrder', query: { orderId: orderId } });
    } catch (error) {
        console.error('Failed to apply', error);
    }
}

const navigateToLandlordProfile = (Landlordid) => {
    router.push({ path: `/user-profile/${Landlordid}` });
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
  