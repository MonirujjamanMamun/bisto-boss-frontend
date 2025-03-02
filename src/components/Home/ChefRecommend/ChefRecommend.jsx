import Title from '../../Share/Title/Title';
import salad from '../../../assets/home/slide1.jpg';

const ChefRecommend = () => {
  return (
    <div className="my-11">
      <div>
        <Title subHading={'Should Try'} hading={'CHEF RECOMMENDS'} />
      </div>
      <div className="grid md:grid-cols-3 gap-2">
        {/* card one */}
        <div className="card bg-base-100 w-96 shadow-2xl">
          <figure className="px-10 pt-10">
            <img src={salad} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions">
              <button className="btn uppercase text-[#BB8506] border-0 border-b-4 border-[#BB8506] rounded-xl">
                add to cart
              </button>
            </div>
          </div>
        </div>
        {/* card two  */}
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure className="px-10 pt-10">
            <img src={salad} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions">
              <button className="btn uppercase text-[#BB8506] rounded-xl">
                add to cart
              </button>
            </div>
          </div>
        </div>
        {/* card three */}
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure className="px-10 pt-10">
            <img src={salad} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions">
              <button className="btn uppercase text-[#BB8506] border-0 border-b-4 border-[#BB8506] rounded-xl">
                add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefRecommend;
