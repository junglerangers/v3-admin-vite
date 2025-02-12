import type { RouteRecordRaw } from "vue-router"
import { pinia } from "@/pinia"
import { constantRoutes, dynamicRoutes } from "@/router"
import { routerConfig } from "@/router/config"
import { flatMultiLevelRoutes } from "@/router/helper"

/**
 * @name 判断该用户是否具有访问该路由所需的角色信息
 * @param roles 当前用户所具有的所有角色信息
 * @param route 当前需要访问的路由信息
 * @returns bool
 */
function hasPermission(roles: string[], route: RouteRecordRaw) {
  const routeRoles = route.meta?.roles
  return routeRoles ? roles.some(role => routeRoles.includes(role)) : true
}

/**
 * @name 它的逻辑有点类似于后端返回所有的路由信息,然后由前端再根据每个路由的角色权限信息来进行过滤?
 * @param routes 待过滤的路由信息组
 * @param roles 用户所具有的角色信息
 * @returns 过滤后的路由组信息
 */
function filterDynamicRoutes(routes: RouteRecordRaw[], roles: string[]) {
  const res: RouteRecordRaw[] = []
  routes.forEach((route) => {
    const tempRoute = { ...route }
    if (hasPermission(roles, tempRoute)) {
      if (tempRoute.children) {
        tempRoute.children = filterDynamicRoutes(tempRoute.children, roles)
      }
      res.push(tempRoute)
    }
  })
  return res
}

/**
 * @exports routes 用户可访问的所有路由
 * @exports addRoutes 用户可访问的动态路由
 * @exports setRoutes 根据用户角色设置路由信息
 * @exports setAllRoutes 设置用户可以访问所有路由信息
 */
export const usePermissionStore = defineStore("permission", () => {
  // 可访问的路由
  const routes = ref<RouteRecordRaw[]>([])

  // 有访问权限的动态路由
  const addRoutes = ref<RouteRecordRaw[]>([])

  // 根据角色生成可访问的 Routes（可访问的路由 = 常驻路由 + 有访问权限的动态路由）
  const setRoutes = (roles: string[]) => {
    const accessedRoutes = filterDynamicRoutes(dynamicRoutes, roles)
    set(accessedRoutes)
  }

  const setAllRoutes = () => {
    set(dynamicRoutes)
  }

  // 统一设置,感觉这个的耦合性有点强,或者说名字取得不是很合适,这个函数的本质功能是将传递进来的路由与常态路由进行组合,然后赋值给全局路由
  const set = (accessedRoutes: RouteRecordRaw[]) => {
    routes.value = constantRoutes.concat(accessedRoutes)
    addRoutes.value = routerConfig.thirdLevelRouteCache ? flatMultiLevelRoutes(accessedRoutes) : accessedRoutes
  }

  return { routes, addRoutes, setRoutes, setAllRoutes }
})

/**
 * @description 在 SPA 应用中可用于在 pinia 实例被激活前使用 store
 * @description 在 SSR 应用中可用于在 setup 外使用 store
 */
export function usePermissionStoreOutside() {
  return usePermissionStore(pinia)
}
