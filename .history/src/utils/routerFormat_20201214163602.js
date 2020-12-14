/**
 * 构建动态菜单路由对象
 * @param {Object} routes [后台返回路由数据]
 */
export function formatRoutes (routes) {
    console.log(routes)
    debugger
    let fmtRoutes = []
    routes.forEach(routes => {
      if (routes.child) {
        routes.child = formatRoutes(routes.child)
      }
  
      let fmtRoute = {
        path: routes.path,
        component: resolve => {
          require(['@/components/admin/' + routes.component + '.vue'], resolve)
        },
        name: routes.name,
        nameZh: routes.nameZh,
        iconCls: routes.icon,
        children: routes.child
      }
      fmtRoutes.push(fmtRoute)
    })
    return fmtRoutes
  }
  