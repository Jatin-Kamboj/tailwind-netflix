import { ref } from "vue";
import { defineStore } from "pinia";

export const useAppStore = defineStore(`app`, () => {
  const flashMessage = ref("");

  function showFlashMessage(message) {
    flashMessage.value = message;
  }

  function hideFlashMessage() {
    flashMessage.value = "";
  }

  return {
    flashMessage,
    showFlashMessage,
    hideFlashMessage,
  };
});
