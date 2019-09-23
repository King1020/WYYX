<template>
  <div class="warp">
    <router-view></router-view>
    <Header />
    <div class="wrapper">
      <div style="padding-top:72px; padding-bottom:200px">
        <!-- 轮播 -->
        <div class="home_conter">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(odd,index) in focusList" :key="index">
                <img class="central-list-top-img" :src="odd.picUrl" />
              </div>
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
        <!-- 48小时退款 -->
        <div class="home_policy">
          <ul class="grow">
            <li class="item" v-for="(king,index) in policyDescList" :key="index">
              <img :src="king.icon" />
              <span class="text">{{king.desc}}</span>
            </li>
          </ul>
        </div>
        <!-- 导航栏 -->
        <div class="home_slide">
          <li class="silde_li" v-for="(kiss,index) in kingKongList" :key="index">
            <img :src="kiss.picUrl" alt />
            <span>{{kiss.text}}</span>
          </li>
        </div>
        <!-- 新人专享 -->
        <div class="home_floor">
          <span class="floor_header">— 新人专享礼 —</span>
          <div class="left">
            <span>新人专享礼包</span>
            <img src="//yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png" />
          </div>
          <div class="right1">
            <div class="right1_content">
              <p class="right1_title">福利社</p>
              <p class="right1_text">今日特价</p>
            </div>
            <img src="https://yanxuan-item.nosdn.127.net/bb9025c24057dfb89403055ac5b9f85c.png" />
          </div>
          <div class="right2">
            <div class="right2_content">
              <p class="right2_title">新人拼团</p>
              <p class="right2_text">1元起包邮</p>
            </div>
            <img src="https://yanxuan-item.nosdn.127.net/bb9025c24057dfb89403055ac5b9f85c.png" />
          </div>
        </div>
        <!-- 品牌制造 -->
        <div class="home_gnmb">
          <div class="gnmb_header">
            <div class="gnmb_header_item item1">品牌制造商直供</div>
            <div class="gnmb_header_item item2">更多 ></div>
          </div>
          <div class="gnmb_content">
            <ul class="content_list">
              <li class="content_item">
                <p>新秀丽制造商</p>
                <span>159元起</span>
              </li>
              <li class="content_item">
                <p>新秀丽制造商</p>
                <span>159元起</span>
              </li>
              <li class="content_item">
                <p>新秀丽制造商</p>
                <span>159元起</span>
              </li>
              <li class="content_item">
                <p>新秀丽制造商</p>
                <span>159元起</span>
              </li>
            </ul>
          </div>
        </div>
        <!-- 类目热销榜 -->
        <!-- <div class="home_gnmb">
          <div class="gnmb_header">
            <div class="gnmb_header_item item1">品牌制造商直供</div>
            <div class="gnmb_header_item item2">更多 ></div>
          </div>
          <div class="gnmb_content">
            <ul class="content_list">
              <li class="content_item">
                <p>新秀丽制造商</p>
                <span>159元起</span>
              </li>
              <li class="content_item">
                <p>新秀丽制造商</p>
                <span>159元起</span>
              </li>
              <li class="content_item">
                <p>新秀丽制造商</p>
                <span>159元起</span>
              </li>
              <li class="content_item">
                <p>新秀丽制造商</p>
                <span>159元起</span>
              </li>
            </ul>
          </div>
        </div>-->
        <!-- 新品尝鲜 -->

        <div class="home_module">
          <div class="module_digimg"></div>
          <div class="home_wrapper">
            <div class="module_list">
              <div class="module_item">
                <div class="item_img">
                  <img
                    src="https://yanxuan-item.nosdn.127.net/5328548b08399e3347cc1d9679d9943f.png"
                  />
                </div>
                <p>免洗式 乳酸菌冰沙睡眠面膜 100g</p>
                <span style="color:red">￥69.9</span>
              </div>
              <div class="module_item">
                <div class="item_img">
                  <img
                    src="https://yanxuan-item.nosdn.127.net/5328548b08399e3347cc1d9679d9943f.png"
                  />
                </div>
                <p>免洗式 乳酸菌冰沙睡眠面膜 100g</p>
                <span style="color:red">￥69.9</span>
              </div>
              <div class="module_item">
                <div class="item_img">
                  <img
                    src="https://yanxuan-item.nosdn.127.net/5328548b08399e3347cc1d9679d9943f.png"
                  />
                </div>
                <p>免洗式 乳酸菌冰沙睡眠面膜 100g</p>
                <span style="color:red">￥69.9</span>
              </div>
              <div class="module_item">
                <div class="item_img">
                  <img
                    src="https://yanxuan-item.nosdn.127.net/5328548b08399e3347cc1d9679d9943f.png"
                  />
                </div>
                <p>免洗式 乳酸菌冰沙睡眠面膜 100g</p>
                <span style="color:red">￥69.9</span>
              </div>
              <div class="module_item">
                <div class="item_img">
                  <img
                    src="https://yanxuan-item.nosdn.127.net/5328548b08399e3347cc1d9679d9943f.png"
                  />
                </div>
                <p>免洗式 乳酸菌冰沙睡眠面膜 100g</p>
                <span style="color:red">￥69.9</span>
              </div>
            </div>
          </div>
        </div>

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
      </div>
    </div>
  </div>
</template>

<script>
// 头部导航栏
import Header from '../../components/Header/Header'
// 滑动
import BScroll from 'better-scroll'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
import { mapState } from 'vuex'
export default {
  components: {
    Header
  },
  computed: {
    ...mapState({
      focusList: state => state.carouse.focusList,
      policyDescList: state => state.carouse.policyDescList,
      kingKongList: state => state.carouse.kingKongList
    })
  },
  async mounted() {
    await this.$store.dispatch('getCarouse')
    this.$nextTick(() => {
      new BScroll('.home_wrapper', {
        startX: 0,
        click: true,
        scrollX: true,
        scrollY: false
      })
      new Swiper('.swiper-container', {
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay: {
          delay: 2000 //2秒切换一次
        },
        // 无缝轮播
        loop: true,
        bulletClass: 'my-bullet' //需设置.my-bullet样式
      })
      const height = document.documentElement.clientHeight
      const wraper = document.querySelector('.wrapper')
      wraper.style.height = height + 'px'
      if (!this.bscroll) {
        this.bcsroll = new BScroll('.wrapper', {
          click: true
        })
      }
    })
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
.warp
  width 100%
  background #ededed
  position relative
  .home_icon
    position fixed
    text-align center
    line-height 20px
    background #fff
    right 0
    top 50px
    width 50px
    height 20px
  .home_conter // 轮播
    position relative
    background #fff
    .swiper-pagination
      position absolute
      bottom 10px
      width 100%
      .swiper-pagination-bullet
        width 80px
        background red
        height 10px
    img
      width 100%
      height 200px
  .home_policy // 48小时退款
    height 36px
    width 100%
    display flex
    background #fff
    vertical-align middle
    .grow
      height 36px
      display flex
      flex 1
      align-items center
      vertical-align middle
      list-style none
      .item
        line-height 18px
        margin-left 15px
        height 18px
        vertical-align middle
        img
          display inline-block
          width 18px
          height 18px
        .text
          margin-left 5px
          font-size 12px
  .home_slide // 导航栏
    width 100%
    height 171px
    display flex
    flex-wrap wrap
    background #fff
    .silde_li
      flex-direction column
      align-items center
      display flex
      flex 1
      width 70px
      height 75px
      margin 5px
      justify-content space-between
      color #7f7f7f
      img
        width 55px
        height 55px
  .home_floor // 新人专享
    width 100%
    height 279px
    padding-left 0.4rem
    background #fff
    margin-top 10px
    position relative
    .floor_header
      height 45px
      margin-left 25%
      font-size 20px
    .left
      position relative
      width 172px
      height 222px
      background #F9E9CF
      span
        display inline-block
        font-size 16px
        margin 10px
      img
        position absolute
        left 50%
        top 50%
        transform translate(-64px, -64.5px)
        width 129px
        height 128px
    .right1
      position absolute
      top 26px
      right 28px
      width 172px
      height 108px
      background #FBE2D3
      .right1_content
        position absolute
        left 15px
        top 10px
        .right1_title
          font-size 18px
        .right1_text
          color #7f7f7f
      img
        position absolute
        right 0
        top 0
        width 100px
        height 100px
    .right2
      position absolute
      top 140px
      right 28px
      width 172px
      height 108px
      background #FFECC2
      .right2_content
        position absolute
        left 15px
        top 10px
        .right2_title
          font-size 18px
        .right2_text
          padding 0 3px
          display inline
          color #fff
          background #cbb693
      img
        position absolute
        right 0
        bottom 0
        width 100px
        height 100px
  .home_gnmb // 品牌
    position relative
    width 100%
    height 238px
    margin-top 10px
    background #fff
    .gnmb_header
      height 50px
      display flex
    .gnmb_header_item
      text-align center
      line-height 50px
      font-size 18px
    .item1
      position absolute
      left 20px
    .item2
      position absolute
      right 20px
    .gnmb_content
      .content_list
        width 375px
        flex-wrap wrap
        background #fff
        margin-bottom 0.26667rem
        padding 0 0.34rem 0.34rem 0.3989rem
        .content_item
          display inline-block
          margin 0 0.05333rem 0.05333rem 0
          width 4.57333rem
          height 3.46667rem
          border-radius 0.05rem
          background-image url('https://yanxuan.nosdn.127.net/66a23d776f41cba70d00803a5231124b.png?imageView&thumbnail=343y260&enlarge=1')
          background-size 100% 100%
          >p
            font-size 15px
            margin 12px 0 0 45px
          >span
            float left
            color #7f7f7f
            margin-left 70px
  .home_module // 新品尝鲜
    width 100%
    height 391px
    // background #333
    margin-top 100px
    .module_digimg
      height 188px
      background #fff
      background-image url('https://yanxuan.nosdn.127.net/2565b1fa18e4b8b64aad0710c9725aa1.jpg')
      background-size 100% 100%
    .module_list
      width 600px
      height 203px
      display flex
      background #fff
      .module_item
        width 100px
        height 180px
        background #fff
        margin 12px 0 0 12px
        img
          width 100px
          height 100px
          background-color rgba(0, 0, 0, 0.05)
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
        background #7f7f77 f
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
<style lang="stylus">
.swiper-pagination-bullet
  width 30px
  height 3px
  background-color white
  border-radius 0
  margin 2px
</style>
