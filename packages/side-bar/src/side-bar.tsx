import { computed, defineComponent, onMounted, onUnmounted, ref } from 'vue'
import { sideBarProps } from './types'
import { useLayoutValues } from '../../layout/src/hooks/use-layout-values'
import { useRenderAppLogo } from '../../layout/src/hooks/use-render-app-logo'
import { COMMON_EVENTS, emitter } from '@yyg-admin-ui/utils'

const NAME = 'yyg-side-bar'

export default defineComponent({
  name: NAME,
  props: sideBarProps,
  setup (props, context) {
    const layoutValues = useLayoutValues()
    const isExpendRef = ref(layoutValues.isExpandRef.value)

    const renderSiteInfo = () => {
      const logoRef = computed(() => props.logo)
      const expandLogoRef = computed(() => props.expandLogo)
      const appNameRef = computed(() => props.appName)
      return useRenderAppLogo(logoRef.value, expandLogoRef.value, appNameRef.value, layoutValues.layoutTypeRef.value, isExpendRef.value, 'sideBar')
    }

    // const router = useRouter()
    // const routes = computed(() => {
    //   const filterRoutes = filterRouters(router.getRoutes())
    //   return generateMenus(filterRoutes)
    // })

    // const route = useRoute()
    // const activeMenu = computed(() => route.path)
    const innerCollapse = ref(false)

    const expandCallBack = (isExpand: boolean) => {
      innerCollapse.value = !isExpand
      console.log('innerCollapse.value: ', innerCollapse.value)
    }

    onMounted(() => {
      emitter.on(COMMON_EVENTS.EVENT_EXPAND_SIDE_BAR, expandCallBack)
    })

    onUnmounted(() => {
      emitter.off(COMMON_EVENTS.EVENT_EXPAND_SIDE_BAR, expandCallBack)
    })

    const renderMenu = () => {
      return (
        <div class={`${NAME}--menu`}>
          <el-scrollbar>
            <h1>aaaa</h1>
          </el-scrollbar>
        </div>
      )
    }

    return () => (
      <div class={NAME}>
        { renderSiteInfo() }
        { renderMenu() }
      </div>
    )
  }
})
