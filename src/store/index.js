// 引入 Vue
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'
// 引入模块
import carouse from './modules/carouse'
import classify from './modules/classify'
// 引入相关配置
import actions from './actions'
import mutations from './mutations'
import state from './state'
import getters from './getters'
// 声明
Vue.use(Vuex)
// 实例化Vuex对象
export default new Vuex.Store({
  mutations,
  actions,
  state,
  getters,
  modules:{
    // 存放多个模块
    carouse,
    classify
  }
})