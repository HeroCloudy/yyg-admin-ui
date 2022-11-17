import { computed, defineComponent } from 'vue'
import { svgIconProps } from './types'

const NAME = 'yyg-svg-icon'

export default defineComponent({
  name: NAME,
  props: svgIconProps,
  setup (props, context) {
    const isOnlineSvg = computed(() => /^(https?:)/.test(props.icon))

    // 渲染在线图标
    const renderOnLineSvg = () => (
      <div style={{ '--svg-icon-url': `url(${props.icon})` }}
           class={`yyg-svg-icon svg-icon-online ${props.className}`}/>
    )

    // 渲染本地图标
    const renderLocalSvg = () => (
      <div>本地图标</div>
    )

    return () => (
      <>
        {isOnlineSvg.value ? renderOnLineSvg() : renderLocalSvg()}
      </>
    )
  }
})
