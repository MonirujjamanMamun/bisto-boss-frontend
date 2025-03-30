import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import Spiner from '../../../../components/Share/Spiner/Spiner';

const PaymentHistory = () => {
  const axiosSecure = useAxiosSecure();
  const { data: payments = [], isLoading } = useQuery({
    queryKey: ['payments'],
    queryFn: async () => {
      const res = await axiosSecure.get('paymenthistory');
      console.log('payment res', res.data);
      console.log('payment history', res.data.paymentList);
      return res.data.paymentList;
    },
  });
  if (isLoading) {
    return <Spiner />;
  }
  return (
    <div>
      <div className="ml-12">
        <h3 className="text-3xl">Total payments: {payments?.length}</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-[90%] shadow-md mx-auto my-6 overflow-hidden">
          <thead className="">
            <tr className="bg-[#D1A054] text-white rounded-l-2xl">
              <th className="py-4 px-6 text-lg text-left border-b">#</th>
              <th className="py-4 px-6 text-lg text-left border-b">Email</th>
              <th className="py-4 px-6 text-lg text-left border-b">
                Transaction Id
              </th>
              <th className="py-4 px-6 text-lg text-left border-b">
                Total Price
              </th>
              <th className="py-4 px-6 text-lg border-b text-end">Status</th>
            </tr>
          </thead>
          <tbody>
            {payments?.map((payment, i) => (
              <tr
                key={payment._id}
                className="hover:bg-[#bfac8fad] border-b transition duration-300"
              >
                <td className="py-4 px-6 border-b text-xl font-medium">
                  {i + 1}
                </td>
                <td className="py-4 px-6 border-b text-[16px] font-medium">
                  {payment?.email}
                </td>
                <td className="py-4 px-4 text-[16px]">
                  {payment?.transactionId}
                </td>
                <td className="py-4 px-4 text-[16px]">
                  $ {payment?.totalPrice}
                </td>
                <td className="py-4 px-6 border-b text-lg font-medium">
                  {payment?.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
