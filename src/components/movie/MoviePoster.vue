<template>
  <div class="movie-poster mb-6">
    <div
      class="w-full h-[60vh] flex justify-center items-center relative gap-6"
    >
      <!-- class="w-full h-full object-contain" -->
      <img
        class="w-full h-full object-contain"
        :src="movie.Poster"
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
      class="movie-poster__description grid-cols-2 grid text-white my-4 gap-3"
    >
      <div class="text-white text-sm md:text-base">
        In small-town Punjab, three friends dream of better lives in London but
        struggle to secure visas — until an ex-soldier reveals a wildly risky
        route.
      </div>
      <div class="movie_poster__casts">
        <div><span class="text-grayish">Cast: </span> Cast</div>
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
