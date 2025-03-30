import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useCart = () => {
  const axiosSecure = useAxiosSecure();
  const token = localStorage.getItem('access-token');

  const { refetch, data: cart = [] } = useQuery({
    queryKey: ['cart', 'token'],
    queryFn: async () => {
      if (!token) return [];
      const res = await axiosSecure.get('/cart');
      return res.data;
    },
  });
  return [cart, refetch];
};

export default useCart;
