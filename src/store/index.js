import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// //state:仓库存储数据的地方
// const state={
//     count:1
// }
// //mutations:修改state唯一手段
// const mutations={
//     ADD(state){
//         state.count++
//     }
// }
// //action:处理action,可以书写自己业务逻辑/异步
// const actions={
//     add({commit}){
//         commit('ADD')
//     }
// }
// //getters:计算属性
// const getters={}
import home from './home'
import search from './search'
import detail from './detail'
import shopcart from './shopcart'
import user from './user'
import trade from './trade'
export default new Vuex.Store({
    modules:{
        home,
        search,
        detail,
        shopcart,
        user,
        trade,
    }
})