/**
 * Created by sn on 2019/11/7.
 */
import Mock from 'mockjs'
import site from './site'

Mock.mock('/admin/index', 'get', site.getSiteInfo())

export default Mock
