<template>
  <section id="home">
    <movie-list :title="`New on Netflix`" />
  </section>
</template>

<script setup>
import { MovieList, MovieCard } from "@/components/movie";
</script>

<style></style>
