import { VNode } from 'vue'
import { BaseRender } from './base/base-render'
import { UI_WIDGET } from '@yyg-admin-ui/utils'

/**
 * 下拉选渲染器
 */
export class TextRender extends BaseRender {
  public render (): VNode {
    // input 的 type 属性
    const type = this.uiSchema[UI_WIDGET] === 'textarea' ? 'textarea' : 'text'

    return (
      <el-input
        {...this.commonProps}
        type={type}
        v-model={this.model[this.prop]}
      />
    )
  }
}
