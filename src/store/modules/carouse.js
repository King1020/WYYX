// 引入常量
import {KING_KONG_MODULE} from '../mutations_types'

import {reqCarousel} from '../../api/index'
const state={
   // 推荐
   kingKongModule: {},
  //  轮播导航
   focusList: [],
  //  网易自营品牌
  policyDescList:[],
  // 新品发售
  kingKongList:[]

}
const mutations = {
   [KING_KONG_MODULE](state,data){
    state.kingKongModule = data.kingKongModule;
    state.focusList = data.focusList
    state.policyDescList = data.policyDescList
    state.kingKongList = data.kingKongModule.kingKongList
    // console.log(data);
  }
}
const actions = {
    async getCarouse({commit}){
     const result = await reqCarousel()
     if (result.code===0) {
       const carouse=result.data
       commit(KING_KONG_MODULE, carouse)
     }
   }
}

const getters = {}

export default{
  state,
  actions,
  mutations,
  getters
}