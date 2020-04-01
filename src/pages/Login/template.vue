<template>
  <div id="login">
    <el-input v-model="username" placeholder="请输入用户名" autocomplete="on"></el-input>
    <el-input v-model="password" placeholder="请输入密码" @keyup.enter="onLogin" autocomplete="on"></el-input>
    <el-button @click="onLogin" type="success" plain size="medium">立刻登录</el-button>
    <router-link to="/register">还没有账号？点击注册吧！</router-link>
    <router-link to="/register">还没有账号？点击注册吧！</router-link>
    <router-link to="/register">还没有账号？点击注册吧！</router-link>
    <router-link to="/register">还没有账号？点击注册吧！</router-link>
    为什么我这里的内容显示不出来呢
  </div>
</template>

<script>
    import {mapActions} from 'vuex'

    export default {
        data() {
            return {
                username: '',
                password: ''

            }
        },
        methods: {
            ...mapActions(['login']),
            onLogin() {
                this.login({username: this.username, password: this.password})
                    .then(() => {
                        this.$router.push({path: this.$route.query.redirect || '/'})
                    })
            }
        }
    }
</script>

<style lang="less">
  #login {
    margin-top: 40px;

    .el-input {
      margin-top: 20px;
    }

    .el-button {
      margin-top: 30px;
      display: flex;
      position: relative;
      left: 50%;
      transform: translateX(-50%);
    }

    p {
      color: #ccc;
      font-size: 10px;
      text-align: center;
      margin-top: 10px;
    }
  }


</style>
