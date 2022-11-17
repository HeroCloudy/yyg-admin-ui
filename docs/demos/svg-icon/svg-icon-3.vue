<template>
  <div class="svg-icon-demo-3">
    <div>
      <h4>默认样式</h4>
      <yyg-svg-icon icon="car" />
    </div>
    <div>
      <h4>本地图标设置className</h4>
      <yyg-svg-icon class-name="demo-icon" icon="car" />
    </div>
    <div>
      <h4>在线图标设置className</h4>
      <yyg-svg-icon class-name="demo-icon" icon="http://www.yygnb.com/demo/car.svg" />
    </div>
  </div>
</template>
<style lang="scss">
.svg-icon-demo-3 {
  h4 {
    margin: 10px 0;
  }
  .demo-icon {
    font-size: 50px;
    color: rebeccapurple;
  }
}
</style>
