import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const state = {
    username: 'nihao'
}
const store = new Vuex.Store({
    state
});

export default store;