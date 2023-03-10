import { Slots, VNode } from 'vue'
import { SchemaProp, UI_COLUMN, UI_HIDDEN, UI_OPTIONS, UI_WIDTH, UiSchemaItem } from '@yyg-admin-ui/utils'

export const renderDescriptionItem = (
  item: SchemaProp,
  uiItem: UiSchemaItem = {},
  model: Record<string, any>,
  slots: Slots
): VNode | null => {
  if (uiItem[UI_HIDDEN] === true) {
    return null
  }

  const prop = item.prop!

  // 构造显示的文本
  const getDisplayValue = () => {
    const val = model[prop]

    if (item.oneOf) {
      const target = item.oneOf.find(item => item.const === val)
      return target ? target.title : val
    }

    if (item.anyOf) {
      if (typeof val === 'string') {
        const arr = val.split(',')
        return arr.map(k => {
          const target = item.anyOf?.find(item => item.const === k)
          return target ? target.title : k
        }).join(',')
      } else {
        return val.map((k: string) => {
          const target = item.anyOf?.find(item => item.const === k)
          return target ? target.title : k
        }).join(',')
      }
    }

    return val
  }

  const commonProps = uiItem[UI_OPTIONS] || {}

  return (
    <el-descriptions-item
      {...commonProps}
      span={uiItem[UI_COLUMN] || 1}
      width={uiItem[UI_WIDTH] || 100}
      label={item.title}>
      { slots[prop] ? slots[prop]!() : getDisplayValue()}
    </el-descriptions-item>
  )
}
