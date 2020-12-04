// 基于axios 封装的请求模块
import axios from 'axios'
const request = axios.create({
    baseURL: 'https://conduit.productionready.io'
})
// 请求拦截器
// 响应拦截器
// 请求拦截器
// 所有请求都会经过这个方法
// request.interceptors.request.use(config => {
//     // config.headers.Authorization = `Token 用户Token`
//     // console.log(config)
//     // config.headers.Authorization = `Token 用户Token`
//     return config
//   }, error => {
//     // 如果请求失败了（请求还没发出去）就会进入这里
//     return Promise.reject(error)
//   })
export default request