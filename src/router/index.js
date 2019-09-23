// 引入 Vue
import Vue from 'vue'
// VueRouter
import VueRouter from 'vue-router'
// 引入路由的配置的数组
import routes from './routes'
// 声明使用
Vue.use(VueRouter)
// 配置路由
export default new VueRouter({
  mode: 'history', //地址栏不出现#符号
  routes
})
