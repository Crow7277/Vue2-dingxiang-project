<template>
    <div class="area">
        <div class="bg">
            <div class="content">
                <div class="title">全国风险信息汇总</div>
                <div v-show="high.length" class="th">
                    <img src="@/assets/images/high.png" alt="" />
                    高风险地区{{ high.length }}个
                </div>
                <ul class="list">
                    <li v-for="(item, index) in high" :key="index">{{ item }}</li>
                </ul>

                <div v-show="mid.length" class="th">
                    <img src="@/assets/images/mid.png" alt="" />
                    中风险地区{{ mid.length }}个
                </div>
                <ul class="list">
                    <li v-for="(item, index) in mid" :key="index">{{ item }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { getCovInfo } from '@/api/index';
export default {
    name: 'Area',
    data() {
        return {
            high: [],
            mid: [],
        };
    },
    created() {
        this.getRiskArea();
    },
    methods: {
        getRiskArea() {
            getCovInfo().then(res => {
                console.log(res);
                this.high = res.newslist[0].riskarea.high;
                this.mid = res.newslist[0].riskarea.mid;
            });
        },
    },
};
</script>

<style lang="less" scoped>
.area {
    .bg {
        height: 3.6rem;
        background: url('@/assets/images/area.png') no-repeat;
        background-size: cover;
        padding-top: 3rem;
        .content {
            background-color: #fff;
            margin: 0 0.2rem;
            border-radius: 0.2rem 0.2rem 0 0;
            padding: 0.2rem 0.2rem;
            .title {
                border-left: 0.1rem solid blue;
                padding-left: 0.1rem;
                color: #666;
                font-size: 0.37rem;
                margin-bottom: 0.1rem;
                line-height: 0.3rem;
            }
            .th {
                margin-top: 0.3rem;
                font-size: 0.3rem;
                img {
                    width: 0.4rem;
                    vertical-align: top;
                }
            }
            .list {
                li {
                    background-color: #f7f7f7;
                    border-radius: 0.1rem;
                    line-height: 0.5rem;
                    padding: 0.1rem;
                    margin: 0.15rem;
                }
            }
        }
    }
}
</style>
