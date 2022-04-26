import Vue from 'vue';
import App from './App.vue';
import router from './router';
import '@/assets/css/reset.css';
import '@/assets/js/phone';
import '@/plugins/vant';
import echarts from './plugins/echarts';
Vue.use(echarts);

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
