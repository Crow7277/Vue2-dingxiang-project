<template>
    <div class="container">
        <div class="title">国内疫情</div>

        <van-tabs v-model="active" swipeable animated @change="change">
            <van-tab title="现在确诊">
                <div id="now" style="width: 7rem; height: 7rem"></div>
            </van-tab>
            <van-tab title="累积确诊">
                <div id="total" style="width: 7rem; height: 7rem"></div>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
import { getChildData } from '@/api/index.js';
export default {
    name: 'ChildMap',
    data() {
        return {
            active: 0,
            totalArr: [], //累积确诊
        };
    },
    methods: {
        async getChildData() {
            try {
                // 此处的getChildData为引入的getChildData，当前方法的话需要使用this调用
                const cities = await getChildData();
                // console.log(cities);
                // 对拿到的数据进行过滤
                let newArr = [];
                let totalArr = [];
                cities.forEach(item => {
                    let nowObj = {}; //现在确诊
                    let obj2 = {}; //累积确诊
                    nowObj.name = item.xArea;
                    nowObj.value = item.curConfirm;
                    newArr.push(nowObj);
                    obj2.name = item.xArea;
                    obj2.value = item.confirm;
                    totalArr.push(obj2);
                });
                this.totalArr = totalArr;
                this.$myChart.chinaMap('now', newArr);
            } catch (error) {
                this.$myChart.chinaMap('now', []); //显示 现在确诊的地图
                console.log('出错了' + error);
            }
        },
        change(index) {
            // 由于vant在切换选项卡的时候，未被显示的选项卡是不存在的，所以要做额外处理
            // 给vant组件定义change事件，这个事件会返回当前在第几个选项卡上，从0开始
            // 默认是加载0，所以当其为1的时候，再让Vue获取DOM元素
            if (index === 1) {
                // 延迟获取DOM元素
                // 此时要等dom元素都加载完成后再获取
                this.$nextTick(() => {
                    this.$myChart.chinaMap('total', this.totalArr);
                });
            }
        },
    },
    mounted() {
        this.getChildData();
    },
};
</script>

<style lang="less" scoped>
.container {
    padding: 0.2rem;
    .title {
        border-left: 0.1rem solid blue;
        padding-left: 0.1rem;
        color: #666;
        font-size: 0.3rem;
        font-weight: 700;
        margin-bottom: 0.1rem;
    }
    #now,
    #total {
        background-color: #f5f5f5;
    }
}
</style>
