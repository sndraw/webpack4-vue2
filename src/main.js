/**
 * Created by sn on 2019/11/7.
 */
import Vue from 'vue'

//主配置引入

import config from '@/config'

if (config.mock) {
    require('@/mock/index.js')
}

//常量配置引入，使用方法为this.$constants.MSG_SUCCESS
import constants from  '@/config/constants.conf'
Vue.prototype.$constants = constants


import App from '@/App'
import router from '@/router'
import store from '@/store'

new Vue({
    el: '#app',
    store,
    router,
    components: {App},
    template: '<App/>'
})
