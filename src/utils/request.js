import axios from 'axios'
import { ElMessage } from 'element-plus'
import store from '@/store'
// import { isCheckTimeout } from '@/utils/auth'
import config from './config'
const service = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API,
  baseURL: config.baseApi,
  timeout: 5000
})
service.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded'
// 请求拦截器
service.interceptors.request.use(
  (req) => {
    // 统一注入 token
    if (store.getters.token) {
      //   if (isCheckTimeout()) {
      //     console.log(111)
      //     // 退出操作
      //     store.dispatch('user/logout')
      //     return Promise.reject(new Error('登录过期，请重新登录'))
      //   }
      // 如果token存在，注入token
      req.headers.Authorization = `Bearer ${store.getters.token}`
    }
    return req
  },
  (error) => {
    return Promise.reject(error)
  }
)
/**
 * 响应拦截器
 */
service.interceptors.response.use(
  // 请求成功
  (response) => {
    const { message, data, statusCode } = response.data
    // 需要判断当前请求是否成功
    if (statusCode === 0) {
      return data
    } else {
      // 失败（请求成功，业务失败），消息提示
      ElMessage.error(message)
      return Promise.reject(new Error(message))
    }
  },
  // 请求失败
  (error) => {
    // 处理token超时问题
    if (
      error.response &&
      error.response.data &&
      error.response.data.code === 401
    ) {
      // token超时
      store.dispatch('user/logout')
    }
    ElMessage.error(error.message)
    return Promise.reject(error)
  }
)

/**
 * 请求核心函数
 * @param {*} options 请求配置
 */
function request(options) {
  options.method = options.method || 'get'
  if (options.method.toLowerCase() === 'get') {
    options.data = options.params
  }
  let isMock = config.mock
  if (typeof options.mock !== 'undefined') {
    isMock = options.mock
  }
  if (config.env === 'production') {
    service.defaults.baseURL = config.baseApi
  } else {
    service.defaults.baseURL = isMock ? config.mockApi : config.baseApi
  }

  return service(options)
}

;['get', 'post', 'put', 'delete', 'patch'].forEach((item) => {
  request[item] = (url, data, options) => {
    return request({
      url,
      data,
      method: item,
      ...options
    })
  }
})

export default request
