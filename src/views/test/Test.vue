<template>
  <div class="test-container">
    <el-button @click="getUser">获取用户信息</el-button>
    <el-button @click="getMenu">获取菜单信息</el-button>
  </div>
</template>

<script>
import axios from 'axios'
// eslint-disable-next-line no-unused-vars
import mock from '@/mock/mock.js'
export default {
  name: "Test",
  methods: {
    getUser() {
      axios.get('http://localhost:8081/user')
          .then(res => console.log(res))
    },
    getMenu() {
      axios.get('http://localhost:8081/menu')
          .then(res => console.log(res))
    }
  }
}
</script>

<style scoped>

</style>
