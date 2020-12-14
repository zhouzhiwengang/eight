import {get, waitsleep} from '@/utils/http'
import {formatRoutes} from '../utils/routerFormat'
 
export default function initAdminMenu (router, store) {
  if (store.state.adminMenus.length > 0) {
    return
  }
 
  // 定时函数:定时函数实现异步方法模拟同步方法
  waitsleep(() => store.state.uid === -1).then(() => {
    // 动态权限请求
    get('/permission/' + store.state.uid).then(resp => {
    console.log(resp.date)
    console.log(resp.date)
    var fmtRoutes = formatRoutes(resp.date)
    router.addRoutes(fmtRoutes)
    store.commit('initAdminMenu', fmtRoutes)
    })
  })
}