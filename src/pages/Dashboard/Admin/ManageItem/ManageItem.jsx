import { RiDeleteBin6Line } from 'react-icons/ri';
import Title from '../../../../components/Share/Title/Title';
import { FiEdit } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import useMenu from '../../../../hooks/useMenu';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const ManageItem = () => {
  const axiosSecure = useAxiosSecure();
  const [menu, , refetch] = useMenu();
  const handelDelete = async (id) => {
    const res = await axiosSecure.delete(`/menu/${id}`);
    if (res.data.success) {
      refetch();
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: `${res.data.menu.name} is deleted successfully.`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  return (
    <div>
      <Title hading={'MANAGE ALL ITEMS'} subHading={'Hurry Up!'} />
      {/* ***************** */}
      <div className="ml-12">
        <h3 className="text-3xl">Total items: {menu?.length}</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-[90%] shadow-md mx-auto my-6 overflow-hidden">
          <thead className="">
            <tr className="bg-[#D1A054] text-white rounded-l-2xl">
              <th className="py-4 px-6 text-lg text-left border-b">#</th>
              <th className="py-4 px-6 text-lg text-left border-b">
                Item Image
              </th>
              <th className="py-4 px-6 text-lg text-left border-b">
                Item Name
              </th>
              <th className="py-4 px-6 text-lg text-left border-b">Price</th>
              <th className="py-4 px-6 text-lg border-b text-end">Action</th>
              <th className="py-4 px-6 text-lg border-b text-end">Action</th>
            </tr>
          </thead>
          <tbody>
            {menu?.map((item, i) => (
              <tr
                key={item._id}
                className="hover:bg-[#bfac8fad] border-b transition duration-300"
              >
                <td className="py-4 px-6 border-b text-xl font-medium">
                  {i + 1}
                </td>
                <td className="py-4 px-6 border-b text-[16px] font-medium">
                  <img
                    src={item.image}
                    alt="table navigate ui"
                    className="h-16 w-16 object-cover bg-gray-300"
                  />
                </td>
                <td className="py-4 px-4 text-[16px]">{item.name}</td>
                <td className="py-4 px-4 text-[16px]">$ {item.price}</td>
                <td className="py-4 px-6 border-b text-end">
                  <Link to={`/dashboard/manageitemedit/${item._id}`}>
                    <button className="w-[50px] h-[50px] bg-[#D1A054] hover:scale-110 scale-100 transition-all duration-100 text-white py-2 px-3 rounded-md cursor-pointer">
                      <FiEdit className="w-6 h-6" />
                    </button>
                  </Link>
                </td>
                <td className="py-4 px-6 border-b text-end">
                  <button
                    onClick={() => handelDelete(item._id)}
                    className="w-[50px] h-[50px] bg-red-500 hover:scale-110 scale-100 transition-all duration-100 text-white py-2 px-3 rounded-md cursor-pointer"
                  >
                    <RiDeleteBin6Line className="w-6 h-6" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageItem;
