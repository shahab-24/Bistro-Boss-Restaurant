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
import AddItems from "../Components/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../Pages/Dashboard/ManageItems";
import UpdateMenu from "../Pages/Dashboard/UpdateMenu";
import Payment from "../Pages/Dashboard/Payment/Payment";



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
			element:  <Order></Order>
			
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
            {
                path: 'payment',
                element: <Payment></Payment>
            },

            // Admin routes========
            {
                path:'users',
                element: <AllUsers></AllUsers>
            },
            {
                path:'add-items',
                element: <AdminRoute><AddItems></AddItems></AdminRoute>
            },
            {
                path:'manageItems',
                element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
            }
            ,
            {
                path:'updateItems/:id',
                element: <AdminRoute><UpdateMenu></UpdateMenu></AdminRoute>,
                loader: ({params}) => fetch(`http://localhost:3000/menu/${params.id}`)
            }
        ]
    }
  ]);