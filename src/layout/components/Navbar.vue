<template>
  <div class="navbar">
    <div class="right-menu">
      <!-- 手机号 -->
      <div style="margin-right: 6px">{{ $store.getters.user.mobile }}</div>
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <!-- 头像 -->
          <el-avatar shape="square" :size="40" :src="img"></el-avatar>
          <el-icon-tools></el-icon-tools>
        </div>
        <template #dropdown>
          <el-dropdown-menu class="user-dropdown">
            <router-link to="/">
              <el-dropdown-item>主页</el-dropdown-item>
            </router-link>
            <el-dropdown-item class="el-dropdown-item" @click="logout"
              >退出登录</el-dropdown-item
            >
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
const img = ref(
  'https://img2.baidu.com/it/u=1073954078,3677508695&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'
)
const store = useStore()
const logout = () => {
  store.dispatch('user/logout')
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
}
.right-menu {
  display: flex;
  align-items: center;
  float: right;
  padding-right: 16px;

  ::v-deep .avatar-container {
    cursor: pointer;
    .avatar-wrapper {
      margin-top: 5px;
      position: relative;
      .el-avatar {
        --el-avatar-background-color: none;
        margin-right: 5px;
      }
    }
  }
}
</style>
