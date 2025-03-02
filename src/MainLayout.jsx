import { Outlet } from 'react-router-dom';
import NavBar from './components/Share/NavBar/NavBar';
import Footer from './components/Share/Footer/Footer';

const MainLayout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
