import { Helmet } from 'react-helmet-async';
import manuImg from '../../assets/menu/banner3.jpg';
import dessertImg from '../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../assets/menu/pizza-bg.jpg';
import saladImg from '../../assets/menu/salad-bg.jpg';
import soupImg from '../../assets/menu/soup-bg.jpg';

import Parallax from '../../components/Share/Parallax/Parallax';
import useMenu from '../../hooks/useMenu';
import MenuGroup from '../../components/Menu/MenuGroup/MenuGroup';
import Title from '../../components/Share/Title/Title';

const Menu = () => {
  const [menu] = useMenu();
  const todayOffer = menu.filter((data) => data.category === 'offered');
  const pizza = menu.filter((data) => data.category === 'pizza');
  const dessert = menu.filter((data) => data.category === 'dessert');
  const salad = menu.filter((data) => data.category === 'salad');
  const soup = menu.filter((data) => data.category === 'soup');

  return (
    <div>
      <Helmet>
        <title>Bisto Boss | Menu</title>
      </Helmet>
      <div className="">
        <Parallax img={manuImg} title="OUR MENU" />
      </div>
      <div>
        <Title hading="TODAY'S OFFER" subHading={"Don't miss"} />
      </div>

      <MenuGroup items={todayOffer} />
      <MenuGroup items={dessert} title={'dessert'} img={dessertImg} />
      <MenuGroup items={pizza} title={'pizza'} img={pizzaImg} />
      <MenuGroup items={salad} title={'salad'} img={saladImg} />
      <MenuGroup items={soup} title={'soup'} img={soupImg} />
    </div>
  );
};

export default Menu;
