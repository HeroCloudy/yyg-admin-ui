import { BaseRender } from './base/base-render'
import { VNode } from 'vue'

export class SwitchRender extends BaseRender {
  render (): VNode {
    return (
      <el-switch
        {...this.commonProps}
        v-model={this.model[this.prop]}
      />
    )
  }
}
