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

    <div class="movie-list flex overflow-y-scroll gap-1.5">
      <template v-for="(movie, i) in movies" :key="movie.Year">
        <movie-card :movie="movie" />
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref, toRef } from "vue";
import useAxios from "@/composables/useAxios";
import { MovieCard } from "@/components/movie";
import { ChevronRightIcon } from "@heroicons/vue/24/solid";

const movies = ref([]);
const props = defineProps(["title", "genre"]);

const genre = toRef(props, "genre");
const { get, data } = useAxios();

async function fetchMovies() {
  await get(`?apikey=b2493b42&s=${genre.value}&type=movie`);

  movies.value = data.value?.Search ?? [];
}

fetchMovies();
</script>

<style></style>
