import axios from 'axios';

export const ApiInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

ApiInstance.interceptors.request.use((config) => {
  const userStorage = localStorage.getItem('user-storage');
  if (userStorage) {
    const { state } = JSON.parse(userStorage);
    const token = state.accessToken;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});
