import { defineComponent, reactive, ref, VNode, watchEffect } from 'vue'
import { formProps } from './types'
import { COMMON_EVENTS } from '../../utils'
import { renderFormItem } from './utils/form-utils'

const NAME = 'yyg-form'

export default defineComponent({
  name: NAME,
  props: formProps,
  setup (props, context) {
    const formRef = ref()
    let form = reactive<any>(props.model)

    const reset = () => {
      formRef.value && formRef.value.resetFields()
    }

    context.expose({
      reset
    })

    let defaultSpan = 24 / props.column

    watchEffect(() => {
      form = reactive<any>(props.model)
      defaultSpan = 24 / props.column
    })

    const onChange = (key: string, value: any): void => {
      context.emit(COMMON_EVENTS.EVENT_DATA_CHANGE, key, value, form)
    }

    const onEnterUp = (e: KeyboardEvent): void => {
      context.emit(COMMON_EVENTS.EVENT_ENTER_UP, e)
    }

    const renderForm = () => {
      const properties = props.schema.properties
      const formItems: VNode[] = []
      Object.keys(properties).forEach((prop: string) => {
        const item = properties[prop]
        const uiItem = props.uiSchema[prop]
        const formItem = renderFormItem(form, prop, item, uiItem, defaultSpan, onChange, context.slots, onEnterUp)
        if (formItem) {
          formItems.push(formItem)
        }
      })
      return formItems
    }

    return () => (
      <div class={NAME}>
        <el-form {...context.attrs} ref={formRef} model={form}>
          <el-row gutter={5}>
            {renderForm()}
          </el-row>
        </el-form>
      </div>
    )
  }
})
