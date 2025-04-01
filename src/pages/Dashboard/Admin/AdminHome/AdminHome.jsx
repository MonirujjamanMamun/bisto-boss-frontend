import { FaWallet } from 'react-icons/fa';
import { FaUsers } from 'react-icons/fa6';
import { SiCodechef } from 'react-icons/si';
import { TbTruckDelivery } from 'react-icons/tb';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  PieChart,
  Pie,
  Legend,
} from 'recharts';
import useAuth from '../../../../hooks/useAuth';

const AdminHome = () => {
  const { user } = useAuth();

  const axiosSecure = useAxiosSecure();
  const { data: adminData = [] } = useQuery({
    queryKey: ['admin-stats'],
    queryFn: async () => {
      const res = await axiosSecure.get('/admin-stats');
      // console.log('admin stats', res.data);
      return res.data;
    },
  });

  const { data: chartData = [] } = useQuery({
    queryKey: ['chartData'],
    queryFn: async () => {
      const res = await axiosSecure.get('/order-stats');
      // console.log('chartDAta', res.data.result);
      return res.data.result;
    },
  });

  // CustomShapeBarChart

  const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
  Z`;
  };
  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  // paiChart data
  const paiChartData = chartData?.map((data) => {
    return { name: data.category, value: data.revenue };
  });

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  const userName = user ? user?.user?.displayName || user?.displayName : 'Back';

  return (
    <div>
      <div className="p-4">
        <h3 className="text-4xl font-semibold uppercase">
          Hi, Welcome {userName} !
        </h3>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 px-4 py-8 rounded-xl">
        <div className="flex justify-center items-center gap-5 p-4 rounded-md bg-linear-to-r from-[#BB34F5] to-[#FCDBFF]">
          <div>
            <FaWallet className="w-12 h-12" />
          </div>
          <div className="">
            <p className="font-bold text-4xl">{adminData?.revenue}</p>
            <p className="text-6">Revenue</p>
          </div>
        </div>

        <div className="flex justify-center items-center gap-5 p-4 rounded-md bg-linear-to-r from-[#D3A256] to-[#FDE8C0]">
          <div>
            <FaUsers className="w-12 h-12" />
          </div>
          <div className="">
            <p className="font-bold text-4xl">{adminData?.users}</p>
            <p className="text-6">Customers</p>
          </div>
        </div>

        <div className="flex justify-center items-center gap-5 p-4 rounded-md bg-linear-to-r from-[#FE4880] to-[#FECDE9]">
          <div>
            <SiCodechef className="w-12 h-12" />
          </div>
          <div className="">
            <p className="font-bold text-4xl">{adminData?.menuItems}</p>
            <p className="text-6">Products</p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-5 p-4 rounded-md bg-linear-to-r from-[#6AAEFF] to-[#B6F7FF]">
          <div>
            <TbTruckDelivery className="w-12 h-12" />
          </div>
          <div className="">
            <p className="font-bold text-4xl">{adminData?.payments}</p>
            <p className="text-6">Orders</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 my-9">
        {/* CustomShapeBarChart */}
        <div>
          <BarChart
            width={500}
            height={300}
            data={chartData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Bar
              dataKey="quantity"
              fill="#8884d8"
              shape={<TriangleBar />}
              label={{ position: 'top' }}
            >
              {chartData?.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
              ))}
            </Bar>
          </BarChart>
        </div>

        {/* paiChart  */}

        <div>
          <PieChart width={400} height={400}>
            <Legend
              layout="horizontal"
              verticalAlign="top"
              align="center"
              iconType="diamond"
            />
            <Pie
              data={paiChartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {paiChartData?.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colors[index % colors.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
