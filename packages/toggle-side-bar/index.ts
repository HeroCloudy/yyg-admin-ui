import ToggleSideBar from './src/toggle-side-bar'
import { App } from 'vue'

ToggleSideBar.install = (app: App): void => {
  // 注册组件
  app.component(ToggleSideBar.name, ToggleSideBar)
}

export default ToggleSideBar
