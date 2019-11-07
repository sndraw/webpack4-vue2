/**
 * Created by sn on 2019/11/7.
 */
import Vue from 'vue'
import constants from '@/config/constants.conf'
import App from '@/App'
import router from '@/router'
import store from '@/store'

import ElementUI from 'element-ui'
import '@/assets/css/main.scss'

// 主配置引入
import config from '@/config'


Vue.use(ElementUI)

if (config.mock) {
  require('@/mock/index.js')
}

// 常量配置引入，使用方法为this.$constants.MSG_SUCCESS

Vue.prototype.$constants = constants

new Vue({
  el: '#app',
  store,
  router,
  components: {App},
  template: '<App/>'
})
