<template>
    <div class="container">
        <div class="info">
            <div class="title">病毒信息</div>
            <p>病毒:SARS-CoV-2,其导致疾病名称 COVID-19</p>
            <p>传染源:新馆费用的患者,无症状感染者也可能成为传染源</p>
            <!-- 由于接口变化，这里的信息已经消失了 -->
            <!-- <p>{{ covInfo.note1 }}</p> -->
        </div>

        <!-- 疫情热点 -->
        <div class="hot">
            <div class="title">
                <img class="hot-img" src="@/assets/images/hot.png" alt="" />
                <a class="more" href="#">查看更多></a>
            </div>
            <ul class="list">
                <li class="item" v-for="item in news" :key="item.id">
                    <span>最新</span>
                    {{ item.title }}
                    <img src="@/assets/images/right.png" alt="" />
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeCovInfo',
    props: {
        covInfo: Object,
        news: Array,
    },
};
</script>

<style lang="less" scoped>
.container {
    padding: 0.25rem;
    .title {
        border-left: 0.1rem solid blue;
        padding-left: 0.1rem;
        color: #666;
        font-size: 0.3rem;
        font-weight: 700;
        margin-bottom: 0.1rem;
        .hot-img {
            width: 1.2rem;
        }
        .hot-img {
            width: 1.2rem;
        }
        .more {
            float: right;
            font-size: 0.24rem;
            color: blue;
        }
    }
    p {
        line-height: 0.45rem;
        color: #666;
    }
    .hot {
        padding-top: 0.2rem;
        padding-bottom: 0.2rem;
        border-bottom: 1px solid #ddd;
        .list {
            .item {
                line-height: 0.6rem;
                color: #666;
                span {
                    background-color: rgb(245, 75, 9);
                    color: #fff;
                    border-radius: 0.08rem;
                    padding: 0 0.04rem;
                }
                img {
                    float: right;
                    width: 0.25rem;
                    padding-top: 0.19rem;
                }
            }
        }
    }
}
</style>
