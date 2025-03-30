import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';
// import { QueryClient } from '@tanstack/react-query';

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL, // Replace with your API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

const useAxiosSecure = () => {
  // const navigate = useNavigate();
  const logout = useAuth();
  // Request Interceptor
  axiosInstance.interceptors.request.use(
    (config) => {
      // Get token from localStorage (or any storage mechanism)
      const token = localStorage.getItem('access-token');

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // Response Interceptor
  axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
      if (error.response) {
        if (error.response.status === 401) {
          // Handle unauthorized access (e.g., redirect to login)
          console.error('Unauthorized! Redirecting to login...');
          localStorage.removeItem('access-token');
          await logout();
          // navigate('/auth/login');
          // window.location.pathname = '/auth/login';
          // QueryClient.clear();
        }
      }
      return Promise.reject(error);
    }
  );
  return axiosInstance;
};

export default useAxiosSecure;
