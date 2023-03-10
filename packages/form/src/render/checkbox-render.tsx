import { BaseRender } from './base/base-render'
import { VNode } from 'vue'
import { OfItem } from '@yyg-admin-ui/utils'

export class CheckboxRender extends BaseRender {
  render (): VNode {
    const { anyOf = [] } = this.schema
    return (
      <el-checkbox-group
        {...this.commonProps}
        v-model={this.model[this.prop]}
      >
        {
          anyOf.map((item: OfItem<any>) => (
            <el-checkbox label={item.const}>{item.title}</el-checkbox>
          ))
        }
      </el-checkbox-group>
    )
  }
}
