import { Link } from 'react-router-dom';
import TableRow from '../../../../components/Dashboard/User/TableRow/TableRow';
import Title from '../../../../components/Share/Title/Title';
import useCart from '../../../../hooks/useCart';
import { RxCrossCircled } from 'react-icons/rx';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { QueryClient } from '@tanstack/react-query';

const MyCart = () => {
  const axiosSecure = useAxiosSecure();
  const [cart] = useCart();
  const cartData = cart?.cart?.items;
  // console.log('my cart', cartData);
  const totalPrice = cartData
    ?.reduce((sum, item) => sum + item.menuItemId.price + item.quantity, 0)
    .toFixed(2);
  const handelResetCart = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, reset it!',
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/resetcart`).then((res) => {
          if (res.data.success) {
            QueryClient.invalidateQueries(['cart']);
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Cart reset successfully',
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
      }
    });
  };
  return (
    <div>
      <div className="mb-16">
        <Title hading={'WANNA ADD MORE?'} subHading={'My Cart'} />
      </div>
      <div>
        <div className="flex justify-evenly">
          <h3 className="text-3xl font-bold">
            Total orders: {cartData?.length}
          </h3>
          <h3 className="text-3xl font-bold">total price: ${totalPrice}</h3>
          {cartData?.length ? (
            <Link to="/dashboard/payment">
              <button className="bg-[#D1A054] py-3.5 px-4 rounded-xl cursor-pointer">
                Pay
              </button>
            </Link>
          ) : (
            <button disabled className="bg-gray-400 py-3.5 px-4 rounded-xl">
              Pay
            </button>
          )}
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-[90%] shadow-md mx-auto my-6 overflow-hidden">
          <thead className="">
            <tr className="bg-[#D1A054] text-white rounded-l-2xl">
              <th className="py-4 px-6 text-lg text-left border-b">#</th>
              <th className="py-4 px-6 text-lg text-left border-b">
                Items Image
              </th>
              <th className="py-4 px-6 text-lg text-left border-b">
                Items Name
              </th>
              <th className="py-4 px-6 text-lg text-left border-b">Price</th>
              <th className="py-4 px-6 text-lg border-b text-end">Action</th>
            </tr>
          </thead>
          <tbody>
            {cartData?.map((item, i) => (
              <TableRow key={item._id} i={i} item={item} />
            ))}
          </tbody>
          <div className="">
            {cartData?.length && (
              <button
                onClick={handelResetCart}
                className="mb-11 mt-5 w-[150px] h-[50px] bg-red-500 scale-100 transition-all text-white py-2 px-3 rounded-md cursor-pointer flex justify-center items-center gap-2"
              >
                Reset Cart
                <RxCrossCircled className="w-6 h-6" />
              </button>
            )}
          </div>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
