import { ExtractPropTypes, PropType } from 'vue'

/**
 * 顶部用户头像下拉选选项
 */
export interface UserDropdownItem {
  /** 选项名称 */
  title: string;

  /** 选项的点击事件 */
  click: () => void;

  /** 是否展示分割线 */
  isDivided?: boolean;
}

export const userDropdownProps = {
  avatar: {
    type: String,
    required: false,
    default: null
  },
  size: {
    type: Number,
    required: false,
    default: 36
  },
  defaultAvatarText: {
    type: String,
    required: false,
    default: 'user'
  },
  dropdownItems: {
    type: Array as PropType<UserDropdownItem[]>,
    required: false,
    default: () => ([])
  }
} as const

export type UserDropdownProps = ExtractPropTypes<typeof userDropdownProps>
export type UserDropDownList = UserDropdownItem[]
