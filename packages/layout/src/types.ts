import { ExtractPropTypes, InjectionKey, Ref } from 'vue'

export const LayoutType: { [k: string]: string } = {
  LR: 'lr', // 左 - 右
  TB: 'tb', // 上 - 下
  TLR: 'tlr', // 上 - 下（左右）
  LTB: 'ltb' // 左 - 右（上下）
}

export interface LayoutValues {
  layoutTypeRef: Ref<string>;
  leftWidthRef: Ref<string>;
  topHeightRef: Ref<string>;
  isExpandRef: Ref<boolean>;
}

export const LayoutValuesKey = Symbol('Layout_Values_Key') as InjectionKey<LayoutValues>

export const defaultLeftWidth = '200px'
export const defaultLeftWidthMini = '50px'
export const defaultTopHeight = '60px'
export const defaultLayoutType = LayoutType.LR

export const layoutProps = {
  type: {
    type: String,
    required: false,
    default: defaultLayoutType,
    validator (value: string) {
      if (!value) {
        return true
      }
      return Object.keys(LayoutType).map(k => LayoutType[k]).includes(value)
    }
  },
  topHeight: {
    type: String,
    required: false,
    default: defaultTopHeight
  },
  leftWidth: {
    type: String,
    required: false,
    default: defaultLeftWidth
  },
  leftWidthMini: {
    type: String,
    required: false,
    default: defaultLeftWidthMini
  },
  isExpand: {
    type: Boolean,
    required: false,
    default: true
  },
  isShowTabBar: {
    type: Boolean,
    required: false,
    default: false
  }
} as const

export type LayoutProps = ExtractPropTypes<typeof layoutProps>
