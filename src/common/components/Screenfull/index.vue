<script lang="ts" setup>
import screenfull from "screenfull"

interface Props {
  /** 全屏的元素，默认是 html */
  element?: string
  /** 打开全屏提示语 */
  openTips?: string
  /** 关闭全屏提示语 */
  exitTips?: string
  /** 是否只针对内容区 */
  content?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  element: "html",
  openTips: "全屏",
  exitTips: "退出全屏",
  content: false// 判断要放大的是内容还是页面,内容全屏与页面全屏采用了不同的逻辑
})

const CONTENT_LARGE = "content-large"

const CONTENT_FULL = "content-full"

const classList = document.body.classList

// #region 全屏
const isEnabled = screenfull.isEnabled
const isFullscreen = ref<boolean>(false)
const fullscreenTips = computed(() => (isFullscreen.value ? props.exitTips : props.openTips))
const fullscreenSvgName = computed(() => (isFullscreen.value ? "fullscreen-exit" : "fullscreen"))

function handleFullscreenClick() {
  const dom = document.querySelector(props.element) || undefined
  isEnabled ? screenfull.toggle(dom) : ElMessage.warning("您的浏览器无法工作")
}

function handleFullscreenChange() {
  isFullscreen.value = screenfull.isFullscreen
  // 退出全屏时清除相关的 class
  isFullscreen.value || classList.remove(CONTENT_LARGE, CONTENT_FULL) // 如果是全屏就不执行,如果不是全屏就执行后面的操作
}

watchEffect((onCleanup) => {
  if (isEnabled) {
    // 挂载组件时自动执行
    screenfull.on("change", handleFullscreenChange) // 增加屏幕放大或缩小时的监听事件
    // 卸载组件时自动执行
    onCleanup(() => {
      screenfull.off("change", handleFullscreenChange)
    })
  }
})
// #endregion

// #region 内容区
const isContentLarge = ref<boolean>(false)
const contentLargeTips = computed(() => (isContentLarge.value ? "内容区复原" : "内容区放大"))
const contentLargeSvgName = computed(() => (isContentLarge.value ? "fullscreen-exit" : "fullscreen"))

function handleContentLargeClick() {
  isContentLarge.value = !isContentLarge.value
  // 内容区放大时，将不需要的组件隐藏
  classList.toggle(CONTENT_LARGE, isContentLarge.value)
}

function handleContentFullClick() {
  // 取消内容区放大,如果在内容已经放大时选择全屏,就先取消放大,然后再进行全屏操作
  isContentLarge.value && handleContentLargeClick()
  // 内容区全屏时，将不需要的组件隐藏
  classList.add(CONTENT_FULL)
  // 开启全屏
  handleFullscreenClick()
}
// #endregion
</script>

<template>
  <div>
    <!-- 全屏 -->
    <el-tooltip v-if="!props.content" effect="dark" :content="fullscreenTips" placement="bottom">
      <SvgIcon :name="fullscreenSvgName" @click="handleFullscreenClick" class="svg-icon" />
    </el-tooltip>
    <!-- 内容区 -->
    <el-dropdown v-else :disabled="isFullscreen">
      <SvgIcon :name="contentLargeSvgName" class="svg-icon" />
      <template #dropdown>
        <el-dropdown-menu>
          <!-- 内容区放大 -->
          <el-dropdown-item @click="handleContentLargeClick">
            {{ contentLargeTips }}
          </el-dropdown-item>
          <!-- 内容区全屏 -->
          <el-dropdown-item @click="handleContentFullClick">
            内容区全屏
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<style lang="scss" scoped>
.svg-icon {
  font-size: 20px;
  &:focus {
    outline: none;
  }
}
</style>
