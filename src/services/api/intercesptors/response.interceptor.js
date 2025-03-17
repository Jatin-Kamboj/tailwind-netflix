export const responseErrorInterceptor = (error) => {
  return Promise.reject(error);
};
