<template>
  <div
    tabindex="0"
    class="h-9 w-9 text-white ring-2 rounded-full ring-gray-400 cursor-pointer hover:ring-white flex items-center justify-center transition hover:scale-105 duration-300 ease-in-out"
  >
    <slot name="icon" />
  </div>
</template>

<script setup>
const props = defineProps(["icon"]);
</script>

<style></style>
