<template>
  <div class="header_warp">
    <!-- 头部 -->
    <div class="home_header">
      <!-- logo图片 -->
      <img src="../../commn/imgs/logo.png" />
      <div class="home_header_sou" @click="$router.push('/search')">
        <i class="iconfont iconfangdajing"></i>
        <span class="placeholder">搜索商品,共22715款好物</span>
      </div>
      <div class="home_header_deng">
        <span class="btn" @click="$router.push('/person')">登录</span>
      </div>
    </div>
    <!-- 推荐 -->
    <div class="wrapper2">
      <div class="home_nav">
        <div class="home_list">
          <a
            class="home_item"
            :class="{xuan:xuan===index}"
            @click="on(index)"
            v-for="(item,index) in kingKongModule.kingKongList"
            :key="index"
            :href="item.schemeUrl"
          >
            <span>{{item.text}}</span>
          </a>
        </div>
      </div>
      <div class="home_icon">
        <i class="iconfont iconsanjiaoxing"></i>
      </div>
    </div>
  </div>
</template>

<script>
// 滚动
import BScroll from 'better-scroll'
import { mapState } from 'vuex'
export default {
  data() {
    return {
      xuan: 0 //选中索引
    }
  },
  methods: {
    on(index) {
      this.xuan = index
    }
  },
  computed: {
    ...mapState({
      kingKongModule:state=>state.carouse.kingKongModule
    })
  },
  mounted() {
  //  await this.$store.dispatch('getCarouse')
    this.$nextTick(() => {
      new BScroll('.wrapper2', {
        startX: 0,
        click: true,
        scrollX: true,
        scrollY: false
      })
    })
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
.header_warp
  width 100%
  position fixed
  background #fff
  z-index 100
  left 0
  top 0
  .home_header
    width 100%
    height 50px
    display flex
    align-items center
    margin-left 10px
    img
      width 1.84rem
      height 0.53rem
    .home_header_sou
      flex-direction column
      align-items center
      text-align center
      width 220px
      border-radius 7px
      height 30px
      line-height 30px
      justify-content center
      background #ededed
      margin-left 10px
    .home_header_deng
      text-align center
      line-height 20px
      width 40px
      height 20px
      border 1px solid red
      margin-left 10px
      border-radius 7px
  .home_nav
    position relative
    height 22px
    width 500px
    .home_list
      // width 500px
      height 22px
      white-space nowrap
      display flex
      justify-content space-around
      .home_item
        font-size 15px
        color #7f7f7f
        text-decoration none
      .xuan
        color red
        border-bottom 2px solid red
  .home_icon
    position fixed
    text-align center
    line-height 20px
    background #fff
    right 0
    top 50px
    width 50px
    height 20px
</style>