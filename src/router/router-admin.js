// 1. 引用子元件
import AdminCenter from "@views/admin/AdminCenter.vue";
import AdminHome from '@components/admin/AdminHome.vue';
import AdminWork from '@components/admin/AdminWork.vue';

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
                path: 'work',
                name: 'AdminWork',
                component: AdminWork
            },
        ]
    }
]