<template>
  <router-view/>
</template>

<script>
export default{
    name:'App',
    data(){
        return {
            title:"系统首页"
        }
    },
    created(){
        document.title=this.$store.state.siteTitle || 'No title!'
    }
}
</script>