<template>
  <section id="movie-show__page">Movie {{ params.id }}</section>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
const { params } = route;
</script>

<style></style>
