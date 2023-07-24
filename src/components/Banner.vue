<template>
  <div class="col-xs-offset-2 col-xs-8">
    <input  :value="value" @input="$emit('input', $event.target.value)"/>
    <div class="page-header"><h2>这是头部的Banner</h2></div>
    <button @click="backWard">后退</button>
    <button @click="forWard">前进</button>
  </div>
</template>

<script>
export default {
  name: "Banner",
  props:['value'],
  methods:{
    backWard(){
      this.$router.back()
    },
    forWard(){
      this.$router.forward()
    }
  }
}
</script>

<style scoped>

</style>