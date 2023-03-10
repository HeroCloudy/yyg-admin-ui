import { VNode } from 'vue'
import { BaseRender } from './base/base-render'
import { OfItem } from '@yyg-admin-ui/utils'

/**
 * 下拉选渲染器
 */
export class SelectRender extends BaseRender {
  public render (): VNode {
    const { oneOf, anyOf } = this.schema
    const isMulti = !!anyOf
    const ofList = oneOf || anyOf || []

    return (
      <el-select
        {...this.commonProps}
        v-model={this.model[this.prop]}
        style={{ width: '100%' }}
        multiple={isMulti}
        >
        {
          ofList.map((one: OfItem<any>) => (
            <el-option label={one.title} value={one.const}/>
          ))
        }
      </el-select>
    )
  }
}
