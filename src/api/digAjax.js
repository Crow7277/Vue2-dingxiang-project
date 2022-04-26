/**
 * 封装axios
 */
import axios from 'axios';
import Nprogress from 'nprogress';
import 'nprogress/nprogress.css';
import base from './base';

// 1. 配置base、url、超时时间
const service = axios.create({
    baseURL: [],
    // 超时时间5s
    timeout: 5000,
});

// 2. 请求拦截
service.interceptors.request.use(config => {
    // 开启进度条
    Nprogress.start();
    return config;
});

// 3. 响应拦截
service.interceptors.response.use(
    response => {
        // 4. 配置进度条显示/隐藏
        // 关闭进度条
        Nprogress.done();
        if (response.status === 200 && response.data.message == '操作成功!') {
            return response.data.retdata;
        } else if (
            response.status === 200 &&
            response.data.message === 'sign值验证不通过，加密规则请前往帮助中心查看'
        ) {
            return Promise.reject(response.data.message);
        } else {
            // console.log(response.data);
            return Promise.reject('未知错误');
        }
    },
    error => {
        // 4. 配置进度条显示/隐藏
        // 关闭进度条
        Nprogress.done();
        return Promise.reject(error);
    }
);

export default service;
