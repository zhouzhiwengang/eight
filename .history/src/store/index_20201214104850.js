import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
 
const store = new Vuex.Store({
 
  state: {
    // 存储token
    token: localStorage.getItem('token') ? localStorage.getItem('token') : '',
    // 存储username
    username: localStorage.getItem('username')  ? localStorage.getItem('username') : '',
    // 存储用户ID
    uid: -1,
    // 存储用户菜单
    adminMenus: []
  },
 
  mutations: {
    // 修改token，并将token存入localStorage
    setToken (state, user) {
      state.token = user.token;
      localStorage.setItem('token', user.token);
    },
    setUserName (state, user) {
      state.username = user.username;
      localStorage.setItem('username', user.token);
    },
    setUserId (state, user) {
      state.uid = user.uid
    },
    initAdminMenu (state, menu) {
      state.adminMenus = menu
    },
    logout (state, user) {
      state.username = ''
      state.token = ''
      state.uid = -1
      state.adminMenus = []
      localStorage.removeItem('token')
      localStorage.removeItem('username')
    }
  }
});
 
export default store;