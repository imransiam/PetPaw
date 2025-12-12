import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import Home from "../Pages/Home";
import Games from "../Pages/Games";
import About from "../Pages/About";
import GameDetails from "../Pages/GameDetails";
import PrivateRoute from "../Provider/PrivateRoute";
import UserDetails from "../Pages/UserDetails";
import UpdataUserDetails from "../Pages/UpdataUserDetails";
import Page404 from "../Pages/Page404";
import AddListing from "../Pages/AddListing";
import MyListings from "../Pages/MyListings";
import MyOrders from "../Pages/MyOrders";
import axios from "axios";
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => axios.get('http://localhost:5000/services').then(res=> res.data ).catch(err=> console.error(err)),
      },
      {
        path: '/games',
        element: <Games></Games>,
         loader: () => axios.get('http://localhost:5000/services').then(res=> res.data ).catch(err=> console.error(err)),
      },
      {
        path: '/about',
        element: <About></About>,
      },
      {
        path: '/AddListing',
        element: <AddListing></AddListing>,
      },
      {
        path: '/MyListings',
        element: <MyListings></MyListings>,
      },
      {
        path: '/Orders',
        element: <MyOrders></MyOrders>,
      },
    ]

  },
  {
    path: 'auth',
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: '/auth/login',
        element: <Login></Login>,
      },
      {
        path: '/auth/register',
        element: <Registration></Registration>
      }
    ]
  },
  {
    path: 'gameDetails/:id',
    element: <PrivateRoute>
      <GameDetails></GameDetails>
    </PrivateRoute>,
    loader: () => axios.get('http://localhost:5000/services').then(res=> res.data ).catch(err=> console.error(err)),
  },
  {
    path: '/user',
    element: <UserDetails></UserDetails>,
    
  },
  {
        path: '/updateProfile',
        element: <UpdataUserDetails></UpdataUserDetails>
      },
  {
    path: '*',
    element: <Page404></Page404>,
  }
])

export default router;