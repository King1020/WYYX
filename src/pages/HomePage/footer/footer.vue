<template>
  <!-- 底部 -->
  <div class="home_footer">
    <div class="footer_content">
      <div class="content_btn">
        <div class="btn">
          <span>下载APP</span>
        </div>
        <div class="btn">
          <span>电脑版</span>
        </div>
      </div>
      <div class="content_banquan">
        <span>网易公司版权所有 © 1997-</span>
        <span>2019</span>
        <br />
        <span>食品经营许可证：JY13301080111719</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
.home_footer // 底部
  height 122px
  background #333
  padding 0.72rem 0.26667rem 0.37333rem
  position relative
  margin-top 10px
  .footer_content
    // background #fff
    .content_btn
      height 31px
      // background #7f7f7f
      display flex
      .btn
        width 86px
        height 30px
        margin-left 60px
        // background green
        text-align center
        line-height 30px
        border 1px solid #fff
        border-radius 2px
        span
          color #fff
  .content_banquan
    height 32px
    width 310px
    // background green
    position absolute
    left 50%
    bottom 20px
    transform translateX(-155px)
    text-align center
    span
      color #7f7f7f
</style>