import { useEffect, useState } from 'react';
import Title from '../../Share/Title/Title';
import MenuItem from '../../Share/MenuItem/MenuItem';
import MenuButton from '../../Share/MenuButton/MenuButton';

const OurMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch('menu.json')
      .then((res) => res.json())
      .then((data) => {
        const filterData = data.filter((data) => data.category === 'popular');
        setMenu(filterData);
      });
  }, []);
  return (
    <div className="my-11">
      <Title subHading={'Check it out'} hading={'FROM OUR MENU'} />
      <div className="grid md:grid-cols-2 gap-2 my-5 mt-9">
        {menu?.map((data) => (
          <MenuItem key={data._id} {...data} />
        ))}
      </div>
      <div className="text-center mb-5">
        <MenuButton title="View Full  Menu" />
      </div>
    </div>
  );
};

export default OurMenu;
