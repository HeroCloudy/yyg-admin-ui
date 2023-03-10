<!--
 * @Title: description-demo.vue
 * @Description:
 * @Author: 程序员优雅哥 youyacoder
            www.yygnb.com
 * @Date: 2023/3/10 11:32
 *     Date          UpdateBy        Description
 * 2023/3/10 11:32   dscloudy    Create File.
 -->
<template>
  <yyg-page>
    <yyg-pro-description :schema="programSchema"
                         :ui-schema="programFormUiSchema"
                         :column="3"
                         :fields="['id', 'name', 'type']"
                         :model="programInfo">
      <template #attachment>
        <div>Hello attachment</div>
      </template>
    </yyg-pro-description>
  </yyg-page>
</template>

<script lang="ts" setup>
import { programSchema, programFormUiSchema, defaultValue } from './constant'
import { ref } from 'vue'
import { getSchemaDefaultModel } from '../../../../packages/utils/src/schema'

const programInfo = ref<Record<string, any>>({
  ...getSchemaDefaultModel(programSchema),
  ...defaultValue
})
programInfo.value.type = '02'
</script>

<style scoped lang="scss">
</style>
