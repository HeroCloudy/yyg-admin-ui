<!--
 * @Title: login.vue
 * @Description:
 * @Author: youyacoder 程序员优雅哥
 * @Date: 2022/11/17 13:45
 *     Date          UpdateBy        Description
 * 2022/11/17 13:45   dscloudy    Create File.
 -->
<template>
  <div class="login-page">
    <div class="login-form">
      <h1 class="">用户登录</h1>

      <el-form :model="form">
        <el-form-item>
          <el-input placeholder="用户名" v-model="form.username">
            <template v-slot:prefix>
              <yyg-svg-icon icon="user"/>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.password" placeholder="密码"
                    type="password" show-password>
            <template v-slot:prefix>
              <yyg-svg-icon icon="password"/>
            </template>
          </el-input>
        </el-form-item>

        <el-form-item>
          <el-checkbox size="large">记住用户名和密码</el-checkbox>
        </el-form-item>

        <el-button @click="onLoginBtnClick" type="primary" class="login-btn" size="large">登 录</el-button>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import * as systemApi from '@/api/system'

const form = ref({
  username: '',
  password: ''
})

// const router = useRouter()
const onLoginBtnClick = async () => {
  const resp = await systemApi.login(form.value)
  console.log(resp)
}
</script>

<style scoped lang="scss">
@import "../assets/scss/element";

$formWidth: 400px;

.login-page {
  width: 100%;
  height: 100%;
  min-height: 700px;
  min-width: 500px;
  box-sizing: border-box;
  background: #e9e9e9 url("../assets/imgs/login-bg.png") left no-repeat;
  background-size: auto 100%;
  position: relative;

  .login-form {
    width: $formWidth;
    position: absolute;
    right: $formWidth / 2;
    top: 50%;
    margin-top: -200px;
    box-sizing: border-box;

    h1 {
      color: #347bcd;
      font-size: 30px;
      margin-bottom: 30px;
    }

    .el-form-item {
      //margin-top: 40px;
      margin: 30px 0;

      .el-input {
        height: 50px;
        font-size: 20px;
        color: red;

        .svg-icon {
          font-size: 18px;
          padding: 0 10px;
        }

        :deep(.el-input__wrapper) {
          border-radius: 0;

          input {
            color: gray;
          }
        }

        @include placeholder(#478e98, 20px);
      }

      .el-checkbox {

        @include checkbox(24px, 0, 18px, #478e98);
      }
    }

    .login-btn {
      width: 100%;
      height: 52px;
      font-size: 20px;
      border-radius: 0;
    }
  }
}
</style>
