import ajax from './ajax'
const KISS = '/bd'
// 推荐
export const reqCarousel = () => ajax('/homepage')

// 分类
export const reqClassify = () => ajax('/classify')

// 搜索
export const reqSearch = (keywordPrefix) => ajax(`${KISS}/xhr/search/searchAutoComplete.json`, {
  keywordPrefix
})
// 搜索默认显示
export const reqSearchList = () => ajax( `${KISS}/xhr/search/init.json`)

// 识物页面头部导航
export const reqKnowHeaderList = () => ajax('/know')