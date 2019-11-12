/**
 * Created by sn on 2019/3/18.
 */
import devConfig from './dev.conf'
import prodConfig from './prod.conf'
import mockConfig from './mock.conf'

let config = {}

// 如果是生产模式，则使用生产配置
if (process.env.NODE_ENV == 'production') {
  config = prodConfig
} else {
  // 如果是开发模式，则使用开发配置
  config = devConfig
}

// 如果mock模式为true，则合并mock配置
if (config && config.mock) {
  config = Object.assign({}, config, mockConfig)
}
export default config
