import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login';
import home from '@/components/home';
import initAdminMenu from '../utils/initAdmin'
import store from  '../store'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/home',
      name: 'home',
      component: home
    }
  ]
})
// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next();
  } else {
    let token = localStorage.getItem('token');
    if (token === null || token === '') {
      next('/login');
    } else {
      // 查询动态表单
      initAdminMenu(router, store)
      // 跳转至指定页面
      next();
    }
  }
});
 
export default router;
