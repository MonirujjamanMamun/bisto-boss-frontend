const MenuItem = ({ image, name, recipe, price }) => {
  return (
    <div className="flex justify-between gap-5">
      <div className="m-3">
        <img
          style={{ borderRadius: '0 200px 200px 200px' }}
          width={120}
          height={105}
          src={image}
          alt=""
        />
      </div>
      <div>
        <h3 className="text-xl">{name} ------------------</h3>
        <p>{recipe}</p>
      </div>
      <div>
        <p className="text-[#BB8506]">${price}</p>
      </div>
    </div>
  );
};

export default MenuItem;
