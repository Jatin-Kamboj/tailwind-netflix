<template>
  <button
    :class="variantConfig.classes"
    class="px-6 py-2 rounded-md text-sm md:text-base flex items-center gap-1 font-bold"
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
    classes: "bg-white",
  },
  secondary: {
    classes: "bg-grayish text-white",
  },
};

const variantConfig = computed(() => {
  return VARIANTS_CONFIG[props.variant];
});
</script>

<style></style>
