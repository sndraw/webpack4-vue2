/**
 * Created by sn on 2019/11/7.
 */
const site = {
  getSiteInfo: () => {
    return {
      code: 200,
      msg: '请求成功',
      data: {
        news: [
          {
            id: '1',
            title: 'Tom',
            content: 'Tom is working!'
          },
          {
            id: '2',
            title: 'Jerry',
            content: 'Jerry is fishing!'
          }
        ],
        title: 'vue个人网站',
        logo: '/static/logo.png'
      }
    }
  }
}

export default site
