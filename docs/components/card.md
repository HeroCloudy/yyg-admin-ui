# Card 高级卡片

高级卡片组件，在element-plus的 card 组件基础上，支持点击标题栏折叠卡片，右上角扩展按钮

## 基本使用

<preview path="../demos/card/card-1.vue" title="基本使用" description=" "></preview>

### 默认收缩卡片
<preview path="../demos/card/card-2.vue" title="默认收缩卡片" description="collapse 默认值为 false，当设置为 true 是，卡片默认折叠收缩状态"></preview>

### 禁用折叠收缩

<preview path="../demos/card/card-3.vue" title="禁用折叠收缩" description="设置 collapsable 为false，禁用卡片的折叠收缩"></preview>

### 自定义卡片标题

<preview path="../demos/card/card-4.vue" title="自定义卡片标题" description="设置 header 插槽，自定义卡片的标题"></preview>

> 特别说明：使用了 header 插槽，opt 插槽便会失效。此外卡片的折叠展开点击事件也会失效。

## 组件 API

### Attributes 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|  ----  | ----  | ----  | ----  | ----  |
| title | 卡片的标题 | String |  | |
| collapsable | 是否可收缩 | Boolean | true / false | true |
| collapse | 默认是否收缩 | Boolean | true / false | false |

### Methods 方法

| 方法名 | 说明 | 参数 | 返回值 |
|  ----  | ----  | ----  | ----  |
|  |  |  |  |

### Events 事件

| 事件名 | 说明 | 参数 | 返回值 |
|  ----  | ----  | ----  | ----  |
| toggle | 收缩展开切换事件 | collapse - 是否收缩 | void |

### Slots 插槽

| 插槽名 | 说明 | 参数 |
|  ----  | ----  | ----  |
| header | 卡片标题插槽 | 无 |
| opt | 卡片标题栏右侧操作区域插槽 | 无 |
