import SvgIcon from './src/svg-icon'
import { App } from 'vue'

SvgIcon.install = (app: App): void => {
  // 注册组件
  app.component(SvgIcon.name, SvgIcon)
}

export default SvgIcon
