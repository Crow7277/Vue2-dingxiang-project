/**
 * 封装所有请求函数,返回promise
 */
import ajax from './ajax';
import base from './base';
import digAjax from './digAjax';
import elseAjax from './elseAjax';
import md5 from 'md5-js';

/**
 *
 * @returns 获取病毒信息
 */
export const getCovInfo = () => {
    return ajax.get(base.host + base.conInfo);
};
/**
 *
 * @returns 获取中国地图信息
 */
export const getChildData = () => {
    return digAjax.get(base.baseUrl + base.childData);
};

/**
 *
 * @returns 获取世界地图信息
 */
export const getWorldData = () => {
    return digAjax.get(base.baseUrl + base.worldData);
};

/**
 *  MD5加密规则解析城市名称之后使用字符串拼接
 * @returns 获取城市信息
 */
export const getCityData = city_name => {
    // https://cspe.api.storeapi.net/api/94/221?format=json&city_name=%E6%AD%A6%E6%B1%89&appid=16636&sign=1b1a81dad824fa7cecccc80afbf984dc
    // 此时为武汉的城市数据，其中city_name是使用md5加密后的数据
    // 因此我们需要得md5加密后数据才可以获取所有的城市信息，不然需要一个一个的获取\
    // 加密规则：appid16636city_name武汉formatjson+密钥
    // 此时使用md5插件解析
    let Str = md5(`appid16636city_name${city_name}formatjsonf3acbcc413c64494e2b963323c2d8d3b`);
    return digAjax.get(
        base.baseUrl + base.city + `?format=json&city_name=${city_name}&appid=16636&sign=${Str}`
    );
};

/**
 *
 * @returns 获取轮播图数据
 */
export const getSwiperData = () => {
    return elseAjax.get(base.swiperBanner);
};

/**
 *
 * @returns 查询出行数据
 */
export const getTravelData = () => {
    return elseAjax.get(base.travel);
};

/**
 *
 * @returns 出行城市政策查询
 */
export const getTravelQuery = params => {
    return elseAjax.get(base.travelQuery, {
        params,
    });
};


/**
 *
 * @returns 城市列表
 */
 export const getCityList = () => {
    return elseAjax.get(base.selectCity);
};
