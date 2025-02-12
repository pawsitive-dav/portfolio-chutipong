<script setup>
const props = defineProps({
  text: { type: String, required: true },
  position: { type: String, default: 'top' },
  trigger: { type: String, default: 'hover' },
});

const isVisible = ref(false);

const toggleTooltip = () => {
  if (props.trigger === 'click') {
    isVisible.value = !isVisible.value;
  }
};

// คำนวณตำแหน่งของ Tooltip
const tooltipPosition = computed(() => {
  let positionClass = 'absolute';

  switch (props.position) {
    case 'top':
      positionClass +=
        ' -translate-x-1/2 top-0 left-1/2 -translate-y-full mb-2';
      break;
    case 'bottom':
      positionClass +=
        ' -translate-x-1/2 bottom-0 left-1/2 translate-y-full mt-2';
      break;
    case 'left':
      positionClass +=
        ' -translate-y-1/2 left-0 top-1/2 -translate-x-full mr-2';
      break;
    case 'right':
      positionClass +=
        ' -translate-y-1/2 right-0 top-1/2 translate-x-full ml-2';
      break;
    default:
      positionClass +=
        ' -translate-x-1/2 top-0 left-1/2 -translate-y-full mb-2';
  }

  return positionClass;
});
</script>

<template>
  <div class="relative inline-block">
    <!-- Element ที่ trigger Tooltip -->
    <div
      @mouseenter="trigger === 'hover' ? (isVisible = true) : null"
      @mouseleave="trigger === 'hover' ? (isVisible = false) : null"
      @click="toggleTooltip"
      class="cursor-pointer"
    >
      <slot />
    </div>

    <!-- Tooltip -->
    <Transition name="fade">
      <div
        v-if="isVisible"
        class="z-50 bg-gray-900 text-white text-xs py-1 px-2 rounded shadow-lg whitespace-nowrap"
        :class="tooltipPosition"
      >
        {{ text }}
      </div>
    </Transition>
  </div>
</template>

<style scoped>
/* Animation */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
