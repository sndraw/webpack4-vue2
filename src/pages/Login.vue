<template>
  <div class="app-login-page" v-loading="loading">
    <app-login-form :loginFun="loginSite" :captchaFun="getLoginCaptchaUrl" v-if="loading == false"></app-login-form>
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue'
export default {
  data () {
    return {
      loading: true,
      title: '登录页面',
      msg: '请登录'
    }
  },
  created(){
    document.title = `${this.$store.getters.siteTitle}-${this.$data.title}`
    this.loginAuth()
  },
  computed: {},
  methods: {
    loginAuth () {
      const that = this
      that.$store.dispatch('loginAuth').then(response => {
        const resData = response.data
        if (!resData.data.status || resData.data.status === that.$constants.CODE_NOT_LOGIN) {
          that.$data.loading = false
          return false
        }
        if (resData.data.status == that.$constants.CODE_LIMIT_LOGIN) {
          that.$notify.error({
            title: '错误',
            message: '该账号已禁用，请重新登录'
          })
          that.$data.loading = false
          return false
        }
        if (resData.data.status == that.$constants.CODE_HAS_LOGIN) {
          that.$notify.error({
            title: '消息',
            message: '该账号已登录，重新登录前请先注销登录'
          })
          let redirect = '/'
          if (that.$route.query && that.$route.query.redirect) {
            redirect = that.$route.query.redirect
          }
          that.$router.push(redirect)
          return false
        }

      })
    },
    loginSite (params){
      const that = this
      return that.$store.dispatch('loginSite', params).then(response => {
        let redirect = '/'
        if (that.$route.query && that.$route.query.redirect) {
          redirect = that.$route.query.redirect
        }
        that.$router.push(redirect)
      })
    },
    getLoginCaptchaUrl () {
      // const that = this
      // const loginCaptcha = that.$store.dispatch('getLoginCaptcha')
      // return loginCaptcha
      // 模拟图片数据
      return new Promise((resolve, reject) => {
        const res = {
          captchaUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAjCAMAAABB2AMWAAAAt1BMVEXz+/5nToSXw6zbz86cwZufsaGjpsDRpMCc3afWqKWswb7A36Ph5e6UkLF2ZJNyYIe+utCIhI/Qz9+bjrGMhamVy6KKeaJ4Y5Obm7h0cYxuWYt9b5qFeqKtpMF5eZNza46Fl52LpaKRtKdtXInMvsSvnrJ1Xo2Sfp++rruEbpbInKB9cot0aomeqJeIlZKTlpN/iJipupt8c46Df5KYpJ2shpi6kZx0WYiee5SRmJluWoeKi5Z1Zou1+mIJAAAEQklEQVRYhbWYiXLbNhCGAZ6WBcsImAKqbOayk6Zpm6RJ3TbH+z9XdhcXQQIS5U53JI5EgMSHfw+AZOyUbTbus8rqutTSNPG4sAuw4j232yyWtf8TC5jOxSKh1lIdxWqOUJ2PtXW2CgqthGXJHGITCYmogIXjHhv6SNtZXnaEbKLchbPCqEcVKbX1fX8O0QQrtSJVOvRsCkuqCg2oUK0+nu66VVzOiX240o50CXYUK51DjsofECv6cBWWY1tgIdOUiwIr40SHVaBi5ENkajBXaf5ddzI5erIZFmOeKOXaZmKrSOWx7G37vkGuhonBHG6225OKNQ1cgmgp1kIt0mrBZalEctYF3BTLTh3kGjjauMKPjqifYc1jK1uciOpqdw2z75JzgauqrBPh5s3mnSYq/tvpChd0Oq3W4loikJw/2c4DmVpsJpJhXG02v1sq6p83X+CsUEusZWxZrrRCCMXQL09Tolzlw8FgAkYJwPpjW3CieHhggWUl1jwTL34auGbMcL5PqOJxYphU0PM9A6xdKeSBmxvBfCbmYmvhxIVd/Ax3EYzzw3QMF1qZiqyguxUXJpfjUtw8/D3+8y4sCZlMjCGfZZPwxTCRMNjNLKwKmxA5KqEo6D/kY8sYAa5Wet1SNcOCpOtuD/yKZs+HEWa/umy7AsGzWIoriy9XcS3VwrC9ZSMOYDQ6crWZI1iD9j8eicWA5cBcEeKmfClsre6ljNji7uOf15xfZztz6TaT4uGRWJgyKBlNfiheef96sD0CGNQx7a4IVaRtWwyMK1KdNrr/rqDKYe1hrGecawoVGU7bbac9Cjm8cXJGcFFVgluvh21w20K4wuHpgbpQgTsjLCbWdc/t2oaqTULLYwGS4dFG1yzNUL2Eho9sggVAlu12FweIM11lvshWL2i8l1gjdGyu6wo+904l/foX7tXsWLdH0js8TyuSLyGIhT7sbnaj1kYPKNVjsDrAekUDvoJAGdQMS1mqUbhUfYsSQvXcO+20XcQnWNDYtmNUV8sJ1ppnAMC6vESsCtPwrmIqiQJwYl3LX21+jjTQm3tyLIzcHYJHq2qybmLAt1++8qmZwJU869kfS8yIhVH1rJo126et+u0QJ+6wEWv/6bD7/FfLUrWIyylpRqWU1JN4JIR6s6lPY2FsQUJpWc2xKox58CQTowt5P2vEwk+FoZTEFplOOisTsxcYavzW7k/2rcKlM/iZy2G38YOj8JkoUyygcnuwBMtME9ZdLT0XYhzHOrWvoH0ffJQtV5z7fAhYoetSrW9taJVh8XBqecRz3sEsDTcKRjExkzSOOzNp1QrtlC3KgoBSHuS8dzBZsGHp5RIVCIzlGTaArocV22JhDiWpGP4UNpz+0bfwQmppLVkGC7i+U1mgVuFKmAepC/IUsTzcSqySIVb7iVC+Q6FPk6XsNLvb/G9Yfu+bE4yw2s9pQY2LR/690w/hmDYYkRiD0gAAAABJRU5ErkJggg==',
          captchaId: new Date().getTime() * 1000 + Math.ceil(Math.random() * 1000)
        }
        resolve(res)
      })
    }
  },
  components: {
    'AppLoginForm': LoginForm
  }
}
</script>
