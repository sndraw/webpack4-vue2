/**
 * Created by sn on 2019/3/20.
 */
import http from '@/api/common/http'
import config from '@/config'
import apiConfig from '@/config/api.conf'
import stringify from '@/utils/stringify'

const httpApi={
  getSiteInfo:() => {
    const url = config.apiUrl + apiConfig.site
    return http.get(url)
  }

}
export default httpApi
