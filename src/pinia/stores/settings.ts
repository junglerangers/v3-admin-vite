import type { LayoutsConfig } from "@/layouts/config"
import type { Ref } from "vue"
import { layoutsConfig } from "@/layouts/config"
import { pinia } from "@/pinia"
import { setLayoutsConfig } from "@@/utils/cache/local-storage"

// 整体的逻辑是使用的时候,将整个对象中的每个属性都封装成ref,然后对每个ref进行watch
// 存储的时候将每个属性进行解箱,还原成正常的值,然后进行存储
// 这样子存储和取用的时候就都使用了相同的数据类型

type SettingsStore = {
  // 使用映射类型来遍历 LayoutsConfig 对象的键,将每个属性进行Ref封装
  [Key in keyof LayoutsConfig]: Ref<LayoutsConfig[Key]>
}

/**
 * keyof 返回的是一个联合类型
 */
type SettingsStoreKey = keyof SettingsStore

export const useSettingsStore = defineStore("settings", () => {
  // 状态对象
  const state = {} as SettingsStore
  // 遍历 LayoutsConfig 对象的键值对
  for (const [key, value] of Object.entries(layoutsConfig)) {
    // 使用类型断言来指定 key 的类型，将 value 包装在 ref 函数中，创建一个响应式变量
    const refValue = ref(value)
    // @ts-expect-error ignore
    state[key as SettingsStoreKey] = refValue
    // 监听每个响应式变量,如果任何设置项有变化,就将整个设置的ref的值转换为原生的值,然后进行存储,这里watch的目的是为了及时保存被更新后的数据
    watch(refValue, () => {
      // 缓存
      const settings = getCacheData()
      setLayoutsConfig(settings)
    })
  }
  // 获取要缓存的数据：将 state 对象转化为 settings 对象
  const getCacheData = () => {
    const settings = {} as LayoutsConfig
    for (const [key, value] of Object.entries(state)) {
      // @ts-expect-error ignore
      settings[key as SettingsStoreKey] = value.value
    }
    return settings
  }

  return state
})

/**
 * @description 在 SPA 应用中可用于在 pinia 实例被激活前使用 store
 * @description 在 SSR 应用中可用于在 setup 外使用 store
 */
export function useSettingsStoreOutside() {
  return useSettingsStore(pinia)
}
