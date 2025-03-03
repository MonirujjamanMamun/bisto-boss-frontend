import Parallax from '../../Share/Parallax/Parallax';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import MenuItem from '../../Share/MenuItem/MenuItem';
import MenuButton from '../../Share/MenuButton/MenuButton';

const Pizza = ({ pizza }) => {
  return (
    <div>
      <Parallax img={pizzaImg} title={'PIZZA'} />
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-9 my-7">
          {pizza?.slice(0, 6).map((data) => (
            <MenuItem key={data._id} {...data} />
          ))}
        </div>
        <div className="text-center my-11">
          <MenuButton title={'ORDER YOUR FAVOURITE FOOD'} />
        </div>
      </div>
    </div>
  );
};

export default Pizza;
