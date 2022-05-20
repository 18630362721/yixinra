/**
 * 环境配置封装
 */
const env = process.env.NODE_ENV || 'production'
const EnvConfig = {
  development: {
    baseApi: 'http://dev.purchaseapi.dongwei8.com/',
    mockApi:
      'https://www.fastmock.site/mock/c1c302e8baed9894c48c17e4738c092e/api'
  },
  test: {
    baseApi: '/api',
    mockApi:
      'https://www.fastmock.site/mock/c1c302e8baed9894c48c17e4738c092e/api'
  },
  production: {
    baseApi: 'prod/api',
    mockApi:
      'https://www.fastmock.site/mock/c1c302e8baed9894c48c17e4738c092e/api'
  }
}
export default {
  env,
  mock: false,
  namespace: 'yxr',
  ...EnvConfig[env]
}
