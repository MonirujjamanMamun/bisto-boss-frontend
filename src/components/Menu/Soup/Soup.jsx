import soupImg from '../../../assets/menu/soup-bg.jpg';
import MenuButton from '../../Share/MenuButton/MenuButton';
import MenuItem from '../../Share/MenuItem/MenuItem';
import Parallax from '../../Share/Parallax/Parallax';

const Soup = ({ soup }) => {
  return (
    <div>
      <Parallax img={soupImg} title={'SOUP'} />
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-9 my-7">
          {soup?.slice(0, 6).map((data) => (
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

export default Soup;
