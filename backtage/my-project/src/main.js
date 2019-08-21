import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import commonUI from './common'
import Store from 'vuex';
Vue.use(commonUI)
Vue.use(ElementUI)
Vue.config.productionTip = false

// router.beforeEach((to, from, next) => {
//     if (to.meta.requireAuth) {
//         if (Store.username) {
//             // console.log(state.username)
//             next()
//         } else {
//             next({
//                 path: '/login',
//                 query: { redirect: to.fullPath }
//             })
//         }
//     } else {
//         next()
//     }
// })

new Vue({
    router,
    Store,
    render: h => h(App)
}).$mount('#app')