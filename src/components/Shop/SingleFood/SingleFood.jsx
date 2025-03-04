const SingleFood = ({ name, recipe, image, category, price }) => {
  //   const { name, recipe, image, category, price } = items;
  return (
    <div className="card bg-base-100 w-96 shadow-2xl">
      <figure className="p-1">
        <img src={image} alt="Shoes" className="rounded-xl" />
      </figure>
      <p className="absolute top-3 right-5 bg-black text-white py-1 px-3 rounded-sm">
        {price}
      </p>
      <small className="text-left ps-3">{category}</small>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button className="btn uppercase text-[#BB8506] border-0 border-b-4 border-[#BB8506] rounded-xl">
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleFood;
