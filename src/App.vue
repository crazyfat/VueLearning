<!--<template>-->
<!--  <div id="root">-->
<!--    <div class="todo-container">-->
<!--      <div class="todo-wrap">-->
<!--          <MyHeader-->
<!--              @onSend="receive"-->
<!--          />-->
<!--          <MyList-->
<!--              :todos="todos"-->
<!--          />-->
<!--          <MyFooter-->
<!--              ref="footer"-->
<!--              :todos="todos"-->
<!--          />-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->

<!--import MyHeader from "@/components/MyHeader";-->
<!--import MyList from "@/components/MyList";-->
<!--import MyFooter from "@/components/MyFooter";-->


<!--export default {-->
<!--  name: 'App',-->
<!--  components: {-->
<!--    // eslint-disable-next-line vue/no-unused-components-->
<!--    MyHeader,-->
<!--    // eslint-disable-next-line vue/no-unused-components-->
<!--    MyList,-->
<!--    // eslint-disable-next-line vue/no-unused-components-->
<!--    MyFooter-->
<!--  },-->
<!--  data(){-->
<!--    return {-->
<!--      todos:JSON.parse(localStorage.getItem('todos')) || []-->
<!--    }-->
<!--  },-->
<!--  methods:{-->
<!--    //添加逻辑-->
<!--    receive(todo){-->
<!--      this.todos.unshift(todo)-->
<!--    },-->
<!--    //勾选逻辑-->
<!--    handleCheck(id){-->
<!--      console.log('handle')-->
<!--      this.todos.forEach(todo=>{-->
<!--        if(todo.id==id){-->
<!--          todo.done = !todo.done-->
<!--        }-->
<!--      })-->
<!--    },-->
<!--    //删除逻辑-->
<!--    deleteTodo(id){-->
<!--      this.todos = this.todos.filter(todo=>{-->
<!--        return todo.id !== id-->
<!--      })-->
<!--    },-->
<!--    //修改逻辑-->
<!--    correctTodo(id, title){-->
<!--      this.todos.forEach(todo=>{-->
<!--        if(id == todo.id)-->
<!--          todo.title = title-->
<!--      })-->
<!--    },-->
<!--    //全选或全不选-->
<!--    checkAlltodos(status){-->
<!--      this.todos.forEach(todo=>todo.done=status)-->
<!--    },-->
<!--    //清除已完成-->
<!--    clearFinished(){-->
<!--      this.todos = this.todos.filter(todo=>!todo.done)-->
<!--    }-->
<!--  },-->
<!--  watch:{-->
<!--    todos:{-->
<!--      deep:true,-->
<!--      handler(value){-->
<!--        localStorage.setItem('todos', JSON.stringify(value))-->
<!--      }-->
<!--    }-->
<!--  },-->
<!--  mounted() {-->
<!--    this.$bus.$on('onCheck', this.checkAlltodos)-->
<!--    this.$bus.$on('onClear', this.clearFinished)-->
<!--    this.$bus.$on('onDelete', this.deleteTodo)-->
<!--    this.$bus.$on('onHandle', this.handleCheck)-->
<!--    this.$bus.$on('onCorrect', this.correctTodo)-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<style>-->
<!--  .btn {-->
<!--    display: inline-block;-->
<!--    padding: 4px 12px;-->
<!--    margin-bottom: 0;-->
<!--    font-size: 14px;-->
<!--    line-height: 20px;-->
<!--    text-align: center;-->
<!--    vertical-align: middle;-->
<!--    cursor: pointer;-->
<!--    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);-->
<!--    border-radius: 4px;-->
<!--  }-->

<!--  .btn-danger {-->
<!--    color: #fff;-->
<!--    background-color: #da4f49;-->
<!--    border: 1px solid #bd362f;-->
<!--  }-->

<!--  .btn-danger:hover {-->
<!--    color: #fff;-->
<!--    background-color: #bd362f;-->
<!--  }-->

<!--  .btn-edit{-->
<!--    color: #fff;-->
<!--    background-color: #63d5ff;-->
<!--    border: 1px solid #66a1ff;-->
<!--    margin-right: 20px;;-->
<!--  }-->

<!--  .btn:focus {-->
<!--    outline: none;-->
<!--  }-->
<!--  .todo-container {-->
<!--    width: 600px;-->
<!--    margin: 0 auto;-->
<!--  }-->
<!--  .todo-container .todo-wrap {-->
<!--    padding: 10px;-->
<!--    border: 1px solid #ddd;-->
<!--    border-radius: 5px;-->
<!--  }-->
<!--</style>-->

<!--  <div class="main-container">-->
<!--    <category title="美食" :listData="foods">-->
<!--      <img src="https://img2.baidu.com/it/u=849995377,520435495&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500" alt="">-->
<!--    </category>-->
<!--    <category title="电影" :listData="films"/>-->
<!--    <category title="游戏" :listData="games"/>-->
<!--  </div>-->

<!--<template>-->
<!--  <div>-->
<!--    <count/>-->
<!--  </div>-->
<!--</template>-->

<template>
  <div>
    <div class="row">
      <h1>v-model</h1>
      <input type="text" v-model="msg">
      <banner v-model="msg"></banner>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <router-link class="list-group-item" active-class="active" to="/about">About</router-link>
          <router-link class="list-group-item" active-class="active" to="/home">Home</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // import category from '@/components/slotLearning'
  // import count from '@/components/Count'
  import banner from '@/components/Banner'
  export default {
    name:'App',
    components:{
      banner
    },
    data(){
      return{
        msg:'iiiii',
        foods:['火锅','烤肉','砂锅'],
        films:['星际穿越','流浪地球','满江红'],
        games:['马里奥','塞尔达','炉石传说']
      }
    }
  }
</script>

<style>
  .main-container{
    display: flex;
    justify-content: space-around;
  }
  img{
    width: 100%;
  }
</style>
