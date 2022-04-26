/**
 * 封装axios
 */
import axios from 'axios';
import Nprogress from 'nprogress';
import 'nprogress/nprogress.css';

// 1. 配置base、url、超时时间
const service = axios.create({
    baseURL: '',
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
        if (response.status === 200 && response.statusText === 'OK') return response.data;
        else return Promise.reject(response.status);
    },
    error => {
        // 4. 配置进度条显示/隐藏
        // 关闭进度条
        Nprogress.done();
        return Promise.reject(error);
    }
);

export default service;
