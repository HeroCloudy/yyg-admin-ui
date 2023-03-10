import { defineComponent, reactive, ref, watchEffect, VNode, computed } from 'vue'
import { formProps } from './types'
import { EventsParam, renderFormItem } from './utils'
import { buildRules } from './utils/rule-utils'

const NAME = 'yyg-form'

export default defineComponent({
  name: NAME,
  props: formProps,
  setup (props, context) {
    // 表单元素的引用
    const formRef = ref()
    // 表单的值
    let form = reactive<any>(props.model)

    // 重置表单
    const reset = () => {
      formRef.value && formRef.value.resetFields()
    }

    const validate = (callback: any) => {
      formRef.value && formRef.value.validate(callback)
    }

    // 对外暴露的方法
    context.expose({
      reset,
      validate
    })

    let defaultSpan = 24 / props.column

    watchEffect(() => {
      form = reactive<any>(props.model)
      defaultSpan = 24 / props.column
    })

    const onChange = (key: string, value: any): void => {
      context.emit('data-change', key, value, form)
    }

    const onEnterUp = (e: KeyboardEvent): void => {
      context.emit('enter-up', e, props.model)
    }

    const events: EventsParam = {
      change: onChange,
      enter: onEnterUp
    }

    const renderForm = () => {
      const { properties } = props.schema
      const formItems: VNode[] = []
      Object.keys(properties).forEach((prop: string) => {
        const itemSchema = properties[prop]
        itemSchema.prop = itemSchema.prop || prop

        const uiItem = props.uiSchema[prop]
        const formItem = renderFormItem(itemSchema, uiItem, props.model, context.slots, defaultSpan, events)
        if (formItem) {
          formItems.push(formItem)
        }
      })
      return formItems
    }

    const innerRules = computed(() => {
      const { schema, rules } = props
      return buildRules(rules, schema)
    })

    return () => (
      <div class={NAME}>
        <el-form {...context.attrs} ref={formRef} model={form} rules={innerRules.value}>
          <el-row gutter={5}>
            {renderForm()}
          </el-row>
        </el-form>
      </div>
    )
  }
})
