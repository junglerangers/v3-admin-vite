import { useAppStore } from "@/pinia/stores/app"
import { DeviceEnum } from "@@/constants/app-key"

const appStore = useAppStore()

// 从原属性衍生出来的计算属性,这里只是将device进行了一下包装,然后从其衍生出了两个判断属性
const isMobile = computed(() => appStore.device === DeviceEnum.Mobile)
const isDesktop = computed(() => appStore.device === DeviceEnum.Desktop)

/** 设备类型 Composable */
export function useDevice() {
  return { isMobile, isDesktop }
}
