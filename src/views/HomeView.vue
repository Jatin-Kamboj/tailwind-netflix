<template>
  <section id="home" class="">
    <top-movie-poster />

    <!-- Top movies lists -->
    <div class="flex gap-11 flex-col mx-2 md:mx-14">
      <movie-list :title="`New on Netflix`" :movies="movies" />
      <movie-list :title="`Exciting TV Thrillers`" :movies="movies" />
      <movie-list :title="`Top 10 movies in India`" :movies="movies" />
      <movie-list
        :title="`International Movies Dubbed in Hindi `"
        :movies="movies"
      />
      <movie-list :title="`Movies based upon books`" :movies="movies" />
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import useAxios from "@/composables/useAxios";
import { MovieList, MovieCard, TopMoviePoster } from "@/components/movie";

const movies = ref([]);
const { get, data } = useAxios();

async function fetchMovies() {
  await get(
    `/imdb/search?type=movie&rows=25&sortOrder=DESC&sortField=id&genre=Horror`
  );
  console.log("data :>> ", data.value);
  movies.value = data.value?.results ?? [];
}

fetchMovies();
</script>

<style></style>
