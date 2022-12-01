import { defineComponent, onMounted, onUnmounted, ref } from 'vue'
import { toggleFullScreenProps } from './types'
import screenfull from 'screenfull'
// import './assets/iconfont'

const NAME = 'yyg-toggle-full-screen'

export default defineComponent({
  name: NAME,
  props: toggleFullScreenProps,
  setup (props, context) {
    const isFullScreen = ref<boolean>(false)

    const setIsFullScreen = () => {
      isFullScreen.value = screenfull.isFullscreen
    }

    onMounted(() => {
      import('./assets/iconfont' as any).then(_ => {
        if (screenfull.isEnabled) {
          screenfull.on('change', setIsFullScreen)
        }
      })
    })

    onUnmounted(() => {
      if (screenfull.isEnabled) {
        screenfull.off('change', setIsFullScreen)
      }
    })

    const onBtnClick = async () => {
      if (screenfull.isEnabled) {
        await screenfull.toggle()
      } else {
        console.log('当前浏览器不支持该全屏功能，可尝试使用F11触发全屏')
      }
    }
    return () => (
      <div class={NAME} onClick={onBtnClick}>
        <el-tooltip effect="light" content={ isFullScreen.value ? '退出全屏' : '进入全屏' }>
          <div>
            <yyg-svg-icon icon={isFullScreen.value ? 'cancel-full-screen' : 'enter-full-screen'}></yyg-svg-icon>
          </div>
        </el-tooltip>
      </div>
    )
  }
})
