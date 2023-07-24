<template>
  <ul>
    <li>{{ id }}</li>
    <li>{{ title }}</li>
  </ul>
</template>

<script>
export default {
  name: "Detail",
  props:['id','title'],
  deactivated() {
    console.log('deactivated')
  },
  activated() {
    console.log('activate')
  },
  nextTick(callback, context) {
    console.log('nextTick')
  }
}
</script>

<style scoped>

</style>