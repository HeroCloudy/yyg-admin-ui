import { computed, defineComponent } from 'vue'
import { svgIconProps } from './types'

const NAME = 'yyg-svg-icon'

export default defineComponent({
  name: NAME,
  props: svgIconProps,
  setup (props, context) {
    // 判断是否是在线图标
    const isOnlineSvg = computed(() => /^(https?:)/.test(props.icon))

    // 计算出样式的 class
    const innerClassName = computed(() => {
      const baseName = `${NAME} ${props.className || ''}`
      return isOnlineSvg.value ? `${baseName} svg-icon-online` : baseName
    })

    // 渲染在线图标
    const renderOnLineSvg = () => (
      <div style={{ '--svg-icon-url': `url(${props.icon})` }}
           class={innerClassName.value}/>
    )

    // 渲染本地图标
    const renderLocalSvg = () => (
      <svg class={innerClassName.value}
           aria-hidden={true}>
        <use xlinkHref={`#icon-${props.icon}`}/>
      </svg>
    )

    return () => (
      <>
        {isOnlineSvg.value ? renderOnLineSvg() : renderLocalSvg()}
      </>
    )
  }
})
