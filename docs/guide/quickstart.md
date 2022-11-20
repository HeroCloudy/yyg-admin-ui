# 快速开始

## 安装

由于 yyg-admin-ui 是依赖于 element-plus 的，所以需要分别安装 element-plus 和 yyg-admin-ui

```shell
pnpm install element-plus
pnpm install yyg-admin-ui
```

## 引入

在 `main.ts` 或 `main.js` 中分别引入 `element-plus` 和 `yyg-admin-ui`

```javascript
// ...

import ElementPlus from 'element-plus'
import HeroAdminUi from 'yyg-admin-ui'
import 'element-plus/dist/index.css'

// ...

const app = createApp(App)
app.use(ElementPlus)
app.use(YygAdminUi)

// ...
```
