import Vue from 'vue'
import Router from 'vue-router'
import Webpage from '../components/Webpage'
// import Bashboard from '../pages/Bashboard'
// import Tab from '../pages/Tab'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/webpage',
        component: Webpage,
        children: [{
            path: '/table',
            component: resolve => require(['../pages/Table'], resolve)
                // meta: { title: '自定义图标' }
        }, {
            path: '/tabs',
            component: resolve => require(['../pages/Tabs'], resolve)
                // meta: { title: '自定义图标' }
        }]
    }]
})