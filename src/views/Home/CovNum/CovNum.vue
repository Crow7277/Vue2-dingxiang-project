<template>
    <div>
        <div class="container">
            <div class="content">
                <div class="title">截至{{ covNum.modifyTime | timerFilter }}全国数据统计</div>
                <ul class="wrap">
                    <li class="item">
                        <div class="number">
                            <span>较昨日</span>
                            {{ covNum.currentConfirmedIncr | numberFilter }}
                            <div class="bold">
                                {{ covNum.currentConfirmedCount | divisionFilter }}
                            </div>
                            <strong>现存确诊</strong>
                        </div>
                    </li>
                    <li class="item">
                        <div class="number">
                            <span>较昨日</span>
                            {{ covNum.suspectedIncr | numberFilter }}
                            <div class="bold">{{ covNum.suspectedCount | divisionFilter }}</div>
                            <strong>境外输入</strong>
                        </div>
                    </li>
                    <li class="item">
                        <div class="number">
                            <span>较昨日</span>
                            {{ covNum.seriousIncr | numberFilter }}
                            <div class="bold">{{ covNum.seriousCount | divisionFilter }}</div>
                            <strong>现存无症状</strong>
                        </div>
                    </li>
                    <li class="item">
                        <div class="number">
                            <span>较昨日</span>
                            {{ covNum.confirmedIncr | numberFilter }}
                            <div class="bold">{{ covNum.confirmedCount | divisionFilter }}</div>
                            <strong>累计确诊</strong>
                        </div>
                    </li>
                    <li class="item">
                        <div class="number">
                            <span>较昨日</span>
                            {{ covNum.deadIncr | numberFilter }}
                            <div class="bold">{{ covNum.deadCount | divisionFilter }}</div>
                            <strong>累计死亡</strong>
                        </div>
                    </li>
                    <li class="item">
                        <div class="number">
                            <span>较昨日</span>
                            {{ covNum.curedIncr | numberFilter }}
                            <div class="bold">{{ covNum.curedCount | divisionFilter }}</div>
                            <strong>累计治愈</strong>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CovNum',
    props: {
        covNum: Object,
    },
    // 过滤器
    filters: {
        timerFilter(time) {
            return new Date(time).toLocaleString('chinese', { hour12: false });
        },
        // 较昨日
        numberFilter(num) {
            if (num === 0) {
                return '';
            }
            num = num > 0 ? '+' + num : num;
            return num;
        },
        // 千位数组分割
        divisionFilter(num) {
            return Object(num).toLocaleString();
        },
    },
};
</script>

<style lang="less" scoped>
.container {
    background-color: #f5f5f5;
    padding-top: 0.3rem;
    .content {
        background-color: #fff;
        padding: 0.3rem;
        color: #666;
        border-radius: 0.2rem;
        .title {
            font-size: 0.3rem;
        }
        .wrap {
            display: flex;
            flex-wrap: wrap;
            border-radius: 0.2rem;
            box-shadow: 0 0 0.07rem 0.05rem rgba(153, 151, 151, 0.3);
            margin-top: 0.3rem;
            padding-top: 0.2rem;
            .item {
                position: relative;
                width: 33.33%;
                text-align: center;
                margin-bottom: 0.3rem;
                span {
                    color: #444;
                }
                strong {
                    color: #222;
                }
                .bold {
                    font-size: 0.4rem;
                    font-weight: 700;
                }
                &::after {
                    content: '';
                    position: absolute;
                    right: 0.1rem;
                    top: 0.1rem;
                    display: block;
                    height: 1rem;
                    border-right: 1px solid #ddd;
                }
                &:nth-child(3n)::after {
                    content: '';
                    border-right: 0;
                }
            }
            li:nth-child(1) {
                color: red;
            }
            li:nth-child(2) {
                color: rgb(6, 87, 49);
            }
            li:nth-child(3) {
                color: orange;
            }
            li:nth-child(4) {
                color: purple;
            }
            li:nth-child(5) {
                color: rgb(177, 227, 77);
            }
            li:nth-child(6) {
                color: blue;
            }
        }
    }
}
</style>
