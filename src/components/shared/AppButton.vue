<template>
  <button
    v-if="variantConfig?.classes"
    :class="variantConfig.classes"
    class="md:px-6 md:py-2 px-2 py-1 text-sm md:text-base transition hover:scale-105 duration-300 ease-in-out focus:outline-none focus:ring-2 rounded-md flex items-center gap-1"
  >
    <!-- Appends an icon infront of button labels -->
    <slot name="appendIcon" />
    <span v-if="label">{{ label }}</span>
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

// Variant based config of button
const VARIANTS_CONFIG = {
  primary: {
    classes: `bg-white focus:ring-white-400 hover:bg-gray-200`,
  },
  danger: {
    classes: `bg-primary !px-3 !py-1 rounded !text-sm hover:bg-red-700 transition text-white `,
  },
  secondary: {
    classes: `bg-grayish text-white hover:bg-gray-500 
              focus:ring-gray-400`,
  },
  icon: {
    classes: `h-9 w-9 text-white ring-2 rounded-full ring-gray-400
             cursor-pointer hover:ring-white flex items-center 
             justify-center`,
  },
};

const variantConfig = computed(() => {
  return VARIANTS_CONFIG[props.variant];
});
</script>

<style></style>
