import Vue from 'vue'
import Router from 'vue-router'

import Home from '../pages/home/Home'
import Location from '../pages/home/Location'
import More from '../pages/home/More'
import Detail from '../pages/home/Detail'
import Hot from '../pages/hot/Hot'
import Discover from '../pages/discover/Discover'
import Setting from '../pages/setting/Setting'

Vue.use(Router);



const router = new Router({
    routes: [
        {
            path: '/home',
            // alias: '/',//设置别名
            component: Home,
            children: [
                {
                    path: 'location',
                    component: Location
                },
                {
                    path: 'more',
                    component: More
                },
                {
                    path: 'detail/:name/:id',
                    component: Detail
                }
            ]
        },
        {
            path: '/hot',
            component: Hot
        },
        {
            path: '/discover',
            component: Discover
        },
        {
            path: '/setting',
            component: Setting
        },
        // {
        //     // 配置重定向
        //     path: '**',
        //     redirect: '/home'
        // }
    ]
});


export default router;