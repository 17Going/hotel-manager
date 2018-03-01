import Vue from 'vue';
import VueRouter from 'vue-router'

Vue.use(VueRouter);// 使用插件都需要添加到Vue中去

new Vue({
    el: '#app',
    data: {
        msg: 'hello world!'
    }
});