import { App } from 'vue'
import Foo from '@yyg-admin-ui/foo'
import SvgIcon from '@yyg-admin-ui/svg-icon'
import Layout from '@yyg-admin-ui/layout'
import AppLogo from '@yyg-admin-ui/app-logo'
import ToggleFullScreen from '@yyg-admin-ui/toggle-full-screen'
import ToggleSideBar from '@yyg-admin-ui/toggle-side-bar'
import UserDropdown from '@yyg-admin-ui/user-dropdown'
import Card from '@yyg-admin-ui/card'
import Form from '@yyg-admin-ui/form'
import SideBar from '@yyg-admin-ui/side-bar'
import Page from '@yyg-admin-ui/page'
import Description from '@yyg-admin-ui/description'
import ProForm from '@yyg-admin-ui/pro-form'
// import component end
import '../scss/index.scss'
import { installIcons } from './src/install-icons'

export * from '@yyg-admin-ui/utils'

const components = [
  Foo,
  SvgIcon,
  Layout,
  AppLogo,
  ToggleFullScreen,
  ToggleSideBar,
  UserDropdown,
  Card,
  Form,
  SideBar,
  Page,
  Description,
  ProForm
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
