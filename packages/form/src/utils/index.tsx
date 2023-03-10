import { Slots, VNode } from 'vue'
import {
  OfItem,
  SchemaProp,
  SchemaType,
  UI_COLUMN,
  UI_HIDDEN,
  UI_OPTIONS,
  UI_WIDGET,
  UiSchemaItem,
  UiWidgets
} from '@yyg-admin-ui/utils'
import { RadioRender } from '../render/radio-render'
import { SelectRender } from '../render/select-render'
import { DateRender } from '../render/date-render'
import { TextRender } from '../render/text-render'
import { NumberRender } from '../render/number-render'
import { SwitchRender } from '../render/switch-render'
import { CheckboxRender } from '../render/checkbox-render'

interface RenderParam {
  item: SchemaProp;
  uiItem: UiSchemaItem;
  model: Record<string, any>;
}

export interface EventsParam {
  change: (key: string, value: any) => void;
  enter: (e: KeyboardEvent) => void;
}

export const renderFormItem = (
  item: SchemaProp,
  uiItem: UiSchemaItem = {},
  model: Record<string, any>,
  slots: Slots,
  defaultSpan: number,
  events: EventsParam
): VNode | null => {
  const prop = item.prop!
  if (uiItem[UI_HIDDEN]) {
    return null
  }
  // 1. 补全 uiSchema
  const innerUiItem = {
    ...uiItem,
    [UI_WIDGET]: uiItem[UI_WIDGET],
    [UI_OPTIONS]: {
      ...(uiItem[UI_OPTIONS] || {}),
      onKeyup: (e: KeyboardEvent) => {
        if (e.code === 'Enter') {
          events.enter(e)
        }
      },
      onChange: (value: any) => events.change(prop, value)
    }
  }

  // 2. 构造渲染参数
  const param: RenderParam = {
    item,
    uiItem: innerUiItem,
    model
  }

  // 3. 根据 type 渲染不同的item
  const renderItem = () => {
    // 如果有插槽，直接渲染插槽
    if (slots && slots[prop]) {
      return () => slots[prop]!(model)
    }
    switch (item.type) {
      case SchemaType.STRING:
        return renderString(param)
      case SchemaType.NUMBER:
        return renderNumber(param)
      case SchemaType.BOOLEAN:
        return renderBoolean(param)
      case SchemaType.ARRAY:
        return renderArray(param)
      // case SchemaType.OBJECT:
      //   return <div>{item.title} - {item.type}</div>
    }
    return renderUnSupport()
  }

  const uiColumn = uiItem[UI_COLUMN] || 1
  const labelWidth = (uiItem[UI_OPTIONS] || {}).labelWidth || 'auto'
  return (
    <el-col span={defaultSpan * uiColumn}>
      <el-form-item label={item.title} prop={prop} label-width={labelWidth}>
        {renderItem()}
      </el-form-item>
    </el-col>
  )
}

const renderUnSupport = (msg: string = '不支持该类型'): VNode => {
  return <div>{msg}</div>
}

/**
 * type = string 渲染逻辑
 *
 * 1. 有 oneOf 属性，默认渲染为 radio，ui:widget 支持 select、radio
 * 2. format 属性：日期、日期-时间、时间
 * 3. 其他情况：ui:widget 支持 input, textarea
 *
 */
const renderString = (param: RenderParam): VNode => {
  const { model, item, uiItem } = param

  if (item.oneOf) {
    const uiWidget = uiItem[UI_WIDGET] || UiWidgets.RADIO
    if (uiWidget === UiWidgets.RADIO) {
      return new RadioRender(item, uiItem, model).render()
    }
    if (uiWidget === UiWidgets.SELECT) {
      return new SelectRender(item, uiItem, model).render()
    }
    return renderUnSupport()
  }

  if (item.format) {
    if (item.format === 'date' || item.format === 'datetime') {
      return new DateRender(item, uiItem, model).render()
    }
  }

  return new TextRender(item, uiItem, model).render()
}

const renderNumber = (param: RenderParam): VNode => {
  const { model, item, uiItem } = param
  return new NumberRender(item, uiItem, model).render()
}

/**
 * boolean 只支持widget：switch, radio, select
 */
const renderBoolean = (param: RenderParam): VNode => {
  const { model, item, uiItem } = param

  const uiWidget = uiItem[UI_WIDGET] || UiWidgets.SWITCH
  const booleanOneOf: OfItem<boolean>[] = [
    { const: true, title: '是' },
    { const: false, title: '否' }
  ]
  item.oneOf = item.oneOf ? item.oneOf! : booleanOneOf

  if (uiWidget === UiWidgets.SWITCH) {
    return new SwitchRender(item, uiItem, model).render()
  }
  if (uiWidget === UiWidgets.RADIO) {
    return new RadioRender(item, uiItem, model).render()
  }
  if (uiWidget === UiWidgets.SELECT) {
    return new SelectRender(item, uiItem, model).render()
  }
  return renderUnSupport()
}

/**
 * 1. 有 anyOf 属性支持 select 和 checkbox
 * 2. 有 format 日期、时间、日期时间区间、数字区间
 */
const renderArray = (param: RenderParam): VNode => {
  const { model, item, uiItem } = param
  if (item.anyOf) {
    const uiWidget = uiItem[UI_WIDGET] || 'select'
    if (uiWidget === UiWidgets.SELECT) {
      return new SelectRender(item, uiItem, model).render()
    }
    if (uiWidget === UiWidgets.CHECKBOX) {
      return new CheckboxRender(item, uiItem, model).render()
    }
  }
  if (item.format) {
    if (item.format === 'date' || item.format === 'datetime') {
      return new DateRender(item, uiItem, model).render()
    }
  }
  return renderUnSupport()
}
