//该文件用于创建vuex中的store
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
//准备actions--用于响应组件中的动作

const getters = {
    bigSum(state){
        console.log('getters', arguments)
        return state.sum * 10
    }
}
const actions = {
    ADD(context, value){
        console.log('调用action', arguments)
        context.commit('add',value)
    },
    SUB(context, value){
        context.commit('sub', value)
    },
    addOdd(context, value){
        console.log('调用action', arguments)
        if(state.sum%2==0)
            context.commit('add',value)
    },
    addWait(context, value){
        setTimeout(()=>{
            context.commit('add', value)
        }, 1000)
    }
}

//准备mutations--用于操作数据（state）
const mutations = {
    add(state, value){
        console.log('调用mutation')
        state.sum += value
    },
    sub(state, value){
        state.sum -= value
    }
}

//准备state--用于存储数据
const state = {
    sum:0
}

export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})
