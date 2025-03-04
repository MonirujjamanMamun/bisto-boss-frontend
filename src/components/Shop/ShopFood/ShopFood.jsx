import SingleFood from '../SingleFood/SingleFood';

const ShopFood = ({ food }) => {
  return (
    <div className="grid md:grid-cols-3 gap-7 mt-11">
      {food.map((item) => (
        <SingleFood key={item._id} {...item} />
      ))}
    </div>
  );
};

export default ShopFood;
