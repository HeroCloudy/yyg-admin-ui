import { ExtractPropTypes, PropType } from 'vue'
import { formProps } from '../../form/src/types'

export const proDescriptionProps = {
  ...formProps,
  fields: {
    type: Array as PropType<string[]>,
    required: false
  }
} as const

export type ProDescriptionProps = ExtractPropTypes<typeof proDescriptionProps>
