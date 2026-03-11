export const makeBaseUrl = () => {
  if (import.meta.env.DEV) {
    return import.meta.env.VITE_BASE_URL_DEV;
  }
  return `${window.location.protocol}//${window.location.hostname}`;
};