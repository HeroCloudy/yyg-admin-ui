/* eslint-disable no-unused-vars */
export enum SchemaType {
  STRING = 'string',
  NUMBER = 'number',
  ARRAY = 'array',
  BOOLEAN = 'boolean'
}
export interface OfItem<T> {
  title: string;
  const: T;// string | number | boolean;
}
export type SchemaFormat = 'date' | 'time'| 'date-time'| 'email' | string;

export interface SchemaProp {
  title: string;
  type: SchemaType | string;
  prop?: string;
  format?: SchemaFormat;
  oneOf?: OfItem<string | number | boolean>[];
  anyOf?: OfItem<SchemaType | string>[];
  default?: SchemaType | string;
  required?: boolean;
}

export interface Schema {
  type: SchemaType | string;
  properties: Record<string, SchemaProp>;
  required?: string[];
}

export const UI_HIDDEN = 'ui:hidden'
export const UI_DISABLED = 'ui:disabled'
export const UI_WIDTH = 'ui:width'
export const UI_OPTIONS = 'ui:options'
export const UI_WIDGET = 'ui:widget'
export const UI_COLUMN = 'ui:column'

export enum UiWidgets {
  SELECT = 'select',
  RADIO = 'radio',
  CHECKBOX = 'checkbox',
  SWITCH = 'switch',
  INPUT = 'input',
  TEXTAREA = 'textarea'
}

export type UiSchemaItem = {
  [UI_HIDDEN]?: boolean;
  [UI_DISABLED]?: boolean;
  [UI_WIDTH]?: number;
  [UI_OPTIONS]?: Record<string, any>;
  [UI_WIDGET]?: UiWidgets | string;
  [UI_COLUMN]?: number;
}

export type UiSchema = {
  [key: string]: UiSchemaItem
}
