import { IoIosPeople } from 'react-icons/io';
import Title from '../../../../components/Share/Title/Title';
import useUser from '../../../../hooks/useUser';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { MdAdminPanelSettings } from 'react-icons/md';

const AllUser = () => {
  const [users, refetch] = useUser();
  console.log('all user data', users.users);
  let allUser = users.users;
  const handelDelete = (id) => {
    console.log('all user delete handelar', id);
  };
  const handelMakeAdmin = (id) => {
    console.log('all user make admin handelar', id);
  };
  return (
    <div>
      <div className="my-11">
        <Title hading={'MANAGE ALL USERS'} subHading={'How many??'} />
      </div>
      <div className="ml-12">
        <h3 className="text-3xl">Total users: {allUser?.length}</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-[90%] shadow-md mx-auto my-6 overflow-hidden">
          <thead className="">
            <tr className="bg-[#D1A054] text-white rounded-l-2xl">
              <th className="py-4 px-6 text-lg text-left border-b">#</th>
              <th className="py-4 px-6 text-lg text-left border-b">Name</th>
              <th className="py-4 px-6 text-lg text-left border-b">Email</th>
              <th className="py-4 px-6 text-lg text-left border-b">Role</th>
              <th className="py-4 px-6 text-lg border-b text-end">Action</th>
            </tr>
          </thead>
          <tbody>
            {allUser?.map((user, i) => (
              <tr
                key={user._id}
                className="hover:bg-[#bfac8fad] border-b transition duration-300"
              >
                <td className="py-4 px-6 border-b text-xl font-medium">
                  {i + 1}
                </td>
                <td className="py-4 px-6 border-b text-[16px] font-medium">
                  {user.name}
                </td>
                <td className="py-4 px-4 text-[16px]">{user.email}</td>
                <td className="py-4 px-6 border-b text-lg font-medium">
                  {user.role === 'admin' ? (
                    <button
                      disabled
                      className="bg-[#D1A054] px-4 py-2 rounded-md cursor-not-allowed opacity-50"
                    >
                      <MdAdminPanelSettings className="w-6 h-6" />
                    </button>
                  ) : (
                    <button
                      onClick={() => handelMakeAdmin(user._id)}
                      className="w-[50px] h-[50px] bg-[#D1A054] hover:scale-110 scale-100 transition-all duration-100 text-white py-2 px-3 rounded-md"
                    >
                      <IoIosPeople className="w-6 h-6" />
                    </button>
                  )}
                </td>
                <td className="py-4 px-6 border-b text-end">
                  {user.role === 'admin' ? (
                    <button
                      disabled
                      className="bg-red-500 px-4 py-2 rounded-md cursor-not-allowed opacity-50"
                    >
                      <RiDeleteBin6Line className="w-6 h-6" />
                    </button>
                  ) : (
                    <button
                      onClick={() => handelDelete(user._id)}
                      className="w-[50px] h-[50px] bg-red-500 hover:scale-110 scale-100 transition-all duration-100 text-white py-2 px-3 rounded-md"
                    >
                      <RiDeleteBin6Line className="w-6 h-6" />
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUser;
