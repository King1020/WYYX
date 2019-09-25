import {KING_KNOW_LIST} from '../mutations_types'
import {reqKnowHeaderList} from '../../api/index'
const state = {

  knowlist:[]
}
const mutations = {
  [KING_KNOW_LIST](state, data) {
    state.knowlist = data
  } 
}
const actions = {
 async getknowList({commit}){
    const result = await reqKnowHeaderList()
    if (result.code===0) {
      const knowlist = result.data
      commit(KING_KNOW_LIST, knowlist)
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