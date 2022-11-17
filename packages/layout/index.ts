import Layout from './src/layout'
import { App } from 'vue'

Layout.install = (app: App): void => {
  // 注册组件
  app.component(Layout.name, Layout)
}

export default Layout
