<template>
  <div class="classify_warp">
    <router-view></router-view>
    <Header />
    <!-- 左侧列表 -->
    <div class="classify_left">
      <ul class="left_list">
        <li
          class="list_item"
          :class="{pitch:clickId===index}"
          @click="onindex(index)"
          v-for="(item,index) in categoryList"
          :key="index"
        >{{item.name}}</li>
        <!-- categoryList[clickId].subCateList -->
      </ul>
      <!-- <div class="active"></div> -->
    </div>
    <!-- 右侧 -->
    <div class="classify_right">
      <div class="right_banner">
        <img src="https://yanxuan.nosdn.127.net/c7de7e8850dc05df6943a1a39dce2558.jpg" />
      </div>
      <div class="wrapperMax">
        <div class="right_list">
          <div class="right_item" v-for="(odd,index) in kingArr" :key="index">
            <img :src="odd.wapBannerUrl" />
            <span>{{odd.name}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 头部导航栏
import Header from './classifyheader'
// 滑动
import BScroll from 'better-scroll'
import { mapState } from 'vuex'
export default {
  data() {
    return {
      clickId: 1, //对应索引
      kingArr: []
    }
  },
  methods: {
    onindex(index) {
      this.clickId = index
      this.kingArr = this.categoryList[index].subCateList
    }
  },
  components: {
    Header
  },
  computed: {
    ...mapState({
      categoryList: state => state.classify.categoryList
    }),
    
  },
  async mounted() {
    await this.$store.dispatch('getcalssify')
    //初始化结束页面默认显示
    this.kingArr = this.categoryList[0].subCateList
    //滑动
      new BScroll('wrapperMax', {
        startX: 0,
        click: true,
        scrollX: true,
        scrollY: false
      })
   
  }
}
</script>
<style lang='stylus' rel='stylesheet/stylus'>
.classify_warp
  position relative
  .classify_left
    width 25%
    padding 10px 0
    position relative
    .left_list
      display block
      line-height 3
      font-size 15px
      text-align center
      .pitch
        color #ab2b2b
        border-left 2px solid red
  .classify_right
    width 75%
    height 437px
    position absolute
    right 0
    top 65px
    // background #7f7f7f
    .right_banner
      width 265px
      height 96px
      // background #fff
      padding-bottom 10px
      img
        width 265px
        height 96px
    .right_list
      width 264px
      display flex
      flex-wrap wrap
      .right_item
        margin-top 5px
        width 72px
        height 90px
        padding-left 12px
        text-align center
      img
        width 72px
        height 72px
</style>