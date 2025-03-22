import { FaRegCheckCircle } from 'react-icons/fa';
import Title from '../../../../components/Share/Title/Title';

const ManageBooking = () => {
  return (
    <div>
      <Title hading={'ALL BOOKINGS'} subHading={'At a Glance!'} />
      {/* ***************** */}
      <div className="ml-12">
        <h3 className="text-3xl">Total items: 6</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-[90%] shadow-md mx-auto my-6 overflow-hidden">
          <thead className="">
            <tr className="bg-[#D1A054] text-white rounded-l-2xl">
              <th className="py-4 px-6 text-lg text-left border-b uppercase">
                User Email
              </th>
              <th className="py-4 px-6 text-lg text-left border-b uppercase">
                Phone Number
              </th>
              <th className="py-4 px-6 text-lg text-left border-b uppercase">
                Booking Date
              </th>
              <th className="py-4 px-6 text-lg text-left border-b uppercase">
                Booking Time
              </th>
              <th className="py-4 px-6 text-lg border-b text-end">Activity</th>
              <th className="py-4 px-6 text-lg border-b text-end">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* {allUser?.map((user, i) => ( */}
            <tr className="hover:bg-[#bfac8fad] border-b transition duration-300">
              <td className="py-4 px-6 border-b text-sm font-medium text-end">
                a@gmail.com
              </td>
              <td className="py-4 px-6 border-b text-sm font-medium text-end">
                01765478547
              </td>
              <td className="py-4 px-4 text-sm text-end">0+/11/06</td>
              <td className="py-4 px-4 text-sm text-end">00:00</td>
              <td className="py-4 px-6 border-b text-end">Pending</td>
              <td className="py-4 px-6 border-b text-end">
                <FaRegCheckCircle className="w-[50px] h-[50px] rounded-full bg-[#80E2B7]" />
              </td>
            </tr>
            <tr className="hover:bg-[#bfac8fad] border-b transition duration-300">
              <td className="py-4 px-6 border-b text-sm font-medium text-end">
                a@gmail.com
              </td>
              <td className="py-4 px-6 border-b text-sm font-medium text-end">
                01765478547
              </td>
              <td className="py-4 px-4 text-sm text-end">0+/11/06</td>
              <td className="py-4 px-4 text-sm text-end">00:00</td>
              <td className="py-4 px-6 border-b text-end">Done</td>
              <td className="py-4 px-6 border-b text-end">
                <FaRegCheckCircle className="w-[50px] h-[50px] rounded-full bg-[#287855]" />
              </td>
            </tr>
            {/* ))} */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageBooking;
