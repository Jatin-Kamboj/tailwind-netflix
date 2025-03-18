<template>
  <div
    v-if="movie"
    tabindex="0"
    @click="toMoviePage"
    class="movie-card rounded-md relative cursor-pointer flex-shrink-0 hover:scale-90 duration-300 ease-in-out"
  >
    <img
      class="w-[270px] h-[150px] object-cover rounded-lg"
      v-lazy="movie.Poster"
      :alt="movie.Title"
    />
    <div class="absolute top-2 left-0 movie__title">
      <img
        alt="Netflix Logo"
        src="/netlix-logo.webp"
        class="w-[35px] h-[30px]"
      />
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const props = defineProps({
  movie: { type: Object, default: () => ({}), required: true },
});

const router = useRouter();

function toMoviePage() {
  const { imdbID } = props.movie;
  router.push({ name: "movie-show", params: { id: imdbID } });
}
</script>
