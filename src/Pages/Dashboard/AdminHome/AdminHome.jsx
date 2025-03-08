import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaJediOrder, FaMoneyCheckDollar, FaUsersBetweenLines } from "react-icons/fa6";
import { FaProductHunt } from "react-icons/fa";

const AdminHome = () => {
        const {user} = useAuth()
        const axiosSecure = useAxiosSecure()

        const {data: stats} = useQuery({
                queryKey: ['admin-stats'],
                queryFn: async() => {
                        const res = await axiosSecure.get('/admin-stats')
                        return res.data
                }
        })
        return (
                <div>
                <h2 className="text-orange-600 text-3xl font-semibold">  
                <span className="text-black text-3xl" >
                Hi, Welcome </span> 
                {user?.displayName ? user?.displayName : 'Back'}
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
    <div className="stat-value">{stats.users}</div>
    <div className="stat-desc">↗︎ 400 (22%)</div>
  </div>

  <div className="stat">
    <div className="stat-figure text-secondary">
    <FaProductHunt className="text-5xl text-pink-600"></FaProductHunt>
    </div>
    <div className="stat-title">All Menues</div>
    <div className="stat-value">{stats.menuItems}</div>
    <div className="stat-desc">↘︎ 90 (14%)</div>
  </div>
  <div className="stat">
    <div className="stat-figure text-secondary">
    <FaJediOrder className="text-5xl text-pink-600"></FaJediOrder>
    </div>
    <div className="stat-title">Total Orders</div>
    <div className="stat-value">{stats.orders}</div>
    <div className="stat-desc">↘︎ 90 (14%)</div>
  </div>

</div>
                
                        
                </div>
        );
};

export default AdminHome;