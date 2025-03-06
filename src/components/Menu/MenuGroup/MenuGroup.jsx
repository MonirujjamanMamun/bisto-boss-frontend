import { Link } from 'react-router-dom';
import MenuItem from '../../Share/MenuItem/MenuItem';
import Parallax from '../../Share/Parallax/Parallax';
import MenuButton from '../../Share/MenuButton/MenuButton';

const MenuGroup = ({ items, img, title }) => {
  return (
    <div>
      {img && <Parallax img={img} title={title} />}
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-9 my-7">
          {items?.slice(0, 6)?.map((data) => (
            <MenuItem key={data._id} {...data} />
          ))}
        </div>
        {title && (
          <div className="text-center my-11">
            <Link to={`/shop/${title}`}>
              <MenuButton title={'ORDER YOUR FAVOURITE FOOD'} />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuGroup;
