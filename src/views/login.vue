<template>
  <div>
      <el-card>
          <el-form>
              <el-form-item>
                  <el-input placeholder="请输入用户名" v-model="username"></el-input>
              </el-form-item>
              <el-form-item>
                  <el-input type="password" placeholder="请输入密码" v-model="password"></el-input>
              </el-form-item>
              <el-form-item>
                  <el-button type="primary" class="btn-block" @click="login">登录</el-button>
              </el-form-item>
          </el-form>
      </el-card>
  </div>
</template>

<script>
import $ from 'jquery';
export default {
  data: function(){
      return {
          username: '',
          password: ''
      };
  },
  methods: {
      login(){
          $.post('/rest/login', {
              username: this.username,
              password: this.password
          }, function(data){
              console.log(data);
          });
      }
  }
}
</script>

