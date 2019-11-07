<template>
  <div class="app-login">
    <div v-if="msg">{{msg}}</div>
  </div>
</template>

<style>
  .app-login {
    margin: 10px 10px;
    padding: 10px 10px;
    border: 1px solid #ff8a00;
  }
</style>

<script>
export default {
  data () {
    return {
      msg: 'Loading...'
    }
  },
  created () {
    this.changeMsg()
  },
  methods: {
    changeMsg () {
      this.msg = 'Login...'
    }
  }
}

</script>
