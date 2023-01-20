
# Form JSON Schema表单

YygForm 基于 JSON Schema 对 Element Plus 中的 ELForm 组件进行二次封装，使用 JSONSchema 的方式实现一个表单。

## JSON Schema

大部分同学会自定义配置来实现表单，即通过解析配置的方式来替代模板代码的编写。但是，自定义配置没人知道你自定义的配置项是什么意思，于是优雅哥便采用 JSON Schema的方式来代替自定义配置。

```json
{
  "properties": {
    "name": {
      "title": "名称",
      "type": "string"
    },
    "enum": {
      "title": "枚举值",
      "type": "string",
      "oneOf": [
        {
          "const": "1",
          "title": "枚举值一"
        },
        {
          "const": "2",
          "title": "枚举值二"
        }
      ],
      "updatable": true
    }
  },
  "required": []
}
```

1. **[key]**：JSON 的key对应表单模型的字段，即对应 **prop** 和 **v-model**；
2. **type** 属性：表单项的类型，通常有如下类型：**string**、**number**、**array**、**boolean** 四种类型；
3. **title** 属性：表单项的名称，即 label 展示的内容；
4. **oneOf** 属性：单选选项，数组，每一项包含 **const** 和 **title**
5. **anyOf** 属性：多选选项，数组，每一项包含 **const** 和 **title**

## 基本使用

<preview path="../demos/form/form-1.vue" title="基本使用" description=" "></preview>

<preview path="../demos/form/form-2.vue" title="基本使用" description=" "></preview>

## 组件 API

### Attributes 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|  ----  | ----  | ----  | ----  | ----  |
| schema | 表单 JSON Schema 对象 | [JSON Schema] | - | - |
| uiSchema | 表单 UI Schema 对象 | [UI Schema] | - | - |
| model | 表单 v-model | Object | - | - |
| column | 每行展示的表单项个数 | number | - | 3 |

### Methods 方法

| 方法名 | 说明 | 参数 | 返回值 |
|  ----  | ----  | ----  | ----  |
| reset | 重置表单 | - | - |

### Events 事件

| 事件名 | 说明 | 参数 | 返回值 |
|  ----  | ----  | ----  | ----  |
| data-change | 表单值发生改变事件 | key: string(值发生改变的字段)，value: any(改变的值)，form: object(改变后的表单的值) | - |
| enter-up | 回车键事件 | - | - |

### Slots 插槽

| 插槽名 | 说明 | 参数 |
|  ----  | ----  | ----  |
| [key] | 字段的插槽 | data: object 表单的值 |
