import Title from '../../Share/Title/Title';
import useMenu from '../../../hooks/useMenu';
import SingleFood from '../../Shop/SingleFood/SingleFood';

const ChefRecommend = () => {
  const [menu] = useMenu();
  const popular = menu.filter((data) => data.category === 'popular');

  return (
    <div className="my-11">
      <div>
        <Title subHading={'Should Try'} hading={'CHEF RECOMMENDS'} />
      </div>
      <div className="grid md:grid-cols-3 gap-2">
        {popular?.slice(0, 3).map((item) => (
          <SingleFood key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ChefRecommend;
