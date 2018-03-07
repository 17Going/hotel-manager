import VueRouter from 'vue-router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'; // elementUI依赖的css
import 'bootstrap/dist/css/bootstrap.css';// 引入bootstrap.css
import routes from './routes/router';
import App from './views/app.vue';


Vue.use(VueRouter);// 使用插件都需要添加到Vue中去
Vue.use(ElementUI);

// 创建一个路由
var router = new VueRouter({
    routes
});

cookie.remove('HOTEL_TOKEN'); // TODO暂时添加

// 设置一个路由全局守卫
router.beforeEach((to, from, next)=>{
    next();
    if(!cookie.get('HOTEL_TOKEN') && to.name !== 'register'){// 如果鉴权失败，则跳转到登录页面
        router.push('login');
    } else { // 如果已经登录，进入登录页面自动跳转到首页
        if(to.name === 'login') {
            router.push('home');
        }
    }
});

new Vue({
    el: '#app',
    router, // 注册路由
    template: '<App/>',
    components: {
        App
    }
});