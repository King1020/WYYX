<template>
  <div class="search_warp">
    <div class="search_header">
      <div class="header_content">
        <i class="iconfont iconfangdajing"></i>
        <input  v-model="king" @input="searchK" type="search" placeholder="入秋炖补神器" />
      </div>
      <span @click="$router.back()">取消</span>
    </div>
    <!-- 搜索框下 -->
    <div class="serach_nav">
      <div class="nav_header">
        <h3>热门搜索</h3>
        <div class="search_list" v-show="king!==''" >
          <ul class="search_item" >
            <li class="item_odd" v-for="(item,index) in Searchdata" :key="index">{{item}}</li>
          </ul>
        </div>
      </div>
      <div class="nav_list" v-show="king == ''">
        <span class="list_item" v-for="(item,index) in Navlist.hotKeywordVOList" :key="index">
          <span>{{item.keyword}}</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      king: '' //input框初始值
    }
  },
  computed: {
    ...mapState({
      Navlist: state => state.search.Navlist,
      Searchdata: state => state.search.Searchdata
    })
  },
  async mounted() {
    await this.$store.dispatch('getHotWords')
  },
   methods: {
   async searchK(){
    await this.$store.dispatch('getSearch', this.king)

    }
  },
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
.search_header
  height 44px
  padding 0 15px
  justify-content space-between
  display flex
  align-items center
  .header_content
    display flex
    align-items center
    width 280px
    height 28px
    background #f4f4f4
    border-radius 4px
    padding 0 10px
    .iconfont
      padding 0 10px
    input[type='search']
      outline none
      border none
      background none
      width 220px
.search_list
  height 200px
  .search_item
    padding 10px 0
    .item_odd
      margin-left 15px
      color #7f7f7f
      font-size 15px
      list-style none
      border-bottom 1px solid #ededed
.serach_nav
  height 180px
  padding 0 15px 15px
  .nav_header
    width 346px
    height 45px
    line-height 45px
    h3
      font-size 15px
      color #999
  .list_item
    display inline-block
    height 24px
    border 1px solid #7f7f7f
    text-align center
    line-height 24px
    border-radius 2px
    margin 10px
    color #333
    span
      padding 0 5px
</style>