import {KING_GORY_LIST} from '../mutations_types'
import {reqClassify} from '../../api/index'
const state = {
  // 分类列表
  categoryList: []
}
const mutations = {
  [KING_GORY_LIST](state, data) {
    state.categoryList = data
    console.log(data)
  }
}
const actions = {
 async getcalssify({commit}){
    const result = await reqClassify()
    if (result.code===0) {
      const datalist = result.data
      commit(KING_GORY_LIST, datalist)

    }
  }
    //  async getCarouse({ commit}) {
    //    const result = await reqCarousel()
    //    if (result.code === 0) {
    //      const carouse = result.data
    //      commit(KING_KONG_MODULE, carouse)
    //    }
    //  }
}

const getters = {}

export default {
  state,
  actions,
  mutations,
  getters
}