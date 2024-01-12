// 0. 引用函式庫
import { createRouter, createWebHistory } from "vue-router";
// 1. 引用元件
import Home from "@views/common/Home.vue";
import Search from "@views/common/Search.vue";
import NotFound from "@views/common/NotFound.vue";
import Chatroom from "@views/user/Chatroom.vue";
import Order from "@views/user/Order.vue";
import Account from "@views/user/Account/Account.vue";
import Review from "@views/user/Review.vue";
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
  {
    path: "/chatroom",
    name: "Chatroom",
    component: Chatroom,
  },
  {
    path: "/order",
    name: "Order",
    component: Order,
  }, {
    path: "/321",
    name: "Account",
    component: Account,
  },
  {
    path: "/review",
    name: "Review",
    component: Review
  }
];
// 3. 建立路由實體並匯出
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;