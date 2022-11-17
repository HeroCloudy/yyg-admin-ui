import { App } from 'vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const camelCaseToLine = (v: string): string => {
  return v.replace(/([A-Z])/g, '-$1').toLowerCase()
}

export const installIcons = (app: App): void => {
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(`el-icon${camelCaseToLine(key)}`, component)
  }
}
