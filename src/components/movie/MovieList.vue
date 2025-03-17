<template>
  <div class="p-2 flex flex-col movie-list__wrapper">
    <div
      class="movie-list__title text-lg font-montserrat text-left text-white mb-2 cursor-pointer"
    >
      {{ title }}
    </div>

    <div class="movie-list flex overflow-y-scroll gap-2">
      <template v-for="(movie, i) in movies" :key="movie.Year + i">
        <movie-card :movie="movie" />
        <movie-card :movie="movie" />
        <movie-card :movie="movie" />
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { MovieCard } from "@/components/movie";

const props = defineProps(["title", "movies"]);
</script>

<style></style>
