
# ToggleSideBar 切换左边栏

点击该组件可以切换左侧菜单的展开收缩状态。直接使用即可。

点击后通过 _emitter_ 发送事件 _toggle-side-bar-expand_，同时也会向父组件传递 _toggle-side-bar-expand_ 事件。

## 基本使用

<preview path="../demos/toggle-side-bar/toggle-side-bar-1.vue" title="基本使用" description=" "></preview>

## 组件 API

### Attributes 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|  ----  | ----  | ----  | ----  | ----  |
| isExpand | 默认是否展开左侧菜单 | boolean | true / false | true |

### Events 事件

| 事件名 | 说明 | 参数 | 返回值 |
|  ----  | ----  | ----  | ----  |
| toggle-side-bar-expand | 切换菜单收缩展开事件 | isExpand：boolean（true：展开，false：收缩） | - |
