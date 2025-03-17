<script setup>
import { RouterLink, RouterView } from "vue-router";
import { AppFooter, AppHeader } from "@/layouts/AppLayout";
</script>

<template>
  <app-header />

  <main class="w-full h-screen overflow-scroll bg-dark">
    <RouterView />
  </main>
  <app-footer />
</template>
