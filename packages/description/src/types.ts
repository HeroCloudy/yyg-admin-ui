import { ExtractPropTypes } from 'vue'
import { formProps } from '../../form/src/types'

export const descriptionProps = {
  ...formProps
} as const

export type DescriptionProps = ExtractPropTypes<typeof descriptionProps>
