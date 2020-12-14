
<template>
  <div class="login-container">
    <el-form label-position="left"
      label-width="0px"
      status-icon>
        <h3 class="login_title">系统登录</h3>
        <el-form-item>
          <el-input
            type="text"
            v-model="loginForm.username"
            auto-coplete="off"
            placeholder="账号">
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            type="password"
            v-model="loginForm.password"
            auto-coplete="off"
            placeholder="密码">
          </el-input>
        </el-form-item>
        <el-form-item style="width: 100%">
          <el-button type="primary" @click.native.prevent="login" style="width: 100%">登录</el-button>
          <!--
          <el-button type="primary" @click.native.prevent="register" style="width: 100%; margin-top: 30px">注册</el-button>
          -->
        </el-form-item>
      </el-form>
  </div>
</template>
 
<script>
import { post, waitsleep } from '@/utils/http'
export default {
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      userToken: ''
    };
  },
 
  methods: {
    login () {
      let _this = this;
      if (this.loginForm.username === '' || this.loginForm.password === '') {
        alert('账号或密码不能为空');
      } else {
        var params = {
        username: _this.loginForm.username,
        password: _this.loginForm.password
      }
        post('/common/login',params).then(res => {
           console.log(res);
          _this.userToken = res.token;
          // 将用户token保存到vuex中
          _this.$store.commit('setToken', res.token);
          _this.$store.commit('setUserName', res.username);
          _this.$store.commit('setUserId', res.uid);

          _this.$router.push('/admin');
          alert('登陆成功');
        })
        
      }
    }
  }
};
</script>
<style scoped>
.login-container{
  border-radius: 15px;
  background-clip: padding-box;
  margin: 10% auto;
  width: 350px;
  padding: 35px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}
.login_title{
  margin: 0px auto 40px auto;
  text-align: center;
  color: #505458;
}
</style>

