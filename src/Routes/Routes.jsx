import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import Home from "../Pages/Home";
import Services from "../Pages/Services";
import About from "../Pages/About";
import ServiceDetails from "../Pages/ServiceDetails";
import PrivateRoute from "../Provider/PrivateRoute";
import UserDetails from "../Pages/UserDetails";
import UpdataUserDetails from "../Pages/UpdataUserDetails";
import Page404 from "../Pages/Page404";
import AddListing from "../Pages/AddListing";
import MyListings from "../Pages/MyListings";
import MyOrders from "../Pages/MyOrders";
import axios from "axios";
import UpdateMyListing from "../Pages/UpdateMyListing";
import Loading from "../Pages/Loading";

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => axios.get('https://assignment10-backend-three.vercel.app/services').then(res => res.data).catch(err => console.error(err)),
        
      },
      {
        path: '/services',
        element: <Services />,
        loader: () => axios.get('https://assignment10-backend-three.vercel.app/services').then(res => res.data).catch(err => console.error(err)),
        
      },
      {
        path: '/services/:category',
        element:<PrivateRoute> <Services /></PrivateRoute>,
        loader: ({ params }) =>
          axios.get(`https://assignment10-backend-three.vercel.app/services?category=${params.category}`).then(res => res.data),
        
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/AddListing',
        element: <AddListing />,
      },
      {
        path: '/MyListings',
        element: <MyListings />,
      },
      {
        path: '/UpdateMyListings/:id',
        element: <UpdateMyListing />,
      },
      {
        path: '/Orders', 
        element: <MyOrders />,
      },
      {
    path: 'serviceDetails/:id',
    element: <PrivateRoute><ServiceDetails /></PrivateRoute>,
    loader: () => axios.get('https://assignment10-backend-three.vercel.app/services').then(res => res.data).catch(err => console.error(err)),
    
  },
    ]
  },
  {
    path: 'auth',
    element: <AuthLayout />,
    children: [
      { path: '/auth/login', element: <Login /> },
      { path: '/auth/register', element: <Registration /> }
    ]
  },
  
  { path: '/user', element: <UserDetails /> },
  { path: '/updateProfile', element: <UpdataUserDetails /> },
  { path: '*', element: <Page404 /> }
]);

export default router;
