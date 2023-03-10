import { VNode } from 'vue'
import { BaseRender } from './base/base-render'
import { OfItem } from '@yyg-admin-ui/utils'

/**
 * 单选钮渲染器
 */
export class RadioRender extends BaseRender {
  public render (): VNode {
    const { oneOf } = this.schema
    return (
        <el-radio-group
          {...this.commonProps}
          v-model={this.model[this.prop]}
          >
          {
            oneOf!.map((one: OfItem<any>) => (
              <el-radio label={one.const}>{one.title}</el-radio>
            ))
          }
        </el-radio-group>
    )
  }
}
