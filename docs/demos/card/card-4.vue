<template>
  <yyg-card title="测试卡片">
    <template #header>
      <div class="custom-header">自定义卡片的标题</div>
    </template>
    <div>Hello world，测试卡片</div>
  </yyg-card>
</template>

<script lang="ts" setup>
</script>

<style scoped lang="scss">
.custom-header {
  color: red;
}
</style>
