import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext/AuthContext';

const useAuth = () => {
  const auth = useContext(AuthContext);
  //   console.log('userAuth context', auth);
  return auth;
};

export default useAuth;
