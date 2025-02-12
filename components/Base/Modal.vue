<script setup>
import {
  defineProps,
  defineEmits,
  watch,
  ref,
  onMounted,
  onUnmounted,
} from 'vue';

const props = defineProps({
  modelValue: Boolean, // ควบคุมการแสดงผล Modal
});

const emit = defineEmits(['update:modelValue']);

// ปิด Modal เมื่อกด Escape
const handleKeydown = (event) => {
  if (event.key === 'Escape') {
    closeModal();
  }
};

// ฟังก์ชันปิด Modal
const closeModal = () => {
  emit('update:modelValue', false);
};

// ตรวจจับ Escape Key เมื่อ Modal เปิด
watch(
  () => props.modelValue,
  (newValue) => {
    if (newValue) {
      document.addEventListener('keydown', handleKeydown);
    } else {
      document.removeEventListener('keydown', handleKeydown);
    }
  }
);

onMounted(() => {
  if (props.modelValue) {
    document.addEventListener('keydown', handleKeydown);
  }
});

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown);
});
</script>

<template>
  <Teleport to="body">
    <Transition name="modal-fade">
      <div
        v-if="modelValue"
        class="fixed inset-0 flex items-center justify-center z-50 p-4"
      >
        <!-- Overlay -->
        <div
          class="absolute inset-0 bg-black bg-opacity-20 backdrop-blur-sm transition-opacity"
          @click="closeModal"
        ></div>

        <!-- Modal Box -->
        <div class="relative bg-white rounded-lg p-6 max-w-lg w-full z-10">
          <button
            class="absolute top-[-16px] right-[-16px] text-gray-600 hover:text-gray-900 bg-white p-2 rounded-full shadow-lg"
            @click="closeModal"
          >
            <LucideX />
          </button>

          <!-- Slot Modal -->
          <slot />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
/* Fade Animation */
.modal-fade-enter-active,
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
</style>
