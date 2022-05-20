// 1.导入所有的 Svg 图标
// 2.完成 SvgIcon 的全局注册
import SvgIcon from '@/components/SvgIcon'

const svgRequire = require.context('./svg', false, /\.svg$/)
// 此时返回一个 Require 函数，可以接受一个 request 的参数，用于require 的导入
// 该函数提供了三个属性，可以通过 svgRequire.keys() 获得所有的Svg的图标
// 遍历图标，把图标作为request参数参入到svgRequire导入函数中，完成本地svg图标
svgRequire.keys().forEach(svgIcon => svgRequire(svgIcon))
export default app => {
  app.component('svg-icon', SvgIcon)
}
