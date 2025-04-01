import Title from '../../Share/Title/Title';
import MenuItem from '../../Share/MenuItem/MenuItem';
import MenuButton from '../../Share/MenuButton/MenuButton';
import useMenu from '../../../hooks/useMenu';
import { Link } from 'react-router-dom';

const OurMenu = () => {
  // const [menu, setMenu] = useState([]);
  // useEffect(() => {
  //   fetch(`${import.meta.env.VITE_BASE_URL}/menu`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       const filterData = data.filter((data) => data.category === 'popular');
  //       setMenu(filterData);
  //     });
  // }, []);
  const [menu] = useMenu();
  const filterData = menu.filter((data) => data.category === 'popular');
  return (
    <div className="my-11">
      <Title subHading={'Check it out'} hading={'FROM OUR MENU'} />
      <div className="grid md:grid-cols-2 gap-2 my-5 mt-9">
        {filterData?.map((data) => (
          <MenuItem key={data._id} {...data} />
        ))}
      </div>
      <div className="text-center mb-5">
        <Link to={'/shop/salad'}>
          <MenuButton title="View Full  Menu" />
        </Link>
      </div>
    </div>
  );
};

export default OurMenu;
