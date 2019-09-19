<template>
  <div class="header_warp">
    <!-- 头部 -->
    <div class="home_header">
      <!-- logo图片 -->
      <img src="../../commn/imgs/logo.png" />
      <div class="home_header_sou"  @click="$router.push('/search')">
        <i class="iconfont iconfangdajing"></i>
        <span class="placeholder">搜索商品,共22715款好物</span>
      </div>
      <div class="home_header_deng">
        <span class="btn">登录</span>
      </div>
    </div>
    <!-- 推荐 -->
    <div class="wrapper2">
      <div class="home_nav">
        <div class="home_list">
          <div class="home_item xuan">
            <span>推荐</span>
          </div>
          <div class="home_item">
            <span>居家生活</span>
          </div>
          <div class="home_item">
            <span>服饰鞋包</span>
          </div>
          <div class="home_item">
            <span>美食酒水</span>
          </div>
          <div class="home_item">
            <span>美食酒水</span>
          </div>
          <div class="home_item">
            <span>美食酒水</span>
          </div>
          <div class="home_item">
            <span>美食酒水</span>
          </div>
        </div>
        <div class="xuanzhong"></div>
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
export default {
  mounted() {
    this.$nextTick(() => {
      new BScroll('.wrapper2', {
        startX: 0,
        click: true,
        scrollX: true,
        scrollY: false
      })
    })
  },
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
      height 30px
      white-space nowrap
      display flex
      justify-content space-around
      .home_item
        font-size 15px
        color #7f7f7f
      .xuan
        color red
    .xuanzhong
      position absolute
      bottom 0
      // left 9px
      width 43px
      height 2px
      background red
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