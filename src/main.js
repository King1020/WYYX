import Vue from 'vue'
import App from './App.vue'
// 引入路由器并注册
import router from './router'
// 引入store
import store from './store/index'
import Mint from 'mint-ui';
import './mock/index'
Vue.use(Mint);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router, //注册路由器
  store //注册仓库
}).$mount('#app')
