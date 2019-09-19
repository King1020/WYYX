<template>
  <div>
    <router-view></router-view>
    <Header />
  </div>
</template>

<script>
// 头部导航栏
import Header from './knowheader'
export default {
  components: {
    Header
  }
}
</script>
<style lang='stylus' rel='stylesheet/stylus'></style>