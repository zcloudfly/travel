import Vue from 'vue'
import App from './App'
import router from './router'
//import Fastclick from 'fastclick' 
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'

Vue.config.productionTip = false
//FastClick.attach(document.body) //移动端3000ms点击延迟取消

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
