<template>
  <div class="know_warp">
    <!-- 头部 -->
    <div class="know_header">
      <i class="iconfont iconhome" @click="$router.push('/homepage')"></i>
      <div class="know_content">
        <div class="text">发现</div>
        <div class="text2">甄选家</div>
      </div>
      <div class="icon">
        <i class="iconfont iconfangdajing" @click="$router.push('/search')"></i>
        <i class="iconfont iconcart" @click="$router.push('/shopcart')"></i>
      </div>
    </div>
    <!-- 推荐 -->
    <div class="wrapper3">
      <div class="know_nav">
        <div class="know_list">
          <div class="know_item xuan">
            <span>家装节</span>
          </div>
          <div class="know_item">
            <span>推荐</span>
          </div>
          <div class="know_item">
            <span>好货内部价</span>
          </div>
          <div class="know_item">
            <span>回购榜</span>
          </div>
          <div class="know_item">
            <span>晒单</span>
          </div>
          <div class="know_item">
            <span>开发者日记</span>
          </div>
          <div class="know_item">
            <span>达人</span>
          </div>
          <div class="know_item">
            <span>HOME</span>
          </div>
        </div>
        <div class="xuanzhong"></div>
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
      new BScroll('.wrapper3', {
        startX: 0,
        click: true,
        scrollX: true,
        // scrollY: false
      })
    })
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
@import '../../commn/stylus/mixins.styl'
.know_header
  bottom-border-1px($bc)
  width 100%
  position fixed
  background #fff
  height 50px
  z-index 100
  left 0
  top 0
  padding 0 13px 0 13px
  display flex
  position relative
  .know_content
    width 110px
    height 50px
    transform translateX(-50px)
    position absolute
    display flex
    align-items center
    left 50%
    .text
      font-size 20px
      font-weight bold
      color #b4282d
      padding 0 5px
    .text2
      color #7f7f7f
      padding 0 5px
      font-size 15px
  .iconfont
    font-size 25px
    line-height 50px
    margin-left 10px
  .icon
    position absolute
    right 50px
.know_nav
  position relative
  width 100%
  height 22px
  width 500px
  .know_list
    display flex
    justify-content space-around
    white-space nowrap
    .know_item
      font-size 15px
      color #7f7f7f
      margin-left 1px
    .xuan
      color red
  .xuanzhong
    position absolute
    bottom 0
    left 8px
    width 45px
    height 2px
    background red
</style>