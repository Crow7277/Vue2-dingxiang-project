<template>
    <div>
        <div class="title">出行</div>
        <van-field
            v-model="fromCity"
            is-link
            readonly
            label="出发城市"
            placeholder="请选择出发城市"
            @click="show = true"
        />
        <van-popup v-model="show" round position="bottom">
            <van-cascader
                v-model="cascaderValue"
                title="请选择出发城市"
                :options="options"
                @close="show = false"
                @finish="onFinish"
            />
        </van-popup>

        <van-field
            v-model="toCity"
            is-link
            readonly
            label="到达城市"
            placeholder="请选择到达城市"
            @click="show2 = true"
        />
        <van-popup v-model="show2" round position="bottom">
            <van-cascader
                v-model="cascaderValue2"
                title="请选择到达城市"
                :options="options"
                @close="show2 = false"
                @finish="onFinish2"
            />
        </van-popup>

        <!-- 搜索 -->
        <div class="search">
            <van-button type="primary" size="large" @click="search">搜索</van-button>
        </div>

        <!-- 政策查询结果 -->
        <div class="content">
            <div class="city" v-if="from_info">出发城市</div>
            <p>{{ from_info.high_in_desc }}</p>
            <p>{{ from_info.out_desc }}</p>

            <div class="city" v-if="to_info">到达城市</div>
            <p>{{ to_info.high_in_desc }}</p>

            <p>{{ to_info.out_desc }}</p>
        </div>
    </div>
</template>

<script>
import { getTravelData, getTravelQuery } from '@/api/index';
export default {
    name: 'Travel',
    data() {
        return {
            show: false, //初始弹窗是否显示
            show2: false, //初始弹窗是否显示
            fromCity: '',
            toCity: '',
            fromId: '',
            toId: '',
            from_info: '',
            to_info: '',
            cascaderValue: '',
            cascaderValue2: '',
            // 选项列表，children 代表子选项，支持多级嵌套
            options: [
                {
                    text: '浙江省',
                    value: '330000',
                    children: [{ text: '杭州市', value: '10347' }],
                },
                {
                    text: '江苏省',
                    value: '320000',
                    children: [{ text: '南京市', value: '10187' }],
                },
            ],
        };
    },
    methods: {
        // 全部选项选择完毕后，会触发 finish 事件
        onFinish({ value, selectedOptions }) {
            this.fromId = value;
            this.show = false;
            this.fromCity = selectedOptions.map(option => option.text).join('/');
        },
        onFinish2({ value, selectedOptions }) {
            this.toId = value;
            this.show2 = false;
            this.toCity = selectedOptions.map(option => option.text).join('/');
        },
        async getTravelData() {
            try {
                const res = await getTravelData();
                let data = res.result;
                let arr = []; //全国的省
                data.map(item => {
                    let obj = {};
                    obj.text = item.province;
                    obj.value = item.province_id;
                    obj.children = [];
                    item.citys.map(city => {
                        let objCity = {};
                        objCity.text = city.city;
                        objCity.value = city.city_id;
                        obj.children.push(objCity);
                    });
                    arr.push(obj);
                });
                this.options = arr;
            } catch (error) {
                console.log('出错啦' + error);
            }
        },
        async search() {
            try {
                const res = await getTravelQuery({
                    from: this.fromId,
                    to: this.toId,
                });
                this.from_info = res.result.from_info;
                this.to_info = res.result.to_info;
            } catch (error) {
                console.log('出错了！' + error);
            }
        },
    },
    mounted() {
        this.getTravelData();
        this.search();
    },
};
</script>

<style lang="less" scoped>
.title {
    padding: 0.2rem;
}
.search {
    margin: 0.2rem;
}
.content {
    padding: 10px;
    .city {
        font-size: 12px;
        background-color: lightgreen;
    }
}
</style>
