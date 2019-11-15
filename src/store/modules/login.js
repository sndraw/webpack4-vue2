/**
 * Created by sn on 2019/3/20.
 */
import api from '@/api'
import {SET_LOGIN_USER_INFO} from '@/store/mutations-types'

const state = {
  userInfo: {
    username: ''
  }
}
const getters = {}

const actions = {
  loginAuth: ({commit, state}) => {
    return api.login.loginAuth().then(response => {
      const resData = response.data ? response.data : ''
      if (resData && resData.data) {
        // console.log(resData.data)
        // commit(SET_LOGIN_USER_INFO, resData.data)
      }
      return response
    })
  },
  loginSite: ({commit, state}, params) => {
    return api.login.loginSite(params).then(response => {
      const resData = response.data ? response.data : ''
      if (resData && resData.data) {
        // console.log(resData.data)
        // commit(SET_LOGIN_USER_INFO, resData.data)
      }
      return response
    })
  },
  logoutSite: ({commit, state}, params) => {
    return api.login.logoutSite(params).then(response => {
      const resData = response.data ? response.data : ''
      if (resData && resData.data) {
        // console.log(resData.data)
        // commit(SET_LOGIN_USER_INFO, resData.data)
      }
      return response
    })
  },
  getLoginCaptcha: () => {
    const captchaId = new Date().getTime() * 1000 + Math.ceil(Math.random() * 1000)
    const captchaUrl = api.login.getCaptchaUrl(captchaId)
    const captchaData = {
      captchaUrl: captchaUrl,
      captchaId: captchaId
    }
    return captchaData
  },
  setLoginUserInfo ({commit}, userInfo) {
    commit(SET_LOGIN_USER_INFO, userInfo)
  }
}

const mutations = {
  [SET_LOGIN_USER_INFO](state, userInfo){
    state.userInfo = userInfo
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
