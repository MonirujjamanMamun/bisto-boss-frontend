import Swal from 'sweetalert2';
import { useAuth } from '../../../context/AuthContext/AuthContext';
import { useLocation, useNavigate } from 'react-router-dom';

const SingleFood = ({ item }) => {
  const { name, recipe, image, category, price } = item;
  const location = useLocation();
  const { user } = useAuth();
  const navigate = useNavigate();
  const handelAddToCart = (item) => {
    if (user && user.email) {
      // TODO:do something later
    } else {
      Swal.fire({
        title: 'You are not login',
        text: 'Please, log in to add to cart!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Log In!',
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/auth/login', { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="card bg-base-100 w-96 shadow-2xl">
      <figure className="p-1">
        <img src={image} alt="Shoes" className="rounded-xl" />
      </figure>
      <p className="absolute top-3 right-5 bg-black text-white py-1 px-3 rounded-sm">
        ${price}
      </p>
      <small className="text-left ps-3">{category}</small>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button
            onClick={() => handelAddToCart(item)}
            className="btn uppercase text-[#BB8506] border-0 border-b-4 border-[#BB8506] rounded-xl"
          >
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleFood;
