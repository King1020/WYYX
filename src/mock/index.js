import Mock from 'mockjs'

// import category from "./category.json";
// import categoryList from "./categoryList.json";
import homeData from "./homeData.json";
import categoryList from './categoryList.json'
import shiwuList from './shiwuList.json'
// 接口
Mock.mock('/homepage', {
  code: 0,
  data: homeData
});
Mock.mock('/classify', {
  code: 0,
  data: categoryList
});
// 识物页面数据
Mock.mock('/know', {
  code: 0,
  data: shiwuList
});