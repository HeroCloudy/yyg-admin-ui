import { ExtractPropTypes } from 'vue'

export const appLogoProps = {
  logo: {
    type: String,
    required: false
  },
  expandLogo: {
    type: String,
    required: false
  },
  appName: {
    type: String,
    required: false
  },
  isExpand: {
    type: Boolean,
    required: false,
    default: true
  }
} as const

export type AppLogoProps = ExtractPropTypes<typeof appLogoProps>
