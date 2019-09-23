import {KING_GORY_LIST} from '../mutations_types'
import {reqClassify} from '../../api/index'
const state = {
  // 分类列表
  categoryList: [],
}
const mutations = {
  [KING_GORY_LIST](state, data) {
    state.categoryList = data
  }
}
const actions = {
 async getcalssify({commit}){
    const result = await reqClassify()
    if (result.code===0) {
      const categoryList = result.data
      commit(KING_GORY_LIST, categoryList)

    }
  }
}

const getters = {}

export default {
  state,
  actions,
  mutations,
  getters
}