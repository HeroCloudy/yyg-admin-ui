<template>
  <div class="site">
    <h1>组件库测试站点 yyg-admin-ui</h1>
    <p>测试站点主要用于开发过程中测试组件，即在开发过程中由业务驱动组件开发。</p>
    <img src="/logo.png" width="200">
    <img src="/qrcode.jpg" width="200">
    <yyg-foo :msg="msg"></yyg-foo>

    <el-icon-zoom-in size="10"></el-icon-zoom-in>
    <yyg-svg-icon icon="http://www.yygnb.com/demo/car.svg"></yyg-svg-icon>
    <yyg-svg-icon class-name="iconaaa" icon="car"></yyg-svg-icon>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const msg = ref('hello world')
</script>

<style scoped lang="scss">
.site {
  padding: 20px;

  .iconaaa {
    color: cornflowerblue !important;
    font-size: 200px !important;
  }
}
</style>
