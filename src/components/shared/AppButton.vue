<template>
  <button
    :class="variantConfig.classes"
    class="md:px-6 md:py-2 px-2 py-1 text-sm md:text-base font-bold transition hover:scale-105 duration-300 ease-in-out focus:outline-none focus:ring-2 rounded-md flex items-center gap-1"
  >
    <!-- Appends an icon infront of button labels -->
    <slot name="appendIcon" />
    <span>{{ label }}</span>
  </button>
</template>

<script setup>
import { computed } from "vue";
import { PlayIcon } from "@heroicons/vue/24/solid";
import { InformationCircleIcon } from "@heroicons/vue/24/outline";

const props = defineProps({
  label: String,
  variant: String,
});

const VARIANTS_CONFIG = {
  primary: {
    classes: `bg-white focus:ring-white-400 hover:bg-gray-200`,
  },
  secondary: {
    classes: `bg-grayish text-white hover:bg-gray-500 
              focus:ring-gray-400`,
  },
};

const variantConfig = computed(() => {
  return VARIANTS_CONFIG[props.variant];
});
</script>

<style></style>
