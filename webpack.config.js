const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        common: ['vue', 'element-ui'],
        app: './src/index.js'
    },
    module:{
        rules:[{
            test:/\.css$/,// 加载css
            use:['style-loader', 'css-loader']
        },{
            test:/\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/,// 加载图片和字体
            use:['file-loader']
        }]
    },
    devtool: 'inline-source-map', // 便于追踪错误和警告
    plugins:[
        new HtmlWebpackPlugin({// 自动生产indext.html将js引用添加
            title: '酒店管理系统',
            template: './src/index.html'
        }),
        new webpack.optimize.CommonsChunkPlugin({ // 抽离公共代码
            name: 'common'
        }),
        new CleanWebpackPlugin(['dist']) //清除dist文件件
    ],
    output:{
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    }
}