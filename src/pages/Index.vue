<template>
  <div class="app-ui">
    <div v-if="siteTitle">网站：{{siteTitle}}</div>
    <div v-if="siteLogo">LOGO：<img :src="siteLogo"/></div>
    <div class="app-container">
      <el-alert
        :title="msg"
        :closable=false
        type="success"
        show-icon>
      </el-alert>
    </div>
  </div>
</template>
<style>
  .app-ui {
    padding: 10px;
    margin: 10px;
  }
  .app-container {
    padding: 10px 0;
  }
</style>
<script>
export default {
  data () {
    return {
      msg: '欢迎进入系统'
    }
  },

  computed: {
    siteTitle () {
      return this.$store.getters.siteTitle
    },
    siteLogo () {
      return this.$store.getters.siteLogo
    }
  },
  created () {
    this.loadSite()
  },
  methods: {
    loadSite () {
      this.$store.dispatch('getSiteInfo').then(response => {
        const resData = response.data
        console.log(resData)
      })
    }
  }
}
</script>
