import { VNode } from 'vue'
import { BaseRender } from './base/base-render'
import { SchemaType } from '@yyg-admin-ui/utils'

/**
 * 下拉选渲染器
 */
export class DateRender extends BaseRender {
  public render (): VNode {
    let { format, type } = this.schema

    if (type === SchemaType.ARRAY) {
      format += 'range'
      this.commonProps['range-separator'] = this.commonProps['range-separator'] || '-'
    }

    return (
      <el-date-picker
        {...this.commonProps}
        v-model={this.model[this.prop]}
        type={format}
      />
    )
  }
}
