<template>
    <div>
        <van-index-bar :index-list="indexList" sticky-offset-to="10">
            <div v-for="(item, name) in cityList" :key="name">
                <van-index-anchor :index="name"></van-index-anchor>
                <van-cell
                    v-for="city in item"
                    :key="city.id"
                    :title="city.name"
                    @click="goHome(city.name)"
                />
            </div>
        </van-index-bar>
    </div>
</template>

<script>
import { getCityList } from '@/api/index';
export default {
    name: 'SelectCity',
    data() {
        return {
            city: '',
            cityList: [],
            indexList: [],
        };
    },
    created() {
        this.getCityList();
    },
    methods: {
        async getCityList() {
            try {
                const res = await getCityList();
                this.cityList = res.result.citylist;
                this.indexList = Object.keys(res.result.citylist);
                console.log(this.indexListect);
            } catch (error) {
                console.log('出错了!!!' + error);
            }
        },
        goHome(name) {
            localStorage.setItem('city', name);
            this.$router.push('/');
        },
    },
};
</script>

<style lang="less" scoped></style>
