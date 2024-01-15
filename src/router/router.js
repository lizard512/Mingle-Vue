// 0. 引用函式庫
import { createRouter, createWebHistory } from "vue-router";
// 1. 引用元件
import Home from "@views/common/Home.vue";
import Search from "@views/common/Search.vue";
import NotFound from "@views/common/NotFound.vue";
import Info from "@views/common/Info.vue";
import Login from "@views/common/Login.vue";
import HouseMaintain from "@views/common/HouseMaintain.vue";
import Register1 from "@views/common/Register1.vue";
import Register2 from "@views/common/Register2.vue";
import Register3 from "@views/common/Register3.vue";
import Chatroom from "@views/user/Chatroom.vue";
import Order from "@views/user/Order.vue";
import Account from "@views/user/Account.vue";
import Review from "@views/user/Review.vue";
import ProviderHouse from "@views/user/ProviderHouse.vue";

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
  },
  {
    path: "/info",
    name: "Info",
    component: Info,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/houseMaintain",
    name: "HouseMaintain",
    component: HouseMaintain,
  },
  {
    path: "/register1",
    name: "Register1",
    component: Register1,
  },
  {
    path: "/register2",
    name: "Register2",
    component: Register2,
  },
  {
    path: "/register3",
    name: "Register3",
    component: Register3,
  }, {
    path: "/account",
    name: "Account",
    component: Account,
  },
  {
    path: "/review",
    name: "Review",
    component: Review
  },
  {
    path: "/providerHouse",
    name: "ProviderHouse",
    component: ProviderHouse
  }
];
// 3. 建立路由實體並匯出
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;