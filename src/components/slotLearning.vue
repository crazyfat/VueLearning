<template>
  <div class="container">
    <h3>{{title}}分类</h3>
    <ul>
      <li v-for="(item,index) of listData" :key="index">{{item}}</li>
    </ul>
    <slot>默认值</slot>
  </div>
</template>

<script>
export default {
  name: "category",
  props:['title','listData']
}
</script>

<style scoped>
  .container{
    background-color: #42b983;
    width: 200px;
    height: 300px;
  }
  h3{
    text-align: center;
    background-color: #faebcc;
  }
  img{
    width: 100%;
  }
</style>