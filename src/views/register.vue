<template>
    <el-container>
        <el-header>
            <span>酒店管理系统</span>
        </el-header>
        <el-main>
            <el-form :label-position="labelPosition" status-icon :model="user" label-width="80px" ref="user" :rules="rules">
                <h3>新用户注册</h3>
                <el-form-item label="用户名" prop="username">
                    <el-input v-model="user.username" placeholder="请设置用户名"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input type="password" v-model="user.password" placeholder="请设置6-12密码"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="confirmPass">
                    <el-input type="password" v-model="user.confirmPass" placeholder="请设置6-12密码"></el-input>
                </el-form-item>
            </el-form>
        </el-main> 
    </el-container>
</template>

<script>
export default {
    data(){
        return {
            labelPosition: 'left',
            user: {
                username: '',
                password: '',
                confirmPass: ''
            },
            rules:{
                username: [
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                    { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
                ],
                confirmPass:[
                     { required: true, message: '请输入密码', trigger: 'blur' },
                    { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
                ]
            }
        }
    },
    watch: {
        "user.username": function(){
            console.log(this.user.username);
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
    .el-form{
        margin: 0 30px;
        width: 460px;
    }
</style>
