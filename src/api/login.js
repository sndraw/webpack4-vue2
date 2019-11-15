/**
 * Created by sn on 2019/3/20.
 */
import http from '@/api/common/http'
import config from '@/config'
import apiConfig from '@/config/api.conf'
import stringify from '@/utils/stringify'

const httpApi = {
  loginAuth: (params) => {
    const url = config.apiUrl + apiConfig.login
    return http.get(url, { params: params })
  },
  loginSite: (params) => {
    const url = config.apiUrl + apiConfig.login
    // post下参数序列化
    params = stringify(params)
    return http.post(url, params)
  },
  getCaptchaUrl: (captchaId) => {
    const url = config.apiUrl + apiConfig.captcha + '/' + (captchaId ? captchaId : '')
    return url
  },
  logoutSite: () => {
    const url = config.apiUrl + apiConfig.logout
    return http.get(url)
  }
}
export default httpApi
