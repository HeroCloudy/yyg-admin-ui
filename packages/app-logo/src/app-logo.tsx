import { computed, defineComponent } from 'vue'
import { appLogoProps } from './types'

const NAME = 'yyg-app-logo'

export default defineComponent({
  name: NAME,
  props: appLogoProps,
  setup (props, context) {
    const innerIsExpand = computed(() => props.isExpand)

    const renderLogo = () => {
      let logo = props.logo
      if (innerIsExpand.value && props.expandLogo) {
        logo = props.expandLogo
      }
      if (logo) {
        return (
          <div class={`${NAME}--logo`}>
            <img src={`${logo}`} />
          </div>
        )
      }
      return null
    }

    const renderName = () => {
      return (
          <div class={`${NAME}--name`} style={{
            width: innerIsExpand.value ? 'auto' : '0',
            visibility: innerIsExpand.value ? 'visible' : 'hidden'
          }}>
            {props.appName}
          </div>
      )
    }
    return () => (
      <div class={NAME}>
        { renderLogo() }
        { renderName() }
      </div>
    )
  }
})
