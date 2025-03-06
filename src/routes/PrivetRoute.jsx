import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext/AuthContext';
import Spiner from '../components/Share/Spiner/Spiner';

const PrivetRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useAuth();
  if (loading) {
    return <Spiner />;
  }
  if (user) {
    return children;
  }
  return <Navigate to={'/auth/login'} state={{ from: location }} replace />;
};

export default PrivetRoute;
