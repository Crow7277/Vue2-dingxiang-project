<template>
    <div class="city">
        {{ cityName }} --- 城市地图
        <div id="main" style="width: 7rem; height: 7rem"></div>
    </div>
</template>
<script>
import { getCityData } from '@/api/index';
export default {
    props: ['cityName'],
    mounted() {
        this.getCityData();
    },
    methods: {
        async getCityData() {
            try {
                const res = await getCityData(this.cityName);
                let arr = [];
                let citys = res.subList;
                citys.forEach(item => {
                    let obj = {};
                    obj.name = item.city + '市';
                    obj.value = item.confirm;
                    arr.push(obj);
                });
                console.log(arr);
                this.$myChart.cityMap('main', this.cityName, arr);
            } catch (error) {
                this.$myChart.cityMap('main', this.cityName, []);
                console.log('出错了' + error);
            }
        },
    },
};
</script>

<style lang="less" scoped>
.city {
    font-size: 0.5rem;
}
</style>
