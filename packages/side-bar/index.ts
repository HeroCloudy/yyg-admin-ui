import SideBar from './src/side-bar'
import { App } from 'vue'

SideBar.install = (app: App): void => {
  // 注册组件
  app.component(SideBar.name, SideBar)
}

export default SideBar
