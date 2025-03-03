import { Helmet } from 'react-helmet-async';
import manuImg from '../../assets/menu/banner3.jpg';
import Parallax from '../../components/Share/Parallax/Parallax';
import TodayOffer from '../../components/Menu/TodayOffer/TodayOffer';
import useMenu from '../../hooks/useMenu';
import Pizza from '../../components/Menu/Pizza/Pizza';
import Dessert from '../../components/Menu/Dessert/Dessert';
import Salads from '../../components/Menu/Salads/Salads';
import Soup from '../../components/Menu/Soup/Soup';

const Menu = () => {
  const [menu] = useMenu();
  const todayOffer = menu.filter((data) => data.category === 'offered');
  const pizza = menu.filter((data) => data.category === 'pizza');
  const dessert = menu.filter((data) => data.category === 'dessert');
  const salad = menu.filter((data) => data.category === 'salad');
  const soup = menu.filter((data) => data.category === 'soup');
  console.log(salad);
  return (
    <div>
      <Helmet>
        <title>Bisto Boss | Menu</title>
      </Helmet>
      <div className="">
        <Parallax img={manuImg} title="OUR MENU" />
      </div>
      <TodayOffer category={todayOffer} />
      <Dessert dessert={dessert} />
      <Pizza pizza={pizza} />
      <Salads salads={salad} />
      <Soup soup={soup} />
    </div>
  );
};

export default Menu;
