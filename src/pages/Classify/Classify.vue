<template>
 <div class="classify_warp"> 
    <router-view></router-view>
    <Header />
     <!-- 左侧列表 -->
    <div class="classify_left">
      <ul class="left_list">
        <li class="list_item">推荐专区</li>
        <li class="list_item xuanzhong">换季专区</li>
        <li class="list_item">爆品专区</li>
        <li class="list_item">新品专区</li>
        <li class="list_item">居家生活</li>
        <li class="list_item">服饰鞋包</li>
        <li class="list_item">美食酒水</li>
        <li class="list_item">个人清洁</li>
        <li class="list_item">母婴亲子</li>
        <li class="list_item">运动旅行</li>
        <li class="list_item">数码家电</li>
        <li class="list_item">全球特色</li>
      </ul>
      <div class="active"></div>
    </div>
    <!-- 右侧 -->
    <div class="classify_right">
      <div class="right_banner" >
        <img src="https://yanxuan.nosdn.127.net/c7de7e8850dc05df6943a1a39dce2558.jpg">
      </div>
      <div class="right_list">
        <div class="right_item">
          <img src="https://yanxuan.nosdn.127.net/15a0f224de139e533a01d61dade82f5f.png">
          <span>滋补美食</span>
        </div>
         <div class="right_item">
          <img src="https://yanxuan.nosdn.127.net/8b20393c8220b369e59ffe0e45f9696e.png">
          <span>日用换新</span>
        </div>
         <div class="right_item">
          <img src="https://yanxuan.nosdn.127.net/6cdb22d7d21269fc60dd87d77e6981e8.png">
          <span>换季收纳</span>
        </div>
         <div class="right_item">
          <img src="https://yanxuan.nosdn.127.net/1fc252460ad0eb59bde2c761e8ab9342.png">
          <span>早秋床品</span>
        </div>
         <div class="right_item">
          <img src="https://yanxuan.nosdn.127.net/15a0f224de139e533a01d61dade82f5f.png">
          <span>补水护肤</span>
        </div>
         <div class="right_item">
          <img src="https://yanxuan.nosdn.127.net/15a0f224de139e533a01d61dade82f5f.png">
          <span>换季扫除</span>
        </div>
         <div class="right_item">
          <img src="https://yanxuan.nosdn.127.net/15a0f224de139e533a01d61dade82f5f.png">
          <span>秋日养生</span>
        </div>
         <div class="right_item">
          <img src="https://yanxuan.nosdn.127.net/15a0f224de139e533a01d61dade82f5f.png">
          <span>初秋穿搭</span>
        </div>
         <div class="right_item">
          <img src="https://yanxuan.nosdn.127.net/15a0f224de139e533a01d61dade82f5f.png">
          <span>室外健身</span>
        </div>
      </div>
    </div>
 </div>
</template>

<script>
// 头部导航栏
import Header from './classifyheader'
export default {
  components:{
    Header
  }
}
</script>
<style lang='stylus' rel='stylesheet/stylus'>
.classify_warp
  position relative
  .classify_left
    width 25% 
    padding 10px 0 
    position relative
    .left_list
      display block
      line-height 3
      font-size 15px
      text-align center
      .xuanzhong
        color #ab2b2b
    .active
      position absolute
      width 2px
      height 25px
      background #ab2b2b
      top 65px
  .classify_right 
    width 75%
    height 437px
    position absolute 
    right 0
    top 65px
    // background #7f7f7f
    .right_banner
      width 265px
      height 96px
      // background #fff
      padding-bottom 10px
      img  
        width 265px
        height 96px
    .right_list
      width 264px
      height 325px
      // background green 
      display flex
      flex-wrap wrap  
      .right_item
        width 72px
        height 90px
        padding-left 12px
        text-align center
        
      img   
        width 72px
        height 72px

       


      



</style>