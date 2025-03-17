<template>
  <div class="h-[4.3rem]"></div>
  <section id="movie-show__page" class="mx-2 md:mx-14">
    <div class="breadcrumb flex gap-2 text-white my-6 items-center">
      <router-link to="/" class="text-xl">Movies</router-link>
      <div>></div>
      <div class="text-3xl font-extrabold">{{ movie.Title }}</div>
    </div>
    <movie-poster :movie="movie" />
  </section>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { MoviePoster } from "@/components/movie";
import useAxios from "@/composables/useAxios";

const route = useRoute();
const { params } = route;

const movie = ref({
  name: "Article 320",
});

const { data, get } = useAxios();
async function fetchMovieById() {
  console.log("data.value :>> ", data.value);
  await get(`?apikey=b2493b42&i=${params.id}`);
  movie.value = data.value;
}
fetchMovieById();
</script>

<style></style>
