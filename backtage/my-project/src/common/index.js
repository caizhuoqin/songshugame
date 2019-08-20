import Sidebar from './sidebar/Sidebar'
import Header from './header/Header'
// import Home from './home/Home'
// import Tags from './tags/Tags'
import Tablistnav from './tablistnav/Tablistnav'

export default {
    //编写插件
    install(Vue) {
        console.log('install方法调用了');
        Vue.component(Sidebar.name, Sidebar);
        Vue.component(Header.name, Header)
            // Vue.component(Home.name, Home)
            // Vue.component(Tags.name, Tags)
        Vue.component(Tablistnav.name, Tablistnav)
    }
}