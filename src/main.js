import Vue from 'vue'
import App from './App'
import router from './router'
 
import store from './store'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import 'babel-polyfill'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import fastClick from 'fastclick'
fastClick.attach(document.body) //移动端3000ms点击延迟取消
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
