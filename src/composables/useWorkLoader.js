// useWorkLoader.js
import { ref } from 'vue';
import axios from 'axios';

export default function useWorkLoader(userID) {
    // 設定初始值
    const currentPage = ref(0);
    const size = 12;
    const isLoading = ref(false);
    const isEnd = ref(false);
    let direction = 'DESC';
    let property = 'views';
    let filters = ref({
        worktype: [],
        city: "",
        keyword: null,
        workPeriod: [],
        hideFull: false,
        showKeptWorkOnly: false,
        showOnShelfOnly: true,
        hideDeleted: true,
        hideExpired: true,
    });
    const total = ref(0);
    const works = ref([]);

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
                    size: props.size,
                    direction: props.direction,
                    property: props.property,
                    userID: userID,
                }
            }
        );
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

    return {
        currentPage,
        size,
        isLoading,
        isEnd,
        direction,
        property,
        filters,
        total,
        works,
        loadWork,
    };
}