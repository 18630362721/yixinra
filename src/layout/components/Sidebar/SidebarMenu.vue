<template>
  <el-menu
    :unique-opened="true"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="ffd04b"
  >
    <!-- 子集 menu -->
    <div v-for="(menuItem, index) in getMenuList" :key="index">
      <el-menu-item
        v-if="!menuItem.chilren"
        :index="menuItem.menu_url"
        :route="menuItem.menu_url"
      >
        <i v-if="menuItem.icon" :class="'iconfont ' + menuItem.icon"></i>
        <template #title>{{ menuItem.label }}</template>
        <!-- <template v-slot="{ title }">{{ menuItem.label }}</template> -->
      </el-menu-item>
      <el-sub-menu v-else :index="menuItem.menu_url">
        <template #title>
          <i v-if="menuItem.icon" :class="'iconfont ' + menuItem.icon"></i>
          <span>{{ menuItem.label }}</span>
        </template>
        <el-menu-item
          v-for="item in menuItem.children"
          :index="item.menu_url"
          :route="item.menu_url"
          :key="item.menu_url"
        >
          <template #title>{{ item.label }}</template>
        </el-menu-item>
      </el-sub-menu>
    </div>
    <!-- <el-sub-menu index="1">
      <template #title>
        <el-icon-location></el-icon-location>
        <span>导航一</span>
      </template>
      <el-menu-item index="1-1">选项1</el-menu-item>
      <el-menu-item index="1-2">选项2</el-menu-item>
    </el-sub-menu> -->
    <!-- 具体菜单 -->
    <!-- <el-menu-item index="2">
      <el-icon-location></el-icon-location>
      <template #title>导航四</template>
    </el-menu-item> -->
  </el-menu>
</template>

<script setup>
// import { ref } from 'vue'
import { getItem } from '@/utils/storage'
// 获取路由表
const getMenuList = getItem('menu')
</script>

<style lang="scss" scoped>
.iconfont {
  margin-right: 5px;
}
</style>
