<!--
 * @Title: pro-form-demo.vue
 * @Description:
 * @Author: 程序员优雅哥 youyacoder
            www.yygnb.com
 * @Date: 2023/3/10 13:42
 *     Date          UpdateBy        Description
 * 2023/3/10 13:42   dscloudy    Create File.
 -->
<template>
  <yyg-page>
    <yyg-pro-form ref="formRef"
                  :schema="programSchema"
                  :ui-schema="innerUiSchema"
                  :model="programInfo"
                  @data-change="onDataChange"
                  :column="3"
                  label-suffix="："
                  :fields="['id', 'name', 'beginDate']"
                  @enter-up="onEnterUp">
      <template #attachment>
        <div>Hello attachment</div>
      </template>
    </yyg-pro-form>
    <el-button @click="onValidate">校验</el-button>
  </yyg-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { programSchema, programFormUiSchema, defaultValue } from './constant'
import { getSchemaDefaultModel } from '../../../../packages/utils/src/schema'

const programInfo = ref<Record<string, any>>({
  ...getSchemaDefaultModel(programSchema),
  ...defaultValue
})
programInfo.value.type = '02'

console.log(programInfo.value)

const innerUiSchema = ref(programFormUiSchema)

const onEnterUp = (e: KeyboardEvent, form: Record<string, any>) => {
  console.log('-----', e, form)
}

const onDataChange = (key: string, value: any, form: Record<string, string>) => {
  console.log(key, value, form)
  if (key === 'type') {
    innerUiSchema.value.orgCode['ui:hidden'] = (value === '01')
    innerUiSchema.value.remark['ui:disabled'] = (value === '01')
  }
}

const formRef = ref()

const onValidate = () => {
  if (formRef.value) {
    formRef.value.validate((valid: boolean, fields: any) => {
      if (valid) {
        console.log('submit!')
      } else {
        console.log('error submit!', fields)
      }
    })
  }
}
</script>

<style scoped lang="scss">
</style>
