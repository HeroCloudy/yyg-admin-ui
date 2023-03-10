import { computed, defineComponent, ref } from 'vue'
import { proFormProps } from './types'
import { SchemaProp } from '@yyg-admin-ui/utils'
import { bindMethod } from './hooks'

const NAME = 'yyg-pro-form'

export default defineComponent({
  name: NAME,
  props: proFormProps,
  setup (props, context) {
    const attrs = context.attrs

    const formRef = ref()

    const { reset, validate } = bindMethod(() => formRef.value)

    context.expose({
      reset,
      validate
    })

    const innerSchema = computed(() => {
      if (!props.fields) {
        return props.schema
      }

      const properties: Record<string, SchemaProp> = {}
      props.fields.forEach(k => {
        if (props.schema.properties[k]) {
          properties[k] = props.schema.properties[k]
        }
      })
      return {
        ...props.schema,
        properties
      }
    })

    const innerProps = computed(() => {
      const temp = { ...props }
      delete temp.fields
      return temp
    })

    return () => (
      <yyg-form {...attrs}
                ref={formRef}
                {...innerProps.value}
                schema={innerSchema.value}
                v-slots={context.slots}
      >
      </yyg-form>
    )
  }
})
