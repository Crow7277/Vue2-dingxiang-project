import Vue from 'vue';
import App from './App.vue';
import router from './router';
import '@/assets/css/reset.css';
import '@/assets/js/phone';
import '@/plugins/vant';
import echarts from './plugins/echarts';

import VueAwesomeSwiper from 'vue-awesome-swiper'
// import style
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
Vue.use(echarts);

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
