<script lang="ts" setup>
import { Expand, Fold } from "@element-plus/icons-vue"

interface Props {
  isActive?: boolean
}

// 声明默认值的一种方式
const props = withDefaults(defineProps<Props>(), {
  isActive: false
})

const emit = defineEmits<{
  toggleClick: [] // 一种声明函数更简单的方式,函数名:[参数列表]
}>()

function toggleClick() {
  emit("toggleClick")
}
</script>

<template>
  <div @click="toggleClick">
    <el-icon :size="20" class="icon">
      <Fold v-if="props.isActive" />
      <Expand v-else />
    </el-icon>
  </div>
</template>

<style lang="scss" scoped>
.icon {
  vertical-align: middle;
  color: var(--v3-hamburger-text-color);
}
</style>
