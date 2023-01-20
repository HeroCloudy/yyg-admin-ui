<template>
  <yyg-form :schema="formSchema"
            :model="formModel"
            label-position="top"
            :ui-schema="formUiSchema">
    <template #anyOf="data">
      <div>This is anyOf: {{data.anyOf.join(',')}}</div>
    </template>
    <template #htmlContent="data">
      <el-button link type="primary">{{data.htmlContent}}</el-button>
    </template>
  </yyg-form>
</template>

<script lang="ts" setup>
import { demoFormUiSchema, demoJsonSchema, demoModel } from '../mock/demo-json-schema'
import { ref } from 'vue'

const formSchema = ref({ ...demoJsonSchema })
const formModel = ref({ ...demoModel })
const formUiSchema = ref({ ...demoFormUiSchema })
</script>

<style scoped lang="scss">
</style>
