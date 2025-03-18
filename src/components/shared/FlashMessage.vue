<template>
  <div
    v-if="visible"
    class="fixed top-5 right-5 bg-red-600 text-white px-4 py-3 rounded-md shadow-lg transition-transform duration-300 ease-in-out transform z-10"
    :class="visible ? 'translate-x-0 opacity-100' : 'translate-x-5 opacity-0'"
  >
    <div class="flex items-center gap-2">
      <ExclamationTriangleIcon class="h-5 w-5 text-white" />
      <span>{{ message }}</span>
      <button @click="closeMessage" class="text-white hover:text-gray-200">
        ✖
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { ExclamationTriangleIcon } from "@heroicons/vue/24/solid";

const visible = ref(false);
const message = ref("");

const showMessage = (msg) => {
  message.value = msg;
  visible.value = true;
  setTimeout(() => {
    visible.value = false;
  }, 3000);
};

const closeMessage = () => {
  visible.value = false;
};

defineExpose({ showMessage });
</script>
