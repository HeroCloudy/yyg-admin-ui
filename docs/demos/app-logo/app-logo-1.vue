<template>
  <el-radio-group v-model="isExpand">
    <el-radio-button :label="true">展开</el-radio-button>
    <el-radio-button :label="false">收缩</el-radio-button>
  </el-radio-group>

  <yyg-app-logo app-name="YYG Admin Pro"
                logo="https://herocloudy.github.io/yyg-admin-ui/logo.png"
                :is-expand="isExpand"
                :style="{marginTop: '20px', width: isExpand ? '250px' : '60px'}"/>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const isExpand = ref(true)
</script>
