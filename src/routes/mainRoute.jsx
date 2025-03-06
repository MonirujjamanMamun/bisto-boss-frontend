import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../MainLayout';
import Home from '../pages/Home/Home';
import Menu from '../pages/Menu/Menu';
import Dashboard from '../pages/Dashboard/Dashboard';
import Shop from '../pages/Shop/Shop';
import ContactUs from '../pages/ContactUs/ContactUs';
import LogIn from '../pages/Auth/LogIn';
import AuthLayout from '../pages/Auth/AuthLayout';
import Register from '../pages/Auth/Register';
import PrivetRoute from './PrivetRoute';

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
        path: '/dashboard',
        element: (
          <PrivetRoute>
            <Dashboard />
          </PrivetRoute>
        ),
      },
      {
        path: '/shop/:category',
        element: <Shop />,
      },
      {
        path: '/contactus',
        element: <ContactUs />,
      },
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
]);

export default router;
