import ProForm from './src/pro-form'
import { App } from 'vue'

ProForm.install = (app: App): void => {
  // 注册组件
  app.component(ProForm.name, ProForm)
}

export default ProForm
