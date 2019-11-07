/**
 * Created by sn on 2019/3/18.
 */
import dev_config from './dev.conf'
import prod_config from './prod.conf'
import mock_config from './mock.conf'

let config = {}

//如果是生产模式，则使用生产配置
if (process.env.NODE_ENV == "production") {
  config = prod_config
} else {
  //如果是开发模式，则使用开发配置
  config = dev_config
}

//如果mock模式为true，则合并mock配置
if (config && config.mock) {
  config=Object.assign({},config, mock_config)
}
export  default  config;
