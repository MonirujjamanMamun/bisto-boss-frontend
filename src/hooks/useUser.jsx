import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useUser = () => {
  const axiosSecure = useAxiosSecure();
  const { refetch, data: users = [] } = useQuery({
    queryKey: ['allUser'],
    queryFn: async () => {
      const res = await axiosSecure.get('/alluser');
      return res.data;
    },
  });
  return [users, refetch];
};

export default useUser;
