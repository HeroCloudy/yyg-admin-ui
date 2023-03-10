import { Schema, SchemaProp } from './types'

/**
 * 获取 SchemaProp 的默认值
 * @param schemaProp
 */
export const getSchemaPropDefaultValue = (schemaProp: SchemaProp): any => {
  if (!schemaProp) {
    return null
  }
  if (schemaProp.default !== undefined) {
    return schemaProp.default
  }
  switch (schemaProp.type) {
    case 'string':
      return ''
    case 'number':
      return 0
    case 'boolean':
      return false
    case 'array':
      return []
    case 'object':
      return {}
    default:
      return null
  }
}

export const getSchemaDefaultModel = (schema: Schema): Record<string, any> => {
  if (!schema || !schema.properties) {
    return {}
  }
  const value: Record<string, any> = {}
  const { properties } = schema
  Object.keys(properties).forEach(k => {
    const item = properties[k]
    const key = item.prop || k

    value[key] = getSchemaPropDefaultValue(item)
  })
  return value
}
