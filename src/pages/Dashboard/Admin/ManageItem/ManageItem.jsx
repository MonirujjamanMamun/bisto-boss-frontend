import { RiDeleteBin6Line } from 'react-icons/ri';
import Title from '../../../../components/Share/Title/Title';
import { FiEdit } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const ManageItem = () => {
  const handelDelete = (id) => {
    console.log('delete form manage item', id);
  };
  return (
    <div>
      <Title hading={'MANAGE ALL ITEMS'} subHading={'Hurry Up!'} />
      {/* ***************** */}
      <div className="ml-12">
        <h3 className="text-3xl">Total items: 6</h3>
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
            {/* {allUser?.map((user, i) => ( */}
            <tr className="hover:bg-[#bfac8fad] border-b transition duration-300">
              <td className="py-4 px-6 border-b text-xl font-medium">{1}</td>
              <td className="py-4 px-6 border-b text-[16px] font-medium">
                <img
                  src={'#'}
                  alt="table navigate ui"
                  className="h-16 w-16 object-cover bg-gray-300"
                />
              </td>
              <td className="py-4 px-4 text-[16px]">dsas</td>
              <td className="py-4 px-4 text-[16px]">$ dsas</td>
              <td className="py-4 px-6 border-b text-end">
                <Link to={'/dashboard/manageitem/manageitemedit'}>
                  <button
                    // onClick={() => handelEdit()}
                    className="w-[50px] h-[50px] bg-[#D1A054] hover:scale-110 scale-100 transition-all duration-100 text-white py-2 px-3 rounded-md cursor-pointer"
                  >
                    <FiEdit className="w-6 h-6" />
                  </button>
                </Link>
              </td>
              <td className="py-4 px-6 border-b text-end">
                <button
                  onClick={() => handelDelete()}
                  className="w-[50px] h-[50px] bg-red-500 hover:scale-110 scale-100 transition-all duration-100 text-white py-2 px-3 rounded-md"
                >
                  <RiDeleteBin6Line className="w-6 h-6" />
                </button>
              </td>
            </tr>
            {/* ))} */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageItem;
