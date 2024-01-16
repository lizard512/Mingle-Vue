// 0. 引用函式庫
import { createRouter, createWebHistory } from "vue-router";

// 1. 引用元件及子路由
// commmon 無須權限
import ContactUs from "@views/common/ContactUs.vue";
import Home from "@views/common/Home.vue";
import Login from "@views/common/Login.vue";
import NotFound from "@views/common/NotFound.vue";
import Search from "@views/common/Search.vue";
// user 一般使用者
import Chatroom from "@views/user/Chatroom.vue";
import Order from "@views/user/Order.vue";
import Account from "@views/user/Account.vue";
import Review from "@views/user/Review.vue";
// landlord 房東身分
import Analyze from "@views/landlord/Analyze.vue";  
import HouseMaintain from "@views/landlord/HouseMaintain.vue";
import ProviderHouse from "@views/landlord/ProviderHouse.vue";
// admin 管理者身分
// 子路由
import routerRegister from "./router-register.js";
import routerOrder from "./router-order.js";

// 2. 定義路由
// 如果頁面不需要Header或Footer，請在導向該頁面的routes加入：
// meta: { hideNavbar: true }, 或 meta: { hideFooter: true },
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
    meta: { hideFooter: true },
  },
  {
    path: "/order",
    name: "Order",
    component: Order,
  },
  {
    path: "/contact-us",
    name: "ContactUs",
    component: ContactUs,
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
  },
  {
    path: "/analyze",
    name: "Analyze",
    component: Analyze
  },

  // 子路由
  ...routerRegister,
  ...routerOrder,
];


// 3. 建立路由實體並匯出
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;