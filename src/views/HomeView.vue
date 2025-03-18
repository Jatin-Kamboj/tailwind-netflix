<template>
  <section id="home" class="">
    <top-movie-poster />

    <div class="flex gap-11 flex-col mx-2 md:mx-14 movies-list__wrapper">
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

import { MovieList, MovieCard, TopMoviePoster } from "@/components/movie";
</script>

<style></style>
