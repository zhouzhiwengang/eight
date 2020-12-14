import {get} from '@/utils/http'
import {formatRoutes} from '../utils/routerFormat'
import store from  '../store'

export default function initAdminMenu (router, store) {
  if (store.state.adminMenus.length > 0) {
    return
  }

  get('/permission/' + store.state.uid).then(resp => {
    var fmtRoutes = formatRoutes(resp)
    router.addRoutes(fmtRoutes)
    store.commit('initAdminMenu', fmtRoutes)
  })
}
