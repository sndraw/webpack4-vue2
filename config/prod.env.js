/**
 * Created by sn on 2017/2/26.
 */
const path = require('path')

const config = {
  NODE_ENV: '"production"',
  // Template for index.html
  index: path.resolve(__dirname, '../dist/index.html'),

  // Paths
  assetsRoot: path.resolve(__dirname, '../dist'),
  assetsSubDirectory: 'static',
  assetsPublicPath: '/',

  //启动生产消息
  productionTip: false,


  //Source Maps
  productionSourceMap: true,
  // https://webpack.js.org/configuration/devtool/#production
  // devtool: '#source-map',
  devtool: 'cheap-module-source-map',
  // Gzip off by default as many popular static hosts such as
  // Surge or Netlify already gzip all static assets for you.
  // Before setting to `true`, make sure to:
  // npm install --save-dev compression-webpack-plugin
  productionGzip: true,
  productionGzipExtensions: ['js', 'css','svg'],

  // Run the build command with an extra argument to
  // View the bundle analyzer report after build finishes:
  // `npm run build --report`
  // Set to `true` or `false` to always turn it on or off
  bundleAnalyzerReport: process.env.npm_config_report
}
module.exports = config
