/**
 * 封装所有请求函数,返回promise
 */
import ajax from './ajax';
import base from './base';

/**
 *
 * @returns 获取病毒信息
 */
export const getCovInfo = () => {
    return ajax.get(base.host + base.conInfo);
};
