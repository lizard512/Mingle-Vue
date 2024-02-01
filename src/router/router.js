// 0. 引用函式庫
import { createRouter, createWebHistory } from "vue-router";


// 1. 引用元件及子路由
// commmon 無須權限
import ContactUs from "@views/common/ContactUs.vue";
import Home from "@views/common/Home.vue";
import Login from "@views/common/Login.vue";
import NotFound from "@views/common/NotFound.vue";
import WorkSearch from "@views/common/WorkSearch.vue";
import WorkDetail from "@views/common/WorkDetail.vue";
import UserProfile from "@views/common/UserProfile.vue";
import ThankYou from "@components/ThankYou.vue";
import Map from "@components/Map.vue";
// user 一般使用者
import Chatroom from "@views/user/Chatroom.vue";
import Order from "@views/user/Order.vue";
import Account from "@views/user/Account/Account.vue";
import Review from "@views/user/Review.vue";
import Payment from "@views/user/Payment.vue";
// landlord 房東身分
import Analyze from "@views/landlord/Analyze.vue";
import HouseMaintain from "@views/landlord/HouseMaintain.vue";
import WorkMaintain from "@views/landlord/WorkMaintain.vue";
import ProviderHouse from "@views/landlord/ProviderHouse.vue";
import ProviderWork from "@/views/landlord/ProviderWork.vue";
// admin 管理者身分
// 子路由
import routerRegister from "./router-register.js";
import routerOrder from "./router-order.js";

// 2. 定義路由
// 如果頁面不需要某些元件，請在導向該頁面的routes加入對應的meta屬性
// 例如：meta: { hideNavbar: true }, 或 meta: { hideFooter: true },
// 如果頁面需要登入或權限才能檢視，請在導向該頁面的routes加入：
// meta: { requiresAuth: true }, 或 permissions: ['xxx']}
const routes = [
  // commmon 無須權限
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/work-search",
    name: "WorkSearch",
    component: WorkSearch,
    meta: { hideFooter: true },
  },
  {
    path: "/user-profile/:id",
    name: "UserProfile",
    component: UserProfile,
  },
  {
    path: "/work-detail/:id",
    name: "WorkDetail",
    component: WorkDetail,
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
  {
    path: "/thankyou",
    name: "ThankYou",
    component: ThankYou,
  },
  {
    path: "/map",
    name: "Map",
    component: Map,
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
    meta: { hideFooter: true, hideBTTB:true, requiresAuth: true },
  },
  {
    path: "/order",
    name: "Order",
    component: Order,
    meta: { requiresAuth: true },
  },
  {
    path: "/payment",
    name: "Payment",
    component: Payment,
    meta: { requiresAuth: true },
  },
  //landlord 房東身分
  {
    path: "/houseMaintain",
    name: "HouseMaintain",
    component: HouseMaintain,
    meta: { requiresAuth: true , permissions: ['lord']},
  },
  {
    path: "/workMaintain",
    name: "WorkMaintain",
    component: WorkMaintain,
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
    meta: {hideFooter: true, hideBTTB:true, requiresAuth: true , permissions: ['lord']},
  },
  {
    path: "/providerWork",
    name: "ProviderWork",
    component: ProviderWork,
    meta: {hideFooter: true, hideBTTB:true, requiresAuth: true , permissions: ['lord']},
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
  ...routerOrder,
];


// 3. 建立路由實體並匯出
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;