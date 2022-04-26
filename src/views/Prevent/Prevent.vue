<template>
    <div>
        <img src="@/assets/images/wuzi.png" alt="" width="100%" />
        <div class="wrapper">
            <van-tabs v-model="active" swipeable animated>
                <van-tab v-for="(item, index) in arr" :title="item.title" :key="index">
                    <img :src="item.img" alt="" width="100%" />
                </van-tab>
            </van-tabs>
        </div>
    </div>
</template>

<script>
import img1 from '@/assets/images/jiujing.png';
import img2 from '@/assets/images/kouzhao.png';
export default {
    name: 'Prevent',
    data() {
        return {
            active: 0,
            arr: [
                {
                    title: '消毒剂',
                    img: img1,
                },
                {
                    title: '口罩',
                    img: img2,
                },
            ],
        };
    },
};
</script>
<style lang="less" scoped>
.wrapper {
    padding: 0.2rem;
    background-color: #3343ff;
}
</style>
