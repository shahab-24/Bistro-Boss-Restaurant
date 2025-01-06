import {
	createBrowserRouter,
	
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Our Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Cart from "../Pages/Dashboard/Cart";
import AllUsers from "../Pages/Dashboard/AllUsers";



  export const router = createBrowserRouter([
	{
	  path: "/",
	  element: <Main></Main>,
	  children: [
		{
			path: '/',
			element: <Home></Home>
		},
		{
			path: "/menu",
			element: <Menu></Menu>
		},
		{
			path:'order/:category',
			element: 
				<Order></Order>
			
		},
		{path:'login',
		element: <Login></Login>},
		{
			path: 'signup',
			element: <SignUp></SignUp>
		}
	  ]
	},{
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard>,</PrivateRoute>,
        children: [
            {
                path: 'cart',
                element: <Cart></Cart>
            },

            // Admin routes========
            {
                path:'users',
                element: <AllUsers></AllUsers>
            }
        ]
    }
  ]);