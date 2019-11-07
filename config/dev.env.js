/**
 * Created by sn on 2017/2/26.
 */
const path = require('path')

const config = {
  NODE_ENV: '"development"',
  // Template for index.html
  index: path.resolve(__dirname, '../dev/index.html'),
  // Paths
  assetsRoot: path.resolve(__dirname, '../dev'),
  assetsSubDirectory: 'static',
  assetsPublicPath: '/',
  proxyTable: {//接口转发
    '/api': {
      target: 'http://localhost:8081', //转发地址
      changeOrigin: true,
      pathRewrite: {
        '^/api/(.*)': '/$1'
      }//路由重写，与target组装成新的地址,如“/api/getlogo”转发到“http://localhost/getlogo”
    }
  },

  // Various Dev Server settings
  host: 'localhost', // can be overwritten by process.env.HOST
  port: 8099, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
  autoOpenBrowser: false,
  errorOverlay: true,
  notifyOnErrors: true,
  poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

  // Use Eslint Loader?
  // If true, your code will be linted during bundling and
  // linting errors and warnings will be shown in the console.
  useEslint: true,
  // If true, eslint errors and warnings will also be shown in the error overlay
  // in the browser.
  showEslintErrorsInOverlay: false,

  //启动生产消息
  productionTip: true,
  // Source Maps
  productionSourceMap: false,

  // https://webpack.js.org/configuration/devtool/#development
  devtool: 'cheap-module-eval-source-map',

  // If you have problems debugging vue-files in devtools,
  // set this to false - it *may* help
  // https://vue-loader.vuejs.org/en/options.html#cachebusting
  cacheBusting: true,

  cssSourceMap: true

}

module.exports = config
