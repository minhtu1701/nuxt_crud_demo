<template>
  <el-menu
    :default-active="activeIndex2"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <el-menu-item @click="$router.push('/')" index="1">HOME</el-menu-item>
    <el-menu-item @click="$router.push('/')" index="2">About</el-menu-item>

    <el-submenu index="3">
      <template slot="title">Orders</template>
      <el-menu-item @click="$router.push('/employees')" index="2-1"
        >Feature 1</el-menu-item
      >
      <el-menu-item @click="$router.push('/employees')" index="2-2"
        >Feature 2</el-menu-item
      >
      <el-menu-item @click="$router.push('/employees')" index="2-3"
        >Feature 3</el-menu-item
      >
    </el-submenu>
  </el-menu>
</template>


<script>
export default {
  name: "Navigation",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>