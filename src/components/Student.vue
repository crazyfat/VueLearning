<template>
  <div>
    <h1>{{msg}}</h1>
    <h2>student's name:{{name}}</h2>
    <h2>student's age:{{age+1}}</h2>
    <button @click="showName">clicking to show stu name</button>
  </div>
</template>

<script>
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Student",
    data(){
      console.log(this)
      return {
        msg:'this is a short message!'
      }
    },
    // props:['name', 'age'],
    // props:{
    //   name:String,
    //   age:Number
    // },
    props:{
      name:{
        type:String,
        required:true,
        default:'sss'
      },
      age:{
        type:Number,
        default:45
      }
    },
    methods:{
      showName() {
        alert(this.name);
      }
    }
  }
</script>

<style scoped>

</style>