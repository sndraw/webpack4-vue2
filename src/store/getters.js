/**
 * Created by sn on 2019/11/7.
 */

const getters = {
  siteInit: state => state.siteInit,
  siteInfo: state => state.siteInfo,
  siteTitle: state => state.siteInfo.title,
  siteLogo: state => state.siteInfo.logo,
}

export default getters
