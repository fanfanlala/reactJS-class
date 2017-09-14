const path = require('path')
module.exports = {
    // 开发环境配置
  dev: {
    env: require('./dev.env'),
    assetsPublicPath: '/',
    assetSubDirectory: 'static',
    port: 5000,
        // 默认的代理方式
    proxyTable: {},
    autoOpenBrowser: true
  },
    // 生产环境配置
  build: {
    env: require('./prod.env'),
    assetsRoot: path.resolve(__dirname, '../src'),
    assetsPublicPath: '',
    assetSubDirectory: 'static'
  }
}
