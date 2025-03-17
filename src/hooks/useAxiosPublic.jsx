import axios from 'axios';

const axiosPublic = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL, // Replace with your API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
