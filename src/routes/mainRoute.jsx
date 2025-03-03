import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../MainLayout';
import Home from '../pages/Home/Home';
import Menu from '../pages/Menu/Menu';
import Dashboard from '../pages/Dashboard/Dashboard';
import Shop from '../pages/Shop/Shop';
import ContactUs from '../pages/ContactUs/ContactUs';

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
        element: <Dashboard />,
      },
      {
        path: '/shop',
        element: <Shop />,
      },
      {
        path: '/contactus',
        element: <ContactUs />,
      },
    ],
  },
]);

export default router;
