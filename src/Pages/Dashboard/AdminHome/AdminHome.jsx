import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import {
  FaJediOrder,
  FaMoneyCheckDollar,
  FaUsersBetweenLines,
} from "react-icons/fa6";
import { FaProductHunt } from "react-icons/fa";

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: stats } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });


//   order-stats============
const {data: chartData = []} = useQuery({
        queryKey: ['order-stats'],
        queryFn: async () => {
                const res = await axiosSecure.get('/order-stats')
                return res.data;
        }
})

console.log(chartData)

// custom bar charts=========
const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
      };
      
      const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;
      
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
      };


  return (
    <div>
      <h2 className="text-orange-600 text-3xl font-semibold">
        <span className="text-black text-3xl">Hi, Welcome </span>
        {user?.displayName ? user?.displayName : "Back"}
      </h2>

      <div className="stats shadow grid gap-2">
        <div className="stat bg-fuchsia-400">
          <div className="stat-figure text-secondary">
            <FaMoneyCheckDollar className="text-5xl text-pink-700"></FaMoneyCheckDollar>
          </div>
          <div className="stat-title">Total Revenue</div>
          <div className="stat-value">{stats?.revenue}</div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaUsersBetweenLines className="text-5xl text-pink-600"></FaUsersBetweenLines>
          </div>
          <div className="stat-title">Total Users</div>
          <div className="stat-value">{stats?.users}</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaProductHunt className="text-5xl text-pink-600"></FaProductHunt>
          </div>
          <div className="stat-title">All Menues</div>
          <div className="stat-value">{stats?.menuItems}</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaJediOrder className="text-5xl text-pink-600"></FaJediOrder>
          </div>
          <div className="stat-title">Total Orders</div>
          <div className="stat-value">{stats?.orders}</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>

      <div className="flex mt-20">
      {/* bar chart */}
        <div className="w-1/2">
        <BarChart
      width={500}
      height={400}
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
      <Bar dataKey="quantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {chartData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 6]} />
        ))}
      </Bar>
    </BarChart>
        </div>
        {/* pie chart */}
        <div className="w-1/2"></div>

      </div>

    </div>
  );
};

export default AdminHome;
