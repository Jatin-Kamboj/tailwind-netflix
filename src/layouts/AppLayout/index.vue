<template>
  <div id="app-layout">
    <app-header />

    <main class="w-full h-screen overflow-scroll bg-dark">
      <RouterView />
    </main>
    <app-footer />
    <FlashMessage ref="flashMessage" />
  </div>
</template>

<script setup>
import { AppFooter, AppHeader } from "@/layouts/AppLayout";
import { FlashMessage } from "@/components/shared";
import { ref, watch } from "vue";
import { useAppStore } from "@/stores/app.store";
import { storeToRefs } from "pinia";

const flashMessage = ref(null);
const appStore = useAppStore();
const { flashMessage: message } = storeToRefs(appStore);

watch(message, () => showError(message.value));

const showError = () => {
  flashMessage.value.showMessage("Something went wrong! Try again.");
};
</script>
