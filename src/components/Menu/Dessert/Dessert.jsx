import MenuButton from '../../Share/MenuButton/MenuButton';
import MenuItem from '../../Share/MenuItem/MenuItem';
import Parallax from '../../Share/Parallax/Parallax';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';

const Dessert = ({ dessert }) => {
  return (
    <div>
      <Parallax img={dessertImg} title={'DESSERT'} />
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-9 my-7">
          {dessert?.slice(0, 6).map((data) => (
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

export default Dessert;
