import {
  FaAd,
  FaAddressBook,
  FaAddressCard,
  FaCalendar,
  FaHome,
  FaList,
  FaSearch,
  FaShoppingCart,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../../hooks/useCart";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {

    const {cart}= useCart()

    const [isAdmin] = useAdmin()
  return (
    <div className="flex gap-4">
      {/* sidebar content */}
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="menu p-4 text-white">
          

          {
            isAdmin ? <>
            <li>
            <NavLink to="/dashboard/home">
              {" "}
              <FaHome></FaHome>Admin Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/carts">
              {" "}
              <FaUtensils></FaUtensils> Carts
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/manageItems">
              {" "}
              <FaCalendar></FaCalendar> Manage Items
            </NavLink>
          </li>
        
          <li>
            <NavLink to="/dashboard/bookings">
              {" "}
              <FaList></FaList> Manage Bookings
            </NavLink>

             
          </li>
          <li>
            <NavLink to="/dashboard/users">
              {" "}
              <FaUsers></FaUsers> All Users
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/add-items">
              {" "}
              <FaAddressBook></FaAddressBook> Add Items
            </NavLink>
          </li>
          </>
             : 

            <><li>
            <NavLink to="/dashboard/home">
              {" "}
              <FaHome></FaHome>User HOme
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cart">
              {" "}
              <FaShoppingCart></FaShoppingCart> My Cart
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservation">
              {" "}
              <FaCalendar></FaCalendar> Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/review">
              {" "}
              <FaAd></FaAd> Review
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/bookings">
              {" "}
              <FaList></FaList> My Bookings
            </NavLink>
          </li></>
          }


          {/* shared items */}
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              {" "}
              <faHome></faHome> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
              {" "}
              <FaSearch></FaSearch> Menu
            </NavLink>
          </li>
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
