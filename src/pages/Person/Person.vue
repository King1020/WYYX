<template>
  <div class="person_warp">
    <!-- 头部 -->
    <div class="person_header">
      <i class="iconfont iconhome"></i>
      <img src="../../commn/imgs/logo.png" alt />
      <div class="person_icon">
        <i class="iconfont iconfangdajing"></i>
        <i class="iconfont iconcart"></i>
      </div>
    </div>
    <!-- 严选logo -->
    <div class="person_logo">
      <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">

    </div>
    <!-- 按钮 -->
  </div>
</template>

<script>
export default {}
</script>
Classify
<style lang='stylus' rel='stylesheet/stylus'>
.person_warp
  .person_header
    display flex
    width 100%
    height 44px
    position relative
    .iconfont
      font-size 25px
      line-height 44px
      padding-left 10px
      color #7f7f7f
    img
      position absolute
      left 50%
      top 50%
      transform translate(-43px, -14px)
      text-align center
      line-height 44px
      width 86px
      height 28px
    .person_icon
      position absolute
      right 0
      padding-right 20px  
      color #7f7f7f
  .person_logo
    height 241px  
    background  #F2F5F4  
    position relative
    img 
      width 135px
      height 45px
      position absolute
      left 50%
      top 50%
      transform translate(-68px,-23px)
      
</style>