<template>
  <yyg-user-dropdown avatar="https://herocloudy.github.io/yyg-admin-ui/logo.png"
                     :dropdown-items="dropdownItems"
  ></yyg-user-dropdown>
</template>

<script lang="ts" setup>
import { UserDropDownList } from '../../../packages/user-dropdown/src/types'
import { ElMessage } from 'element-plus'

const dropdownItems: UserDropDownList = [
  { title: '修改资料', click: () => { onItemClick('修改资料') } },
  { title: '个人中心', click: () => { onItemClick('个人中心') } },
  { title: '退出登录', click: () => { onItemClick('退出登录') }, isDivided: true }
]

const onItemClick = (msg: string) => {
  ElMessage.success(`点击 ${msg}`)
}
</script>

<style scoped lang="scss">
</style>
