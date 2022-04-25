import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home/Home.vue';

// 异步组件
const Area = () => import('@/views/Area/Area.vue');
const Hesuan = () => import('@/views/Hesuan/Hesuan.vue');
const Prevent = () => import('@/views/Prevent/Prevent.vue');
const Travel = () => import('@/views/Travel/Travel.vue');
Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/area',
        name: 'Area',
        component: Area,
    },
    {
        path: '/hesuan',
        name: 'Hesuan',
        component: Hesuan,
    },
    {
        path: '/prevent',
        name: 'Prevent',
        component: Prevent,
    },
    {
        path: '/travel',
        name: 'Travel',
        component: Travel,
    },
];

const router = new VueRouter({
    routes,
});

export default router;
