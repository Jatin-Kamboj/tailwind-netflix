<template>
  <div
    class="movie-card rounded-md relative cursor-pointer flex-shrink-0"
    @click="toMoviePage"
  >
    <img
      class="w-[270px] h-[150px] object-cover rounded-lg"
      src="https://m.media-amazon.com/images/M/MV5BODc1YTE2MDUtNGQ1NS00YmIzLWFjMDItMTg0NjJjMzA0MGQ4XkEyXkFqcGc@._V1_.jpg"
      alt="Homepage movie"
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
  movie: {
    type: Object,
    default: () => ({}),
    required: true,
  },
});

const router = useRouter();
function toMoviePage() {
  const { id } = props.movie;
  router.push({ name: "movie-show", params: { id } });
}
</script>
