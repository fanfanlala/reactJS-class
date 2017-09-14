/**
 * Created by dllo on 17/8/23.
 */
const merage = require('webpack-merge')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const config = require('../config')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const baseWebpackConfig = require('./webpack.base.config')
// 修改webpack配置的entry
baseWebpackConfig.entry = ['whatwg-fetch','./build/dev-client'].concat(baseWebpackConfig.entry)
// 合并 base 与 dev的配置
module.exports = merage(baseWebpackConfig, {
    // 在base配置基础上添加插件
  plugins: [
        // 在HTML中引入编译后的资源
    new HTMLWebpackPlugin({
      filename: 'index.html',
      template: 'index.html'
    }),
        // webpack的默认配置
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
        // webpack 的热模块替换插件
    new webpack.HotModuleReplacementPlugin(),
        // webpack 不触发error事件插件
    new webpack.NoEmitOnErrorsPlugin(),
    new FriendlyErrorsPlugin()
  ]
})
