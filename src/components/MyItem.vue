<template>
  <li>
    <label>
      <input type="checkbox"
             :checked="todo.done"
             @change="handleCheck(todo.id)"
      />
      <span v-show="!todo.isEdit">{{ todo.title }}</span>
      <!--   :value="todo.title"的意思是指 input.value的值跟着todo.title变 反过来则不行   -->
      <input
          ref="inputTitle"
          v-show="todo.isEdit"
          type="text"
          :value="todo.title"
          @blur="handleBlur(todo,$event)"
          @keyup.enter="handleBlur(todo,$event)"
      >
    </label>
    <button class="btn btn-danger" @click="deleteTodo(todo.id)">删除</button>
    <button v-show="!todo.isEdit" class="btn btn-edit" @click="edit(todo)" >编辑</button>
  </li>

</template>

<script>
export default {
  name: "MyItem",
  props:['todo'],
  methods:{
    handleCheck(id) {
      this.$bus.$emit('onHandle', id)
    },
    deleteTodo(id){
      this.$bus.$emit('onDelete', id)
    },
    edit(todo){
      // eslint-disable-next-line no-prototype-builtins
      if(!todo.hasOwnProperty('isEdit')){
        this.$set(todo,'isEdit',true)
      }
      else
        todo.isEdit = true
      // nextTick指定的回调会在dom节点更新之后执行
      this.$nextTick(()=>{
        this.$refs.inputTitle.focus()
      })
    },
    handleBlur(todo, e){
      todo.isEdit = false
      if(!e.target.value.trim()) return alert('输入不能为空！')
      //console.log(e)
      this.$bus.$emit('onCorrect', todo.id, e.target.value)
    }
  }
}
</script>

<style scoped>
  /*item*/
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    display: none;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }
  li:hover{
    background-color: #faebcc;
  }
  li:hover button{
    display: block;
  }
</style>