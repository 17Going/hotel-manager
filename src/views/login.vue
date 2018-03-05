<template>
    <el-container>
        <el-header>
            <span>酒店管理系统</span>
        </el-header>
        <el-main>
            <div>
                <el-card>
                    <el-form>
                        <h4>用户登录</h4>
                        <div id="errorInfo">{{errorInfo}}</div>
                        <el-form-item>
                            <el-input placeholder="请输入用户名" v-model="username"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-input type="password" placeholder="请输入密码" v-model="password"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" :disabled="disable" class="btn-block" @click="login">登录</el-button>
                        </el-form-item>
                    </el-form>
                </el-card>
            </div>
        </el-main>
    </el-container>
</template>

<script>
    import $ from 'jquery';
    export default {
    data(){
        return {
            username: '',
            password: '',
            errorInfo: ''
        };
    },
    computed: {
        disable: function(){
            return this.username ==='' || this.password === ''
        }
    },
    watch:{

    },
    methods: {
        login(){
            let self = this, 
                router = this.$router;
            $.post('/rest/login', {
                    username: this.username,
                    password: this.password
            }, function(succsess){
                    let data = succsess.data,
                        error = succsess.error;
                    if(error.code === '0'){
                        cookie.set('HOTEL_TOKEN', data.token);
                        router.push('home');
                    } else {
                        self.errorInfo = error.desc;
                    }
            });
        }
    }
    }
</script>

<style>
    .el-header{
        background-color: #B3C0D1;
    }
    .el-header span{
        font-size: 40px;
    }
    .el-main>div{
        width: 360px;
        margin: 0 auto;
    }
    .el-main #errorInfo{
        color: red;
        height: 20px;
    }
    #title{
        font-size:20px;
    }
</style>


