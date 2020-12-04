import axios from 'axios'

// 创建 request 请求对象
export const request = axios.create({
  baseURL: 'https://conduit.productionready.io',
  validateStatus(status) {
    return status >= 200 && status < 999
  },
})

// 导出插件，必须是一个函数，而且是默认导出
// 函数参数是 context 对象（query, params, req, res, app, store ...）
export default ({ store, app }) => {
  // 请求拦截器
  // 所有请求都会经过这个拦截器
  // 可以在这里做一些公共的业务，比如设置 token
  request.interceptors.request.use(
    config => {
      const { user } = store.state
      if (user && user.token) {
        config.headers.Authorization = `Token ${user.token}`
      }

      return config
    }
  )
  request.interceptors.response.use(
    response => {
      if (response.status === 401) {
        app.router.push({
          name: 'login'
        })
      }
      return response
    }
  )
}