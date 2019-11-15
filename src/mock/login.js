/**
 * Created by sn on 2019/11/15.
 */

const login = {
  get: () => {
    return {
      code: 200,
      msg: '账号尚未登录',
      time: 1573786219,
      data: {
        status: 40001
      }
    }
  },
  post: () => {
    return {
      code: 404,
      msg: '接口不存在',
      time: 1573786219,
      data: []
    }
  }
}

export default login
