// 1. 引用子元件
import Register from "@views/common/Register.vue";
import Register1 from '@components/register/Register1.vue'
import Register2 from '@components/register/Register2.vue'
import Register3 from '@components/register/Register3.vue'
import Register4 from '@components/register/Register4.vue'

// 2. 匯出子路由
export default [
    {
        path: '/register',
        name: "Register",
        component: Register,
        meta:{ noEntryWithAuth: true},
        children: [
            {
                path: '',
                name: 'RegisterDefault',
                redirect: '/register/register1'
            },
            {
                path: 'register1',
                name: 'Register1',
                component: Register1
            },
            {
                path: 'register2',
                name: 'Register2',
                component: Register2
            },
            {
                path: 'register3',
                name: 'Register3',
                component: Register3
            },
            {
                path: 'register4',
                name: 'Register4',
                component: Register4
            },
        ]
    }
]