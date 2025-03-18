import { ref, watch } from "vue";
import { $http } from "@/services/api";

/**
 * Common composable to fetch the data from the server based upon the url
 * @author {Jatin Kamboj}
 */
export default function useFetch(url, config) {
  const data = ref(null);
  const isFetching = ref(false);
  const error = ref(null);

  async function fetchData(config, baseUrl) {
    try {
      isFetching.value = true;
      const response = await $http.get(baseUrl || url, { ...config });
      data.value = response.data; // ✅ Only update on success
      return data.value;
    } catch (err) {
      error.value = err?.message;
    } finally {
      isFetching.value = false;
    }
  }

  function refetch(params = {}, baseUrl) {
    return fetchData(params, baseUrl);
  }

  watch(url, () => fetchData(config), { immediate: true });

  return { data, isFetching, error, refetch };
}
