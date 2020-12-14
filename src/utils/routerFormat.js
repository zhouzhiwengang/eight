/**
 * 构建动态菜单路由对象
 * @param {Object} routes [后台返回路由数据]
 */
export function formatRoutes (routes) {
  console.log(routes)
  let fmtRoutes = []
  routes.forEach(routes => {
    if (routes.child) {
      routes.child = formatRoutes(routes.child)
    }

    let fmtRoute = {
      path: routes.permissionPath,
      component: resolve => {
        require(['@/components/admin/' + routes.permisionComponent + '.vue'], resolve)
      },
      name: routes.permissionName,
      nameZh: routes.permissionZh,
      iconCls: routes.permisionIcon,
      children: routes.child
    }
    fmtRoutes.push(fmtRoute)
  })
  return fmtRoutes
}