import { useEffect, useState } from 'react';

const useMenu = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch('https://bisto-boss-backend.vercel.app/api/menu')
      .then((res) => res.json())
      .then((data) => {
        setMenu(data.menus);
        setLoading(false);
      });
  }, []);
  return [menu, loading];
};

export default useMenu;
