import { ExtractPropTypes, PropType } from 'vue'
import { formProps } from '../../form/src/types'

export const proFormProps = {
  ...formProps,
  fields: {
    type: Array as PropType<string[]>,
    required: false
  }
} as const

export type ProFormProps = ExtractPropTypes<typeof proFormProps>
