import axios from "axios";
let apibaseurl = 'https://api.cnblogs.com/api'
let access_token = 'AEB65EDA8CA9D962C1379033EF864662A06E3E7E5504CFB7C685B8EFD76FBEB2'
// 创建一个 axios 实例

const service = axios.create({
  baseURL: apibaseurl, // 基础 URL，可以通过环境变量设置

  timeout: 5000, // 请求超时时间
});

// 请求拦截器

service.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么

    // 比如在请求头中添加 token
   
    config.headers["Authorization"] = "Bearer " + access_token;

    return config;
  },

  (error) => {
    // 对请求错误做些什么

    return Promise.reject(error);
  }
);

// 响应拦截器

service.interceptors.response.use(
  (response) => {
    // 对响应数据做些什么
    return response.data;
  },

  (error) => {
    // 对响应错误做些什么

    return Promise.reject(error);
  }
);

export default service;
