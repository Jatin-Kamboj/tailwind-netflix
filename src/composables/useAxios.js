import { ref } from "vue";
import { $http } from "@/services/api";

/**
 * Used to communicate with the server
 */
export default function useAxios() {
  const data = ref(null);
  const loading = ref(false);
  const error = ref(null);

  const request = async (method, url, payload = null, options = {}) => {
    loading.value = true;
    error.value = null;

    try {
      const response = await $http({
        method,
        url,
        data: payload,
        ...options,
      });
      data.value = response.data;
      return response.data;
    } catch (err) {
      error.value = err.response?.data || "An error occurred";
      return null;
    } finally {
      loading.value = false;
    }
  };

  const get = (url, options = {}) => request("GET", url, null, options);

  const post = (url, payload, options = {}) =>
    request("POST", url, payload, options);

  const put = (url, payload, options = {}) =>
    request("PUT", url, payload, options);

  const del = (url, options = {}) => request("DELETE", url, null, options);

  return { data, loading, error, get, post, put, del };
}
