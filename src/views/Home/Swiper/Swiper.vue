<template>
    <div class="swiper">
        <swiper ref="mySwiper" :options="swiperOptions">
            <swiper-slide v-for="(item, index) in banner" :key="index">
                <img :src="item.image" style="width: 100%" alt="" />
            </swiper-slide>

            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <ul class="list">
            <li
                v-for="(item, index) in banner"
                :key="index"
                :class="{ active: index === num }"
                @click="changeSwiper(index)"
            >
                {{ item.title }}
            </li>
        </ul>
    </div>
</template>

<script>
import { getSwiperData } from '@/api/index';
export default {
    name: 'carrousel',
    data() {
        let that = this;
        return {
            banner: [],
            num: 0,
            swiperOptions: {
                pagination: {
                    el: '.swiper-pagination',
                },
                loop: true,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: true,
                },
                on: {
                    slideChangeTransitionStart: function () {
                        if (this.activeIndex === that.banner.length + 1) that.num = 0;
                        else that.num = this.activeIndex - 1;
                    },
                },
            },
        };
    },
    computed: {
        swiper() {
            return this.$refs.mySwiper.$swiper;
        },
    },
    mounted() {
        this.getSwiperData();
    },
    methods: {
        changeSwiper(index) {
            this.num = index;
            this.swiper.slideTo(index + 1, 1000, true);
        },
        async getSwiperData() {
            try {
                const res = await getSwiperData();
                this.banner = res.result;
            } catch (error) {
                console.log('出错啦！' + error);
            }
        },
    },
};
</script>

<style lang="less" scoped>
.swiper {
    .list {
        display: flex;
        li {
            flex: 1;
            background-color: #ccc;
            color: #fff;
            height: 30px;
            line-height: 30px;
            margin: 10px;
            text-align: center;
            font-size: 0.1rem;
            &.active {
                background-color: skyblue;
            }
        }
    }
}
</style>
