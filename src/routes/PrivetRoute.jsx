import { Navigate, useLocation } from 'react-router-dom';
import Spiner from '../components/Share/Spiner/Spiner';
import useAuth from '../hooks/useAuth';

const PrivetRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useAuth();
  if (loading) {
    return <Spiner />;
  }

  return user ? (
    children
  ) : (
    <Navigate to={'/auth/login'} state={{ from: location }} replace />
  );
};

export default PrivetRoute;
