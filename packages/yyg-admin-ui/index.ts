import { App } from 'vue'
import Foo from '@yyg-admin-ui/foo'
import SvgIcon from '@yyg-admin-ui/svg-icon'
import Layout from '@yyg-admin-ui/layout'
// import component end
import '../scss/index.scss'
import { installIcons } from './src/install-icons'

const components = [
  Foo,
  SvgIcon,
  Layout
] // components

// 全局动态添加组件
const install = (app: App): void => {
  installIcons(app)
  components.forEach(component => {
    app.component(component.name, component)
  })
}

export default {
  install
}
