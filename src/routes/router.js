import Login from '../views/login.vue';
// 懒加载首页模块
const Home = ()=> import('../views/home.vue');
const Register = ()=> import('../views/register.vue');

export default [{
    name: 'login',
    path: '/login',
    component: Login
},{
    name: 'home',
    path: '/home',
    component: Home
},{
    name: 'register',
    path: '/register',
    component: Register
}]