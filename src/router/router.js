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
import Account from "@views/user/Account/Account.vue";
import Review from "@views/user/Review.vue";
// landlord 房東身分
import Analyze from "@views/landlord/Analyze.vue";
import HouseMaintain from "@views/landlord/HouseMaintain.vue";
import ProviderHouse from "@views/landlord/ProviderHouse.vue";
// admin 管理者身分
// 子路由
import routerRegister from "./router-register.js";


// 2. 定義路由
// 如果頁面不需要Header或Footer，請在導向該頁面的routes加入：
// meta: { hideNavbar: true }, 或 meta: { hideFooter: true },
// 如果頁面需要登入才能檢視，請在導向該頁面的routes加入：
// meta: { requiresAuth: true },
const routes = [
  // commmon 無須權限
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
    path: "/contact-us",
    name: "ContactUs",
    component: ContactUs,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  // user 一般使用者
  {
    path: "/account",
    name: "Account",
    component: Account,
    meta: { requiresAuth: true },
  },
  {
    path: "/chatroom",
    name: "Chatroom",
    component: Chatroom,
    meta: { hideFooter: true, requiresAuth: true },
  },
  {
    path: "/order",
    name: "Order",
    component: Order,
    meta: { requiresAuth: true },
  },
  // landlord 房東身分
  {
    path: "/houseMaintain",
    name: "HouseMaintain",
    component: HouseMaintain,
    meta: { requiresAuth: true , permissions: ['lord']},
  },
  {
    path: "/review",
    name: "Review",
    component: Review,
    meta: { requiresAuth: true , permissions: ['lord']},
  },
  {
    path: "/providerHouse",
    name: "ProviderHouse",
    component: ProviderHouse,
    meta: {hideFooter: true, requiresAuth: true , permissions: ['lord']},
  },
  {
    path: "/analyze",
    name: "Analyze",
    component: Analyze,
    meta: { requiresAuth: true , permissions: ['lord']},
  },
  // admin 管理者身分

  // 子路由
  ...routerRegister,
];


// 3. 建立路由實體並匯出
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;