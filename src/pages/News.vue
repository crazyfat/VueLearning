<template>
  <ul>
    <li>news001</li>
    <input type="text">
    <li>news002</li>
    <input type="text">
    <li>news003</li>
    <input type="text">
  </ul>
</template>

<script>
export default {
  name: "News",
  deactivated() {
    console.log('deactivated')
  },
  activated() {
    console.log('activate')
  }
}
</script>

<style scoped>

</style>