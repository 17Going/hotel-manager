const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const restProxy = require('../proxy/rest-proxy');

const app = express();
const config = require('../build/webpack.config.js');
const compiler = webpack(config);

// 启动热替换
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

// 设置rest接口代理
app.use('/rest', restProxy);

// 前端服务器监听本地3000端口
app.listen(3000, function () {
  console.log('Example app listening on port 3000!\n');
});