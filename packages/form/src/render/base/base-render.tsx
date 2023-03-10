import { SchemaProp, UI_DISABLED, UI_OPTIONS, UiSchemaItem } from '@yyg-admin-ui/utils'
import { VNode } from 'vue'

export abstract class BaseRender {
  protected readonly schema: SchemaProp
  protected readonly uiSchema: UiSchemaItem
  protected readonly model: Record<string, any>

  protected commonProps: Record<string, any>
  protected prop: string

  constructor (schema: SchemaProp, uiSchema: UiSchemaItem, model: Record<string, any>) {
    this.schema = schema
    this.uiSchema = uiSchema
    this.model = model

    this.commonProps = this.initCommonProps()

    this.prop = this.schema.prop!
  }

  private initCommonProps (): Record<string, any> {
    const commonProps = {
      ...(this.uiSchema[UI_OPTIONS] || {})
    }

    commonProps.disabled = this.uiSchema[UI_DISABLED] === true
    commonProps.placeholder = commonProps.placeholder || this.schema.title

    return commonProps
  }

  public abstract render (): VNode;
}
