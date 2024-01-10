// 0. 引用函式庫
import { createRouter, createWebHistory } from "vue-router";
// 1. 引用元件
import Home from "@views/common/Home.vue";
import Search from "@views/functional/Search.vue";
import NotFound from "@views/common/NotFound.vue";
// 2. 定義路由
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/search",
    name: "Search",
    component: Search,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "Notfound",
    component: NotFound,
  },
];
// 3. 建立路由實體並匯出
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;