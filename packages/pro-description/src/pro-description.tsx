import { computed, defineComponent } from 'vue'
import { proDescriptionProps } from './types'
import { buildSchema } from '@yyg-admin-ui/utils/src/schema'

const NAME = 'yyg-pro-description'

export default defineComponent({
  name: NAME,
  props: proDescriptionProps,
  setup (props, context) {
    const attrs = context.attrs

    const innerSchema = computed(() => {
      return buildSchema(props.schema, props.fields)
    })

    const innerProps = computed(() => {
      const temp = { ...props }
      delete temp.fields
      return temp
    })

    return () => (
      <yyg-description {...attrs}
                       {...innerProps.value}
                       schema={innerSchema.value}
                       v-slots={context.slots}>
      </yyg-description>
    )
  }
})
