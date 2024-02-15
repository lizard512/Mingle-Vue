// 1. 引用子元件
import AdminCenter from "@views/admin/AdminCenter.vue";
import AdminHome from '@views/admin/admin-center/AdminHome.vue';
import AdminUser from '@views/admin/admin-center/AdminUser.vue';
import AdminWork from '@views/admin/admin-center/AdminWork.vue';
import AdminHouse from '@views/admin/admin-center/AdminHouse.vue';
import AdminOrder from '@views/admin/admin-center/AdminOrder.vue';
import AdminWorkReview from '@views/admin/admin-center/AdminWorkReview.vue';
import AdminPermission from '@views/admin/admin-center/AdminPermission.vue';


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