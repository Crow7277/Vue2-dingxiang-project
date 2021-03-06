import Vue from 'vue';
import VueRouter from 'vue-router';
const Home = () => import('@/views/Home/Home.vue');

// 异步组件
const Area = () => import('@/views/Area/Area.vue');
const Hesuan = () => import('@/views/Hesuan/Hesuan.vue');
const Prevent = () => import('@/views/Prevent/Prevent.vue');
const Travel = () => import('@/views/Travel/Travel.vue');
const City = () => import('@/views/City/City.vue');
const SelectCity = () => import('@/views/selectCity/SelectCity.vue');
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
    {
        path: '/city/:cityName',
        name: 'City',
        component: City,
        props: true,
    },
    {
        path: '/selectcity',
        name: 'SelectCity',
        component: SelectCity,
        props: true,
    },
];
const router = new VueRouter({
    routes,
});

export default router;
