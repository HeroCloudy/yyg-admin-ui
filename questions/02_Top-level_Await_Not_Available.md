# 打包时提示错误：Top-level await is not available in the configured target environment

错误提示如下：
```text
Top-level await is not available in the configured target environment (“chrome87”, “edge88”, “es2019”, “firefox78”, “safari13.1”)
```

### 原因

Top-level await 由 Myles Borins 提出，它是指可以让在模块的最高层中使用 await 操作符。
在这之前，你只能通过在 async 函数或 async generators 中使用 await 操作符。
Top-level await 是个新特性，打包不支持此特性。


### 解决方案

使用 vite-plugin-top-level-await 插件。

在 example 模块中添加该插件：
```shell
pnpm install vite-plugin-top-level-await -D
```

vite.config.ts 配置该插件：
```typescript
import topLevelAwait from 'vite-plugin-top-level-await'

export default defineConfig({
  plugins: [
    topLevelAwait({
      // The export name of top-level await promise for each chunk module
      promiseExportName: '__tla',
      // The function to generate import names of top-level await promise in each chunk module
      promiseImportName: i => `__tla_${i}`
    })
  ]
})
```
