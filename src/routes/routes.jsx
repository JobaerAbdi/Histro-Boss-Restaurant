import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../layouts/MainLayout";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../layouts/DashboardLayout";
import MyCart from "../pages/Dashboard/MyCart";
import AllUser from "../pages/Dashboard/AllUser";
import AdminRoute from "./AdminRoute";
import AdminHome from "../pages/Dashboard/AdminHome";

const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout></MainLayout>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: 'menu',
          element: <PrivateRoute><Menu/></PrivateRoute>
        },
        {
          path: 'order/:category',
          element: <PrivateRoute><Order/></PrivateRoute>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'signup',
          element: <SignUp></SignUp>
        },
      ]
    },



    {
      path: 'dashboard',
      element: <PrivateRoute><DashboardLayout/></PrivateRoute>,
      children: [
        {
          path: 'adminUser',
          element: <AdminHome></AdminHome>,
        },
        {
          path: 'myCart',
          element: <MyCart/>,
        },
        {
          path: 'allUsers',
          element: <AdminRoute><AllUser></AllUser></AdminRoute> 
          // element: <AllUser></AllUser> 
        },
      ]
    },
  ]);

  export default router;