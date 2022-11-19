import ToggleFullScreen from './src/toggle-full-screen'
import { App } from 'vue'

ToggleFullScreen.install = (app: App): void => {
  // 注册组件
  app.component(ToggleFullScreen.name, ToggleFullScreen)
}

export default ToggleFullScreen
