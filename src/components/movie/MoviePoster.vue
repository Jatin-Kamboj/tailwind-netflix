<template>
  <div class="movie-poster mb-6">
    <div
      class="movie-poster__image w-full h-[60vh] flex justify-center items-center relative gap-6"
    >
      <img
        class="w-full h-full object-contain"
        v-lazy="movie.Poster"
        :alt="movie.Title"
      />

      <div
        class="movie-poster__details absolute bottom-12 left-10 flex flex-col gap-5"
      >
        <div
          class="movie-poster__heading text-3xl md:text-6xl font-montserrat font-extrabold text-white"
        >
          {{ movie.Title }}
        </div>

        <div class="movie-poster__buttons flex gap-2.5 items-center">
          <app-button label="Play" variant="primary" #appendIcon>
            <PlayIcon class="h-7 w-7" />
          </app-button>

          <div
            class="h-9 w-9 text-white ring-2 rounded-full ring-gray-400 cursor-pointer hover:ring-white flex items-center justify-center"
          >
            <PlusIcon class="h-7 w-7" />
          </div>
          <div
            class="h-9 w-9 text-white ring-2 rounded-full ring-gray-400 cursor-pointer hover:ring-white flex items-center justify-center"
          >
            <HandThumbUpIcon class="h-7 w-7" />
          </div>
        </div>
      </div>
    </div>
    <div
      class="movie-poster__description grid-cols-1 md:grid-cols-2 grid text-white my-12 gap-2"
    >
      <div class="flex gap-2 flex-col">
        <div class="movie-release__details text-xs md:text-base">
          <div class="text-xs md:text-base">
            <span class="text-grayish">Released Date :</span>
            <span class="pl-3">{{ movie.Released }}</span>
          </div>
        </div>
        <div class="movie-genre text-xs md:text-base">{{ movie.Genre }}</div>
        <p class="text-white text-sm md:text-base movie-plot">
          {{ movie.Plot }}
        </p>
      </div>
      <div class="movie_poster__casts flex flex-col gap-2">
        <div class="text-xs md:text-base flex gap-2">
          <span class="text-grayish">Cast:</span>
          <span>{{ movie.Actors }}</span>
        </div>
        <div class="text-xs md:text-base flex gap-2">
          <span class="text-grayish">Genre:</span>
          <span>{{ movie.Genre }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  PlayIcon,
  InformationCircleIcon,
  PlusIcon,
} from "@heroicons/vue/24/solid";
import { HandThumbUpIcon } from "@heroicons/vue/24/outline";
import { AppButton } from "@/components/shared";
import { MovieList } from "@/components/movie";
import { ref } from "vue";

const props = defineProps(["movie"]);
</script>

<style></style>
