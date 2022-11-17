
# SvgIcon SVG 图标

SvgIcon 组件用于显示 SVG 图标，既可以支持项目本地的 SVG 图标，也可以支持在线的 SVG 图标。

## 基本使用

#### 使用在线图标

<preview path="../demos/svg-icon/svg-icon-1.vue" title="在线图标" description="显示在线图标，直接将图标的 URL 传给组件的 icon 属性即可。"></preview>


#### 使用本地图标

使用前需要在工程中做如下配置：

1. 在工程中安装 vite 插件：
```shell
pnpm install vite-plugin-svg-icons -D
```

2. 在 *vite.config.ts* 文件中配置该插件：
```typescript
// ...
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
// ...

export default defineConfig({
	// ...
  plugins: [
    // ...
    createSvgIconsPlugin({
      // 要缓存的图标文件夹
      iconDirs: [path.resolve(__dirname, 'src/svg')],
      // 执行 icon name 的格式
      symbolId: 'icon-[name]'
    })
  ]
  // ...
}
```

_iconDirs_ 指定了本地 SVG 图标的路径（按照上述配置，图标需要存放在 _src/svg_ 目录下）

3. 在 _main.ts_ 中添加下列语句：
```typescript
import 'virtual:svg-icons-register'
```

4. 将 svg 图标放入到 _iconDirs_ 配置的目录即可。

<preview path="../demos/svg-icon/svg-icon-2.vue" title="本地图标" description="显示本地图标，将图标名称传给组件的 icon 属性。"></preview>

#### 自定义样式

通过 _className_ 属性设置图标的样式，但此时 _className_ 对应的类不能放在 _scoped_ 中。

<preview path="../demos/svg-icon/svg-icon-3.vue" title="自定义样式" description="通过 className 属性指定全局样式类"></preview>

## 组件 API

### Attributes 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|  ----  | ----  | ----  | ----  | ----  |
| icon | 图标名称或图标URL | string | - | - |
| className | 自定义图标 class | string | - | '' |
