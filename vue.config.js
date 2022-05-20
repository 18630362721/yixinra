const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  // webpack devServer 提供了代理的功能
  devServer: {
    // proxy: {
    //   // 当地址中包含 /api 的时候，触发代理
    //   '/api': {
    //     target: 'http://dev.purchaseapi.dongwei8.com/',
    //     // https://api.imooc-admin.lgdsunday.club/
    //     changeOrigin: true
    //   }
    // }
  },
  chainWebpack(config) {
    config.module.rule('svg').exclude.add(resolve('src/icons')).end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()

    // 新增规则，处理element-plus 2 错误
    config.module
      .rule('element-plus-2')
      .test(/\.mjs$/)
      .type('javascript/auto')
      .include.add(/node_modules/)
      .end()
  }
}
