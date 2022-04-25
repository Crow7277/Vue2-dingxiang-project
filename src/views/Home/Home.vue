<template>
    <div class="home">
        <!-- 1.图片 -->
        <div class="banner">
            <img src="@/assets/images/1.jpg" style="width: 100%" alt="" />
            <HomeCovInfo :covInfo="covInfo" :news="news"></HomeCovInfo>
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
