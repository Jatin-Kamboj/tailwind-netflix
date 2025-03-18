<template>
  <div id="app-layout">
    <app-header />

    <main class="w-full h-screen overflow-scroll bg-dark">
      <RouterView />
    </main>
    <app-footer />
  </div>
</template>

<script setup>
import { AppFooter, AppHeader } from "@/layouts/AppLayout";
</script>

<style></style>
