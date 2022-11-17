import { ExtractPropTypes } from 'vue'

export const svgIconProps = {
  // SVG 图标名称或在线URL
  icon: {
    type: String,
    required: true,
    default: ''
  },
  // 图标类名
  className: {
    type: String,
    required: false,
    default: ''
  }
} as const

export type SvgIconProps = ExtractPropTypes<typeof svgIconProps>
