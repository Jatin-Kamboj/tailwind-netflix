<template>
  <header class="bg-dark text-white fixed top-0 left-0 w-full z-50 shadow-md">
    <div class="container mx-auto flex items-center justify-between p-4">
      <router-link to="/" class="text-primary text-3xl font-bold font-primary">
        NETFLIX
      </router-link>

      <nav class="hidden md:flex gap-6">
        <router-link to="/" class="hover:text-primary transition text-md"
          >Home</router-link
        >
        <router-link to="/" class="hover:text-primary transition text-md"
          >TV Shows</router-link
        >
        <router-link to="/" class="hover:text-primary transition text-md"
          >Movies</router-link
        >
        <router-link to="/" class="hover:text-primary transition text-md"
          >New & Popular</router-link
        >
        <router-link to="/" class="hover:text-primary transition text-md"
          >My List</router-link
        >
      </nav>

      <div class="flex items-center gap-4">
        <button class="text-grayish hover:text-white transition">
          <MagnifyingGlassIcon />
        </button>
        <button
          class="bg-primary px-3 py-1 rounded text-sm hover:bg-red-700 transition"
        >
          Sign In
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { MagnifyingGlassIcon } from "@heroicons/vue/24/solid";
</script>
<style scoped></style>
