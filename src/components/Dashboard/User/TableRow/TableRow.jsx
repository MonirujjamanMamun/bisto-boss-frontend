import { RiDeleteBin6Line } from 'react-icons/ri';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import useCart from '../../../../hooks/useCart';

const TableRow = ({ i, item }) => {
  const [, refetch] = useCart();
  const axiosSecure = useAxiosSecure();
  const { _id, name, image, price } = item.menuItemId;
  // console.log('table row', item.menuItemId);
  const handelDelete = (id) => {
    console.log('id from delete handelar', id);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/deletecart/${id}`).then((res) => {
          if (res.data.success) {
            refetch();
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Your Item has been deleted.',
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
      }
    });
  };
  return (
    <tr className="hover:bg-[#bfac8fad] border-b transition duration-300">
      <td className="py-4 px-6 border-b text-xl font-medium">{i + 1}</td>
      <td className="py-4 px-4 flex justify-start">
        <img
          src={image}
          alt="table navigate ui"
          className="h-16 w-16 object-cover bg-gray-300"
        />
      </td>
      <td className="py-4 px-6 border-b text-xl font-medium">{name}</td>
      <td className="py-4 px-6 border-b text-lg font-medium">${price}</td>
      <td className="py-4 px-6 border-b text-end">
        <button
          onClick={() => handelDelete(_id)}
          className="w-[50px] h-[50px] bg-red-500 hover:scale-110 scale-100 transition-all duration-100 text-white py-2 px-3 rounded-md cursor-pointer"
        >
          <RiDeleteBin6Line className="w-6 h-6" />
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
