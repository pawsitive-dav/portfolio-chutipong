<script setup>
const props = defineProps({
  rating: {
    type: Number,
    required: true,
    default: 20,
  },
});

const max = 20;
const animatedRating = ref(0);
const observer = ref(null);
const isVisible = ref(false);
const containerRef = ref(null);

const startAnimation = () => {
  if (!isVisible.value) return;
  let current = 0;
  const interval = setInterval(() => {
    if (current >= props.rating) {
      clearInterval(interval);
    } else {
      current++;
      animatedRating.value = current;
    }
  }, 50);
};

const handleIntersection = (entries) => {
  const entry = entries[0];
  if (entry.isIntersecting) {
    isVisible.value = true;
    startAnimation();
    observer.value.disconnect();
  }
};

onMounted(() => {
  observer.value = new IntersectionObserver(handleIntersection, {
    threshold: 0.5,
  });
  if (containerRef.value) {
    observer.value.observe(containerRef.value);
  }
});

onUnmounted(() => {
  if (observer.value) observer.value.disconnect();
});
</script>

<template>
  <div
    ref="containerRef"
    class="flex gap-1 w-full p-1 rounded border border-white/10"
  >
    <div
      v-for="index in max"
      :key="index"
      class="h-[10px] flex-1 rounded transition-all duration-500"
      :class="index <= animatedRating ? 'bg-blue-500' : 'bg-gray-700'"
    ></div>
  </div>
</template>
