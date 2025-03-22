import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../MainLayout';
import Home from '../pages/Home/Home';
import Menu from '../pages/Menu/Menu';
import Shop from '../pages/Shop/Shop';
import ContactUs from '../pages/ContactUs/ContactUs';
import LogIn from '../pages/Auth/LogIn';
import AuthLayout from '../pages/Auth/AuthLayout';
import Register from '../pages/Auth/Register';
import PrivetRoute from './PrivetRoute';
import DashboardLayout from '../pages/Dashboard/DashboardLayout';
import UserHome from '../pages/Dashboard/User/UserHome/UserHome';
import Reservation from '../pages/Dashboard/User/Reservation/Reservation';
import PaymentHistory from '../pages/Dashboard/User/PaymentHistory/PaymentHistory';
import MyCart from '../pages/Dashboard/User/MyCart/MyCart';
import AddReview from '../pages/Dashboard/User/AddReview/AddReview';
import MyBooking from '../pages/Dashboard/User/MyBooking/MyBooking';
import AdminHome from '../pages/Dashboard/Admin/AdminHome/AdminHome';
import AddItem from '../pages/Dashboard/Admin/AddItem/AddItem';
import ManageItem from '../pages/Dashboard/Admin/ManageItem/ManageItem';
import ManageBooking from '../pages/Dashboard/Admin/ManageBooking/ManageBooking';
import AllUser from '../pages/Dashboard/Admin/AllUser/AllUser';
import ManageItemEdit from '../pages/Dashboard/Admin/ManageItem/ManageItemEdit';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/menu',
        element: <Menu />,
      },

      {
        path: '/shop/:category',
        element: <Shop />,
      },
      {
        path: '/contactus',
        element: <ContactUs />,
      },
      // {
      //   path: '/cart',
      //   element: (
      //     <PrivetRoute>
      //       <Cart />
      //     </PrivetRoute>
      //   ),
      // },
    ],
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: 'login',
        element: <LogIn />,
      },
      {
        path: 'register',
        element: <Register />,
      },
    ],
  },
  {
    path: '/dashboard',
    element: (
      <PrivetRoute>
        <DashboardLayout />
      </PrivetRoute>
    ),
    children: [
      // for user dashboard
      {
        path: 'userhome',
        element: <UserHome />,
      },
      {
        path: 'reservation',
        element: <Reservation />,
      },
      {
        path: 'paymenthistory',
        element: <PaymentHistory />,
      },
      {
        path: 'mycart',
        element: <MyCart />,
      },
      {
        path: 'addreview',
        element: <AddReview />,
      },
      {
        path: 'mybooking',
        element: <MyBooking />,
      },
      // for Admin dashboard
      {
        path: 'adminhome',
        element: <AdminHome />,
      },
      {
        path: 'additem',
        element: <AddItem />,
      },
      {
        path: 'manageitem',
        element: <ManageItem />,
      },
      {
        path: 'manageitem/manageitemedit',
        element: <ManageItemEdit />,
      },
      {
        path: 'managebooking',
        element: <ManageBooking />,
      },
      {
        path: 'alluser',
        element: <AllUser />,
      },
    ],
  },
]);

export default router;
