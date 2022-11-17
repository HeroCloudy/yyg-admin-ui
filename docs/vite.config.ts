import { defineConfig } from 'vite'
import VueJsx from '@vitejs/plugin-vue-jsx'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import * as path from 'path'

export default defineConfig({
  plugins: [
    VueJsx(),
    createSvgIconsPlugin({
      // 要缓存的图标文件夹
      iconDirs: [path.resolve(__dirname, 'demos/icons')],
      // 执行 icon name 的格式
      symbolId: 'icon-[name]'
    })
  ],
  server: {
    port: 3100
  }
})
