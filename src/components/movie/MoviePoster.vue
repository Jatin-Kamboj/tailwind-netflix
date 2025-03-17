<template>
  <div class="movie-poster mb-6">
    <div
      class="w-full h-[80vh] flex justify-center items-center relative gap-6"
    >
      <img
        class="w-full h-full object-cover"
        src="https://m.media-amazon.com/images/M/MV5BODc1YTE2MDUtNGQ1NS00YmIzLWFjMDItMTg0NjJjMzA0MGQ4XkEyXkFqcGc@._V1_.jpg"
        alt="Homepage movie poster"
      />

      <div
        class="movie-poster__details absolute bottom-20 left-10 flex flex-col gap-4"
      >
        <div
          class="movie-poster__heading text-6xl font-montserrat font-extrabold text-white"
        >
          Eye for an Eye
        </div>
        <div
          class="movie-poster__description text-white text-sm md:text-base font-extralight w-2/3"
        >
          A grieving mother takes justice into her own hands when the man who
          raped and murdered her daughter is freed on a technicality.
        </div>
        <div class="movie-poster__buttons flex gap-2">
          <app-button label="Play" variant="primary" #appendIcon>
            <PlayIcon class="h-7 w-7" />
          </app-button>

          <app-button label="More info" variant="secondary" #appendIcon>
            <InformationCircleIcon class="h-7 w-7 text-white" />
          </app-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { PlayIcon, InformationCircleIcon } from "@heroicons/vue/24/solid";
import { AppButton } from "@/components/shared";
</script>

<style></style>
