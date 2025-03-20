import TableRow from '../../../../components/Dashboard/User/TableRow/TableRow';
import Title from '../../../../components/Share/Title/Title';
import useCart from '../../../../hooks/useCart';

const MyCart = () => {
  const [cart] = useCart();
  const cartData = cart.cartItems;
  console.log('my cart', cartData);
  const totalPrice = cartData?.reduce(
    (sum, item) => sum + item.menuItemId.price + item.quantity,
    0
  );
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
          <button className="bg-[#D1A054] py-3.5 px-4 rounded-xl">Pay</button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-[90%] shadow-md mx-auto my-6">
          <thead>
            <tr className="bg-[#D1A054] rounded-tl-full text-white">
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
        </table>
      </div>
    </div>
  );
};

export default MyCart;
