// 1. 引用子元件
import Order from "@views/user/Order.vue";
import Order1 from '@components/order/Order1.vue';
import Order2 from '@components/order/Order2.vue';
import Order3 from '@components/order/Order3.vue';

// 2. 匯出子路由
export default [
    {
        path: '/order',
        name: "Order",
        component: Order,
        meta: { requiresAuth: true },
        children: [
            {
                path: '',
                name: 'OrderDefault',
                redirect: '/order/order1'
            },
            {
                path: 'order1',
                name: 'Order1',
                component: Order1

            },
            {
                path: 'order2', 
                name: 'Order2',
                component: Order2


            },
            {
                path: 'order3',
                name: 'Order3',
                component: Order3
            }
        ]
    }
]