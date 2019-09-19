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
// 底部导航栏
import Footer from './components/Footer/Footer'
export default {
  components: {
    Footer,
    // Header
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus'></style>