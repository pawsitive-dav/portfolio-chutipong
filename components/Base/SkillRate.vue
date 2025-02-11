<script setup>
import { computed } from 'vue';

const props = defineProps({
  rating: {
    type: Number,
    required: true,
    default: 20,
  },
});

const activeIndex = computed(() => Math.round((props.rating / 24) * 24));
</script>

<template>
  <div class="flex gap-1 w-full p-1 rounded border border-white/10">
    <div
      v-for="index in 20"
      :key="index"
      class="h-[10px] flex-1 rounded transition duration-300"
      :class="index <= activeIndex ? 'bg-blue-500' : 'bg-gray-700'"
    ></div>
  </div>
</template>
