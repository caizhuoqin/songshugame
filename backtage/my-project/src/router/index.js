import Vue from 'vue'
import Router from 'vue-router'
import Webpage from '../common/home/Home'
import Login from '../pages/Login'
// import Tab from '../pages/Tab'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/webpage',
            name: 'webpage',
            meta: {
                requireAuth: true,
            },
            component: Webpage,
            children: [{
                    path: '/dashboard',
                    component: resolve => require(['../pages/Dashboard'], resolve),
                    meta: { title: '系统首页' }
                },
                {
                    path: '/table',
                    component: resolve => require(['../pages/Table'], resolve),
                    meta: { title: '自定义图标' }
                }, {
                    path: '/tabs',
                    component: resolve => require(['../pages/Tabs'], resolve),
                    meta: { title: '系统首页' }
                }
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
    ]
})