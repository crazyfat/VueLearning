//引入vue
import Vue from 'vue'
//引入app组件 它是所有组件的父组件
import App from './App.vue'
//关闭vue的生产提示
Vue.config.productionTip = false
//创建vue实例对象--vm
import VueRouter from "vue-router";
import store from '@/store'
import router from '@/router'
Vue.use(VueRouter)
new Vue({
  el:'#app',
  render:h=>h(App),
  store,
  router,
  beforeCreate() {
    Vue.prototype.$bus = this
  }
})
