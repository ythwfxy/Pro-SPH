import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import '@/mock/mockServe'
import Carousel from '@/components/Carousel'
Vue.component(Carousel.name,Carousel)
Vue.config.productionTip = false
// 注册全局组件
import TypeNav from '@/components/TypeNav';
Vue.component(TypeNav.name,TypeNav)
import Pagination from '@/components/Pagination'
Vue.component(Pagination.name,Pagination)
import {Button,MessageBox} from 'element-ui'
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.component(Button.name,Button)
import {reqCategoryList} from '@/api'
import {reqGetSearchInfo} from '@/api'
reqCategoryList()
//引入仓库
import store from '@/store'

import  "swiper/css/swiper.css"
router.beforeEach((to, from, next) => {    
  // chrome
  document.body.scrollTop = 0
  // firefox
  document.documentElement.scrollTop = 0
  // safari
  window.pageYOffset = 0
  next()
})
//引入表单校验插件
import '@/plugins/validate'
import * as API from '@/api'
import VueLazyload from 'vue-lazyload'
import jr from '@/assets/2.gif'
Vue.use(VueLazyload,{
  //懒加载默认图片
  loading:jr
})
new Vue({
  render: h => h(App),
  //全局时间总线
  beforeCreate(){
    Vue.prototype.$bus=this
    Vue.prototype.$API=API
  },
  router,
  //注册仓库，组件实例身上有$store
  store
}).$mount('#app')
