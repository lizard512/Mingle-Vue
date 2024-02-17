<template>
    <svg xmlns="http://www.w3.org/2000/svg" class="d-none">


        <!-- 日曆圖示 -->
        <symbol id="calendar3" viewBox="0 0 16 16">
            <path
                d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
            <path
                d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
        </symbol>
        <!-- 分析圖示 -->
        <symbol id="graph-up" viewBox="0 0 16 16">
            <path fill-rule="evenodd"
                d="M0 0h1v15h15v1H0V0Zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07Z" />
        </symbol>
    </svg>

    <div id="container" class="container-fluid bg-white p-0  animate__animated animate__fadeInUp ">
        <div class="row">

            <!-- 主要頁面 start-->
            <main class="col-md-8 px-md-4 mx-auto">
                <br>
                <!-- 第一列 -->
                <div
                    class="justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">

                    <h4 class="h2">房東總表現  <span class="text-primary" v-if="perfect" >恭喜獲得 </span><span class="text-primary  fa fa-solid fa-medal"  v-if="perfect"> 超讚房東</span>
                   </h4> 
                   <p class="text-secondary" >如何獲得超讚房東徽章?</p>
                   <p class="text-dark">瀏覽量大於10000，總訂單數大於等於20，預定人數大於等於50，評價數量大於等於10，平均評價分數大於4.5。</p>
<!-- if(analyzeDetail.value.totalorder >=100 &&　analyzeDetail.value.ordernumbers >= 200 && analyzeDetail.value.totalreview >= 5 && analyzeDetail.value.avgstar >= 4.5 && analyzeDetail.value.totalview >= 10000){
perfect.value = true;
} -->

                    <div class=" mb-2 mb-md-0">
                    </div>
                </div>

                <div class="row g-5 justify-content-center">
                    <ul class="col-2 list-group text-center">
                        <li class="list-group-item d-flex justify-content-center">
                            <div>
                                <h6 class="my-0" >瀏覽量</h6>
                            </div>
                        </li>
                        <li class="list-group-item d-flex justify-content-center">
                            <span class="text-muted">{{ analyzeDetail.totalview }}人</span>
                        </li>
                    </ul>
                    <ul class="col-2 list-group text-center">
                        <li class="list-group-item d-flex justify-content-center ">
                            <div>
                                <h6 class="my-0 " >訂單數</h6>
                            </div>
                        </li>
                        <li class="list-group-item d-flex justify-content-center">
                            <span class="text-muted" >{{ analyzeDetail.totalorder }}筆</span>
                        </li>
                    </ul>


                    <ul class="col-2 list-group text-center">
                        <li class="list-group-item d-flex justify-content-center ">
                            <div>
                                <h6 class="my-0 " >預定人數</h6>
                            </div>
                        </li>
                        <li class="list-group-item d-flex justify-content-center">
                            <span class="text-muted" >{{ analyzeDetail.ordernumbers?  analyzeDetail.ordernumbers : 0}}人</span>
                        </li>
                    </ul>

                    <ul class="col-2 list-group text-center">
                        <li class="list-group-item d-flex justify-content-center">
                            <div>
                                <h6 class="my-0" >評價數量</h6>
                            </div>
                        </li>
                        <li class="list-group-item d-flex justify-content-center">
                            <span class="text-muted" >{{ analyzeDetail.totalreview }}則</span>
                        </li>
                    </ul>



                    <ul class="col-3 list-group text-center">
                        <li class="list-group-item d-flex justify-content-center">
                            <div>
                                <h6 class="my-0" >平均評價分數</h6>
                            </div>
                        </li>
                        <li class="list-group-item d-flex justify-content-center">
                            <span class="text-muted" >{{ analyzeDetail.avgstar?  (analyzeDetail.avgstar.toFixed(1))  : 0 }}分
                                (滿分5)</span>
                        </li>
                    </ul>
            

                </div>

                <br>
                <div
                    class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">

                    <h4 class="h2" style="text-align: center">累積打工訂單數</h4>
                </div>

       
                    <!-- 在這裡放置你的長條圖容器 -->
                    <canvas id="myChart" height="100" ></canvas>
   
                <br>

                <div
                    class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">

                    <h4 class="h2" style="text-align: center">累積打工瀏覽量</h4>
                </div>


                <!-- 在這裡放置你的長條圖容器 -->
                <canvas id="myChart2" height="100"></canvas>

                <br>


            </main>
            <!-- 主要頁面 end-->

        </div>
    </div>
</template>
    
<script setup >
import { Chart, BarController, BarElement, LinearScale, CategoryScale, Tooltip } from 'chart.js';
// 注册控制器
Chart.register(BarController, BarElement, LinearScale, CategoryScale, Tooltip);

import { onMounted, ref,watch } from 'vue';
import axios from 'axios';


const landlordID = ref('');
const analyzeDetail = ref([]);
const workOrder = ref([]);
const workViews = ref([]);
const perfect= ref(false);

// ==========取得房東id============
const getLandlord = () => {
    landlordID.value = localStorage.getItem('lordID');
}

// ==========取得房東數據detail============

const getLandlordDetail = async () => {

    const Detail_API_URL = `${import.meta.env.VITE_APP_API_URL}/analyze/detail`
    const response = await axios.get(
        Detail_API_URL, {
        params:
            { landlordId: landlordID.value }
    });

    analyzeDetail.value = response.data;
    console.log(analyzeDetail.value);
}


// ==========取得房東每個工作的訂購量============


const getWorkOrder = async () => {
    const WorkOrder_API_URL = `${import.meta.env.VITE_APP_API_URL}/analyze/workordercount`
    const response = await axios.get(
        WorkOrder_API_URL, {
        params:
            { landlordId: landlordID.value }
    });

    workOrder.value = response.data;
    console.log(workOrder.value);


}


// ==========取得房東每個工作的瀏覽量============


const getWorkView = async () => {

    const WorkViews_API_URL = `${import.meta.env.VITE_APP_API_URL}/analyze/workviews`
    const response = await axios.get(
        WorkViews_API_URL, {
        params:
            { landlordId: landlordID.value }
    });

    workViews.value = response.data;
    console.log(workViews.value);

}





const showChart = async () => {
    'use strict'





    //======打工訂單量=======
    await getWorkOrder(); // 等待获取工作订单数据
    const ordernumbers = workOrder.value.map(item => item[0]);
    const workname = workOrder.value.map(item => item[2]);

    // Graphs
    const ctx = document.getElementById('myChart')
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: workname,
            datasets: [{
                label: '訂單數',
                data: ordernumbers,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)', // 紅色
                    'rgba(54, 162, 235, 0.2)', // 藍色
                    'rgba(255, 206, 86, 0.2)', // 黃色
                    'rgba(75, 192, 192, 0.2)', // 綠色
                    'rgba(153, 102, 255, 0.2)', // 紫色
                    'rgba(255, 159, 64, 0.2)', // 橙色
                    'rgba(255, 0, 0, 0.2)', // 深紅色
                    'rgba(0, 255, 0, 0.2)', // 鮮綠色
                    'rgba(0, 0, 255, 0.2)', // 深藍色
                    // 在此添加更多顏色
                ],
                borderColor: [
                    'rgb(255, 99, 132)', // 紅色
                    'rgb(54, 162, 235)', // 藍色
                    'rgb(255, 206, 86)', // 黃色
                    'rgb(75, 192, 192)', // 綠色
                    'rgb(153, 102, 255)', // 紫色
                    'rgb(255, 159, 64)', // 橙色
                    'rgb(255, 0, 0)', // 深紅色
                    'rgb(0, 255, 0)', // 鮮綠色
                    'rgb(0, 0, 255)', // 深藍色
                    // 在此添加相對應的邊框顏色
                ],
                borderWidth: 1
            }]
        },

        options: {
            responsive: true, // 添加 responsive 選項並設置為 true
            tooltips: {
                enabled: true,
                mode: 'index',
                callbacks: {
                    label: function (tooltipItem, datasets) {
                        return '訂單數: ' + tooltipItem.yLabel;
                    }
                }
            },

            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                    precision: 0 // 設置為 0，以顯示整數
                }
                },
                x: {
                    // 调整横轴每一格的宽度比例
                    categoryPercentage: 0.1, // 70% 的宽度
                    // 调整条形图的宽度比例
                    barPercentage: 0.1 // 90% 的宽度
                }
            },

            // 设置条形图的宽度
            barThickness: 50 // 调整为你需要的宽度值
        }
    }

    )

    //======打工瀏覽量=======

    await getWorkView(); // 等待获取工作瀏覽量數據
    const viewnumber = workViews.value.map(item => item[1]);
    const workviewname = workViews.value.map(item => item[2]);


    // Graphs
    const ctx2 = document.getElementById('myChart2')
    const myChart2 = new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: workviewname,
            datasets: [{
                label: '瀏覽量',
                data: viewnumber,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)', // 紅色
                    'rgba(54, 162, 235, 0.2)', // 藍色
                    'rgba(255, 206, 86, 0.2)', // 黃色
                    'rgba(75, 192, 192, 0.2)', // 綠色
                    'rgba(153, 102, 255, 0.2)', // 紫色
                    'rgba(255, 159, 64, 0.2)', // 橙色
                    'rgba(255, 0, 0, 0.2)', // 深紅色
                    'rgba(0, 255, 0, 0.2)', // 鮮綠色
                    'rgba(0, 0, 255, 0.2)', // 深藍色
                    // 在此添加更多顏色
                ],
                borderColor: [
                    'rgb(255, 99, 132)', // 紅色
                    'rgb(54, 162, 235)', // 藍色
                    'rgb(255, 206, 86)', // 黃色
                    'rgb(75, 192, 192)', // 綠色
                    'rgb(153, 102, 255)', // 紫色
                    'rgb(255, 159, 64)', // 橙色
                    'rgb(255, 0, 0)', // 深紅色
                    'rgb(0, 255, 0)', // 鮮綠色
                    'rgb(0, 0, 255)', // 深藍色
                    // 在此添加相對應的邊框顏色
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true, // 添加 responsive 選項並設置為 true
            tooltips: {
                enabled: true,
                mode: 'index',
                callbacks: {
                    label: function (tooltipItem, datasets) {
                        return '瀏覽量: ' + tooltipItem.yLabel;
                    }
                }
            },

            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                    precision: 0 // 設置為 0，以顯示整數
                }
                },
                x: {
                    // 调整横轴每一格的宽度比例
                    categoryPercentage: 0.1, // 70% 的宽度
                    // 调整条形图的宽度比例
                    barPercentage: 0.1 // 90% 的宽度
                }
            },

            // 设置条形图的宽度
            barThickness: 50 // 调整为你需要的宽度值
        }
    }

    )


};





onMounted(async () => {
    
    getLandlord();
    await getLandlordDetail();

    // 在数据获取之后执行渲染
    window.onload = showChart();

    if(analyzeDetail.value.totalorder >=20 &&　analyzeDetail.value.ordernumbers >= 50 && analyzeDetail.value.totalreview >= 10 && analyzeDetail.value.avgstar >= 4.5 && analyzeDetail.value.totalview >= 10000){
        perfect.value = true;
    }

})
</script>

瀏覽量大於10000，總訂單數大於等於20，預定人數大於等於50，評價數量大於等於10，平均評價分數大於4.5。



    
<style scoped>

.special {
    border-color: #d63384;
}

</style>