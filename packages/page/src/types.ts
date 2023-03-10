import { ExtractPropTypes, PropType } from 'vue'

export const pageProps = {
  flexDirection: {
    type: String as PropType<'row' | 'column'>,
    required: false,
    default: 'column'
  },
  column: {
    type: Number,
    required: false,
    default: 1
  }
} as const

export type PageProps = ExtractPropTypes<typeof pageProps>
