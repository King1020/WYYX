<template>
  <div class="know_warp">
    <router-view></router-view>
    <Header />

    <div class="konw_wrapper">
      <div class="konw_content" style="padding-top:22px" >
        <div class="content_one">
          <a class="king" href="javascript:;">
            <div class="info">
              <div class="_name">
                <span class="ava">
                  <img src="https://yanxuan.nosdn.127.net/0d598863e22ec3e40ae27397628463cf.jpg" alt />
                </span>
                <span>网易味央: 小周</span>
              </div>
              <div class="title">秋天最要紧的，就是吃大闸蟹</div>
              <div class="desc">大闸蟹礼劵限时8.8折</div>
              <div class="rcount">
                <i class="iconfont iconyanjing"></i>
                <span style="margin: 0 5px">4976人看过</span>
              </div>
            </div>
            <div class="_pic">
              <img src="https://yanxuan.nosdn.127.net/debe90c6dbfa8593f4a17b59ddbcf466.jpg" alt />
            </div>
          </a>
        </div>
        <!-- 断货上架 -->
        <div class="content_two">
          <div class="_twoname">
            <span class="ava2">
              <img src="https://yanxuan.nosdn.127.net/d9d036fac85df6b30cf8c184e030323c.png" alt />
            </span>
            <span style="margin-left: 5px;">选妹</span>
          </div>
          <div class="title">常年断货的严选爆品终于上架了，回头客都在抢！</div>
          <div class="_bigpic">
            <img src="https://yanxuan.nosdn.127.net/6f5e7bb94350b7eed05134a9b1d83200.jpg" alt />
          </div>
          <div class="_footer">
            <i class="iconfont iconyanjing"></i>
            <span style="margin: 0 5px; ">91w人看过</span>
          </div>
        </div>
        <!-- 第二个 -->
        <div class="content_two">
          <div class="_twoname">
            <span class="ava2">
              <img src="https://yanxuan.nosdn.127.net/d9d036fac85df6b30cf8c184e030323c.png" alt />
            </span>
            <span style="margin-left: 5px;">选妹</span>
          </div>
          <div class="title">常年断货的严选爆品终于上架了，回头客都在抢！</div>
          <div class="_bigpic">
            <img src="https://yanxuan.nosdn.127.net/6f5e7bb94350b7eed05134a9b1d83200.jpg" alt />
          </div>
          <div class="_footer">
            <i class="iconfont iconyanjing"></i>
            <span style="margin: 0 5px; ">91w人看过</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 头部导航栏
import Header from './knowheader'
// vuex
// import {mapState} from 'vuex'
// 滑动
import BScroll from 'better-scroll'
export default {

  components: {
    Header
  },
 mounted() {
      // await this.$store.dispatch('getknowList')
    // 页面滑动
    new BScroll('.konw_wrapper', {
      click: true
    })
  }
}
</script>
<style lang='stylus' rel='stylesheet/stylus'>
.konw_wrapper
  height 500px
.konw_content
  // height 500px
  width 100%
  background #eee
.content_one
  height 160px
  border-top 10px solid #eee
  background #fff
  padding 0.32rem 0.3rem
  .king
    display flex
  .info
    width 200px
    height 136px
    // background #000
    ._name
      display flex
      align-items center
    img
      width 27px
      height 27px
      border-radius 50%
      margin-right 5px
    .title
      font-size 18px
      margin-top 10px
      width 200px
      height 35px
      color #333
      line-height 22px
    .desc
      font-size 14px
      margin-top 10px
    .rcount
      margin-top 20px
  ._pic
    img
      width 136px
      height 136px
      display block
      transform translateY(9px)
      border-radius 10px
      margin-left 10px
.content_two
  height 290px
  background #fff
  margin 10px 0
  padding 18px 15px
  ._twoname
    display flex
    align-items center
    img
      width 27px
      height 27px
      border-radius 50%
  .title
    font-size 18px
    margin 5px 0
    line-height 25px
  ._bigpic
    img
      width 345px
      height 188px
  ._footer
    color #7f7f7f
    margin-top 8px
</style>