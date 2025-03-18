<template>
  <div class="flex flex-col movie-list">
    <div class="flex items-center gap-1 mb-2 cursor-pointer" v-if="title">
      <div
        class="movie-list__title text-sm md:text-lg font-montserrat text-left text-white"
      >
        {{ title }}
      </div>
      <ChevronRightIcon class="w-[13px] h-[13px] text-blue-400" />
    </div>

    <div class="movie-list__cards flex overflow-y-scroll gap-1.5">
      <template v-for="movie in movies" :key="movie.Year">
        <movie-card :movie="movie" />
      </template>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, toRef } from "vue";
import { MovieCard } from "@/components/movie";
import { ChevronRightIcon } from "@heroicons/vue/24/solid";
import { useFetch } from "@/composables";

const props = defineProps(["title", "genre"]);
const genre = toRef(props, "genre");

const fetchUrl = computed(() => `?s=${genre.value}&type=movie`);
const { data, refetch, isFetching } = useFetch(fetchUrl.value);

const movies = computed(() => data.value?.Search ?? []);
</script>
