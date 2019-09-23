<template>
  <div class="shop_warp">
    <div class="shop_header">
      <div class="header_content">
        <span class="header_logo">购物车</span>
        <span class="header_text">领劵</span>
      </div>
    </div>
    <!-- 30天无忧退货 -->
    <div class="shop_pocily">
      <ul class="pocily_list">
        <li class="pocily_li">
          <img
            class="icon"
            src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/servicePolicy-0ec842d966.png"
            alt
          />
          <span class="list_data"> 30天无忧退货</span>
        </li>
        <li class="pocily_li">
          <!-- <span class="list_icon"></span> -->
          <img
            class="icon"
            src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/servicePolicy-0ec842d966.png"
            alt
          />
          <span class="list_data"> 48小时快速退款</span>
        </li>
        <li class="pocily_li">
          <!-- <span class="list_icon"></span> -->
          <img
            class="icon"
            src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/servicePolicy-0ec842d966.png"
            alt
          />
          <span class="list_data"> 满88元免邮费</span>
        </li>
      </ul>
    </div>
    <!-- 中间大图 -->
    <div class="shop_content">
      <div class="shop_bigimg"></div>
      <span class="bogimg_text">去添加点什么吧</span>
    </div>
    <!-- 登录按钮 -->
    <div class="shop_btn">
      <span class="btn_text" @click="$router.push('/person')">登录</span>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
.shop_warp
  .shop_header
    width 100%
    height 44px
    background #fff
  .header_content
    display flex
    justify-content space-between
    line-height 44px
    .header_logo
      padding-left 30px
      font-size 18px
      color #7f7f7f
    .header_text
      padding-right 30px
      font-size 15px
      color red
  .shop_pocily
    height 35px
    background #eee
    .pocily_list
      display flex
      .pocily_li
        justify-content space-between
        text-align center
        line-height 35px
        padding 0 16px
        list-style none
        color #7f7f7f
        margin-left 2px
        .icon
          width 7px
          height 7px
  .shop_content
    position relative
    height 667px   
    background-color #f4f4f4  
    .shop_bigimg
      width 126px
      height 126px
      // background green
      position absolute
      left 50%
      top 50%
      transform translate(-63px, -126px)
      background-image url('//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png') 
      background-size 3.30667rem 3.30667rem
      background-position center center
    .bogimg_text
      display block
      position absolute
      left 37%
      top 48%
      font-size 14px 
      color #7f7f7f 
  .shop_btn
    width 240px
    height 46px
    background #b4282d
    position absolute
    left 50%
    top 50%
    transform translate(-120px,105px)
    text-align center
    border-radius .04rem 
    .btn_text
      line-height 46px
      font-size 15px
      color #fff
</style>