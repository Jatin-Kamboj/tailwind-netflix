import { ref, watch } from "vue";
import { $http } from "@/services/api";

/**
 * Fetches record from server
 */
export default function useFetch(url, config) {
  const data = ref(null);
  const isFetching = ref(false);
  const error = ref(null);

  function refetch(params) {
    fetch(params);
  }

  const fetch = async (config) => {
    try {
      isFetching.value = true;
      const reponse = await $http.get(url, { ...config });
      data.value = reponse.data;
      console.log("data.value :>> ", data.value);
    } catch (error) {
      error.value = error?.message;
    } finally {
      isFetching.value = false;
    }
  };

  watch(url, () => fetch(config), { immediate: true });

  return { data, isFetching, error, refetch };
}
