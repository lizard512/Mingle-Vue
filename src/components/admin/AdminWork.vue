<template>
    <div>
        <div v-for="work in works" :key="work.id">
            {{ work.name }}
            <button @click="editWork(work.id)">Edit</button>
        </div>
        <div class="m-0">共有 {{ total }} 筆相符的結果</div>
    </div>
</template>
    
<script setup>
//// 引用函式庫
import { ref, onMounted} from 'vue';
import axios from 'axios';

//// 生命週期
onMounted(async () => {
    await loadWork();
});

//// 初始化變數
// 載入相關
let works = ref([]);
let total = ref(0);
const currentPage = ref(0); // 當前頁數
const size = 12; // 每次載入的數量
const isLoading = ref(false); //避免重複載入
const isEnd = ref(false);
// 排序相關
let direction = 'DESC'; // 排序方向
let property = 'views'; // 排序屬性
const isArrowUp = ref(true);// 排序按紐的箭頭方向
// 篩選相關
const areaOrder = ['北部區域', '中部區域', '南部區域', '東部區域', '外島區域'];
let filters = ref({
    // 依篩選器變動
    worktype: [],
    city: "",
    keyword: null,
    workPeriod: [],
    hideFull: false,
    showKeptWorkOnly: false,
    // 自定義條件
    hideDeleted: true,
    showOnShelfOnly: true,
    hideExpired: true,
});


//// 定義方法
// 載入一頁工作列表
const loadWork = async () => {
    if (isEnd.value || isLoading.value) return;
    isLoading.value = true;
    try {
        const response = await axios.post(`${import.meta.env.VITE_APP_API_URL}/api/work/getWorks`,
            // request body
            filters.value,
            // request params
            {
                params: {
                    page: currentPage.value,
                    size: size,
                    direction: direction,
                    property: property,
                }
            }
        );
        total.value = response.data.totalElements;
        works.value = [...works.value, ...response.data.content];
        // 如果已經無法獲取更多的工作，停止發送請求
        if (response.data.last) isEnd.value = true;
        // 否則，準備獲取下一頁的工作
        else currentPage.value++;
    } catch (error) {
        console.error(error);
    } finally {
        isLoading.value = false;
    }
};

</script>
    
<style></style>