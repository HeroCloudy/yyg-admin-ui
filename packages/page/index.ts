import Page from './src/page'
import { App } from 'vue'

Page.install = (app: App): void => {
  // 注册组件
  app.component(Page.name, Page)
}

export default Page
