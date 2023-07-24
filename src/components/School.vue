<template>
  <div class="demo">
    <div class="box">
    <h2>school name:{{name}}</h2>
    <h2>school location:{{address}}</h2>
    <button @click="showName">clicking to show school's name</button>
    </div>
  </div>
</template>

<script>
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "School",
    data(){
      return {
        name:'hdu',
        address:'hangzhou'
      }
    },
    methods:{
      showName(){
        alert(this.name);
      }
    }

  }
</script>

<style scoped>
  .demo{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .box{
    width: 50%;
    background-color: #42b983;

  }
</style>