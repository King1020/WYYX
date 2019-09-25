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
    </div>
    <!-- 右侧 -->
    <!-- 轮播 -->
    <div class class="right_banner">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(odd,index) in categoryList" :key="index">
            <img class="central-list-top-img" :src="odd.bannerUrl" />
          </div>
        </div>
      </div>
      <!-- 翻页器 -->
      <div 
      class="swiper-pagination" style="margin-top: -15px;backgournd: #333"></div>
    </div>

    <div class="classify_right">
      <div>
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
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
// 滑动
// import BScroll from 'better-scroll'
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
    })
  },
  async mounted() {
    await this.$store.dispatch('getcalssify')
    //初始化结束页面默认显示
    this.kingArr = this.categoryList[0].subCateList

    new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination'
      },
      autoplay: {
        // delay: 2000 //2秒切换一次
      },
      // 无缝轮播
      loop: true,
      bulletClass: 'my-bullet' //需设置.my-bullet样式
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
    position absolute
    right 0
    top 65px
    .right_list
      position relative
      top 100px
      width 264px
      display flex
      flex-wrap wrap
      .right_item
        margin-top 5px
        width 72px
        height 90px
        padding-left 12px
        text-align center
        font-size 12px
        color #7f7f7f
      img
        width 72px
        height 72px
  .right_banner
    position absolute
    right 12px
    top 60px
    width 265px
    height 96px
    padding-bottom 10px
    img
      width 265px
      height 96px
</style>