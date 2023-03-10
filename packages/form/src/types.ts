import { ExtractPropTypes, PropType } from 'vue'
import { Schema, UiSchema } from '@yyg-admin-ui/utils'

export const formProps = {
  schema: {
    type: Object as PropType<Schema>,
    required: true
  },
  uiSchema: {
    type: Object as PropType<UiSchema>,
    required: false,
    default: () => ({})
  },
  model: {
    type: Object as PropType<{ [key: string]: any }>,
    required: true
  },
  column: {
    type: Number,
    required: false,
    default: 3
  },
  rules: {
    type: Object,
    required: false,
    default: () => ({})
  }
} as const

export type FormProps = ExtractPropTypes<typeof formProps>
