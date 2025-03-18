<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2 md:gap-4">
    <template :key="movie.imdbID" v-for="movie in movies">
      <div
        class="movie-card rounded-md relative cursor-pointer bg-[#2F2F2F] h-[260px]"
      >
        <img
          :src="movie.Poster"
          :alt="movie.Title"
          class="w-full h-[150px] object-cover rounded-lg"
        />

        <div class="flex justify-between items-center p-4 pb-0 text-white">
          <div class="text-xs md:text-sm">{{ movie.Year }}</div>

          <div
            class="h-9 w-9 text-white ring-2 rounded-full ring-gray-400 cursor-pointer hover:ring-white flex items-center justify-center"
          >
            <PlusIcon class="h-7 w-7" />
          </div>
        </div>

        <div class="text-xs md:text-sm p-4 text-white">
          {{ movie.Title }}
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { useFetch } from "@/composables";
import { PlusIcon } from "@heroicons/vue/24/solid";
import { computed, ref } from "vue";

const fetchUrl = computed(() => `?s=movie&type=movie`);
const { data, refetch, isFetching } = useFetch(fetchUrl.value);

const movies = computed(() => data.value?.Search ?? []);
</script>

<style></style>
