<template>
  <footer class="footer_warp">
    <span class="footer_item" :class="{on: $route.path==='/homepage'}" @click="goTo('/homepage')">
      <span class="item_icon">
        <i class="iconfont iconhome"></i>
      </span>
      <span>首页</span>
    </span>
    <span class="footer_item" :class="{on: $route.path==='/classify'}" @click="goTo('/classify')">
      <span class="item_icon">
        <i class="iconfont iconcopy"></i>
      </span>
      <span>分类</span>
    </span>
    <span class="footer_item" :class="{on: $route.path==='/know'}" @click="goTo('/know')">
      <span class="item_icon">
        <i class="iconfont iconfile"></i>
      </span>
      <span>识物</span>
    </span>
    <span class="footer_item" :class="{on: $route.path==='/shopcart'}" @click="goTo('/shopcart')">
      <span class="item_icon">
        <i class="iconfont iconcart"></i>
      </span>
      <span>购物车</span>
    </span>
    <span class="footer_item" :class="{on: $route.path==='/person'}" @click="goTo('/person')">
      <span class="item_icon">
        <i class="iconfont iconperson2"></i>
      </span>
      <span>个人</span>
    </span>
  </footer>
</template>

<script>
export default {
  methods: {
    goTo(path) {
      // 编程式路由跳转
      this.$router.replace(path)
    }
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
@import '../../commn/stylus/mixins.styl'
.footer_warp
  top-border-1px($bc)
  position fixed
  z-index 100
  left 0
  right 0
  bottom 0
  width 100%
  height 1.3rem
  display flex
  background #fff
  .footer_item
    display flex
    flex 1
    text-align center
    flex-direction column
    align-items center
    margin 5px
    &.on
      color red
    span
      font-size 12px
      margin-top 2px
      margin-bottom 2px
      .iconfont
        font-size 20px
</style>