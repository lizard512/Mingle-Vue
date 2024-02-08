<template>
    <div class="container p-5">
        <div class="row">
            <div class="col-md-4 d-flex align-items-center">
                <div class="text-center">
                    <div class="icon">
                        <img class="img-fluid" src="@images/icon-mingle-bold.png" alt="Icon"
                            style="width: 30px; height: 27px;">
                    </div>
                    <h2>讓其他使用者更了解你！</h2>
                    <p id="description" class="lead">日後如有需要，仍可至房東中心修改資料</p>
                </div>
            </div>
            <div class="col-md-8">
                <div class="heading">
                    <h3>房東個人資料</h3>
                    <p>※以下內容預設會於會員個人頁面公開顯示</p>
                </div>
                <form class="form">
                    <!-- City inputs -->
                    <div class="form-floating mb-3">
                        <select class="form-select">
                            <optgroup v-for="(group, area) in groupedCities" :label="area" :key="area">
                                <option v-for="city in group" :value="city.city" :key="city.city">
                                    {{ city.city }}
                                </option>
                            </optgroup>
                        </select>
                        <label for="name" id="name-label">所在地區</label>
                    </div>
                    <!-- Address inputs -->
                    <div class="form-floating mb-3">
                        <input class="form-control border-0 border-bottom" name="address" id="address" required>
                        <label for="address">所在地址</label>
                    </div>
                    <!-- Feature inputs below-->
                    <div class="form-floating mb-3">
                        <input class="form-control border-0 border-bottom" name="feature" id="feature">
                        <label for="feature">
                            地點特色
                        </label>
                    </div>
                    <!-- Pet options start-->
                    <div class="form-floating mb-3">
                        <input class="form-control border-0 border-bottom" name="number" id="number">
                        <label for="age">
                            寵物(如有可詳加說明)
                        </label>
                    </div>
                    <!-- Textarea below -->
                    <div class=" form-floating mt-4">
                        <textarea name="terms" id="terms" class="form-control" readonly>
                            為了能使用本服務，您同意並承諾以下事項：

                            依本服務註冊流程之提示提供您本人正確及完整的資料，並維持、更新該資料，確保其為正確、最新及完整。
                            若您提供任何不完整、錯誤或不實的資料，本部有權暫停或終止您的帳號，並拒絕您使用本服務之全部或部分。
                            完成本服務的註冊流程後，您將收到註冊通知。您同意並承諾以下事項：

                            此帳號係不可轉讓。
                            您有責任維持此帳號及密碼的機密安全。
                            當您的帳號遭到盜用或有其他任何安全問題發生時，您將立即通知本部。
                        </textarea>
                        <label for="terms">
                            Mingle上架服務條款
                        </label>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="agree" id="agree">
                            <label class="form-check-label" for="agree">
                                我閱讀完畢，並同意以上條款
                            </label>
                        </div>
                    </div>

                    <!-- Submit button below -->
                    <div class="d-grid mt-4">
                        <button class="btn btn-dark border-0 py-3 fw-bolder" type="submit"
                            @click="userStore.addPermission('lord')">
                            送出
                        </button>
                    </div>
                </form>
            </div>

        </div>
    </div>
</template>
    
<script setup>
//// 引用函示庫
import { ref, computed, onMounted } from 'vue';
import { useUserStore } from '@store/userStore-localStorage.js';
import axios from 'axios';

//// 生命週期
onMounted(async () => {
    await loadCity();
});

//// 初始化變數
// user登入狀態處理
const userStore = useUserStore();
const isLandlord = computed(() => userStore.permissions.includes('lord'));
const cities = ref([]);
const areaOrder = ['北部區域', '中部區域', '南部區域', '東部區域', '外島區域'];

//// 定義方法
// 載入城市
const loadCity = async () => {
    const response = await axios.get(`${import.meta.env.VITE_APP_API_URL}/api/city/getCities`);
    cities.value = response.data;
}
// 將城市依area分組、排序
const groupedCities = computed(() => {
    const groups = cities.value.reduce((groups, city) => {
        if (!groups[city.area]) {
            groups[city.area] = [];
        }
        groups[city.area].push(city);
        return groups;
    }, {});

    return Object.keys(groups).sort((a, b) => areaOrder.indexOf(a) - areaOrder.indexOf(b)).reduce((sortedGroups, key) => {
        sortedGroups[key] = groups[key];
        return sortedGroups;
    }, {});
});
</script>
    
<style></style>