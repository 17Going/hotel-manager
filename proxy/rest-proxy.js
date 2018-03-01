const proxy = require('http-proxy-middleware');

const options = {
    target: 'http:127.0.0.1:3001',
    changeOrign: true,
    reWritePath:{
        '^/rest': '' // 删除代理路径前缀
    }
} 

module.exports = proxy(options);