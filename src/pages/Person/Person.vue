<template>
  <div class="person_warp">
    <!-- 头部 -->
    <div class="person_header">
      <i class="iconfont iconhome" @click="$router.push('/homepage')"></i>
      <img src="../../commn/imgs/logo.png" alt />
      <div class="person_icon">
        <i class="iconfont iconfangdajing" @click="$router.push('/search')"></i>
        <i class="iconfont iconcart" @click="$router.push('/shopcart')"></i>
      </div>
    </div>
    <!-- 头部以下 -->
    <div class="person_content" v-show="isCotent">
      <!-- 严选logo -->
      <div class="person_logo">
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png"/>
      </div>
      <!-- 按钮 -->
      <div class="person_btn">
        <div class="btn_01" @click="changeShow">
          <span class="btn_icon01"></span>
          <span class="btn_text01">手机号快捷登录</span>
        </div>
        <div class="btn_02" @click="changeShow2">
          <span class="btn_icon02"></span>
          <span class="btn_text01">邮箱账号登录</span>
        </div>
      </div>
      <!-- footerlist -->
      <div class="person_footer">
        <div class="footer_warp">
          <div class="warp_item">
            <i class="iconfont iconweixin"></i>
            <span class="text">微信</span>
          </div>
          <div class="shugang"></div>
          <div class="warp_item">
            <i class="iconfont iconqq1"></i>
            <span class="text">QQ</span>
          </div>
          <div class="shugang"></div>
          <div class="warp_item">
            <i class="iconfont iconweibo2"></i>
            <span class="text">微博</span>
          </div>
        </div>
      </div>
    </div>
    <router-view></router-view>
    <Login v-show="islogin"/>
    <Elogin v-show="isElogin" />
  </div>
</template>

<script>
import Login from './Login/Login'
import Elogin from './E_mail_login/E_login'
export default {
  data() {
    return {
      isCotent: true,//主页
      islogin: false,//手机号快捷登录
      isElogin:false//邮箱账号登录
    }
  },
  methods: {
    //显示手机号登陆
    changeShow() {
      this.isCotent = false,
      this.islogin =true
    },
    //显示邮箱登录
    changeShow2() {
      this.isCotent = false
      this.isElogin = true
    }
  },
  components: {
    Login,
    Elogin
  }
}
</script>
Classify
<style lang='stylus' rel='stylesheet/stylus' scoped>
@import '../../commn/stylus/mixins.styl'
.person_warp
  background #f2f5f4
  .person_header
    bottom-border-1px(#333)
    display flex
    width 100%
    height 44px
    background #fff
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
    background #F2F5F4
    position relative
    img
      width 135px
      height 45px
      position absolute
      left 50%
      top 50%
      transform translate(-68px, -23px)
  .person_btn
    height 110px
    padding 0 20px
    .btn_01
      width 335px
      height 45px
      background #efefef
      text-align center
      line-height 45px
      margin-bottom 10px
      background #DD1A21
      .btn_icon01
        vertical-align middle
        display inline-block
        width 21px
        height 21px
        background-image url('//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/login-s5ca4cb2b91-2c606efd24.png')
        background-repeat no-repeat
        background-size 19px 125px
        background-position -2.0436px -19px
      .btn_text01
        vertical-align middle
        color #fff
        font-size 14px
    .btn_02
      width 335px
      height 45px
      background #efefef
      text-align center
      line-height 45px
      margin-bottom 10px
      border 1px solid #DD1A21
      .btn_icon02
        vertical-align middle
        display inline-block
        width 25px
        height 21px
        background-image url('//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/login-s5ca4cb2b91-2c606efd24.png')
        background-repeat no-repeat
        background-size 20px 125px
        background-position -1.0436px 3px
      .btn_text01
        vertical-align middle
        color #DD1A21
        font-size 14px
  .person_footer
    width 100%
    height 230px
    background #F2F5F4
    position relative
    .footer_warp
      height 25px
      display flex
      vertical-align middle
      justify-content space-around
      padding 0 30px
      position relative
      bottom -190px
      .warp_item
        .iconfont
          color #7f7f7f
        .text
          text-align center
          line-height 25px
          margin-left 5px
          color #7f7f7f
          font-size 15px
      .shugang
        width 1px
        height 20px
        background #7f7f7f
</style>