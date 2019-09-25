<template>
  <div>
    <!-- 头部导航栏 -->
    
    <router-view></router-view>
    <!-- 底部导航栏 -->
    <Footer />
  </div>
</template>

<script>
// import {reqCarousel,reqClassify,reqSearch,reqSearchList,reqKnowHeaderList} from './api/index'//测试
// 底部导航栏
import Footer from './components/Footer/Footer'
export default {
  components: {
    Footer,
  },
 async mounted() {
  //  测试
    // const result = await reqSearch('1')
    // console.log(result)
    // const result = await reqSearchList()
    // console.log(result)
    // const result = await reqKnowHeaderList()
    // console.log(result)
    // this.$store.dispatch('getcalssify')

  },
}
</script>

<style lang='stylus' rel='stylesheet/stylus'></style>