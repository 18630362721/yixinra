import request from '@/utils/request'
/**
 * 登录
 * return promise
 */
export const login = (data) => {
  return request({
    url: '/purchase/user/login',
    method: 'POST',
    data,
    mock: false
  })
}
/**
 * 获取用户信息
 * return promise
 */
export const getUserInfo = () => {
  return request({
    url: '/sys/profile',
    mock: false
  })
}
