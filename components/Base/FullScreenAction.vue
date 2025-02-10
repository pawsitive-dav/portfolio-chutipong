<script setup lang="ts">
const isFullScreen = ref(false);

const toggleFullScreen = () => {
  if (isFullScreen.value) {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if ((document as any).mozCancelFullScreen) {
      (document as any).mozCancelFullScreen();
    } else if ((document as any).webkitExitFullscreen) {
      (document as any).webkitExitFullscreen();
    } else if ((document as any).msExitFullscreen) {
      (document as any).msExitFullscreen();
    }
    isFullScreen.value = false;
  } else {
    const element = document.documentElement;
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if ((element as any).mozRequestFullScreen) {
      (element as any).mozRequestFullScreen();
    } else if ((element as any).webkitRequestFullscreen) {
      (element as any).webkitRequestFullscreen();
    } else if ((element as any).msRequestFullscreen) {
      (element as any).msRequestFullscreen();
    }
    isFullScreen.value = true;
  }
};
</script>

<template>
  <div
    class="text-slate-500 cursor-pointer hover:text-slate-400"
    @click="toggleFullScreen"
  >
    <LucideMinimize v-if="isFullScreen" />
    <LucideMaximize v-else />
  </div>
</template>
