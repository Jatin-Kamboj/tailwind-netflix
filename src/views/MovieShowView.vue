<template>
  <div class="h-[4.3rem]"></div>
  <section id="movie-show__page" class="mx-2 md:mx-14">
    <div class="breadcrumb flex gap-2 text-white my-6 items-center">
      <router-link to="/" class="breadcrumb__link text-sm md:text-xl">
        Movies
      </router-link>
      <div class="breadcrumb__seperator">></div>
      <div class="breadcrumb__title text-lg md:text-3xl font-extrabold">
        {{ movie.Title }}
      </div>
    </div>

    <movie-poster :movie="movie" />
    <movie-recommendations />
  </section>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { onBeforeRouteUpdate, useRoute } from "vue-router";
import { MoviePoster, MovieRecommendations } from "@/components/movie";
import { useFetch } from "@/composables";

const route = useRoute();

const fetchUrl = computed(() => `?i=${route.params.id}`);
const { data, refetch, isFetching } = useFetch(fetchUrl.value);

const movie = computed(() => data.value ?? {});

async function fetchMovie(movieId) {
  const url = `?i=${movieId}`;
  await refetch({}, url);
}

// Listen to route change and fetch the details of selected movie
onBeforeRouteUpdate(async (to, from) => {
  fetchMovie(to.params.id);
});
</script>

<style></style>
