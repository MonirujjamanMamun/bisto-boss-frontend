import MenuItem from '../../Share/MenuItem/MenuItem';
import Title from '../../Share/Title/Title';

const TodayOffer = ({ category }) => {
  return (
    <div className="container mx-auto my-11">
      <Title hading="TODAY'S OFFER" subHading={"Don't miss"} />
      <div className="grid md:grid-cols-2 gap-9 my-7">
        {category?.map((data) => (
          <MenuItem key={data._id} {...data} />
        ))}
      </div>
    </div>
  );
};

export default TodayOffer;
