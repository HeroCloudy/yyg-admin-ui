import { Schema, UiSchema } from '../../../../../packages/utils'

export const programSchema: Schema = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
      title: '方案ID'
    },
    orgCode: {
      type: 'string',
      title: '所属组织'
    },
    name: {
      type: 'string',
      title: '方案名称',
      required: true
    },
    status: {
      type: 'string',
      title: '方案状态'
    },
    type: {
      type: 'string',
      title: '方案类型',
      oneOf: [
        { title: '常规营销方案', const: '01' },
        { title: '成长计划', const: '02' }
      ]
    },
    beginDate: {
      type: 'array',
      title: '开始日期',
      format: 'date'
    },
    endDate: {
      type: 'array',
      title: '结束日期',
      format: 'datetime'
    },
    inputTime: {
      type: 'string',
      title: '输入时间',
      format: 'time'
    },
    budget: {
      type: 'number',
      title: '方案预算'
    },
    earning: {
      type: 'number',
      title: '预期收益'
    },
    attachment: {
      type: 'string',
      title: '附件'
    },
    remark: {
      type: 'string',
      title: '备注'
    }
  },
  required: ['status']
}

export const programFormUiSchema: UiSchema = {
  id: {
    'ui:disabled': true
  },
  orgCode: {
    'ui:hidden': false
  },
  type: {
    'ui:widget': 'select'
  },
  inputTime: {
    'ui:hidden': true
  },
  attachment: {
    'ui:column': 3
  },
  remark: {
    'ui:widget': 'textarea',
    'ui:options': {
      rows: 3
    },
    'ui:column': 3
  }
}

export const defaultValue = {
  id: 'asdasd12312312',
  orgCode: 'AAA',
  remark: 'hello this is remark',
  name: '测试方案名称',
  budget: 218
}
