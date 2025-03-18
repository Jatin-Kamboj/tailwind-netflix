<template>
  <div class="breadcrumbs__wrapper">
    <template v-for="(breadcrumb, idx) in breadcrumbs" :key="breadcrumb.label">
      <div class="breadcrumb flex gap-2 text-white my-6 items-center">
        <template v-if="breadcrumb.type == 'link'">
          <router-link :to="breadcrumb.route" class="text-xl"
            >{{ breadcrumb.label }}
          </router-link>
        </template>
        <div v-if="idx > 0">></div>
        <div class="text-3xl font-extrabold" v-if="breadcrumb.type == 'link'">
          {{ breadcrumb.label }}
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref } from "vue";

const breadcrumbs = ref([
  {
    label: "Movies",
    route: "/",
    type: "link",
  },
  {
    label: "Jatin here",
    route: "/",
    type: "text",
  },
]);
</script>

<style></style>
