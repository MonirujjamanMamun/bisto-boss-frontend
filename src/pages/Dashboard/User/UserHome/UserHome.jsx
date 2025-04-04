import { CgProfile } from 'react-icons/cg';
import { FaShoppingCart, FaStar, FaStore, FaWallet } from 'react-icons/fa';
import { FaCalendar } from 'react-icons/fa6';
import { TbPhoneCall } from 'react-icons/tb';
import useAuth from '../../../../hooks/useAuth';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const Home = () => {
  const { user } = useAuth();
  const userName = user ? user?.user?.name || user?.displayName : 'Back';

  const axiosSecure = useAxiosSecure();
  const { data: payments = [] } = useQuery({
    queryKey: ['payments'],
    queryFn: async () => {
      const res = await axiosSecure.get('paymenthistory');
      // console.log('payment res', res.data);
      // console.log('payment history', res.data.paymentList);
      return res.data.paymentList;
    },
  });
  return (
    <div>
      <div className="p-4">
        <h3 className="text-4xl font-semibold uppercase">
          Hi, Welcome {userName}!
        </h3>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 px-4 py-8 rounded-xl">
        <div className="flex justify-center items-center gap-5 p-4 rounded-md bg-linear-to-r from-[#BB34F5] to-[#FCDBFF]">
          <div>
            <FaWallet className="w-12 h-12" />
          </div>
          <div className="">
            <p className="font-bold text-4xl">20</p>
            <p className="text-6">Menu</p>
          </div>
        </div>

        <div className="flex justify-center items-center gap-5 p-4 rounded-md bg-linear-to-r from-[#D3A256] to-[#FDE8C0]">
          <div>
            <FaStore className="w-12 h-12" />
          </div>
          <div className="">
            <p className="font-bold text-4xl">103</p>
            <p className="text-6">Shop</p>
          </div>
        </div>

        <div className="flex justify-center items-center gap-5 p-4 rounded-md bg-linear-to-r from-[#FE4880] to-[#FECDE9]">
          <div>
            <TbPhoneCall className="w-12 h-12" />
          </div>
          <div className="">
            <p className="font-bold text-4xl">03</p>
            <p className="text-6">Contact</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 p-4">
        <div className="flex flex-col items-center justify-center bg-[#FFEDD5]">
          <CgProfile className="w-48 h-48 text-[#D1A054] " />
          <h3 className="text-3xl font-semibold text-[#151515]">{userName}</h3>
        </div>

        <div className="bg-[#FEF9C3] ps-24 py-24">
          <h3 className="text-[#151515] text-4xl">Your Activities</h3>
          <div className="text-[#0088FE] text-2xl font-semibold flex items-center gap-1 mt-8 uppercase">
            <FaShoppingCart />
            <p>Orders: {payments?.length}</p>
          </div>
          <div className="text-[#00C4A1] text-2xl font-semibold flex items-center gap-1 uppercase">
            <FaStar />
            <p>Review: 9</p>
          </div>
          <div className="text-[#FFBB28] text-2xl font-semibold flex items-center gap-1 uppercase">
            <FaCalendar />
            <p>Bookings: 6</p>
          </div>
          <div className="text-[#FF8042] text-2xl font-semibold flex items-center gap-1 uppercase">
            <FaWallet />
            <p>Payment: {payments?.length}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
