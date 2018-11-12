import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home/Home.vue'
import Hot from '../pages/Hot/Hot.vue'
import Discover from '../pages/Discover/Discover.vue'
import Setting from '../pages/Setting/Setting.vue'
import more from '../pages/Home/more.vue'
import gps from '../pages/Home/gps.vue'
import detail from '../pages/Home/Detail.vue'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      component:Home,
      path:'/Home',
      children:[
        {
          name:'More',
          component:more,
          path:'more'
        },
        {
          name:'Gps',
          component:gps,
          path:'gps'
        },
        {
          name:'Detail',
          component:detail,
          path:'Detail/:name/:id'
        }
      ]
    },
    {
      component:Hot,
      path:'/Hot'
    },
    {
      component:Discover,
      path:'/Discover'
    },
    {
      component:Setting,
      path:'/Setting'
    },
    //重定向为首页
    {
      path:'**',
      redirect:'/Home'
    }
  ]
})
