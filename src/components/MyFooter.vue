<template>
  <div class="todo-footer" v-show="total">
    <label>
      <input type="checkbox" v-model="isAll"/>
    </label>
    <span>
          <span>已完成{{finishedNum}}</span> / 全部{{total}}
        </span>
    <button class="btn btn-danger" @click="clear">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  data(){
    return {

    }
  },
  computed:{
    finishedNum(){
      return this.todos.reduce((pre, cur)=>cur.done? pre+1 : pre, 0)
    },
    total(){
      return this.todos.length
    },
    isAll:{
      get(){
        return this.finishedNum==this.total && this.total>0
      },
      set(val){
        this.$bus.$emit('onCheck', val)
      }
    }
  },
  methods:{
    // checkAll(e){
    //   // 这里有一个问题，为什么用this.isAll不行，因为isAll是单项数据绑定，当选中了input后isALL没有被修改！！
    //   console.log(e.target.checked+'  '+this.isAll)
    //   this.checkAlltodos(e.target.checked)
    // }
    clear(){
      this.$bus.$emit('onClear')
    }
  },
  props:['todos'],
  mounted() {
    //console.log(this)
  }
}
</script>

<style scoped>
  /*footer*/
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }

</style>