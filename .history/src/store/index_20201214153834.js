import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
 
const store = new Vuex.Store({
 
  state: {
    // 存储token
    token: window.localStorage.getItem('token') ? window.localStorage.getItem('token') : '',
    // 存储username
    username: window.localStorage.getItem('username')  ? window.localStorage.getItem('username') : '',
    // 存储用户ID
    uid: -1,
    // 存储用户菜单
    adminMenus: []
  },
 
  mutations: {
    // 修改token，并将token存入localStorage
    setToken (state, user) {
      console.log(user)
      state.token = user;
      window.localStorage.setItem('token', user);
    },
    setUserName (state, user) {
      console.log(user)
      state.username = user;
      window.localStorage.setItem('username', user);
    },
    setUserId (state, user) {
      console.log(user)
      state.uid = user
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