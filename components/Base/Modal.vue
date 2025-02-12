<script setup>
import { defineProps, defineEmits, watch, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  modelValue: Boolean,
});

const emit = defineEmits(['update:modelValue']);

const handleKeydown = (event) => {
  if (event.key === 'Escape') {
    closeModal();
  }
};

const closeModal = () => {
  emit('update:modelValue', false);
};

watch(
  () => props.modelValue,
  (newValue) => {
    if (newValue) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeydown);
    } else {
      document.body.style.overflow = '';
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
          class="absolute inset-0 bg-black bg-opacity-50 backdrop-blur transition-opacity"
          @click="closeModal"
        ></div>

        <!-- Modal Box -->
        <div
          class="relative bg-white rounded-lg p-6 max-w-[1200px] w-full max-h-[90vh] overflow-auto z-10"
        >
          <!-- ปุ่มปิด (Fixed Position) -->
          <button
            class="fixed top-4 right-4 text-gray-600 hover:text-gray-900 bg-white p-2 rounded-full shadow-lg z-50"
            @click="closeModal"
          >
            <LucideX />
          </button>

          <!-- Slot Content (รองรับ Scroll) -->
          <div class="flex justify-center">
            <slot />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
/* Fade Animation */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
</style>
