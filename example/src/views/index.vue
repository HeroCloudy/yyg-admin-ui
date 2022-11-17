<!--
 * @Title: index.vue
 * @Description:
 * @Author: youyacoder 程序员优雅哥
 * @Date: 2022/11/17 13:46
 *     Date          UpdateBy        Description
 * 2022/11/17 13:46   dscloudy    Create File.
 -->
<template>
  <div>
    <h1>token: {{token}}</h1>
  </div>
</template>

<script lang="ts" setup>
import useCoreStore from '@/store/modules/core'
import { storeToRefs } from 'pinia'

const coreStore = useCoreStore()

const { token } = storeToRefs(coreStore)
// const token = 'aaa'

</script>

<style scoped lang="scss">
</style>
