<!--
 * @Title: index.vue
 * @Description:
 * @Author: youyacoder 程序员优雅哥
 * @Date: 2022/11/17 13:46
 *     Date          UpdateBy        Description
 * 2022/11/17 13:46   dscloudy    Create File.
 -->
<template>
  <yyg-layout type="tlr" left-width="280px">
    <template #top>
      <div>
        <yyg-toggle-full-screen></yyg-toggle-full-screen>
        <yyg-toggle-side-bar></yyg-toggle-side-bar>
        <yyg-user-dropdown></yyg-user-dropdown>
      </div>
    </template>
  </yyg-layout>
</template>

<script lang="ts" setup>
</script>

<style scoped lang="scss">
:deep(.left) {
  background-color: #c1f0fa;
}
:deep(.right) {
  background-color: #e4dbff;
}
:deep(.top) {
  background-color: #e6ec9f;
}
:deep(.bottom) {
  background-color: #d1e7f8;
}
</style>
