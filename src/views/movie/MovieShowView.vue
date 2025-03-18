<template>
  <div class="h-[4.3rem]"></div>
  <section id="movie-show__page" class="mx-2 md:mx-14">
    <div class="breadcrumb flex gap-2 text-white my-6 items-center">
      <router-link to="/" class="text-xl">Movies</router-link>
      <div>></div>
      <div class="text-3xl font-extrabold">{{ movie.Title }}</div>
    </div>
    <movie-poster :movie="movie" />
    <movie-recommendations />
  </section>
</template>

<script setup>
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import { MoviePoster, MovieRecommendations } from "@/components/movie";
import { useFetch } from "@/composables";

const route = useRoute();
const { params } = route;

const fetchUrl = computed(() => `?i=${params.id}`);
const { data, refetch, isFetching } = useFetch(fetchUrl.value);

const movie = computed(() => data.value ?? {});
</script>

<style></style>
