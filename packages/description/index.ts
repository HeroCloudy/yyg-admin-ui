import Description from './src/description'
import { App } from 'vue'

Description.install = (app: App): void => {
  // 注册组件
  app.component(Description.name, Description)
}

export default Description
