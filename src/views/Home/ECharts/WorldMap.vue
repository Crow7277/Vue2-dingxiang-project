<template>
    <div class="container">
        <div class="title">世界疫情</div>
        <div id="main" style="width: 7rem; height: 7rem"></div>
    </div>
</template>

<script>
import { getWorldData } from '@/api/index.js';
export default {
    name: 'WorldMap',
    data() {
        return {
            active: 0,
            totalArr: [], //累积确诊
        };
    },
    methods: {
        async getWorldData() {
            try {
                const countrys = await getWorldData();
                let newArr = [];
                countrys.forEach(item => {
                    let nowObj = {}; //现在确诊
                    nowObj.name = item.xArea;
                    nowObj.value = item.confirm;
                    newArr.push(nowObj);
                });
                this.$myChart.worldMap('main', newArr);
            } catch (error) {
                this.$myChart.worldMap('main', []); //显示 现在确诊的地图
                console.log('出错了' + error);
            }
        },
    },
    mounted() {
        this.getWorldData();
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
    #main {
        background-color: #f5f5f5;
    }
}
</style>
