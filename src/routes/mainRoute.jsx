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
import Cart from '../pages/Dashboard/Cart/Cart';

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
      {
        path: 'cart',
        element: <Cart />,
      },
    ],
  },
]);

export default router;
