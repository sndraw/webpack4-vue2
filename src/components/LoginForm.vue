<template>
  <el-form :model="form" :rules="rules" ref="form" label-width="80px" class="app-login-form">
    <el-form-item label="用户名" prop="username">
      <el-input v-model="form.username"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="form.password" type="password"></el-input>
    </el-form-item>
    <el-form-item label="验证码" prop="captcha">
      <el-col :span="10">
        <el-input v-model="form.captcha"></el-input>
      </el-col>
      <el-col :span="14" class="app-captcha">
        <img :src="captchaUrl" class="app-captcha-img" @click="refreshCode" title="看不清，刷新下"/>
        <!--<el-button size="medium" circle="true" type='text' icon="el-icon-refresh" title="刷新验证码"  class="app-captcha-btn"  @click="refreshCode"></el-button>-->
      </el-col>
      <input v-model="form.captchaId" type="hidden"/>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit('form')">登录</el-button>
      <el-button @click="resetForm('form')">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import md5 from  'md5'
import validate from '@/utils/validate'
export default {
  data(){
    return {
      form: {
        username: "",
        password: "",
        captchaId: "",
        captcha: ""
      },
      captchaUrl: "",
      rules: {
        username: [
          {required: true, message: '请输入用户名', trigger: 'blur'},
          {pattern: validate.numberLetter, message: '用户名为字母和数字的组合', trigger: ['blur', 'change']},
          {min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: ['blur', 'change']},
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'},
          {pattern: validate.password, message: '密码长度在 6 到 20 个字符', trigger: ['blur', 'change']},
        ],
        captcha: [
          {required: true, message: '请输入验证码', trigger: 'blur'},
          {pattern:  validate.captcha, message: '请输入正确的4位验证码', trigger: ['blur', 'change']}
        ]
      }
    }
  },
  props: ['loginFun', 'captchaFun'],
  created(){
    this.refreshCode()
  },
  methods: {
    refreshCode(){
      const that = this;
      that.captchaFun().then(data => {
        if (data) {
          that.$data.form.captchaId = data.captchaId
          that.$data.captchaUrl = data.captchaUrl
        }
      })
    },
    onSubmit(formName){
      const that = this;
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const params = {
            username: that.form.username,
            password: md5(that.form.password),
            captchaId: that.form.captchaId,
            captcha: that.form.captcha,
          }
          that.loginFun(params)
        }
        return false
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
      this.refreshCode()
    }
  }
}

</script>
