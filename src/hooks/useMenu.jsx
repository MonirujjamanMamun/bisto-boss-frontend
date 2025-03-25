import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';

const useMenu = () => {
  const axiosPublic = useAxiosPublic();

  const {
    refetch,
    data: menu = [],
    isLoading,
  } = useQuery({
    queryKey: ['menu'],
    queryFn: async () => {
      const res = await axiosPublic.get(`/menu`);
      return res.data.menus;
    },
  });
  return [menu, isLoading, refetch];
};

export default useMenu;
