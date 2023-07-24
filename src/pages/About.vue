<template>
  <h2>我是about的内容</h2>
</template>

<script>
export default {
  name: "About",
  beforeDestroy() {
    console.log('即将销毁')
  },
  beforeRouteEnter(to, from, next){
    console.log('beforeEnter')
    next()
  },
  beforeRouteUpdate(to, from, next){
    console.log('update')
    next()
  },
  beforeRouteLeave(to, from, next){
    console.log('Leave')
    next()
  },
}
</script>

<style scoped>

</style>