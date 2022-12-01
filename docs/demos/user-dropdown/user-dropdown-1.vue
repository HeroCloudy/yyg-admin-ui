<template>
  <yyg-user-dropdown avatar="https://herocloudy.github.io/yyg-admin-ui/logo.png"
                     @avatar-click="onAvatarClick"/>
</template>

<script lang="ts" setup>
import { ElMessage } from 'element-plus'

const onAvatarClick = () => {
  ElMessage.info('点击头像')
}
</script>

<style scoped lang="scss">
</style>
