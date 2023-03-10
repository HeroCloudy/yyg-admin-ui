import { defineComponent, VNode } from 'vue'
import { descriptionProps } from './types'
import { renderDescriptionItem } from './render'

const NAME = 'yyg-description'

export default defineComponent({
  name: NAME,
  props: descriptionProps,
  setup (props, context) {
    const renderDescriptions = () => {
      const { properties } = props.schema
      const items: VNode[] = []
      Object.keys(properties).forEach((prop: string) => {
        const itemSchema = properties[prop]
        itemSchema.prop = itemSchema.prop || prop

        const uiItem = props.uiSchema[prop]
        const descriptionItem = renderDescriptionItem(itemSchema, uiItem, props.model, context.slots)
        if (descriptionItem) {
          items.push(descriptionItem)
        }
      })
      return items
    }

    return () => {
      const { column } = props
      return (
        <el-descriptions {...context.attrs}
                         column={column} border>
          {renderDescriptions()}
        </el-descriptions>
      )
    }
  }
})
