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

    <div id="container" class="container-fluid bg-white p-0">
        <div class="row">


            <!-- 深入分析 -->
            <div class="nav justify-content-center">
                <a class="nav-link d-flex align-items-center" href="#">
                    評價狀況
                </a>
                <a class="nav-link d-flex align-items-center gap-2" href="#">

                    訂單狀況
                </a>
                <a class="nav-link d-flex align-items-center gap-2" href="#">
                    瀏覽量
                </a>
                <a class="nav-link d-flex align-items-center gap-2" href="#">
                    房東評價
                </a>
            </div>


            <!-- 主要頁面 start-->
            <main class="col-md-8 px-md-4 mx-auto">

                <!-- 第一列 -->
                <div
                    class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">

                    <h1 class="h2" style="text-align: center">瀏覽量分析</h1>
                    <div class=" mb-2 mb-md-0">

                        <!-- 日期區間選擇功能 -->
                        <div class="btn-group me-2">
                            <button type="button"
                                class="btn btn-sm btn-outline-secondary dropdown-toggle d-flex align-items-center"
                                style="height: 50px;">
                                <svg class="bi" style="width: 30px;">
                                    <use xlink:href="#calendar3" />
                                </svg>
                                &nbsp;This week
                            </button>
                        </div>
                    </div>
                </div>

                <div class="row g-5 justify-content-center">
                    <ul class="col-2 list-group text-center">
                        <li class="list-group-item d-flex justify-content-center">
                            <div>
                                <h6 class="my-0" style="font-weight: 600;">本週瀏覽量</h6>
                            </div>
                        </li>
                        <li class="list-group-item d-flex justify-content-center">
                            <span class="text-muted" style="font-weight: 600;">100人</span>
                        </li>
                    </ul>

                    <ul class="col-2 list-group text-center">
                        <li class="list-group-item d-flex justify-content-center ">
                            <div>
                                <h6 class="my-0 " style="font-weight: 600">本週新預定</h6>
                            </div>
                        </li>
                        <li class="list-group-item d-flex justify-content-center">
                            <span class="text-muted" style="font-weight: 600;">100人</span>
                        </li>
                    </ul>

                    <ul class="col-2 list-group text-center">
                        <li class="list-group-item d-flex justify-content-center">
                            <div>
                                <h6 class="my-0" style="font-weight: 600;">本週預定率</h6>
                            </div>
                        </li>
                        <li class="list-group-item d-flex justify-content-center">
                            <span class="text-muted" style="font-weight: 600;">100%</span>
                        </li>
                    </ul>

                </div>

                <!-- 在這裡放置你的長條圖容器 -->
                <canvas id="myChart" width="300" height="100"></canvas>

                <h2>詳細數據</h2>
                <div class="table-responsive small">
                    <table class="table table-striped table-sm">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Header</th>
                                <th scope="col">Header</th>
                                <th scope="col">Header</th>
                                <th scope="col">Header</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1,001</td>
                                <td>random</td>
                                <td>data</td>
                                <td>placeholder</td>
                                <td>text</td>
                            </tr>
                            <tr>
                                <td>1,002</td>
                                <td>placeholder</td>
                                <td>irrelevant</td>
                                <td>visual</td>
                                <td>layout</td>
                            </tr>
                            <tr>
                                <td>1,003</td>
                                <td>data</td>
                                <td>rich</td>
                                <td>dashboard</td>
                                <td>tabular</td>
                            </tr>
                            <tr>
                                <td>1,003</td>
                                <td>information</td>
                                <td>placeholder</td>
                                <td>illustrative</td>
                                <td>data</td>
                            </tr>
                            <tr>
                                <td>1,004</td>
                                <td>text</td>
                                <td>random</td>
                                <td>layout</td>
                                <td>dashboard</td>
                            </tr>
                            <tr>
                                <td>1,005</td>
                                <td>dashboard</td>
                                <td>irrelevant</td>
                                <td>text</td>
                                <td>placeholder</td>
                            </tr>
                            <tr>
                                <td>1,006</td>
                                <td>dashboard</td>
                                <td>illustrative</td>
                                <td>rich</td>
                                <td>data</td>
                            </tr>
                            <tr>
                                <td>1,007</td>
                                <td>placeholder</td>
                                <td>tabular</td>
                                <td>information</td>
                                <td>irrelevant</td>
                            </tr>
                            <tr>
                                <td>1,008</td>
                                <td>random</td>
                                <td>data</td>
                                <td>placeholder</td>
                                <td>text</td>
                            </tr>
                            <tr>
                                <td>1,009</td>
                                <td>placeholder</td>
                                <td>irrelevant</td>
                                <td>visual</td>
                                <td>layout</td>
                            </tr>
                            <tr>
                                <td>1,010</td>
                                <td>data</td>
                                <td>rich</td>
                                <td>dashboard</td>
                                <td>tabular</td>
                            </tr>
                            <tr>
                                <td>1,011</td>
                                <td>information</td>
                                <td>placeholder</td>
                                <td>illustrative</td>
                                <td>data</td>
                            </tr>
                            <tr>
                                <td>1,012</td>
                                <td>text</td>
                                <td>placeholder</td>
                                <td>layout</td>
                                <td>dashboard</td>
                            </tr>
                            <tr>
                                <td>1,013</td>
                                <td>dashboard</td>
                                <td>irrelevant</td>
                                <td>text</td>
                                <td>visual</td>
                            </tr>
                            <tr>
                                <td>1,014</td>
                                <td>dashboard</td>
                                <td>illustrative</td>
                                <td>rich</td>
                                <td>data</td>
                            </tr>
                            <tr>
                                <td>1,015</td>
                                <td>random</td>
                                <td>tabular</td>
                                <td>information</td>
                                <td>text</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
            <!-- 主要頁面 end-->

        </div>
    </div>
</template>
    
<script setup >
import { Chart, BarController, BarElement, LinearScale, CategoryScale, Tooltip } from 'chart.js';
// 注册控制器
Chart.register(BarController, BarElement, LinearScale, CategoryScale,Tooltip);

import { onMounted } from 'vue';


const showChart = function () {
    'use strict'

    // Graphs
    const ctx = document.getElementById('myChart')
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [
                'Sunday',
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday'
            ],
            datasets: [{
                label: '本週瀏覽量',
                data: [
                    15339,
                    21345,
                    18483,
                    24003,
                    23489,
                    24092,
                    12034
                ],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(201, 203, 207, 0.2)'
                ],
                borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(54, 162, 235)',
                    'rgb(153, 102, 255)',
                    'rgb(201, 203, 207)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            tooltips: {
                enabled: true,
                mode: 'index',
                callbacks: {
                    label: function(tooltipItem, datasets) {
                        return '瀏覽量: ' + tooltipItem.yLabel;
                    }
                }
            },

            scales: {
                y: {
                    beginAtZero: true,
                }
            }
        }
    }

    )

};


onMounted(() => {
    // 在DOM准备好时执行渲染
    showChart();
})

</script>

    
<style></style>