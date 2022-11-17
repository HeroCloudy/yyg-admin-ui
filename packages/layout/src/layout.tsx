import { computed, defineComponent, ref } from 'vue'
import { layoutProps, LayoutType } from './types'

const NAME = 'yyg-layout'

export default defineComponent({
  name: NAME,
  props: layoutProps,
  setup (props, { slots }) {
    const baseClassName = NAME + ' full-screen '

    const isExpandByChild = ref<boolean>(props.isExpand)

    const innerType = computed(() => props.type)
    const innerIsExpand = computed(() => isExpandByChild.value)
    const innerLeftWidth = computed(() => innerIsExpand.value ? props.leftWidth : props.leftWidthMini)
    const innerTopHeight = computed(() => props.topHeight)

    const buildMain = () => {
      return (
        <div>main</div>
      )
    }

    const buildLR = () => {
      return (
        <div class={baseClassName + ' f-r'}>
          <div class='left oy-a' style={{ width: innerLeftWidth.value }}>{slots.left && slots.left()}</div>
          <div class='right f-1 oy-h'>
            {buildMain()}
          </div>
        </div>
      )
    }

    const buildTB = () => {
      return (
        <div class={baseClassName + ' f-c'}>
          <div class='top' style={{ height: innerTopHeight.value }}>{slots.top && slots.top()}</div>
          <div class='bottom f-1 oy-h'>
            {buildMain()}
          </div>
        </div>
      )
    }

    const buildLTB = () => {
      return (
        <div class={baseClassName + ' f-r'}>
          <div class='left' style={{ width: innerLeftWidth.value }}>{slots.left && slots.left()}</div>
          <div class='right f-1 f-c o-h'>
            <div class='top' style={{ height: innerTopHeight.value }}>{slots.top && slots.top()}</div>
            <div class='bottom f-1 oy-h'>
              {buildMain()}
            </div>
          </div>
        </div>
      )
    }

    const buildTLR = () => {
      return (
        <div class={baseClassName + ' f-c'}>
          <div class='top' style={{ height: innerTopHeight.value }}>{slots.top && slots.top()}</div>
          <div class='bottom f-1 f-r oy-h'>
            <div class='left' style={{ width: innerLeftWidth.value }}>{slots.left && slots.left()}</div>
            <div class='right f-1 ox-h'>
              {buildMain()}
            </div>
          </div>
        </div>
      )
    }

    const buildLayout = () => {
      if (innerType.value === LayoutType.LR) {
        return buildLR()
      } else if (innerType.value === LayoutType.TB) {
        return buildTB()
      } else if (innerType.value === LayoutType.LTB) {
        return buildLTB()
      } else if (innerType.value === LayoutType.TLR) {
        return buildTLR()
      }
    }
    return () => {
      return buildLayout()
    }
  }
})
