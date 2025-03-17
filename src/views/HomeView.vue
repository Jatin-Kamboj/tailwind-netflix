<template>
  <section id="home" class="mb-20">
    <!-- Top movies lists -->
    <top-movie-poster />

    <div class="flex gap-11 flex-col mx-2 md:mx-14">
      <movie-list :title="`New on Netflix`" genre="Romance" />
      <movie-list :title="`Exciting TV Thrillers`" genre="Thriller" />
      <movie-list :title="`Top 10 War movies in India`" genre="War" />
      <movie-list :title="`Horror Movies`" genre="Horror" />
      <movie-list :title="`Movies based upon books`" genre="Documentary" />
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import useAxios from "@/composables/useAxios";

import { MovieList, MovieCard, TopMoviePoster } from "@/components/movie";
</script>

<style></style>
