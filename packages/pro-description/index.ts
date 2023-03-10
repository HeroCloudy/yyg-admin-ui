import ProDescription from './src/pro-description'
import { App } from 'vue'

ProDescription.install = (app: App): void => {
  // 注册组件
  app.component(ProDescription.name, ProDescription)
}

export default ProDescription
