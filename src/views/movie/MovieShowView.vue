<template>
  <div class="h-[4.3rem]"></div>
  <section id="movie-show__page" class="mx-2 md:mx-14">
    <div class="breadcrumb flex gap-2 text-white my-6 items-center">
      <div class="text-xl">Movies</div>
      <div>></div>
      <div class="text-3xl font-extrabold">{{ movie.name }}</div>
    </div>
    <movie-poster />
  </section>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { MoviePoster } from "@/components/movie";

const route = useRoute();
const { params } = route;

const movie = ref({
  name: "Article 320",
});
</script>

<style></style>
