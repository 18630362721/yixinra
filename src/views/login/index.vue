<template>
  <div class="login-container">
    <el-form
      ref="loginFormRef"
      class="login-form"
      :model="loginForm"
      :rules="loginRules"
    >
      <div class="title-container">
        <h3 class="title">用户登录</h3>
      </div>
      <!-- 用户名 -->
      <el-form-item prop="mobile">
        <span class="svg-container">
          <svg-icon icon="user" />
        </span>
        <el-input
          placeholder="用户名"
          name="mobile"
          type="text"
          v-model="loginForm.mobile"
        ></el-input>
      </el-form-item>
      <!-- 密码 -->
      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon="password" />
        </span>
        <el-input
          placeholder="密码"
          name="pwd"
          :type="passwordType"
          v-model="loginForm.pwd"
        ></el-input>
        <span class="show-pwd" @click="onChangePwdType">
          <svg-icon :icon="passwordType === 'password' ? 'eye' : 'eye-open'" />
        </span>
      </el-form-item>
      <!-- 登录按钮 -->
      <el-button
        @click="hanlderLogin"
        :loading="loading"
        type="primary"
        style="width: 100%; margin-bottom: 30px"
        >登录</el-button
      >
    </el-form>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { validatePassword } from './rules'
// 数据源
const loginForm = ref({
  mobile: '17710096504',
  pwd: 'dw123456'
})
// 验证规则
const loginRules = ref({
  mobile: [
    {
      required: true,
      trigger: 'blur',
      message: '用户名为必填项'
    }
  ],
  pwd: [
    {
      required: true,
      trigger: 'blur',
      validator: validatePassword()
    }
  ]
})
// 处理密码框文本显示
const passwordType = ref('password')

const onChangePwdType = () => {
  // 使用 ref 声明的数据，在 script 中使用时，需要加 value 来获取具体的值，但是在 template 中不需要
  if (passwordType.value === 'password') {
    passwordType.value = 'text'
  } else {
    passwordType.value = 'password'
  }
}
// 处理登录
const loading = ref(false)
// 登录请求动作
const store = useStore()
const loginFormRef = ref(null)
const hanlderLogin = () => {
  // 表单校验
  loginFormRef.value.validate((valid) => {
    if (!valid) return
    //   触发登录
    loading.value = true
    store
      .dispatch('user/login', loginForm.value)
      .then(() => {
        loading.value = false
        // 登录后处理
      })
      .catch((err) => {
        console.log(err)
        loading.value = false
      })
  })
}
</script>
<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
$cursor: #fff;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;

    ::v-deep .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }

    ::v-deep .el-input {
      display: inline-block;
      height: 47px;
      width: 85%;

      input {
        background: transparent;
        border: 0px;
        -webkit-appearance: none;
        border-radius: 0px;
        padding: 12px 5px 12px 15px;
        color: $light_gray;
        height: 47px;
        caret-color: $cursor;
      }
    }
  }

  .tips {
    font-size: 16px;
    line-height: 28px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }

    ::v-deep .lang-select {
      position: absolute;
      top: 4px;
      right: 0;
      background-color: white;
      font-size: 22px;
      padding: 4px;
      border-radius: 4px;
      cursor: pointer;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    // top: 9px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>
