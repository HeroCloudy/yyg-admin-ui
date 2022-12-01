import { ExtractPropTypes } from 'vue'

export const toggleSideBarProps = {
  isExpand: {
    type: Boolean,
    required: false,
    default: true
  }
} as const

export type ToggleSideBarProps = ExtractPropTypes<typeof toggleSideBarProps>
