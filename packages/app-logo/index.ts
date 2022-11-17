import AppLogo from './src/app-logo'
import { App } from 'vue'

AppLogo.install = (app: App): void => {
  // 注册组件
  app.component(AppLogo.name, AppLogo)
}

export default AppLogo
