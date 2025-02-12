import { pinia } from "@/pinia"
import { DeviceEnum, SIDEBAR_CLOSED, SIDEBAR_OPENED } from "@@/constants/app-key"
import { getSidebarStatus, setSidebarStatus } from "@@/utils/cache/local-storage"

interface Sidebar {
  opened: boolean
  withoutAnimation: boolean
}

/**
 * 设置侧边栏状态本地缓存,主要目的是为了将布尔值映射成字符串常量,传递字符串常量类型有一个好处,就是其意思直接就可以看出来
 * @param opened
 */
function handleSidebarStatus(opened: boolean) {
  opened ? setSidebarStatus(SIDEBAR_OPENED) : setSidebarStatus(SIDEBAR_CLOSED)
}

/**
 * 存储侧边栏的状态,设备的类型
 */
export const useAppStore = defineStore("app", () => {
  // 侧边栏状态
  const sidebar: Sidebar = reactive({
    opened: getSidebarStatus() !== SIDEBAR_CLOSED, // 这个操作的目的是为了将其从字符串常量类型转变为布尔值
    withoutAnimation: false
  })

  // 设备类型
  const device = ref<DeviceEnum>(DeviceEnum.Desktop)

  // 监听侧边栏 opened 状态
  watch(
    () => sidebar.opened,
    (opened) => {
      handleSidebarStatus(opened)
    }
  )

  // 切换侧边栏
  const toggleSidebar = (withoutAnimation: boolean) => {
    sidebar.opened = !sidebar.opened
    sidebar.withoutAnimation = withoutAnimation
  }

  // 关闭侧边栏
  const closeSidebar = (withoutAnimation: boolean) => {
    sidebar.opened = false
    sidebar.withoutAnimation = withoutAnimation
  }

  // 切换设备类型
  const toggleDevice = (value: DeviceEnum) => {
    device.value = value
  }

  return { device, sidebar, toggleSidebar, closeSidebar, toggleDevice }
})

/**
 * @description 在 SPA 应用中可用于在 pinia 实例被激活前使用 store
 * @description 在 SSR 应用中可用于在 setup 外使用 store
 */
export function useAppStoreOutside() {
  return useAppStore(pinia)
}
