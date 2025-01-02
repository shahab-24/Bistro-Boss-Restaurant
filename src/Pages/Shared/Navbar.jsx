import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
// import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  // const {user,logOut} = useAuth()
  const {user,logOut} = useContext(AuthContext)
  const navOptions = (
    <>
      <li>
        <NavLink>Home</NavLink>
      </li>

      <li>
        <NavLink to="/menu">Our Menu</NavLink>
      </li>
      <li>
        <NavLink to="/order/salad">Order</NavLink>
      </li>
    
      <li>
        <NavLink to="/signup">Sign Up</NavLink>
      </li>

      
    </>

  
  );

  const handleLogOut=()=> {
    logOut()
    .then(()=>{})
    .catch((error) => console.log(error.message))
  }
  return (
    <div>
      <div className="max-w-screen-xl mx-auto navbar fixed z-10 bg-opacity-40 bg-base-200">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Bistro Boss</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions} </ul>
        </div>
        <div className="navbar-end flex gap-4">
        <button className="btn btn-outline">
        <FaShoppingCart />
  <div className="badge badge-secondary">+0</div>
</button>
        {user ? <>  <div className="flex gap-4">
          <span>{user.displayName} </span><li>
        <button onClick={handleLogOut}>Log Out</button>
      </li>
      </div></>: <>  <li>
        <NavLink to="/login">Login</NavLink>
      </li></>}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
