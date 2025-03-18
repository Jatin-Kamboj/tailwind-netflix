<template>
  <div
    class="movie-recommendations__wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2 md:gap-4"
  >
    <template :key="movie.imdbID" v-for="movie in movies">
      <div
        tabindex="0"
        @click="toMoviePage(movie)"
        class="movie-card rounded-md relative cursor-pointer bg-[#2F2F2F] h-[260px]"
      >
        <img
          v-lazy="movie.Poster"
          :alt="movie.Title"
          class="w-full h-[150px] object-cover rounded-lg movie-card__image"
        />

        <div class="flex justify-between items-center p-4 pb-0 text-white">
          <div class="text-xs md:text-sm">{{ movie.Year }}</div>

          <app-icon #icon>
            <PlusIcon class="h-7 w-7" />
          </app-icon>
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
import { AppIcon } from "@/components/shared";
import { PlusIcon } from "@heroicons/vue/24/solid";
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const fetchUrl = computed(() => `?s=Drama&type=movie`);
const { data, refetch, isFetching } = useFetch(fetchUrl.value);

const movies = computed(() => data.value?.Search ?? []);

const router = useRouter();

function toMoviePage({ imdbID, ...item }) {
  router.push({ name: "movie-show", params: { id: imdbID } });
}
</script>

<style></style>
