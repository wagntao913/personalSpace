<template>
  <div class="login-main">
    <el-form :model="loginFrom" ref="loginFrom" label-width="80px">
      <el-form-item>
        <el-input v-model="loginFrom.username"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="loginFrom.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class login extends Vue{
  loginFrom = {
    username: '',
    password: ''
  }
}
</script>

<style scoped>
.el-input{
  width: 75%;
}
.login-main{
  text-align: center;
  margin: 0 auto;
}
</style>