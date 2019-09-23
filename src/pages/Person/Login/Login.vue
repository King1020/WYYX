<template>
  <div class="E_login_warp">
    <div class="E_logo">
      <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt />
    </div>
    <div class="E_container">
      <div class="E_from">
        <section class="E_message">
          <input
            type="text"
            maxlength="11"
            placeholder="请输入手机号"
            v-model="phone"
            name="phone"
            v-validate="'required|phone'"
          />
          <span
            style="color:red; 
            display: block;
            margin-top: -15px"
            v-show="errors.has('phone')"
            class="help is-danger"
          >{{ errors.first('phone') }}</span>
        </section>
        <section class="E_password">
          <input
            type="text"
            maxlength="6"
            placeholder="请输入短信验证码"
            v-model="code"
            name="code"
            v-validate="'required|code'"
          />
          <span 
            style="   
              border: 1px solid #7f7f7f;
              border-radius: 3px;
              padding: 0 5px;
              vertical-align: middle;
              color: #7F7F81;
              margin-left: 45px;" 
               >短信验证码</span>
          <span
            style="color:red; 
            display: block;
            margin-top: -16px;"
            v-show="errors.has('code')"
            class="help is-danger"
          >{{ errors.first('code') }}</span>
        </section>
        <!-- 注册账号 -->
        <div class="E_sigon">
          <div class="sigon_content">
            <span>遇到问题？</span>
            <span>使用密码验证登录</span>
          </div>
        </div>
        <!-- 登录按钮 -->
        <div class="btn_01">
          <span class="btn_icon01"></span>
          <span class="btn_text01">登录</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Field } from 'mint-ui'
export default {
  data() {
    return {
      phone: '', //手机号验证
      name: '', //用户名
      pwd: '', //密码
      code: '' //短信验证码
    }
  },
  computed: {
    isRightPhone(){
      return /[1]\d{10}/.test(this.phone)
    }
  },
}
</script>

<style lang='stylus' rel='stylesheet/stylus'scoped>
@import '../../../commn/stylus/mixins.styl'
.E_login_warp
  height 388px
  background #fff
  .E_logo
    height 32px
    padding 30px 0 0
    text-align center
    line-height 32px
    img
      width 96px
      height 32PX
  .E_container
    height 288px
    padding 22px 20px
    .E_from
      width 336px
      height 288px
      .E_message
        position relative
        margin-top 16px
        height 48px
        font-size 14px
        bottom-border-1px(#7f7f7f)
        line-height 48px
        input[type='text']
          height 20px
          font-size 0.4rem
          line-height 0.6rem
          letter-spacing normal
          background none
          outline none
          border none
      .E_password
        position relative
        margin-top 16px
        height 48px
        font-size 14px
        bottom-border-1px(#7f7f7f)
        line-height 48px
        input[type='text']
          height 20px
          font-size 0.4rem
          line-height 0.6rem
          letter-spacing normal
          background none
          outline none
          border none
      .E_sigon
        width 336px
        height 138px
        margin-top 25px
        .sigon_content
          margin 10px
          display flex
          justify-content space-between
          color #7f7f7f
      .btn_01
        width 335px
        height 45px
        text-align center
        line-height 45px
        margin-bottom 10px
        background #DD1A21
        position relative
        top -100px
        border-radius 5px
        .btn_text01
          color burlywood
          font-size 16px
</style>