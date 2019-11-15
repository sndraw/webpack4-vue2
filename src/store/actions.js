/**
 * Created by sn on 2019/11/7.
 */

import api from '@/api'

import {SET_SITE, RESET_SITE} from '@/store/mutations-types'

const actions = {
  getSiteInfo({commit, state}, params){
    if (!state.siteInit) {
      return api.site.getSiteInfo(params).then(response => {
        const resData = response.data ? response.data : ""
        if (resData && resData.data) {
          commit(SET_SITE, resData.data)
        }
        return resData
      })
    }
  },
  resetSiteInfo({commit, state}, params){
    commit(RESET_SITE)
  }
}

export default actions
