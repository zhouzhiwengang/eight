import {get, waitsleep} from '@/utils/http'
import {formatRoutes} from '../utils/routerFormat'

export default async function initAdminMenu (router, store) {
  if (store.state.adminMenus.length > 0) {
    return
  }

  await waitsleep(() => store.state.uid === -1)

  const resp = get('/permission/' + store.state.uid)
  
  console.log(resp)
  console.log(resp.date)
  var fmtRoutes = formatRoutes(resp.date)
  router.addRoutes(fmtRoutes)
  store.commit('initAdminMenu', fmtRoutes)
}
