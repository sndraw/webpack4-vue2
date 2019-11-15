/**
 * Created by sn on 2019/11/7.
 */
import { SET_SITE, RESET_SITE } from './mutations-types'

const mutations = {
  [SET_SITE](state, siteInfo){
    state.siteInit = true
    state.siteInfo = siteInfo
  },
  [RESET_SITE](state){
    state.siteInit = false
    state.siteInfo = {}
  }
}

export default mutations
