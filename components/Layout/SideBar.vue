<template>
  <el-col class="sideBar" :span="24">
    <el-menu
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span @click="$router.push('/employees')">Employee Management</span>
        </template>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-setting"></i>
        <span @click="$router.push('/employees/employeeform')"
          >Add new Employee</span
        >
      </el-menu-item>
      <el-menu-item index="3">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span @click="$router.push('/article')"> Article Management</span>
        </template>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span @click="$router.push('/article/articleform')"
          >Add new Article</span
        >
      </el-menu-item>
    </el-menu>
  </el-col>
</template>

