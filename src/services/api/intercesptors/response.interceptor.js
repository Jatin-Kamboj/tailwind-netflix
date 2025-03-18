import { useAppStore } from "@/stores/app.store";

/**
 * Intercepts all the errors
 */
export const responseErrorInterceptor = (error) => {
  const appStore = useAppStore();

  if (error.message) {
    appStore.showFlashMessage(error.message);
  }
  return Promise.reject(error);
};

export const responseInterceptor = (config) => {
  return config;
};
