<template>
  <div class="classify_header">
    <div class="classify_header_sou">
      <i class="iconfont iconfangdajing"></i>
      <span class="placeholder">搜索商品,共22698款好物</span>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
@import '../../commn/stylus/mixins.styl'
.classify_header
  bottom-border-1px(#000)
  width 100%
  height 50px
  display flex
  align-items center
  .classify_header_sou
    text-align center
    width 320px
    border-radius 5px
    height 30px
    line-height 30px
    background #ededed
    margin 0 auto
    .iconfont
      font-size 25
      font-weight 700
      color #7f7f7f
      margin 0 3px
    .placeholder
      color #7f7f7f
      font-size 15px

  // .home_header_deng
  //   text-align center
  //   line-height 20px
  //   width 40px
  //   height 20px
  //   border 1px solid red
  //   margin-left 10px
  //   border-radius 7px
</style>