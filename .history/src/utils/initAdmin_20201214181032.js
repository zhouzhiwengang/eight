import {get, waitsleep} from '@/utils/http'
import {formatRoutes} from '../utils/routerFormat'

export default function initAdminMenu (router, store) {
  if (store.state.adminMenus.length > 0) {
    return
  }

  waitsleep(() => store.state.uid === -1).then(() => {
    get('/permission/' + store.state.uid).then(resp => {
    console.log(resp.date)
    console.log(resp.date)
    var fmtRoutes = formatRoutes(resp.date)
    router.addRoutes(fmtRoutes)
    store.commit('initAdminMenu', fmtRoutes)
    })
  })
}
