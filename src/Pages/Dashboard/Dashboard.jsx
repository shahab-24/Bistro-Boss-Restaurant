import { FaAd, FaCalendar, FaHome, FaList, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex gap-4">

            {/* sidebar content */}
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu p-4 text-white">

                    <li><NavLink to='/dashboard/home'> <FaHome></FaHome>User HOme</NavLink></li>
                    <li><NavLink to='/dashboard/cart'> <FaShoppingCart></FaShoppingCart> My Cart</NavLink></li>
                    <li><NavLink to='/dashboard/reservation'> <FaCalendar></FaCalendar> Reservation</NavLink></li>
                    <li><NavLink to='/dashboard/review'> <FaAd></FaAd> Review</NavLink></li>
                    <li><NavLink to='/dashboard/bookings'> <FaList></FaList> My Bookings</NavLink></li>
                    {/* <li><NavLink to=''>My Cart</NavLink></li> */}
                </ul>
            </div>

            {/* dashboard content */}
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default Dashboard;