<template>
    <div class="home">
        <!-- 1.图片 -->
        <div class="banner">
            <img src="@/assets/images/1.jpg" style="width: 100%" alt="" />
            <!-- 热点信息 -->
            <HomeCovInfo :covInfo="covInfo" :news="news"></HomeCovInfo>
            <!-- 导航 -->
            <ul class="list">
                <li class="item">
                    <router-link to="area">
                        <img src="@/assets/images/1.png" alt="" />
                        <div>风险地区</div>
                    </router-link>
                </li>
                <li class="item">
                    <router-link to="hesuan">
                        <img src="@/assets/images/2.png" alt="" />
                        <div>核酸检测</div>
                    </router-link>
                </li>
                <li class="item">
                    <router-link to="prevent">
                        <img src="@/assets/images/3.png" alt="" />
                        <div>防疫物资</div>
                    </router-link>
                </li>
                <li class="item">
                    <router-link to="travel">
                        <img src="@/assets/images/4.png" alt="" />
                        <div>出行政策</div>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { getCovInfo } from '@/api/index.js';
import HomeCovInfo from './Covinfo/CovInfo';
export default {
    name: 'Home',
    components: { HomeCovInfo },
    data() {
        return {
            covInfo: {},
            news: [],
        };
    },
    created() {
        this.getData();
    },
    methods: {
        getData() {
            getCovInfo().then(res => {
                console.log(res);
                let data = res.newslist[0].desc;
                this.covInfo = {
                    note1: data.note1,
                    note2: data.note2,
                    note3: data.note3,
                    remark1: data.remark1,
                    remark2: data.remark2,
                    remark3: data.remark3,
                };

                // 热点新闻
                this.news = res.newslist[0].news;
            });
        },
    },
};
</script>
<style lang="less" scoped>
.list {
    display: flex;
    .item {
        flex: 1;
        text-align: center;
        img {
            width: 0.8rem;
        }
    }
}
</style>
