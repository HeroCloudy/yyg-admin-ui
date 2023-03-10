import { BaseRender } from './base/base-render'
import { VNode } from 'vue'

export class NumberRender extends BaseRender {
  public render (): VNode {
    return (
      <el-input-number
        style={{ width: '100%' }}
        {...this.commonProps}
        v-model={this.model[this.prop]}
      />
    )
  }
}
