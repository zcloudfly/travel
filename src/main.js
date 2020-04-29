import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick' //解决3000秒延迟
import './assets/styles/reset.css'
import './assets/styles/border.css'

Vue.config.productionTip = false
fastclick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
