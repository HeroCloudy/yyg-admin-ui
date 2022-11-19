import { ExtractPropTypes } from 'vue'

export const toggleFullScreenProps = {
} as const

export type ToggleFullScreenProps = ExtractPropTypes<typeof toggleFullScreenProps>
