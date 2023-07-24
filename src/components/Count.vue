<template>
  <div>
    <h1>current sum is: {{sum}}</h1>
    <h1>big sum is :{{bigSum}}</h1>
    <select v-model="n">
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <button @click="increament(n)">+</button>
    <button @click="decreament(n)">-</button>
    <button @click="increamentOdd(n)">current sum is odd and then add</button>
    <button @click="increamentWait(n)">wait a moment and then add</button>
  </div>
</template>

<script>
import {mapGetters, mapActions, mapMutations, mapState} from 'vuex'
export default {
  name: "Count",
  data(){
    return {
      n:1
    }
  },
  computed:{
    ...mapState({sum:'sum'}),
    ...mapGetters({bigSum:'bigSum'}),
  },
  methods:{
    // increament(){
    //   this.$store.commit('add', this.n)
    // },
    // decreament(){
    //   this.$store.commit('sub', this.n)
    // },
    // increamentOdd(){
    //   this.$store.dispatch('addOdd', this.n)
    // },
    // increamentWait(){
    //   this.$store.dispatch('addWait', this.n)
    // }
    ...mapActions({increamentOdd:'addOdd', increamentWait:'addWait'}),
    ...mapMutations({increament:'add', decreament:'sub'})
  }
}
</script>

<style scoped>
  button{
    margin-left: 20px;
  }
</style>