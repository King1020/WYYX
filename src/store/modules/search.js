import {
  KING_SEARCH,
  KING_SEARCH_LIST
} from '../mutations_types'
import {reqSearch,reqSearchList} from '../../api/index'

const state={
  // 搜索
  Searchdata:[],
  // 默认显示
  Navlist:{}
}
const mutations = {
  // 搜索
  [KING_SEARCH](state, Searchdata) {
    state.Searchdata = Searchdata
    console.log(Searchdata);
    
  },
  // 搜索默认显示
  [KING_SEARCH_LIST](state, Navlist) {
    state.Navlist = Navlist
    console.log(Navlist)
  }
}
const actions = {
  // 搜索
    async getSearch({commit},Prefix){
     const result = await reqSearch(Prefix)
     if (result.code==='200') {
       const Searchdata = result.data
       commit(KING_SEARCH, Searchdata)
     }
   },
  //  搜索默认显示
  async getHotWords({commit}){
    const result=await reqSearchList()
    if (result.code==='200') {
      const NavList=result.data
      commit(KING_SEARCH_LIST, NavList)
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