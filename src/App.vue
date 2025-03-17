<script setup>
import { RouterLink, RouterView } from "vue-router";
import AppHeader from "@/layouts/AppLayout/AppHeader.vue";
</script>

<template>
  <AppHeader />

  <!-- <div class="h-[4.3rem] bg-white"></div> -->
  <main class="w-full h-screen overflow-scroll bg-dark">
    <RouterView />
  </main>
</template>
