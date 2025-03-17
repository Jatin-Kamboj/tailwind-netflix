<template>
  <section class="thriller-movies__list"></section>
  <movie-list :title="`Exciting TV Thrillers`" :movies="movies" />
</template>

<script setup>
import { ref } from "vue";
import useAxios from "@/composables/useAxios";
import { MovieList, MovieCard, TopMoviePoster } from "@/components/movie";

const movies = ref([]);
const { get, data } = useAxios();

async function fetchMovies() {
  await get(
    `/imdb/search?type=movie&rows=25&sortOrder=DESC&sortField=id&genre=Thriller`
  );
  movies.value = data.value?.results ?? [];
}

fetchMovies();
</script>
