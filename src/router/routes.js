//引入对应路由组件
// 首页
import HomePage from '../pages/HomePage/HomePage.vue'
// 识物
import Know from '../pages/Know/Know.vue'
//分类
import Classify from '../pages/Classify/Classify.vue'
//购物车
import ShopCart from '../pages/ShopCart/ShopCart.vue'
//个人中心
import Person from '../pages/Person/Person.vue'
// 搜索页面
import Search from '../pages/HomePage/Search/Search.vue'
// 配置路由
export default [{
    path: '/homepage',
    component: HomePage
  },
  {
    path: '/know',
    component: Know
  },
  {
    path: '/classify',
    component: Classify
  },
  {
    path: '/shopcart',
    component: ShopCart
  },
  {
    path: '/person',
    component: Person
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/',
    redirect: 'homepage'
  },

]