import { defineComponent, onMounted, ref, watch } from 'vue'
import { toggleSideBarProps } from './types'
import { COMMON_EVENTS, emitter } from '@yyg-admin-ui/utils'

const NAME = 'yyg-toggle-side-bar'

export default defineComponent({
  name: NAME,
  props: toggleSideBarProps,
  emits: [COMMON_EVENTS.EVENT_EXPAND_SIDE_BAR],
  setup (props, context) {
    console.log(COMMON_EVENTS.EVENT_EXPAND_SIDE_BAR)

    onMounted(() => {
      import('./assets/iconfont' as any).then(_ => {
        console.log('load success')
      })
    })

    const innerIsExpand = ref<boolean>(props.isExpand)
    watch(() => props.isExpand, (val) => {
      innerIsExpand.value = val
    })
    const onBtnClick = () => {
      innerIsExpand.value = !innerIsExpand.value
      emitter.emit(COMMON_EVENTS.EVENT_EXPAND_SIDE_BAR, innerIsExpand.value)
      context.emit(COMMON_EVENTS.EVENT_EXPAND_SIDE_BAR, innerIsExpand.value)
    }
    return () => {
      const className = innerIsExpand.value ? `${NAME}` : `${NAME}--is-collapse`
      return (
        <div class={className} onClick={onBtnClick}>
           <el-tooltip effect="light" content={ innerIsExpand.value ? '收起菜单' : '展开菜单' }>
             <div>
               <yyg-svg-icon icon="menu-btn"></yyg-svg-icon>
             </div>
           </el-tooltip>
        </div>
      )
    }
  }
})
