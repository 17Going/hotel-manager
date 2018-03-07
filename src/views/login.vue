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
                            <el-row>
                                <el-col :span="12">
                                    <el-input v-model="vertifycode" placeholder="请输入验证码"></el-input>
                                </el-col>
                                <el-col :span="12">
                                    <div id="vertifycode">
                                        <img :src="vertifycodeURL" @click="updateCode"/>
                                    </div>
                                </el-col>
                            </el-row>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" :disabled="disable" class="btn-block" @click="login">登录</el-button>
                        </el-form-item>
                        <el-form-item>
                            <a class="pull-right" id="register" @click="register">注册</a>
                        </el-form-item>
                    </el-form>
                </el-card>
            </div>
        </el-main>
    </el-container>
</template>

<script>
    export default {
    data(){
        return {
            username: '',
            password: '',
            vertifycodeURL: '/rest/vertifycode', //验证码地址
            vertifycode: '', // 验证码
            errorInfo: ''
        };
    },
    computed: {
        disable: function(){
            return this.username ==='' || this.password === '' || this.vertifycode === '';
        }
    },
    methods: {
        login(){
            let self = this, 
                router = this.$router;
            $.post('/rest/login', {
                    username: this.username,
                    password: this.password,
                    vertifycode: this.vertifycode
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
        },
        updateCode(){
            this.vertifycodeURL = '/rest/vertifycode?' + Math.random();
        },
        register(){
            this.$router.push('register');
        }
    }
    }
</script>

<style scoped>
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
    .el-form-item:last-child {
        margin-bottom: 0;
    }
    #title{
        font-size:20px;
    }
    #vertifycode{
        padding-left:10px;
        cursor: pointer;
    }
    #vertifycode img{
        width: 100%;
        height: 38px;
        margin-top: -2px;
    }

    #register{
        cursor: pointer;
    }
</style>


