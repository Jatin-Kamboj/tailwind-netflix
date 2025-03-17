<template>
  <div class="flex flex-col movie-list__wrapper">
    <div class="flex items-center gap-1 mb-2 cursor-pointer" v-if="title">
      <div
        class="movie-list__title text-sm md:text-lg font-montserrat text-left text-white"
      >
        {{ title }}
      </div>
      <ChevronRightIcon class="w-[13px] h-[13px] text-blue-400" />
    </div>
    <!-- <div class="movie-list flex overflow-y-scroll gap-1.5"> -->
    <div class="movie-list flex overflow-y-scroll gap-1">
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
import { ChevronRightIcon } from "@heroicons/vue/24/solid";
import { MovieCard } from "@/components/movie";

const props = defineProps(["title", "movies"]);
</script>

<style></style>
