/**
 * 公共请求接口
 */
export default {
    // http://api.tianapi.com/ncov/index?key=feac16dc3abfaeb7f8fcfeb8beb35684
    host: 'http://api.tianapi.com/', //接口数据 关于病毒
    conInfo: 'ncov/index?key=feac16dc3abfaeb7f8fcfeb8beb35684', //病毒信息请求接口

    // 疫情相关接口数据
    baseUrl: 'https://cspe.api.storeapi.net/',
    // https://cspe.api.storeapi.net/api/94/219?format=json&appid=16636&sign=b7ce8b4ecbc8155ee62163f616c56b0d
    childData: 'api/94/219?format=json&appid=16636&sign=b7ce8b4ecbc8155ee62163f616c56b0d', // 国内疫情

    // https://cspe.api.storeapi.net/api/94/220?format=json&appid=16636&sign=b7ce8b4ecbc8155ee62163f616c56b0d
    worldData: 'api/94/220?format=json&appid=16636&sign=b7ce8b4ecbc8155ee62163f616c56b0d', // 世界数据

    // https://cspe.api.storeapi.net/api/94/221?format=json&city_name=%E6%AD%A6%E6%B1%89&appid=16636&sign=1b1a81dad824fa7cecccc80afbf984dc
    // 此时为武汉的城市数据，其中city_name是使用md5加密后的数据
    // 因此我们需要得md5加密后数据才可以获取所有的城市信息，不然需要一个一个的获取
    city: 'api/94/221',

    swiperBanner: 'http://iwenwiki.com/wapicovid19/ncovimg.php', //轮播图疫情

    travel: '/api/springTravel/citys?key=25309d1d363848790921460a73866c0c',
    travelQuery: '/api/springTravel/query?key=25309d1d363848790921460a73866c0c', //城市疫情&from=10191&to=10349

    selectCity: '/foo/aj/getcitycode',
};
