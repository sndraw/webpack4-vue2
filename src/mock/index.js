/**
 * Created by sn on 2019/11/7.
 */
import Mock from 'mockjs'
import site from './site'
import login from './login'

Mock.mock('/admin/index', 'get', site.getSiteInfo())
Mock.mock('/admin/login', 'get', login.get())
Mock.mock('/admin/login', 'post', login.post())
export default Mock
