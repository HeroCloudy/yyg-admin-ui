import { ExtractPropTypes } from 'vue'

export const cardProps = {
  title: {
    type: String,
    required: false,
    default: null
  },
  collapse: {
    type: Boolean,
    required: false,
    default: false
  },
  collapsable: {
    type: Boolean,
    required: false,
    default: true
  }
} as const

export type CardProps = ExtractPropTypes<typeof cardProps>
