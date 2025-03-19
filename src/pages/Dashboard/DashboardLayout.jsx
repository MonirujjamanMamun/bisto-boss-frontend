import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <div>
      <div>
        <h1>Dashbord</h1>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
