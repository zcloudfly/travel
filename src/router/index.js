import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/pages/home/Home')//异步组件加载
    },{
      path:'/city',
      name:'city',
      component:() => import('@/pages/city/City')
    },{
      path:'/detail/:id',
      name:'Detail',
      component:() => import('@/pages/detail/Detail')
    }
  ],
  scrollBehavior(to,from,savePosition){
    return{x:0,y:0}//bbbgit
  }
})
