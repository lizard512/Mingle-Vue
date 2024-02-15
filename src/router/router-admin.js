// 1. 引用子元件
import AdminCenter from "@views/admin/AdminCenter.vue";
import AdminHome from '@components/admin/AdminHome.vue';
import AdminUser from '@components/admin/AdminUser.vue';
import AdminWork from '@components/admin/AdminWork.vue';
import AdminHouse from '@components/admin/AdminHouse.vue';
import AdminOrder from '@components/admin/AdminOrder.vue';
import AdminWorkReview from '@components/admin/AdminWorkReview.vue';
import AdminPermission from '@components/admin/AdminPermission.vue';


// 2. 匯出子路由
export default [
    {
        path: "/admin-center",
        name: "AdminCenter",
        component: AdminCenter,
        meta: {hideNavbar: true, hideFooter: true, requiresAuth: true , permissions: ['admin']},
        children: [
            {
                path: '',
                name: 'AdminDefault',
                redirect: '/admin-center/home'
            },
            {
                path: 'home',
                name: 'AdminHome',
                component: AdminHome
            },
            {
                path: 'user',
                name: 'AdminUser',
                component: AdminUser
            },
            {
                path: 'work',
                name: 'AdminWork',
                component: AdminWork
            },
            {
                path: 'house',
                name: 'AdminHouse',
                component: AdminHouse
            },
            {
                path: 'order',
                name: 'AdminOrder',
                component: AdminOrder
            },
            {
                path: 'work-review',
                name: 'AdminWorkReview',
                component: AdminWorkReview
            },
            {
                path: 'permission',
                name: 'AdminPermission',
                component: AdminPermission
            },
        ]
    }
]