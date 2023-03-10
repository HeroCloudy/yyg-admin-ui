<!--
 * @Title: index.vue
 * @Description:
 * @Author: youyacoder 程序员优雅哥
 * @Date: 2022/11/17 13:46
 *     Date          UpdateBy        Description
 * 2022/11/17 13:46   dscloudy    Create File.
 -->
<template>
  <yyg-layout type="ltb" left-width="280px">
    <template #top>
      <div>
        <yyg-toggle-full-screen></yyg-toggle-full-screen>
        <yyg-toggle-side-bar></yyg-toggle-side-bar>
        <yyg-user-dropdown :avatar="userInfo.avatar" :dropdown-items="dropdownItems"></yyg-user-dropdown>
      </div>
    </template>
    <template #left>
      <yyg-side-bar logo="http://www.yygnb.com/logo.png"
                    app-name="权限管理系统"
      ></yyg-side-bar>
    </template>
  </yyg-layout>
</template>

<script lang="ts" setup>
import useCoreStore from '@/store/modules/core'
import { storeToRefs } from 'pinia'
import { UserDropDownList } from '../../../packages/user-dropdown/src/types'
import { useRouter } from 'vue-router'

const router = useRouter()
const coreStore = useCoreStore()
const { userInfo } = storeToRefs(coreStore)

const onExit = async () => {
  await coreStore.exit()
  await router.push('/login')
}

const dropdownItems: UserDropDownList = [
  { title: '修改资料', click: () => { } },
  { title: '个人中心', click: () => { } },
  { title: '退出登录', click: onExit, isDivided: true }
]

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
