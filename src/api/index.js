import ajax from './ajax'

// 推荐
export const reqCarousel = () => ajax('/homepage')

// 分类
export const reqClassify = () => ajax('/classify')