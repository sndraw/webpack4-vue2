<template>
    <div class="app-login">
        <div v-if="msg">{{msg}}</div>
        <div v-if="siteTitle">{{siteTitle}}</div>
        <div v-if="siteLogo"><img :src="siteLogo"/></div>
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
export default{
    data(){
        return {
            msg: 'Loading...'
        }
    },
    computed: {
        siteTitle(){
            return this.$store.getters.siteTitle
        },
        siteLogo(){
            return this.$store.getters.siteLogo
        }
    },
    created(){
        this.changeMsg()
        this.loadSite()
    },
    methods: {
        changeMsg(){
            this.msg = 'Login...'
        },
        loadSite(){
            this.$store.dispatch('getSiteInfo').then(response => {
                const resData = response.data
                console.log(resData)
            })
        }
    },
}

</script>
