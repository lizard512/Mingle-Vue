<template>
    <div>
        <h2>Work Review</h2>
        <div v-for="work in works" :key="work.id">
            {{ work.name }}
            <button @click="editWork(work.id)">Edit</button>
        </div>
        <div class="m-0">共有 {{ total }} 筆待審核的工作</div>
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
// 篩選相關
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
        if (response.data.last) isEnd.value = true;
        else currentPage.value++;
    } catch (error) {
        console.error(error);
    } finally {
        isLoading.value = false;
    }
};

</script>
    
<style></style>