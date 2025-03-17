<script setup>
import { RouterLink, RouterView } from "vue-router";
import AppHeader from "@/layouts/AppLayout/AppHeader.vue";
</script>

<template>
  <!-- <header></header> -->
  <AppHeader />
  <main class="w-full h-screen overflow-scroll bg-dark">
    <RouterView />
  </main>
</template>

<!-- This needs to be removed -->
