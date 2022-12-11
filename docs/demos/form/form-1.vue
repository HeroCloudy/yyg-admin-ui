<template>
  <yyg-form :schema="formSchema"
            :model="formModel"
            :ui-schema="formUiSchema"
  ></yyg-form>
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
