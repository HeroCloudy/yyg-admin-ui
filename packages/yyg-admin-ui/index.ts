import { App } from 'vue'
import Foo from '@yyg-admin-ui/foo'
// import component end
import '../scss/index.scss'
import { installIcons } from './src/install-icons'

const components = [
  Foo
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
