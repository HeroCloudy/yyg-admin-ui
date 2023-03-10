import { ExtractPropTypes } from 'vue'

export const sideBarProps = {
  logo: {
    type: String,
    required: false,
    default: ''
  },
  expandLogo: {
    type: String,
    required: false,
    default: ''
  },
  appName: {
    type: String,
    required: false,
    default: ''
  }
} as const

export type SideBarProps = ExtractPropTypes<typeof sideBarProps>
