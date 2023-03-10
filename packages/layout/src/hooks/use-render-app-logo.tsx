import { LayoutType } from '../types'
import { useLayoutValues } from './use-layout-values'
import { VNode } from 'vue'

/**
 * 渲染 AppLogo 组件
 * @param logo  默认的logo
 * @param expandLogo  展开状态的logo
 * @param appName 应用名称
 * @param layoutType 布局类型
 * @param isExpend 当前是否展开
 * @param host  宿主（navBar, sideBar）
 */
export const useRenderAppLogo = (
  logo: string,
  expandLogo: string,
  appName: string,
  layoutType: string,
  isExpend: boolean,
  host: string
): VNode | null => {
  if (!logo && !appName) {
    return null
  }
  if ((host === 'navBar' && [LayoutType.TB, LayoutType.TLR].indexOf(layoutType) < 0) ||
    (host === 'sideBar' && [LayoutType.LR, LayoutType.LTB].indexOf(layoutType) < 0)) {
    return null
  }

  const layoutValues = useLayoutValues()
  const siteInfoStyle = {
    width: layoutValues.leftWidthRef.value,
    height: layoutValues.topHeightRef.value
  }
  return (
    <div class='site-info' style={siteInfoStyle}>
      <yyg-app-logo
        logo={logo}
        expandLogo={expandLogo}
        appName={appName}
        isExpand={isExpend}/>
    </div>
  )
}
