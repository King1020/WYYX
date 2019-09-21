<template>
  <div>
    <!-- 头部导航栏 -->
    
    <router-view></router-view>
    <!-- 底部导航栏 -->
    <Footer />
  </div>
</template>

<script>
// 头部导航栏
// import Header from './components/Header/Header'
// import {reqCarousel} from './api/index'//测试
// 底部导航栏
import Footer from './components/Footer/Footer'
export default {
  components: {
    Footer,
  },
 async mounted() {
  //  测试
    // const result = await reqCarousel()
    // console.log(result)
    this.$store.dispatch('getcalssify')
  },
}
</script>

<style lang='stylus' rel='stylesheet/stylus'></style>