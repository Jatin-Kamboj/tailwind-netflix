<template>
  <div class="movie-card rounded-md relative cursor-pointer flex-shrink-0">
    <img
      class="w-[290px] h-[164px] object-cover rounded-lg"
      src="https://m.media-amazon.com/images/M/MV5BODc1YTE2MDUtNGQ1NS00YmIzLWFjMDItMTg0NjJjMzA0MGQ4XkEyXkFqcGc@._V1_.jpg"
      alt="Homepage movie"
    />
    <div class="absolute top-2 left-0 movie__title">
      <img
        src="/netlix-logo.webp"
        alt="Netflix Logo"
        class="w-[35px] h-[30px]"
      />
    </div>
  </div>
</template>

<script setup>
defineProps({
  movie: {
    type: Object,
    default: () => ({}),
    required: true,
  },
});
</script>

<style></style>
