import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
// 导入 svgIcon
import installIcons from '@/icons'
// filter
import installFilter from '@/filters'
// 指令
// import installDirective from '@/directives'
// 导入全局样式
import './styles/index.scss'
// 导入路由鉴权
import './permission'
import * as Icons from '@element-plus/icons-vue'
import { toLine } from '@/utils/icon'
const app = createApp(App)
// 全局注册Element plus 图标
for (const i in Icons) {
  // 注册全局组件
  app.component(`el-icon-${toLine(i)}`, Icons[i])
  // 组件内使用 <el-icon-xxx />
}
installElementPlus(app)
installIcons(app)
installFilter(app)
// installDirective(app)
app.use(store).use(router).use(Icons.ElementPlus).mount('#app')
