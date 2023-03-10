import { defineComponent } from 'vue'
import { pageProps } from './types'

const NAME = 'yyg-page'

export default defineComponent({
  name: NAME,
  props: pageProps,
  setup (props, context) {
    const renderOpt = () => {
      if (!context.slots.opt) {
        return null
      }
      return (
        <div class={`${NAME}__opt`}>
          {context.slots.opt()}
        </div>
      )
    }
    return () => (
      <div class={NAME}>
        <div class={`${NAME}__container`}>
          <el-scrollbar>
            <div class={`${NAME}__wrapper`} style={{ 'flex-direction': props.flexDirection }}>
              {context.slots.default && context.slots.default()}
            </div>
          </el-scrollbar>
        </div>

        { renderOpt() }
      </div>
    )
  }
})
