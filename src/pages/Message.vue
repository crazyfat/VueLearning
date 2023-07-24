<template>
  <div>
    <ul>
      <li v-for="msg of message" :key="msg.id">
<!--        <router-link :to="`/home/message/detail?id=${msg.id}&title=${msg.title}`">{{ msg.title }}</router-link>&nbsp;&nbsp;-->
        <router-link :to="{
          name:'detail',
          query:{
            id:msg.id,
            title:msg.title
          }
        }">
          {{ msg.title }}
        </router-link>&nbsp;&nbsp;
        <button @click="pushShow(msg)">push查看</button>
        <button @click="replaceShow(msg)">replace查看</button>
      </li>
    </ul>
    <hr>
    <keep-alive include="Detail">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "Message",
  data(){
    return {
      message:[
        {id:'001', title:"msg 001"},
        {id:'002', title:"msg 002"},
        {id:'003', title:"msg 003"}

      ]
    }
  },
  methods:{
    pushShow(m){
      this.$router.push({
        name:'detail',
        query:{
          id:m.id,
          title:m.title
        }
      })
    },
    replaceShow(m){
      this.$router.replace({
        name:'detail',
        query:{
          id:m.id,
          title:m.title
        }
      },()=>{
        console.log('11111')
          }
      )
    }
  }
}
</script>

<style scoped>

</style>