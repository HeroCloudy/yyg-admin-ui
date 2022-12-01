import UserDropdown from './src/user-dropdown'
import { App } from 'vue'

UserDropdown.install = (app: App): void => {
  // 注册组件
  app.component(UserDropdown.name, UserDropdown)
}

export default UserDropdown
